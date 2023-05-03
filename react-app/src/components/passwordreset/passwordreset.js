import React, {useState} from "react"
import Userfront from "@userfront/core"
Userfront.init("demo1234");


// Define the Password reset form component
function PasswordResetForm() {
Userfront.sendResetLink("dominiqua6@outlook.com");

// Initialize Userfront Core JS
Userfront.init("demo1234");


const [password, setPassword] = useState("");
const [passwordVerify, setPasswordVerify] = useState("");





  // Whenever an input changes value, change the corresponding state variable
  function handleInputChange(event) {
    event.preventDefault();
    const target = event.target.value;
    setPassword(target)
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Verify that the passwords match
    if (password !== passwordVerify) {
      return;
    }
    // Call Userfront.resetPassword()
    Userfront.resetPassword({
      password: password,
    });
  }


    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={password}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Re-type password
            <input
              name="passwordVerify"
              type="password"
              value={passwordVerify}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Reset password</button>
        </form>
      </div>
    );
  }

  export default PasswordResetForm;
