import { Route,Router,Routes } from "react-router"
import Homepage from "./page/Homepage"
import Teams from "./page/Teams"

function App() {
  

  return (
    <>

    <Routes>
      <Route index element={<Homepage/>}/>
      <Route exact path="/Homepage" element={<Homepage/>}/>
      
      <Route path="/Teams" element={<Teams/>}/>
    </Routes>
    </>
  )
}

export default App
