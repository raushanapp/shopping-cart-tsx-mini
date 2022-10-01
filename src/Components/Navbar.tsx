import { Box, Button, Container, Flex, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import {GiShoppingCart} from "react-icons/gi"
import { useShoppingCart } from "../Context/ShoppingCartContext"

export const Navbar = () => {
    
    const {openCart,cartQuantity} =useShoppingCart()
    return (
        <Flex
            // border='1px solid #ccc'
            maxW='100%'
            h='60px'
            display='flex'
            alignItems='center'
            justifyContent='space-around'
            fontSize='20px'
            fontFamily='sans-serif'
            // bgColor='gray'
            boxShadow='lg' p='6' rounded='md' bg='white'
            pos='sticky'
            // zIndex={10}
            top='0'
            left='0'

        >
            <Text>
                <NavLink to='/'>
                    Home
                </NavLink>
            </Text>
            <Text>
                <NavLink to='/store'>
                    Store
                </NavLink>
            </Text>
            <Text>
                <NavLink to='/about'>
                    About
                </NavLink>
            </Text>
            {cartQuantity > 0 && (
                 <Button
                 bg='none'
                    onClick={openCart}
             >
                 <GiShoppingCart fontSize='35px' color='#4299E1' />
                 <Box
                     border='1px solid #777'
                     borderRadius='50%'
                     w='30px'
                     h='30px'
                     bg='red.600'
                     color='white'
                     display='flex'
                     justifyContent='center'
                     alignItems='center'
                     position='absolute'
                     bottom='0'
                     right='0'
                     transform='translate(25%, 25%)'
 
                 >
                     {cartQuantity}
                 </Box>
             </Button>
            )}
           
        </Flex>
    )
}