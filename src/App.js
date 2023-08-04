import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/' element={<Homepage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
