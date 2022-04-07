import { Center, VStack, Image, Text, Heading, Divider, Button, ChevronRightIcon, HStack } from "native-base";
import React, { useContext, useState, useEffect } from "react";
import { StyleSheet } from 'react-native';
import { LoginContext } from "../context/LoginContext";


const ProfileScreenContainer = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState();
  const [accessToken, setAccessToken, userToken, setUserToken, userId, setUserId] = useContext(LoginContext)
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
  }, [userInfo])

  const logOut = () => {
    setTimeout(() => {
      setAccessToken("");
      setUserToken("")
      setUserId("")
      navigation.navigate("Authentication");
    }, 1000);
  }

  const icon = [{
    icon: <ChevronRightIcon size="4" />,
    iconName: "chevron-right"
  }]

  return (
    <VStack space={5} py={10} px={5}>
      {userInfo ? (
        <Center>
          <Image source={{ uri: userInfo.picture }} style={styles.picture} alt={"user_profile_picture"} />
          <Heading fontSize="md" style={styles.text}>{userInfo.name} </Heading>
          <VStack style={styles.options} width='100%'>
            <HStack>
              <Text fontSize="xl" fontWeight="light" mt={1}>Account Settings</Text>
              <ChevronRightIcon  ml="auto" />
            </HStack>
            <Divider my='2' />
            <HStack>
              <Text fontSize="xl" fontWeight="light" mt={1}>Help & Support</Text>
              <ChevronRightIcon ml="auto" />
            </HStack>
            <Divider my='2' />
            <HStack>
              <Text fontSize="xl" fontWeight="light" mt={1}>Terms & Privacy</Text>
              <ChevronRightIcon ml="auto" />
            </HStack>
            <Divider my='2' />
            <Button variant="outline" size="lg" mt="250" colorScheme='rgba(188, 71, 73, 1)' borderRadius="md" onPress={() => logOut()}>Log Out</Button>
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
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  options: {
    marginTop: 50,
    width: 300,
  }
});
