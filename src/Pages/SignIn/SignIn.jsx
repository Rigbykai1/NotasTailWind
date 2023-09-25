import React, { useState } from "react";
import loginService from "../../Services/login.services";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = () => {
    const isEmailtEmpty = email.length === 0;
    const isPasswordEmpty = password.length === 0;
    const currentDate = new Date().toISOString();
    const newUser = {
      email: email,
      username: userName,
      createdAt: currentDate,
      password: password,
      notes: [],
    };

    if (isEmailtEmpty && isPasswordEmpty) {
      null;
    } else {
      loginService
        .create(newUser)
        .then(() => {
          setEmail("");
          setUserName("");
          setPassword("");
        })
        .catch((error) => {
          console.error("Error al agregar usuario:", error);
        });
    }
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleUsername = (event) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1479502806991-251c94be6b15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-5xl font-bold">Sign In!</h1>
          <p className="py-6">
            Nosotros no utilizaremos los datos para comerciar con ellos, tus
            datos están seguros en nuestros servidores.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form className="form-control" onSubmit={handleFormSubmit}>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={handleEmail}
              />

              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input input-bordered"
                value={userName}
                onChange={handleUsername}
              />

              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={handlePassword}
              />

              <label className="label py-4">
                <a href="/SignIn" className="label-text-alt link link-hover">
                  Register
                </a>
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <button className="btn btn-primary" type="submit">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
