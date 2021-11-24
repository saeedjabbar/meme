import React from "react"

export default function App() {

  const [signupForm, setSignupForm] = React.useState({ email: "", password: "", confirmPassword: "", okayToEmail: false })

  function handleChange(event) {
    setSignupForm(prevState => {
      const { name, value, type, checked } = event.target
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    signupForm.password === signupForm.confirmPassword ? console.log("Password match") : console.log("Password mismatch")
    signupForm.okayToEmail ? console.log("Okay to email") : console.log("Not okay to email")
    console.log(signupForm)
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          onChange={handleChange}
          className="form--input"
          value={signupForm.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="form--input"
          value={signupForm.password}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          onChange={handleChange}
          className="form--input"
          value={signupForm.confirmPassword}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            name="okayToEmail"
            type="checkbox"
            checked={signupForm.okayToEmail}
            onChange={handleChange}

          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button
          className="form--submit"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}
