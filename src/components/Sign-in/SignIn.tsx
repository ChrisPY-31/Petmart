import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import loginUser from "../../functions/login";
import { Link } from "react-router-dom";
import singInWithGoogle from "../../functions/AuthWithGoogle";
interface FormValue {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingresa un email válido")
    .required("El email es requerido"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "La contraseña debe contener al menos 6 caracteres, una mayúscula, una minúscula y un carácter especial"
    )
    .required("La contraseña es requerida"),
});

const initialValues: FormValue = {
  email: "",
  password: "",
};

const SignIn = () => {
  const handleSubmit = async (values: FormValue) => {
    await loginUser(values.email, values.password);
  };
  return (
    <div className="flex justify-center w-10/12 m-auto h-4/5 items-center">
      <div className="flex flex-col bg-white shadow-2xl rounded-lg w-2/6 h-4/5">
        <div className="w-10/12 my-5 m-auto h-full">
          <h2 className="text-center text-4xl font-medium ">Inicia Sesion</h2>
          <div className="flex justify-between mt-8 gap-2">
            <button onClick={() =>singInWithGoogle()}
            className="bg-orange-600 py-2 w-1/2 rounded text-white" >
              Google
            </button>
            <button className="bg-cyan-700 py-2 w-1/2  rounded text-white">
               Git Hub
            </button>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="h-3/4 flex flex-col justify-around">
              <div>
                <label
                  htmlFor="email"
                  className="uppercase text-2xl font-semibold"
                >
                  Ingresa tu Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full py-1 border-b-2 outline-none border-b-black px-2"
                />
                <ErrorMessage name="email" component="div" />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="uppercase text-2xl font-semibold"
                >
                  Ingresa tu Contraseña:
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full py-1 border-b-2 outline-none border-b-black px-2"
                />

                <ErrorMessage name="password" component="div" />
              </div>

              <button
                type="submit"
                className="bg-orange-400 w-full py-2 font-bold text-white uppercase text-xl hover:bg-orange-600"
              >
                Acceder
              </button>
            </Form>
          </Formik>
          <p className="text-end ">
            ¿Aun no tienes cuenta?
            <Link to="/sign-up" className="text-blue-500"> Crea Una</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
