import React, { useState, useEffect } from "react";
import axios from "axios";
import { userSchema } from "../Validations/UserValidations";
import * as Yup from "yup";

// look at implement form validation and error messaging

const Form = () => {
  // form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    checked: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    userSchema.isValid(form).then((valid) => {
      console.log(valid);
      setButtonDisabled(!valid);
    });
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    Yup.reach(userSchema, name)
      .validate(value)
      .then((valid) => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });

    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const user = {
      ...form,
    };
    // const validate = await userSchema
    //   .validate(user)
    //   .then(function (value) {
    //     console.log(value);
    //   })
    //   .catch(function (err) {
    //     console.log(err.name);
    //     console.log(err.errors);
    //   });
    console.log(user);
    const postData = async () => {
      try {
        const resp = await axios.post("https://reqres.in/api/users", user);
        // window.location = "/retrieve";
        setUsers(resp.data);
        console.log(users);
        console.log(resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    postData();
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name.length > 0 && <p className="error">{errors.name}</p>}
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email.length > 0 && <p className="error">{errors.email}</p>}
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password.length > 0 && (
          <p className="error">{errors.password}</p>
        )}
        <br />
        <label htmlFor="checkbox">Terms of Service</label>
        <input
          type="checkbox"
          id="checkbox"
          value={form.checked}
          onChange={handleChange}
        />
        <br />
        <button type="submit" disabled={buttonDisabled}>
          Submit
        </button>
      </form>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};

export default Form;
