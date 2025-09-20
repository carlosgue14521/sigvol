import { IMAGES } from "../../../config/constants/images";
import Brand from "../../common/Brand";
import "./style/AuthHeader.css";

interface AuthHeaderProps {
  title: string;
  subtitle?: string;
}

const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => {
  return (
    <header className="authHeader-root" role="banner">
      {/* Marca institucional */}
      <Brand />

      {/* Contenido central */}
      <div className="authHeader-center">
        <img
          src={IMAGES.logoSigvol}
          alt="Logo del sistema SIGVOL"
          className="authHeader-logo-sigvol"
        />
        {/* Título dinámico */}
        <h1 className="authHeader-title">{title}</h1>

        {/* Subtítulo opcional */}
        {subtitle && (
          <p className="authHeader-subtitle">{subtitle}</p>
        )}
      </div>
    </header>
  );
};

export default AuthHeader;

