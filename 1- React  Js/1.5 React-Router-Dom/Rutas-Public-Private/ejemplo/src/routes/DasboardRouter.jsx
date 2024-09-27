import { Route, Routes } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Home from "../Containers/Home";
import List from "../Containers/List";
import AddMovies from "../Components/AddMovies";
import Perfil from "../Components/Perfil";

const DasboardRouter = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/add" element={<AddMovies />} />
           <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </div>
  );
}

export default DasboardRouter