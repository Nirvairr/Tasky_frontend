const About = () => {
  return (
    <div className="container">
      <div className="card shadow-lg">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">About Task Manager</h1>
          <p className="card-text">
            Welcome to <strong>Task Manager</strong> — your go-to solution for
            staying organized and productive! Our application is designed to
            help you manage your daily tasks, track progress, and increase
            efficiency.
          </p>

          <h4 className="mt-4">Key Features:</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              ✔️ Create, update, and delete tasks easily
            </li>
            <li className="list-group-item">✔️ Set deadlines and priorities</li>
            <li className="list-group-item">✔️ Mark tasks as completed</li>
            <li className="list-group-item">✔️ Filter and search your tasks</li>
            <li className="list-group-item">
              ✔️ Responsive and user-friendly interface
            </li>
          </ul>

          <h4 className="mt-4">Our Mission</h4>
          <p>
            Our goal is to provide a clean, efficient, and customizable task
            management experience for individuals and teams alike. Whether you
            are a student, a professional, or managing a project, Task Manager
            helps you stay on top of your work.
          </p>

          <h4 className="mt-4">Technology Used</h4>
          <ul>
            <li>React.js</li>
            <li>Bootstrap 5</li>
            <li>Node.js & MongoDB (backend integration)</li>
          </ul>

          <p className="mt-4">
            Thank you for choosing Task Manager. We’re constantly working to
            improve the app and value your feedback!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
