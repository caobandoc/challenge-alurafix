import { Button } from "@mui/material";

export default function Header({ variant, label, onClick, style }) {
  return (
    <Button variant={variant} onClick={onClick} style={style}>
      {label}
    </Button>
  );
}
