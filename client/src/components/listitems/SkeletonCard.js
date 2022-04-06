import { VStack, Skeleton } from 'native-base'

const SkeletonCard = () => {
    return (

        <VStack mt="3" w="84%" maxW="305" height="320" borderWidth="1" space={4} overflow="hidden" rounded="md" _dark={{
            borderColor: "coolGray.600"
        }} _light={{
            borderColor: "coolGray.200"
        }}>
            <Skeleton h="195" />
            <Skeleton.Text px="4" />
        </VStack>
    )
}

export default SkeletonCard