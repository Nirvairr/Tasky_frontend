/* eslint-disable react/prop-types */
import { useContext } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
          <p className="card-text">{note.description}</p>
          <i
            className="far fa-trash-alt mx-2"
            onClick={() => deleteNote(note._id)}
            style={{ cursor: "pointer" }}
          ></i>
          <i
            className="far fa-edit mx-2"
            onClick={() => updateNote(note)}
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
