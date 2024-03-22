import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { errorsFirebase } from "../utils/errorsFirebase";
import { formValidate } from "../utils/formValidate";

import FormAlert from "../components/FormAlert";
import FormInput from "../components/FormInput";
import Title from "../components/Title";
import Button from "../components/Button";

const Register = () => {
  const navegate = useNavigate();
  const { registerUser } = useContext(UserContext);
  const { required, patternEmail, minLength, validateTrim, validateEquals } =
    formValidate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      repassword: "",
    },
  });

  const onSubmit = async ({ email, password }) => {
    try {
      await registerUser(email, password);
      navegate("/");
    } catch (error) {
      const { code, message } = errorsFirebase(error);
      setError(code, { message });
    }
  };

  return (
    <>
      <Title title="Registrate" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          label="Ingrese Email"
          placeholder="Ingresa  email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
          error={errors.email}
        >
          <FormAlert error={errors.email} />
        </FormInput>

        <FormInput
          type="password"
          label="Ingrese Password"
          placeholder="Ingresa  password"
          {...register("password", {
            minLength,
            validate: validateTrim,
          })}
          error={errors.password}
        >
          <FormAlert error={errors.password} />
        </FormInput>

        <FormInput
          type="password"
          label="Confirme Password"
          placeholder="Confirme password"
          {...register("repassword", {
            validate: validateEquals(getValues("password")),
          })}
          error={errors.repassword}
        >
          <FormAlert error={errors.repassword} />
        </FormInput>
        <Button text="Register" />
      </form>
    </>
  );
};

export default Register;