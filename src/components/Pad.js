import React from "react"

export default function App() {
  /**
   * Challenge: 
   * See if you can think of a way to add 1 to the count
   * every time the + button is clicked
   */
  const [count, setCount] = React.useState(0)

  function add() {
    setCount(count + 1)
  }

  function minus() {
    setCount(count - 1)
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={minus}>–</button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={add}>+</button>
    </div>
  )
}
