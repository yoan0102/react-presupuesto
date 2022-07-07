import { useState } from "react"
import PropTypes from "prop-types"
import Error from "./Error"

const Pregunta = ({ setRestante, setPresupuesto, setPregunta }) => {
  const [cantidad, setCantidad] = useState(0)
  const [error, setError] = useState(false)
  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10))
  }
  const agregarPresupuesto = (e) => {
    e.preventDefault()
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true)
      return
    }
    setError(false)
    setPresupuesto(cantidad)
    setRestante(cantidad)
    setPregunta(false)
  }
  return (
    <>
      <h2>Coloca tu Presupuesto</h2>
      {error ? <Error msg='El presupuesto es incorrecto' /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type='number'
          className='u-full-width'
          placeholder='Coloca tu presupuesto'
          onChange={definirPresupuesto}
        />

        <input
          type='submit'
          className='button-primary u-full-width'
          value='Definir Presupuesto'
        />
      </form>
    </>
  )
}

Pregunta.propTypes = {
  setRestante: PropTypes.func.isRequired,
  setPresupuesto: PropTypes.func.isRequired,
  setPregunta: PropTypes.func.isRequired,
}

export default Pregunta
