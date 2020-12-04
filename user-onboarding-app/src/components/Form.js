import React, { useState } from "react";

const Form = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter Name" name="name" />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter Email" name="email" />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          name="password"
        />
        <br />
        <label htmlFor="checkbox">Terms of Service</label>
        <input type="checkbox" id="checkbox" name="checkbox" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
