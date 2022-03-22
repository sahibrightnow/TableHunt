import { HStack, ScrollView, View, VStack, Skeleton } from 'native-base'

const SkeletonCard = () => {
    return (

        <VStack mt="3" w="84%" maxW="440" height="315" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
            borderColor: "coolGray.500"
        }} _light={{
            borderColor: "coolGray.200"
        }}>
            <Skeleton h="40" />
            <Skeleton.Text px="6" />
        </VStack>
    )
}

export default SkeletonCard