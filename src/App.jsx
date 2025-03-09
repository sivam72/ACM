import { Route, Routes } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


import Homepage from "./page/Homepage"
import Teams from "./page/Teams"
import Navbar from "./components/Navbar"

function App() {


  return (
    <>
      {/* <Routes>
        <Route index element={<Homepage />} />
        
      </Routes> */}
      <Homepage />
    </>
  )
}

export default App
