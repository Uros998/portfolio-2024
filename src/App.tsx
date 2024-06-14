import './App.scss'
import MainPage from "./pages/main-page/main-page.tsx";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
      <>
          {/*<Navbar></Navbar>*/}
          <Routes>
              <Route path={"*"} element={<MainPage/>}/>
          </Routes>
          {/*<Footer/>*/}
      </>
  )
}

export default App
