import Button from "../button/Button";
import "./Header.css";

export default function Header() {
  const styleButton = {
    color: "white",
    border: "1px solid white",
  };

  return (
    <div className="header">
      <img src="/logo.png" alt="logo" />
      <Button variant="outlined" label="Nuevo Video" style={styleButton} />
    </div>
  );
}
