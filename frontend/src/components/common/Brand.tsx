import { IMAGES } from "../../config/constants/images";
import "./Brand.css";

const Brand = () => {
  return (
    // Contenedor principal del Brand institucional
    <div className="brand">
      {/* Logo del Poder Judicial */}
      <img
        src={IMAGES.logoPJ}
        alt="Logo institucional del Poder Judicial del Perú"
        className="brand-logo"
      />

      {/* Bloque de textos: título + subtítulo */}
      <div className="brand-texts">
        <p className="brand-title">PODER JUDICIAL DEL PERÚ</p>
        <p className="brand-subtitle">
          Corte Superior de Justicia de Huaura
        </p>
      </div>
    </div>
  );
};

export default Brand;
