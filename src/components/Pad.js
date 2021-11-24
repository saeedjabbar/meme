import React from "react"

export default function Form() {
  const [person, setPerson] = React.useState({ firstName: "", lastName: "" })

  function handleChange(event) {
    setPerson(prevState => {
      return (
        {
          firstName: event.target.value,
          lastName: event.target.value
        }
      )
    })
    console.log(person);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
      />
    </form>
  )
}
