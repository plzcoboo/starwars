import {  BrowserRouter ,  Routes,  Route,  Link  } from "react-router-dom";
import Layout from "./components/Layout";
import Sub_people from "./pages/JEDI_people/Sub/Sub_people";
import MoiveList from "./pages/JEDI_movie/MoiveList";

const App = () => {
  return (
    <div style={{background:"#11171a"}}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}> 
        <Route index element={<Sub_people/>}></Route>
        <Route path='/List' element={<MoiveList />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;