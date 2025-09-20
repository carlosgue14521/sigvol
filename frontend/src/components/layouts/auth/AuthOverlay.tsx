import { IMAGES } from "../../../config/constants/images";
import { COLORS } from "../../../config/constants/colors";
import "./style/AuthOverlay.css";

interface AuthOverlayProps {
  step: "overlay" | "transition";
  progress: number;
}

const AuthOverlay = ({ step, progress }: AuthOverlayProps) => {
  return (
    // Overlay de carga (se cierra con clip-vertical-out)
    <div
      className={`authLayout-overlay ${step === "transition" ? "clip-vertical-out" : ""
        }`}
    >
      {/* Contenido del overlay */}
      <div className="authLayout-overlayContent">
        {/* Logo institucional */}
        <img
          src={IMAGES.logoNegativePJ}
          alt="Logo Negative del Poder Judicial"
          className="authLayout-logoPJ"
        />

        {/* Barra de progreso */}
        <div className="authLayout-progress">
          <div
            className="authLayout-progressBar"
            style={{
              width: `${progress}%`,
              backgroundColor: COLORS.redLight,
            }}
          />
        </div>

        {/* Texto de estado */}
        <span className="authLayout-status">
          Cargando, por favor espere...
        </span>
      </div>
    </div>
  );
};

export default AuthOverlay;
