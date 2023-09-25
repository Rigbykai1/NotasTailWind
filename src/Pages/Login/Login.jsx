import React, { useState } from "react";
import loginService from "../../Services/login.services";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleFormSubmit = () => {
    const isEmailtEmpty = email.length === 0;
    const isPasswordEmpty = password.length === 0;
    const currentDate = new Date().toISOString();
    const noteData = {
      title: isTitleEmpty ? "sin titulo" : newTitle,
      content: isContentEmpty ? "Sin contenido" : newContent,
      modified: currentDate,
      important: noteImportant,
    };

    if (isEmailtEmpty && isPasswordEmpty) {
      null;
    } else {
      loginService
        .update(note.id, noteData)
        .then((returnedNote) => {
          onUpdateNote(returnedNote);
          setNewContent(returnedNote.content);
          setNewTitle(returnedNote.title);
          setNoteImportant(returnedNote.important);
        })
        .catch((error) => {
          console.error("Error al editar la nota:", error);
        });
    }
  };

  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Tener una cuenta es esencial para poder guardar tus notas, ya que es
            una aplicación web.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label pt-2">
                <a href="#" className="label-text-alt link link-hover">
                  Register
                </a>
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
