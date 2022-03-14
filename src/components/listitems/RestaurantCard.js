import { Box, Stack, Text, Heading, Image } from 'native-base'
import React from 'react'


const RestaurantCard = ({restaurantName, key}) => {
  console.log("hello form card component ", Math.random())
  return (
    <Box bg="white" shadow={2} rounded="lg" maxWidth="260px" m={'10px'} key={key}>
      <Image
        source={{
          uri: 'https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png',
        }}
        alt="image base"
        resizeMode="cover"
        height={150}
        roundedTop="md"
      />
      <Stack space={4} p={[4, 4, 8]}>
        <Text color="gray.400">June 22, 2021</Text>
        <Heading size={['md', 'lg', 'md']} noOfLines={2}>
          {/* The Stunning Dawki River in Meghalaya is So Clear That Boats Appear
          Floating in Air */}
          {restaurantName ? restaurantName : "something"}
        </Heading>
        <Text noOfLines={[4, 4, 2]} color="gray.700" lineHeight={'22px'}>
          With lush green meadows, rivers clear as crystal, pine-covered hills,
          gorgeous waterfalls, lakes and majestic forests, the mesmerizing…
        </Text>
      </Stack>
    </Box>
  )
}

export default RestaurantCard
