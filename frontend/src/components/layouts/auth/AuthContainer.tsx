// AuthContainer.tsx
import React from "react";
import "./style/AuthContainer.css";
import { useAuth } from "@context/useAuth";

// Props de AuthContainer
interface AuthContainerProps {
  type: "form" | "message";
  children: React.ReactNode;
}

const AuthContainer = ({ type, children }: AuthContainerProps) => {
  // Obtenemos step desde Context
  const { step } = useAuth();

  // Animación según tipo y step
  const animationMap: Record<"form" | "message", Record<"form" | "ready", string>> = {
    form: { form: "clip-vertical-in", ready: "visible" },
    message: { form: "fade-in", ready: "visible" },
  };

  // Usamos 'as' para restringir solo a steps definidos en el map
  const animationClass = step ? animationMap[type][step as "form" | "ready"] || "" : "";

  // 👇 Debug
  console.log("AuthContainer props:", { step });

  return (
    <div className={`authLayout-container ${animationClass}`}>
      <div className={`authLayout-formWrapper ${type === "message" ? "authMessage" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default AuthContainer;
