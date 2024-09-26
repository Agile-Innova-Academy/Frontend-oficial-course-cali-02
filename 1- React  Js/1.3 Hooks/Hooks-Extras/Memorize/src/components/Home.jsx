import { memo } from "react";

const Home = () => {
  console.log("Estoy en el Home")
  return (
    <div>
      <h1>Uso de los Hooks para memorizar Componentes Pesados</h1>
      <br/>
      <h3>Contadores</h3>
    </div>
  );
}

export default memo(Home)