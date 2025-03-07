import { Route, Routes } from "react-router-dom"
import Homepage from "./page/Homepage"
import Teams from "./page/Teams"
import Navbar from "./components/Navbar"

function App() {


  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        
      </Routes>
    </>
  )
}

export default App
