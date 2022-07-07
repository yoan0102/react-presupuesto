import { useState } from "react"
import Error from "./Error"

const Pregunta = ({ setRestante, setPresupuesto }) => {
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

export default Pregunta
