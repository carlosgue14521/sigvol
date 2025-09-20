import React, { useEffect, useState, useRef } from "react";
import { IMAGES } from "../../../config/constants/images";

import AuthOverlay from "./AuthOverlay";
import AuthContext from "../../../context/AuthContext";
import "./style/AuthLayout.css";

// Constantes de tiempos de animación (evitamos números mágicos)
const ANIM = {
    overlayDelay: 400,
    overlayClose: 400,
    formOpen: 600,
    barPause: 200,
    progressStep: 4,
};

// Tipos de estados del flujo
export type StepType = "overlay" | "transition" | "form" | "ready";

// Props mínimas que inyectaremos vía prop drilling (ahora con Context ya no es obligatorio)
interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    // Estados del flujo: overlay → transition → form → ready
    const [step, setStep] = useState<StepType>("overlay");

    // Referencia para enfocar automáticamente el primer input
    const inputRef = useRef<HTMLInputElement | null>(null);

    // Progreso de la barra de carga (0% → 100%)
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let frame: number;

        // PASO 1: espera inicial antes de mostrar la barra
        const t1 = setTimeout(() => {
            let value = 0;

            // requestAnimationFrame en lugar de setInterval
            const animate = () => {
                value += ANIM.progressStep;
                if (value >= 100) value = 100;
                setProgress(value);

                if (value < 100) {
                    frame = requestAnimationFrame(animate);
                } else {
                    /* if (true) return; */ // PARAR PROCESO

                    // Cuando la barra llega a 100%
                    setTimeout(() => {
                        // PASO 2: cierre del overlay hacia el centro
                        setStep("transition");

                        setTimeout(() => {
                            // PASO 3: apertura del formulario desde el centro
                            setStep("form");

                            setTimeout(() => {
                                // PASO 4: estado final + auto-focus en el input
                                setStep("ready");
                                inputRef.current?.focus(); // 👈 focus automático
                            }, ANIM.formOpen);
                        }, ANIM.overlayClose);
                    }, ANIM.barPause);
                }
            };

            frame = requestAnimationFrame(animate);
        }, ANIM.overlayDelay);

        // Limpieza: evitar timers/frames activos al desmontar
        return () => {
            clearTimeout(t1);
            cancelAnimationFrame(frame);
        };
    }, []);

    return (
        // Proveemos el contexto a todos los hijos
        <AuthContext.Provider value={{ step, inputRef }}>
            <div className="authLayout-root">
                {/* Fondo */}
                <div
                    className="authLayout-background"
                    style={{ backgroundImage: `url(${IMAGES.authBackground})` }}
                />

                {/* Overlay de carga */}
                {(step === "overlay" || step === "transition") && (
                    <AuthOverlay step={step} progress={progress} />
                )}

                {/* Aquí renderizamos los hijos */}
                {children}
            </div>
        </AuthContext.Provider>
    );
};

export default AuthLayout;
