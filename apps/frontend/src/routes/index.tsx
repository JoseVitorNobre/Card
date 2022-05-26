import { Login } from '../pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Uno } from '../pages/Uno'

export const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/uno' element={<Uno />} />
      </Routes>
    </BrowserRouter>
  )
}
