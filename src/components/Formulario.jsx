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
        <div className='campo'>
          <label htmlFor='countGasto'>Cantidad Gasto</label>
          <input
            name='countGasto'
            type='number'
            className='u-full-width'
            placeholder='Ej. 100'
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
