/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = (props) => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://tasky-backend-3d1b.onrender.com/api/auth/createuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    const json = await response.json();
    console.log(json);

    if (json) {
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Account Created Successfully", "success");
      navigate("/login");
    } else {
      props.showAlert("Invalid Credentials", "danger");
      navigate("/register");
    }
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="d-flex justify-content-center mt-5 ">
      <div
        className="card shadow-lg p-4"
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <h2 className="text-center mb-4 text-primary">Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bold">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={user.name}
              onChange={onChange}
              id="name"
              required
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={onChange}
              id="email"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-bold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={user.password}
              onChange={onChange}
              id="password"
              required
              placeholder="Enter a strong password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
        <div className="mt-3 text-center">
          <small>
            Already have an account?{" "}
            <a href="/login" className="text-decoration-none">
              Login here
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Registration;
