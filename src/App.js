import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddStateDetails from './Components/AddStateDetails';
import SearchStateDetails from './Components/SearchStateDetails';
import ViewStateDetails from './Components/ViewStateDetails';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' exact element={<AddStateDetails/>}/>
      <Route path='/searchd' exact element={<SearchStateDetails/>}/>
      <Route path='/viewd' exact element={<ViewStateDetails/>}/>
     </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
