import { createContext, ReactNode, useContext ,useState} from "react";
import { ShoppingCart } from "../Components/ShoppingCart";
import { useLocalStorage } from "../Hooks/useLocalStorage";
type ShoppingCart = {
    children:ReactNode
}
type CartItem = {
    id: number,
    name?: string,
    quantity:number
}

type ShoppingCartContext = {
    openCart: () => void,
    closeCart: () => void,
    getItemQuantity: (id: number) => number,
    incrementCartQuantity: (id: number) => void,
    decrementCartQuantity: (id: number) => void,
    removeFromCart: (id: number) => void,
    cartQuantity: number,
    cartItems:CartItem[]
}
const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
} 

export function ShoppingCartProvider({ children }: ShoppingCart) {
    
    const [cartItems, setCatItems] = useLocalStorage<CartItem[]>("shopping-cart",[])
    const [isOpen, setIsOpen] = useState(false);

    const openCart = () => setIsOpen(true);
    const closeCart= ()=>setIsOpen(false)
    
    const cartQuantity=cartItems.reduce((quantity,item)=>item.quantity+quantity,0)
    function getItemQuantity(id: number) {
        
        return cartItems.find(item=>item.id===id)?.quantity || 0
    }
    function decrementCartQuantity(id: number) {
        
        setCatItems(currentItems => {
            
            if (currentItems.find(item => item.id === id)?.quantity ===1) {
                return currentItems.filter(item=>item.id!==id)
            }
            else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return {...item,quantity:item.quantity-1}
                    }
                    return item
                })
            }
        })
    }
    function incrementCartQuantity(id: number) {
        
        setCatItems(currItems => {
            
            if (currItems.find(items=> items.id === id) == null) {
                return [...currItems,{id, quantity:1}]
            }
            else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item,quantity:item.quantity+1}
                    }
                    else {

                        return item
                    }
                })
            }
        })
    }
    function removeFromCart(id: number) {
        
        setCatItems(currentItems => {
            return currentItems.filter(items=>items.id!==id)
        })
    }
    
    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            incrementCartQuantity,
            decrementCartQuantity,
            removeFromCart,
            openCart,
            closeCart,
            cartItems,
            cartQuantity
        }}>
            {children}
            <ShoppingCart  isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}

