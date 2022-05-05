import ProductCard from "../../components/Card"
import CheckOut from "../../components/CheckOut"
import Header from "../../components/Header"
import { useCart } from "../../providers/cart"

const Cart = () =>{

    const { cart } = useCart()

    return (
        <>
        <Header/>
        {cart.length === 0 ? (<h1>Carrinho vazio</h1>):(<></>)}
        {cart.map((product) =><ProductCard cartSize={true}  product={product} /> )}     
        <CheckOut/>
        </>

    )
}

export default Cart