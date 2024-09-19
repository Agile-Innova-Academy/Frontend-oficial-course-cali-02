import React from "react";
import useForm from "../Hooks/useForm";

const Login = () => {
  const [dataForm, handleChange, reset] = useForm({
    email: "",
    pass: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dentro de submit", e, dataForm);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          name="email"
          placeholder="Ingrese Email"
          onChange={handleChange}
        />

        <input
          id="pass"
          name="pass"
          placeholder="Ingrese Contraseña"
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
