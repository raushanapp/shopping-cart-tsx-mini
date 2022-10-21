import { Box, Button, Flex, Image, Stack } from "@chakra-ui/react"
import { useShoppingCart } from "../Context/ShoppingCartContext"
import storeItems from "../Data/items.json"
import { formatCurrency } from "../Utils/formatCurrency"
type CartItemsProps = {
    id: number,
    quantity:number
}

export const CartItem = ({id,quantity}:CartItemsProps) => {
    
    const { removeFromCart } = useShoppingCart();
    const pro = storeItems?.find((item) => item.id === id)
    // console.log("pro-",pro)
    if(pro===undefined) return null
    return (
        <Stack spacing='20px' direction='row' display='flex' alignItems='center'>
            <Image src={pro?.imgUrl} w='125px' h='75px' objectFit='cover' />
            <Flex direction='column'>
                <Box>
                    {pro?.name} {" "} 
                    {quantity > 1 && (
                        <span style={{fontSize:".65rem"}} > X { quantity} </span>
                    )}
                </Box>
                <Box fontSize='.75rem'>
                  {formatCurrency(pro?.price)}
                </Box>
            </Flex>
            <Box>
                {formatCurrency(pro?.price * quantity)}
            </Box>
            <Button variant='outline' colorScheme='red'
                onClick={()=>removeFromCart(pro?.id)}
            >&times;</Button>
        </Stack>
    )
}