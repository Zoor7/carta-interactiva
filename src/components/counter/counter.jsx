import { useEffect, useState } from 'react'
import './counter.scss'

const Counter = ({ food, item, updateFood }) => {
  const [counter, setCounter] = useState()
  useEffect(() => {
    if (food) {
      setCounter(food[item] || 0)
      return
    }
    setCounter(0)
  }, [food])

  const handleCount = (e) => {
    const click = e.innerText
    if (click === '+') {
      setCounter(counter + 1)
      updateFood(counter + 1, item)
      return
    }
    if (counter === 0) {
      updateFood(0)
      return
    }
    setCounter(counter - 1)
    updateFood(counter - 1, item)
  }

  return (
    <div className="counter">
      <span onClick={(e) => handleCount(e.target)}>-</span>
      <span className="counter-display">{counter}</span>
      <span onClick={(e) => handleCount(e.target)}>+</span>
    </div>
  )
}

export default Counter
