import { Input } from "antd";
import useForm from "../Hooks/useForm";
import { DivForm, FormStyled } from "../styles/Styles";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GetData } from "../reducers/actions/peticiones";
import { url_user } from "../helpers/url";
import { AuthContext } from "../context/AuthContext";
import { actionLogin } from "../reducers/actions/actionsUser";

const Login = () => {
const { dispatch } = useContext(AuthContext);

  const [userRegister, setUserRegister]= useState([])
  const [dataForm, handleOnChange] = useForm({
    email: "",
    pass: "",
  
  });


  useEffect(() => {
    async function cargar(){
  const resp = await GetData(url_user)
   setUserRegister(resp)
    }
    cargar()
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(dataForm);

    const resultado = userRegister.find((item)=> item.email === dataForm.email && item.pass === dataForm.pass)
    console.log(resultado)

    if(resultado != undefined && resultado != null){
      alert("Bienvenido");
      dispatch(actionLogin(resultado))
    }
  };
  
  return (
    <div>
      <DivForm>
        <FormStyled onSubmit={handleSubmit}>
          <Input
            name="email"
            onChange={handleOnChange}
            value={dataForm.email}
            placeholder="Email"
          />
          <Input
            name="pass"
            onChange={handleOnChange}
            value={dataForm.pass}
            placeholder="Password"
          />

          <button type="submit">Login</button>
          <p>No tienes cuenta <Link to="/register">Registrate</Link></p>
        </FormStyled>
      </DivForm>
    </div>
  );
};

export default Login;
