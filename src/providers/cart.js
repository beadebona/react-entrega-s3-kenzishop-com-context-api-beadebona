import { createContext, useContext, useState } from 'react';

import { toast } from 'react-toastify';


export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('@kenzie:cart')) || []);

    const addToCart = (product) => {
    if(cart.find(elem => elem.id === product.id)){

        product.quantity = product.quantity + 1
       
        return localStorage.setItem('@kenzie:cart', JSON.stringify(cart))

    } else{
        product.quantity = 1
        const list = [...cart, product]
        setCart(list);
        return localStorage.setItem('@kenzie:cart', JSON.stringify(list))
    }
    
 
  };

    const removeFromCart = (product) => {
    const list = cart.filter(item => item !== product)
    if( product.quantity > 1){
        product.quantity = product.quantity -1
        list.push(product)
    } 
    setCart(list);
    return localStorage.setItem('@kenzie:cart', JSON.stringify(list))
  };

  const checkOutCart= () =>{
      setCart([])
      toast.success("Pedido finalizado!")
      return localStorage.clear()
  }
return (
  <CartContext.Provider
   value={{ cart, addToCart, removeFromCart, checkOutCart }}>
	{children}
  </CartContext.Provider>
 )
}

export const useCart = () => useContext(CartContext);
