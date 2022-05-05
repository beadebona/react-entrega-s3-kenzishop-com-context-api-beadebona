import { Button } from "@mui/material";
import { useCart } from "../../providers/cart";

const CheckOut = () => {
    const {cart, checkOutCart} = useCart()
    const checkOutPrice = cart.reduce((vAn, vAt)=>{
        return vAn + Number(vAt.price * vAt.quantity)       
    },0) 
    const checkOutQuantity = cart.reduce((vAn, vAt)=>{
        return vAn + Number(vAt.quantity)       
    },0) 


    return (
        <div>
            {cart.length > 0?(
                <>
                    <h1> Resumo do Pedido </h1>
                    <p>
                        {checkOutQuantity} und
                    </p>
                    <p>
                    R$ {checkOutPrice.toFixed(2)}
                    </p>
                    <Button variant="contained" onClick={()=>checkOutCart()} > Finalizar pedido </Button>

                </>

            ):(
                <></>
            )}
        
        </div>
    )
}

export default CheckOut