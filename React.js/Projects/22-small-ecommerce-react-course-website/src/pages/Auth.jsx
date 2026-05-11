import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
// import { AuthContext, useAuth } from "../context/AuthContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const [mode, setMode] = useState("signup");
  const [fetchError, setFetchError] = useState(null)
    // const {user, signUp, logout, login} = useContext(AuthContext)
    const {user, signUp, logout, login} = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate()

  function submitData(foundData) {
    setFetchError(null)
    let results;

    if(mode === "signup"){
       results = signUp(foundData.email, foundData.password)
    }
    else {
       results = login(foundData.email, foundData.password)
    }

    if(results.success){
        navigate("/")
    }
    else {
        setFetchError(results.error)
    }

  }


console.log(user)
  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          {mode === "signup" ? (
            <h1 className="page-title">Sign Up</h1>
          ) : (
            <h1 className="page-title">Login</h1>
          )}
          <form className="auth-form" onSubmit={handleSubmit(submitData)}>
            {fetchError && <div className="error-message">{fetchError}</div>}
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                {...register("email", {
                  required: {value: true, message: "Email is required"},
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && <span className="form-error">{errors.email.message}</span>}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                className="form-input"
                type="password"
                id="password"
                {...register("password", {
                  required: {value: true, message: "Password is required"},
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters",
                  },
                  maxLength: {
                    value: 12,
                    message: "password must be less than 12 characters",
                  },
                })}
              />
              {errors.password && <span className="form-error">{errors.password.message}</span>}
            </div>
            <button type="submit" className="btn btn-primary btn-large">
              {mode === "signup" ? "Sign Up" : "Login"}
            </button>
          </form>
          <div className="auth-switch">
            {mode === "signup" ? (
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setMode("login");
                    setFetchError(null)
                  }}
                  className="auth-link"
                >
                  Login
                </span>
              </p>
            ) : (
              <p>
                Don't have an account?{" "}
                <span
                  onClick={() => {
                    setMode("signup");
                    setFetchError(null)
                  }}
                  className="auth-link"
                >
                  Sign Up
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
