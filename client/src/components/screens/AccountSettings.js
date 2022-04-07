import { Input, Text, Box, Icon, Heading, View, ScrollView, Button } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import RNDateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react'

const AccountSettings = ({ route, navigation }) => {
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const save = () => {
    setLoading(true)
    setTimeout(() => {
      navigation.goBack();
    }, 1000);

  }
  return (
    <View>
      <ScrollView>
        <Box alignItems="center" mt={10}>
          <Input fontSize={16} variant="filled" w="75%" maxWidth="300px" h={10} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder={route.params.userInfo.given_name} />
          <Input fontSize={16} variant="filled" mt={6} w="75%" maxWidth="300px" h={10} InputLeftElement={<Icon as={<MaterialIcons name="person-outline" />} size={5} ml="2" color="muted.400" />} placeholder={route.params.userInfo.family_name} />
          <Input fontSize={16} variant="filled" mt={6} w="75%" maxWidth="300px" h={10} InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="muted.400" />} placeholder={route.params.userInfo.email} />
          <Input fontSize={16} variant="filled" mt={6} w="75%" maxWidth="300px" h={10} InputLeftElement={<Icon as={<MaterialIcons name="phone" />} size={5} ml="2" color="muted.400" />} placeholder="Phone" />
        </Box>

        <Box ml='auto' mr='auto' mb={20}>
          <Heading mt={6}> Special Request </Heading>
          <Input size="2xl" w={72} h={32} mt={6} />
          <Heading mt={6}> Important Dates </Heading>
          <Text fontSize={16} mt={2} ml={1} fontWeight="100">Your birthday</Text>
          <RNDateTimePicker display="spinner" value={date} />
        </Box>
      </ScrollView>

      <Button
        position="absolute"
        bottom={5}
        left={5}
        mt={5}
        mb={2}
        m='auto'
        width="90%" isLoading={loading} variant="outline" size="lg" colorScheme='rgba(188, 71, 73, 1)' borderRadius="md" onPress={() => save()}>{loading ? 'Saving' : 'Save'}</Button>
    </View>
  )
}

export default AccountSettings