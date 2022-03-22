import { Center, VStack, Image, Text, Heading, Divider, Button, ChevronRightIcon, HStack } from "native-base";
import React, {useContext, useState, useEffect} from "react";
import { StyleSheet } from 'react-native';
import { LoginContext } from "../context/LoginContext";
import { useNavigation } from '@react-navigation/native';


const ProfileScreenContainer = () => {
  const [userInfo, setUserInfo] = useState();
  const [accessToken, setAccessToken] = useContext(LoginContext)
  const navigation = useNavigation();
  async function getUserData() {
    let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    })

    userInfoResponse.json().then(data => {
      setUserInfo(data);
    })
  }
  useEffect(() => {
    getUserData();
  }, userInfo)

  const logOut = () => {
    setAccessToken("");
    navigation.navigate("Authentication");

  }

  const icon = [{ icon: <ChevronRightIcon size="4" />,
  iconName: "chevron-right"}]

  return (
    <VStack space={5} py={10} px={5}>
      {userInfo ? (
        <Center>
        <Image source={{ uri: userInfo.picture }} style={styles.picture} />
        <Heading fontSize="md" style={styles.text}>{userInfo.name} </Heading>
        <VStack style={styles.options} width='100%'>
          <HStack>
            <Text fontSize="3xl" fontWeight="light">Account Settings</Text>
            <ChevronRightIcon mt="2"  ml="auto"/>
          </HStack>
          <Divider my='2' />
          <HStack>
            <Text fontSize="3xl" fontWeight="light">Help & Support</Text>
            <ChevronRightIcon mt="2" ml="auto"/>
          </HStack>
          <Divider my='2' />
          <HStack>
            <Text fontSize="3xl" fontWeight="light">Terms & Privacy</Text>
            <ChevronRightIcon mt="2"  ml="auto"/>
          </HStack>
          <Divider my='2' />
          <Button size="lg" mt="220" backgroundColor="#924344" borderRadius="md" onPress={() => logOut()}>Log Out</Button>
        </VStack>
        </Center>
      ) : <Text>Loading</Text>}
      
    </VStack>
  );
};

export default ProfileScreenContainer;

const styles = StyleSheet.create({
  picture: { 
    width: 120, 
    height: 120, 
    borderRadius: 100,
    marginTop: 50, 
  },
  text : { 
    marginTop:20,
    fontSize: 20,
    fontWeight: 'bold' 
  },
  options: {
    marginTop: 50,
    width: 300,
  }
});
