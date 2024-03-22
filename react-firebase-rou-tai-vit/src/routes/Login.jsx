import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { formValidate } from "../utils/formValidate";
import { useForm } from "react-hook-form";
import { errorsFirebase } from "../utils/errorsFirebase";

import FormAlert from "../components/FormAlert";
import FormInput from "../components/FormInput";
import Title from "../components/Title";
import Button from "../components/Button";

const Login = () => {
  const navegate = useNavigate();
  const { loginUser } = useContext(UserContext);
  const { required, patternEmail, minLength, validateTrim } = formValidate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async ({ email, password }) => {
    try {
      await loginUser(email, password);
      navegate("/");
    } catch (error) {
      console.log(error.code);
      const { code, message } = errorsFirebase(error);
      setError(code, { message });
    }
  };

  return (
    <>
      <Title title="Ingresa" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Ingresa un email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
          error={errors.email}
          label="Ingrese Email"
        >
          <FormAlert error={errors.email} />
        </FormInput>
        <FormInput
          type="password"
          placeholder="Ingresa un password"
          {...register("password", {
            minLength,
            validate: validateTrim,
          })}
          error={errors.password}
          label="Ingrese Password"
        >
          <FormAlert error={errors.password} />
        </FormInput>
        <Button text="Login" />
      </form>
    </>
  );
};

export default Login;
