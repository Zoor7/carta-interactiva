import { useEffect } from 'react'
import './modal.scss'

const Modal = ({ handleModal, removeFood, isOpen, food }) => {
  useEffect(() => {}, [food])
  if (food) {
    return (
      <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
        <div className="modal-header">
          <img
            onClick={removeFood}
            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik03MS42NjY2NywxNC4zMzMzM2wtNy4xNjY2Nyw3LjE2NjY3aC0zNS44MzMzM3YxNC4zMzMzM2g3LjE2NjY3djEwNy41YzAsMy43NDI1OSAxLjM3MTE5LDcuNTU4MDQgNC4wNzMyNCwxMC4yNjAwOWMyLjcwMjA1LDIuNzAyMDUgNi41MTc1LDQuMDczMjQgMTAuMjYwMDksNC4wNzMyNGg3MS42NjY2N2MzLjc0MjU5LDAgNy41NTgwNCwtMS4zNzExOSAxMC4yNjAwOSwtNC4wNzMyNGMyLjcwMjA1LC0yLjcwMjA2IDQuMDczMjQsLTYuNTE3NSA0LjA3MzI0LC0xMC4yNjAwOXYtMTA3LjVoNy4xNjY2N3YtMTQuMzMzMzNoLTM1LjgzMzMzbC03LjE2NjY3LC03LjE2NjY3ek01MC4xNjY2NywzNS44MzMzM2g3MS42NjY2N3YxMDcuNWgtNzEuNjY2Njd6TTY0LjUsNTAuMTY2Njd2NzguODMzMzNoMTQuMzMzMzN2LTc4LjgzMzMzek05My4xNjY2Nyw1MC4xNjY2N3Y3OC44MzMzM2gxNC4zMzMzM3YtNzguODMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
            alt="trash can"
          />
          <span onClick={handleModal}>X</span>
        </div>
        <div className="modal-items">
          {Object.entries(food).map((item) => (
            <div key={item} className="modal-item">
              <p>x{item[1]}</p>
              <p>{item[0]}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      <p>Nada Seleccionado</p>
    </div>
  )
}

export default Modal
