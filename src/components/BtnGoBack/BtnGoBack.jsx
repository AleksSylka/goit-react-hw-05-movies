import { Link } from "react-router-dom";
import { ButtonGoBack } from "./BtnGoBack.styled";

export const BtnGoBack = ({path, children}) => {
    return (
        <Link to={path}><ButtonGoBack >{children}</ButtonGoBack></Link>
        )
}