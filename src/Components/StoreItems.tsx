
import { Button, Flex, GridItem, Image, Text } from "@chakra-ui/react"
import { useShoppingCart } from "../Context/ShoppingCartContext"
import { formatCurrency } from "../Utils/formatCurrency"
type StoreItemsProps = {
    id: number,
    name: string,
    imgUrl: string,
    price:number
}
export const StoreItems = ({id, name, imgUrl,price}:StoreItemsProps) => {
    // console.log("id",id)
    const{getItemQuantity,incrementCartQuantity,decrementCartQuantity,removeFromCart} =useShoppingCart()
    const quantity=getItemQuantity(id);
    return (
        <GridItem key={id}
        border='1px solid #ccc'
        borderRadius='5px'
        p='20px'
        // boxShadow='base' p='6' rounded='md' bg='white'
        // w='100%'
        // h='250px'
    >
        <Image src={imgUrl}  h='250px' w='350px' objectFit='cover' />
        <Text>{name}</Text>
        <Text
            marginLeft='250px'
            marginTop='-20px'
                
        >
            {formatCurrency(price)}
        </Text>
            
        <Flex
             w='100%'
                justifyContent='center'  
                alignItems='centr'  
                flexDirection='row'
                
        >
            {quantity === 0 ? (
                <Button colorScheme='messenger' w='100%'onClick={()=>incrementCartQuantity(id)} > + Add To Cart</Button>
                ) :
                <Flex
                        alignItems='center'
                        justifyContent='center'
                        gap=".5rem"
                        flexDirection='column'
                    >
                        <Flex
                             alignItems='center'
                             justifyContent='center'
                            gap=".5rem"
                            
                        >
                        <Button colorScheme='messenger' onClick={()=>decrementCartQuantity(id)}>-</Button>
                        <Flex>
                            <span>{ quantity} </span>  in Cart
                        </Flex>
                        <Button colorScheme='messenger' onClick={()=>incrementCartQuantity(id)} >+</Button>
                        </Flex>
                        <Button colorScheme='red' size='sm' onClick={()=>removeFromCart(id)}>Remove</Button>
                </Flex>}    
        </Flex>
    </GridItem>
    )
}