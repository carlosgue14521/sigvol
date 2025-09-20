import { createContext} from "react";
import type { RefObject } from "react";
import type { StepType } from "../components/layouts/auth/AuthLayout";

// Interfaz del contexto
interface AuthContextProps {
  step: StepType;
  inputRef: RefObject<HTMLInputElement | null>;
}

// Creamos el contexto
const AuthContext = createContext<AuthContextProps | null>(null);

export default AuthContext;
