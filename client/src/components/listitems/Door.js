import { Box, Text } from 'native-base'
const Door = () => {
    return (
        <Box w="8" h="100" mt="10" ml="16" borderColor="coolGray.400" zIndex="2" borderWidth="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center" _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
        }} _web={{
            shadow: 2,
            borderWidth: 0
        }} _light={{
            backgroundColor: "gray.50"
        }}>
            <Text>D</Text>
            <Text>O</Text>
            <Text>O</Text>
            <Text>R</Text>
        </Box>
    )
}
export default Door