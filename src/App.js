import { useEffect, useState } from "react"
import ControlPresupuesto from "./components/ControlPresupuesto"
import Formulario from "./components/Formulario"
import Listado from "./components/Listado"
import Pregunta from "./components/Pregunta"
function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [pregunta, setPregunta] = useState(true)
  const [gastos, setGastos] = useState([])
  const [gasto, setGasto] = useState({})
  const [crearGasto, setCrearGasto] = useState(false)

  useEffect(() => {
    if (crearGasto) {
      setGastos([...gastos, gasto])

      const presupuestoRestante = restante - gasto.cantidad
      setRestante(presupuestoRestante)

      setCrearGasto(false)
    }
  }, [gasto, gastos])

  return (
    <div className='container'>
      <header>
        <h1>Gasto Semanal</h1>
        <div className='contenido-principal contenido'>
          {pregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setPregunta={setPregunta}
            />
          ) : (
            <div className='row'>
              <div className='one-half column'>
                <Formulario setGasto={setGasto} setCrearGasto={setCrearGasto} />
              </div>
              <div className='one-half column'>
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default App
