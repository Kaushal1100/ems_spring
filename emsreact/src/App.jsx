
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent.jsx'
import EmployeeComponent from './components/EmployeeComponent.jsx'
import {Routes,Route,BrowserRouter} from 'react-router-dom'

function App() {
    return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
        <Routes>
          <Route path='/' element={<ListEmployeeComponent/>}/>
          <Route path='/employees' element={<ListEmployeeComponent/>}/>

          {/* http://localhost:3000/addemployee */}
          <Route path='/add-employee' element={<EmployeeComponent/>}/>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>  
    </>
  )
}

export default App
