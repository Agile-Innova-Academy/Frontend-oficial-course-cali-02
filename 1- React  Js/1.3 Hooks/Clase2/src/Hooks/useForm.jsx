import { useState } from "react";

const useForm = ({ initialState = {} }) => {
  const [dataForm, setDataForm] = useState({ initialState });

  const handleChange = ({ target }) => {
    setDataForm({ ...dataForm, [target.name]: target.value});
  };

  const reset = () => {
    setDataForm(initialState);
  };

  return [dataForm, handleChange, reset];
};

export default useForm;
