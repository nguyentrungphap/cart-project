import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./pages/home"
import Detail from "./pages/detail"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/:slug' element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
