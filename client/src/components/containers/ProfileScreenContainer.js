import { Center, VStack, Image, Text } from "native-base";
import React, {useContext, useState, useEffect} from "react";
import { LoginContext } from "../context/LoginContext";

const ProfileScreenContainer = () => {
  const [userInfo, setUserInfo] = useState();
  const [accessToken] = useContext(LoginContext)
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

  return (
    <VStack space={5} py={10} px={5}>
      {userInfo ? (
        <Center><Text>Hello {userInfo.name}</Text>
        <Image source={{ uri: userInfo.picture }} width="100" height="100" />
        </Center>
      ) : <Text>Loading</Text>}
      
    </VStack>
  );
};

export default ProfileScreenContainer;
