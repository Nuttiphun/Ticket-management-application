import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Home from './components/Home/home.component';
import CreateTicket from './components/Create/createticket.component';
import EditTicket from './components/Edit/editticket.component';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/create" element={<CreateTicket/>} />
      <Route path="/edit" element={<EditTicket/>} />
    </Routes>
  );
}

export default App;
