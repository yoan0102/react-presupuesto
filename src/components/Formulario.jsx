import { useState } from "react"
import PropTypes from "prop-types"
import shortid from "shortid"
import Error from "./Error"

const Formulario = ({ setGasto, setCrearGasto }) => {
  const [name, setName] = useState("")
  const [cantidad, setCantidad] = useState(0)
  const [error, setError] = useState(false)

  const agregarGasto = (e) => {
    e.preventDefault()

    if (cantidad < 1 || isNaN(cantidad) || name.trim() === "") {
      setError(true)
      return
    }
    setError(false)
    const gasto = {
      name,
      cantidad,
      id: shortid.generate(),
    }

    setGasto(gasto)
    setCrearGasto(true)
    setName("")
    setCantidad(0)
  }
  return (
    <>
      <form onSubmit={agregarGasto}>
        <h2>Agrega tus gastos aquí</h2>
        {error ? (
          <Error msg='Ambos campos son obligatorios o Presupuesto Incorrecto' />
        ) : null}
        <div className='campo'>
          <label htmlFor='nameGasto'>Nombre Gasto</label>
          <input
            name='nameGasto'
            type='text'
            className='u-full-width'
            placeholder='Ej. Transporte'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='campo'>
          <label htmlFor='countGasto'>Cantidad Gasto</label>
          <input
            name='countGasto'
            type='number'
            className='u-full-width'
            placeholder='Ej. 100'
            value={cantidad}
            onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
          />
        </div>

        <input
          type='submit'
          className='button-primary u-full-width'
          value='Agregar Gasto'
        />
      </form>
    </>
  )
}

Formulario.propsTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired,
}

export default Formulario
