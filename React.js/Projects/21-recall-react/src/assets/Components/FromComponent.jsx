import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../Contexts/UserContext";
import { AuthContext } from "../Contexts/AuthContext";

export const FromComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [userDetails, setUserDetails] = useState([]);

  async function getData(fetchData) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setUserDetails((prev) => {
      return [...prev, fetchData];
    });
    reset();
  }
  // console.log(userDetails);

//   const userName = useContext(UserContext)
    const {inputUserName} = useContext(AuthContext)


  return (
    <div className="form-component">
      <form onSubmit={handleSubmit(getData)}>
        <div>
          <label htmlFor="first-name">First Name: </label>
          <input
            className={`${errors.firstName && "input-error"}`}
            type="text"
            id="first-name"
            placeholder= {inputUserName.name}
            {...register("firstName", {
              required: { value: true, message: "Please enter the first name" },
              minLength: {
                value: 3,
                message: "First name length should be more than 3 letters",
              },
            })}
          />
          {errors.firstName && (
            <p className="error-text">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="last-name">Last Name: </label>
          <input type="text" id="last-name" {...register("lastName")} />
        </div>
        <div>
          <label htmlFor="email-id">Email Id: </label>
          <input
            className={`${errors.emailId && "input-error"}`}
            type="email"
            id="email-id"
            {...register("emailId", {
              required: { value: true, message: "Please enter your email id" },
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid mail address",
              },
            })}
          />
          {errors.emailId && (
            <p className="error-text">{errors.emailId.message}</p>
          )}
        </div>
        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting" : "Submit"}
        />
      </form>
      {
        /* {
            !userDetails === [] &&  <p>the submitted user name is {userDetails.firstName} {userDetails.lastName} and the email id is <a href={`mailto:${userDetails.emailId}`}>{userDetails.emailId}</a></p>
        } */

        userDetails.map((storedData, index) => {
          return (
            <div key={index} className="navigation-component">
              <span>{storedData.firstName}</span>
              <span>{storedData.lastName}</span>
              <span>{storedData.emailId}</span>
            </div>
          );
        })
      }
    </div>
  );
};
