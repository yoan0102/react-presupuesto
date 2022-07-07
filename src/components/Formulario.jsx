import { useState } from "react"

const Formulario = () => {
  const [name, setName] = useState("")
  const [cantidad, setCantidad] = useState(0)

  const agregarGasto = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <form onSubmit={agregarGasto}>
        <h2>Agrega tus gastos aquí</h2>
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

export default Formulario
