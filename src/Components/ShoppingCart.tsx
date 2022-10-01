import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Stack,
    Box,
    Flex
  } from '@chakra-ui/react'
import { useShoppingCart } from '../Context/ShoppingCartContext'
import { formatCurrency } from '../Utils/formatCurrency'
import { CartItem } from './CartItem'
import storeItems from "../Data/items.json"
type ShoppingCart = {
    isOpen:boolean
}
  
export const ShoppingCart = ({isOpen}:ShoppingCart) => {
    const { closeCart,cartItems } = useShoppingCart()
    
    return (
        <>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={closeCart}
         size='md'       
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            <Stack spacing='20px'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} {...item} />
                    
                ))}  
                <Flex  flexFlow='row-reverse' alignItems='center'  fontSize='20px' fontWeight='bold' >
                    Total{" "} 
                                {formatCurrency(
                        cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find((i) => i.id === cartItem.id) 
                            return total + (item?.price || 0)* cartItem.quantity
                        },0)
                    )}          
                                
                </Flex>            
             </Stack>
          </DrawerBody>

          
        </DrawerContent>
      </Drawer>
        </>
    )
}