import Home from "./Home";
import ComponenteHijo from "./ComponenteHijo";
import { useCallback, useState } from "react";

const ComponentePadre = () => {
   const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const handleIncrement1 = useCallback( () => {
    setCount1(count1 + 1);
  }, [])
   
 
  const handleIncrement2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [])
  
  const handleIncrement3 = useCallback(() => {
    setCount3(count3 + 1);
  },[])


  return (
    <div>
      <Home />
      <ComponenteHijo
        text="Contador 1- Productos 10000"
        count={count1}
        increm={handleIncrement1}
      />
      <ComponenteHijo
        text="Contador 2 - Peliculas 10000000"
        count={count2}
        increm={handleIncrement2}
      />
      <ComponenteHijo
        text="Contador 3 - Usuarios 350000"
        count={count3}
        increm={handleIncrement3}
      />
    </div>
  );
};

export default ComponentePadre;
