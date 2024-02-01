import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route
        path="/"
        element={
           <ItemListContainer greeting={'bienvenidos'}/>
           }           />
        <Route path="/category/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>ERROR 404 NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App;

