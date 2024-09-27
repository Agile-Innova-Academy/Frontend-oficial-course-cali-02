import { Input } from "antd";
import useForm from "../Hooks/useForm";
import { DivForm, FormStyled } from "../styles/Styles";
import { Link, useNavigate } from "react-router-dom";
import { PostData } from "../reducers/actions/peticiones";
import { url_user } from "../helpers/url";

const Register = () => {
  const navigate = useNavigate();

  const [dataForm, handleOnChange] = useForm({
    name: "",
    email: "",
    pass: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(dataForm);

    // Hacer la petición en url POST
    let obj = {
      id: Math.floor(Math.random() * 200),
      nombre: dataForm.name,
      pass: dataForm.pass,
      email: dataForm.email,
    };
    const resp = await PostData(url_user, obj);
    if (resp === 201) {
      alert("Se  guardo exitosamente, por favor inicie sesión");
      navigate("/");
    } else {
      alert("Algo fallo");
    }
  };

  return (
    <div>
      {" "}
      <DivForm>
        <FormStyled onSubmit={handleSubmit}>
          <Input
            name="name"
            onChange={handleOnChange}
            value={dataForm.name}
            placeholder="Name"
          />
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

          <button type="submit">Registrar</button>
          <p>
            ¿Ya tienes cuenta?<Link to="/">Login</Link>
          </p>
        </FormStyled>
      </DivForm>
    </div>
  );
};

export default Register;
