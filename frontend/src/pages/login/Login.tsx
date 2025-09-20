import AuthLayout from "../../components/layouts/auth/AuthLayout";
import AuthHeader from "../../components/layouts/auth/AuthHeader";
import AuthContainer from "../../components/layouts/auth/AuthContainer";
import AuthFormBody from "../../components/layouts/auth/AuthFormBody";
import LoginForm from "../../components/forms/auth/LoginForm";

const Login = () => {
  return (
    /* Nivel raíz → .authLayout-root */
    <AuthLayout>
      {/* AuthContainer recibe step y inputRef vía prop drilling */}
      <AuthContainer type="form">
        {/* Encabezado institucional dentro del formWrapper → .auth-header */}
        <AuthHeader
          title="Iniciar Sesión"
          subtitle="Ingrese sus credenciales de acceso al sistema."
        />

        {/* Contenedor del cuerpo del formulario → .auth-form-body */}
        <AuthFormBody>
          {/* Formulario real con inputs y botón */}
          <LoginForm />
        </AuthFormBody>
      </AuthContainer>
    </AuthLayout>
  );
};

export default Login;
