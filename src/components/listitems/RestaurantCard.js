import { Box, Stack, Text, Heading, Image, VStack, Button } from 'native-base'
import { API_KEY } from 'react-native-dotenv'
import { useNavigation } from '@react-navigation/native';



const RestaurantCard = ({ restaurantName, key, photoRef }) => {
  const navigation = useNavigation();

  return (
    <Box bg="white" shadow={2} rounded="lg" maxWidth="260px" m={'10px'} key={key}>
      <Image
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${API_KEY}`
        }}
        alt="image base"
        resizeMode="cover"
        height={150}
        roundedTop="md"
      />
      <Stack space={4} p={[4, 4, 8]}>
        <Heading size={['md', 'lg', 'md']} noOfLines={2}>
          {restaurantName ? restaurantName : "Name not fetched"}
        </Heading>
        <Text noOfLines={[4, 4, 2]} color="gray.700" lineHeight={'22px'}>
          With lush green meadows, rivers clear as crystal, pine-covered hills
        </Text>
      </Stack>

      <VStack alignItems="center">
        <Button
          width="100%"
          onPress={() =>
            navigation.navigate("Restaurant Page", { restaurantName })
          }
        >
          More Details
        </Button>
      </VStack>
    </Box>
  )
}

export default RestaurantCard
