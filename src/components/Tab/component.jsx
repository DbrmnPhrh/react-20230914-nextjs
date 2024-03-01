import { Button } from "../Button/component";

export const Tab = ({title, onClick, isActive}) => {
  return <Button
    onClick={onClick}
    type={isActive ? "active" : "primary"}
    size="medium"
  >{title}</Button>
}
