import { Button } from "@mui/material";

const ButtonComponent = ({ variant, label, onClick, style }) => {
  return (
    <Button variant={variant} onClick={onClick} style={style}>
      {label}
    </Button>
  );
};

export default ButtonComponent;
