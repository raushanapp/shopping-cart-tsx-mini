import { Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"
import { StoreItems } from "../Components/Storeitems"
import storeItems from "../Data/items.json"
export const Store = () => {
    
    return (
        <>
            <Heading
                fontSize='24px'
                fontWeight='semibold'
                // ps='absolute'
                marginTop='50px'

                marginLeft='150px'
            >
                Store
            </Heading>
            <Grid
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(3, 1fr)'
                gap={5}
                boxShadow='md' p='6' rounded='md' bg='white'
                // h='180vh'
                w='90%'
                // border='1px solid #ccc'
                margin='auto'
                // p='30px'
            
            >
                {storeItems?.length > 0 && storeItems.map((el) => (
                    <StoreItems key={el.id} {...el} />
                ))}
            </Grid>
        </>
    )
}