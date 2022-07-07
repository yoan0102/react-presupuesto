const Gasto = ({ gasto }) => {
  return (
    <li className='gastos'>
      <p>
        {gasto.name} <span className='gasto'>$ {gasto.cantidad}</span>
      </p>
    </li>
  )
}

export default Gasto
