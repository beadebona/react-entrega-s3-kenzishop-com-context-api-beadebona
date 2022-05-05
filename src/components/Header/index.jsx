import StyledHeader from "./style";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useHistory } from "react-router-dom";
import { useCart } from "../../providers/cart";

const Header = () => {
    const history = useHistory()
    const {cart} = useCart()
    return (
        <StyledHeader>
            <h1 onClick={() => history.push("/")} >Kenzie Shop</h1>
            <div>
            <IconButton color="primary" aria-label="cart" onClick={()=> history.push("/cart")}>
                <Badge badgeContent={cart.length} color="primary">
                    <ShoppingCartOutlinedIcon />
                </Badge>
            </IconButton>

            </div>
        </StyledHeader>
    )
}

export default Header