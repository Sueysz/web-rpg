import './App.css'
import { Map } from './assets/components/Map'

function App() {

  const sizeMap = 1000;
  const sizeTile = 50;

  return (
    <>
      <Map 
        sizeMap={sizeMap}
        sizeTile={sizeTile}
      />
    </>
  )
}

export default App
