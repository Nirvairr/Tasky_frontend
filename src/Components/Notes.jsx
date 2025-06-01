import { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const navigate = useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const ref = useRef(null);
  const refClose = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = async () => {
    await editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center mb-4">Manage Your Tasks</h2>
        <AddNote />

        {/* Hidden button to trigger modal */}
        <button
          ref={ref}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#editNoteModal"
        >
          Launch modal
        </button>

        {/* Modal */}
        <div
          className="modal fade"
          id="editNoteModal"
          tabIndex="-1"
          aria-labelledby="editNoteModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content shadow">
              <div className="modal-header">
                <h5 className="modal-title" id="editNoteModalLabel">
                  Edit Task
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="etitle" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      value={note.etitle}
                      onChange={onChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="etag" className="form-label">
                      Tag
                    </label>
                    <select
                      className="form-control"
                      id="etag"
                      name="etag"
                      value={note.etag}
                      onChange={onChange}
                    >
                      <option value="default" disabled>
                        Default
                      </option>
                      <option value="Open">Open</option>
                      <option value="In-Progress">In-Progress</option>
                      <option value="Done">Done</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label htmlFor="edescription" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="edescription"
                      name="edescription"
                      rows="4"
                      value={note.edescription}
                      onChange={onChange}
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  ref={refClose}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={handleClick}
                  type="button"
                  className="btn btn-success"
                >
                  Update Task
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notes List */}
        <div className="row mt-5">
          <h4 className="mb-3">Your Tasks</h4>
          {notes.length === 0 && (
            <p className="text-muted">Please Add your Tasks.</p>
          )}
          {notes.map((note, index) => (
            <div className="col-md-3 mb-2" key={index}>
              <Noteitem key={note._id} updateNote={updateNote} note={note} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notes;
