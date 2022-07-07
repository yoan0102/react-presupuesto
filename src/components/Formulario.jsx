import { useState } from "react"

const Formulario = () => {
  return (
    <>
      <form>
        <h2>Agrega tus gastos aquí</h2>
        <div className='campo'>
          <label htmlFor='nameGasto'>Nombre Gasto</label>
          <input
            name='nameGasto'
            type='text'
            className='u-full-width'
            placeholder='Ej. Transporte'
          />
        </div>
      </form>
    </>
  )
}

export default Formulario
