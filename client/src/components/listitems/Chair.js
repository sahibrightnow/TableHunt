import { Box } from 'native-base'
const Chair = () => {
    return (
        <Box w="35" h="35" borderColor="coolGray.400" borderWidth="1" _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
        }} _web={{
            shadow: 2,
            borderWidth: 0
        }} _light={{
            backgroundColor: "gray.50"
        }}>
        </Box>
    )
}
export default Chair