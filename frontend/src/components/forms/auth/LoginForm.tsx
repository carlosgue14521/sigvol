import React, { useEffect } from "react";
import { CheckCircle, CircleAlert } from "lucide-react";
import "./LoginForm.css";
import { COLORS } from "../../../config/constants/colors";
import { useAuth } from "@context/useAuth";



// Tipos de validación
type ValidationResult = {
  type: "error" | "success";
  text: string;
};

// Validaciones
const validateDNI = (value: string): ValidationResult => {
  if (!value) return { type: "error", text: "El DNI es obligatorio" };
  if (!/^\d{8}$/.test(value))
    return { type: "error", text: "El DNI debe tener 8 dígitos" };
  return { type: "success", text: "DNI válido" };
};

const validatePassword = (value: string): ValidationResult => {
  if (!value) return { type: "error", text: "La contraseña es obligatoria" };
  if (value.length < 6)
    return { type: "error", text: "Debe tener al menos 6 caracteres" };
  return { type: "success", text: "Contraseña válida" };
};


const LoginForm = () => {
  // Obtenemos step e inputRef desde Context
  const { step, inputRef } = useAuth();

  // 👇 Debug
  console.log("LoginForm props:", { step, inputRef });

  const [dni, setDni] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [dniMsg, setDniMsg] = React.useState<ValidationResult | null>(null);
  const [passwordMsg, setPasswordMsg] = React.useState<ValidationResult | null>(
    null
  );
  const [submitted, setSubmitted] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  // Auto-focus cuando step === "ready" (aunque AuthLayout ya lo hace)
  useEffect(() => {
    if (step === "ready") {
      inputRef.current?.focus();
    }
  }, [step, inputRef]);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const dniValidation = validateDNI(dni);
    const passwordValidation = validatePassword(password);

    setDniMsg(dniValidation);
    setPasswordMsg(passwordValidation);

    if (dniValidation.type === "success" && passwordValidation.type === "success") {
      console.log("Formulario válido ✅");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {/* DNI */}
      <div className="form-group">
        <label htmlFor="dni" className="auth-label">
          DNI
        </label>
        <div className="input-wrapper">
          <i className="bi bi-person input-icon"></i>
          <input
            id="dni"
            type="text"
            ref={inputRef} // 👈 inputRef inyectado para auto-focus
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            onBlur={() => submitted && setDniMsg(validateDNI(dni))}
            placeholder="Ingrese su DNI"
            className={`input ${submitted && dniMsg ? (dniMsg.type === "error" ? "error" : "success") : ""}`}
          />
          {submitted && dniMsg?.type === "error" && (
            <CircleAlert size={20} className="icon right error show" />
          )}
          {submitted && dniMsg?.type === "success" && (
            <CheckCircle size={20} className="icon right success show" />
          )}
        </div>
        {submitted && dniMsg?.type === "error" && <div className="msg error">{dniMsg.text}</div>}
      </div>

      {/* Contraseña */}
      <div className="form-group">
        <label htmlFor="password" className="auth-label">
          Contraseña
        </label>
        <div className="input-wrapper">
          <i className="bi bi-lock input-icon" style={{ fontSize: "0.95rem" }}></i>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => submitted && setPasswordMsg(validatePassword(password))}
            placeholder="Ingrese su contraseña"
            className={`input password ${
              submitted && passwordMsg ? (passwordMsg.type === "error" ? "error" : "success") : ""
            }`}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
          </button>
          {submitted && passwordMsg?.type === "error" && (
            <CircleAlert size={20} className="icon right error show" />
          )}
          {submitted && passwordMsg?.type === "success" && (
            <CheckCircle size={20} className="icon right success show" />
          )}
        </div>
        {submitted && passwordMsg?.type === "error" && (
          <div className="msg error">{passwordMsg.text}</div>
        )}
      </div>

      {/* Recordar y Olvidaste tu contraseña */}
      <div className="form-options">
        <label className="remember">
          <input type="checkbox" /> Recuérdame
        </label>
        <a href="#" className="forgot">
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <button
        type="submit"
        className="btn-submit"
        style={{ backgroundColor: COLORS.redMedium }}
      >
        Ingresar
      </button>

      {/* Texto de registro */}
      <div className="register-text">
        ¿No tienes cuenta?
        <a href="/register" className="link">
          Regístrate
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
