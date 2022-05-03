import { useEffect, useState } from 'react'
import products from '../../assets/products.json'
import Counter from '../../components/counter/counter'
import Modal from '../../components/modal/modal'
import iconlist from '../../assets/shopping.png'
import './menu.scss'

const Menu = () => {
  const [comida, setComida] = useState('Pintxos')
  const [pintxo, setPintxo] = useState('Pintxos Frios')
  const [food, setFood] = useState()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const localFood = JSON.parse(localStorage.getItem('food')) || {}
    setFood({ ...localFood })
  }, [])
  const removeFood = () => {
    setFood({})
    localStorage.removeItem('food')
  }

  const updateFood = async (counter, item) => {
    if (counter === 0) {
      delete food[item]
      const localFood = JSON.parse(localStorage.getItem('food'))
      delete localFood[item]
      localStorage.setItem('food', JSON.stringify(localFood))
      return
    }
    const newObj = { ...food, [item]: counter }
    localStorage.setItem('food', JSON.stringify(newObj))
    setFood(newObj)
    console.log(food)
  }

  const handleComida = (e) => {
    setComida(e.innerText)
  }
  const handlePintxo = (e) => {
    setPintxo(e.innerText)
  }
  const handleModal = () => {
    const app = document.getElementsByClassName('App')
    setIsOpen(!isOpen)
    if (!isOpen) {
      app[0].style.overflow = 'hidden'
      return
    }
    app[0].style.overflow = 'auto'
  }
  return (
    <div className="menu">
      <Modal handleModal={handleModal} removeFood={removeFood} isOpen={isOpen} food={food} />
      <div className={`modal2 ${isOpen ? 'open' : 'closed'}`}></div>

      <img onClick={handleModal} className="list-btn" src={iconlist} alt="list-btn" />

      <div className="header1 header">
        <span onClick={(e) => handleComida(e.target)}>Pintxos</span>
        <span onClick={(e) => handleComida(e.target)}>Platos</span>
        <span onClick={(e) => handleComida(e.target)}>Postres</span>
      </div>
      {comida === 'Pintxos' && (
        <div className="header2 header">
          <span onClick={(e) => handlePintxo(e.target)}>Pintxos Frios</span>
          <span onClick={(e) => handlePintxo(e.target)}>Pintxos Calientes</span>
        </div>
      )}
      {comida === 'Pintxos' && (
        <div className="comida">
          {Object.entries(products[comida][pintxo]).map((product) => (
            <div className="producto-pintxo" key={product}>
              <p className="p1">{product[0]}</p>
              {product[1].map((productDesc) => (
                <div className="producto-counter" key={productDesc}>
                  <p className="producto-desc">- {productDesc}</p>
                  <Counter food={food} item={productDesc} updateFood={updateFood} />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      {comida === 'Platos' && (
        <div className="comida">
          {Object.entries(products[comida]).map((product) => (
            <div className="producto-plato" key={product}>
              <p className="p1">{product[0]}</p>
              {Object.entries(product[1]).map((productDesc) => (
                <div className="producto-desc" key={productDesc[0]}>
                  <div className="producto-plato-precio">
                    <p className="p2">{productDesc[0]}</p>
                    <p className="p2">{`${productDesc[1].precio || ''}`}</p>
                  </div>
                  <div className="product-desc-arr">
                    {Array.isArray(productDesc[1].desc) ? (
                      productDesc[1].desc.map((item) => <p key={item}>{item}</p>)
                    ) : (
                      <p className="">{productDesc[1].desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {comida === 'Postres' && (
        <div className="comida-postre">
          <p className="p1">Postres</p>
          {Object.entries(products[comida]).map((product) => (
            <div className="producto-postre" key={product}>
              <div>
                <p className="p2">{product[0]}</p>
                <p className="p2">{product[1].precio}</p>
              </div>
              <p className="">{product[1].desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Menu
