import React from 'react';
import * as Google from 'expo-google-app-auth'
import * as WebBrowser from 'expo-web-browser';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Heading, Button, VStack, Flex, Link, Box} from 'native-base'


const authentication = () => {
    const [accessToken, setAccessToken] = React.useState();
const [userInfo, setUserInfo] = React.useState();

async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync({
      expoClientId: "32874219277-hu0dk0feqc5ovl3gjg6b4i2lieopbi6a.apps.googleusercontent.com",
  androidClientId: "32874219277-bhghnuaipathh4hs9s3kbmgvnmi6l9t7.apps.googleusercontent.com",
      scopes: ["profile", "email"]
    });

    if (result.type === "success") {
      setAccessToken(result.accessToken);
    } else {
      console.log("Permission denied");
    }
  } catch (e) {
    console.log(e);
  }
}




async function getUserData() {
  let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
    headers: { 'Authorization': `Bearer ${accessToken}` }
  })

  userInfoResponse.json().then(data => {
    setUserInfo(data);
  })
}

function showUserInfo() {
  if (userInfo) {
    return (
      <View style={styles.userInfo}>

        <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
        <Text>Welcome {userInfo.name}</Text>
        <Text>{userInfo.email}</Text>
      </View>
    )
  }
}
  return (
    
    <VStack >
        <Flex alignItems="flex-start">
            <View style={styles.container}>
              {showUserInfo()}
              <Heading>Start Table Hunting!</Heading>
              <Button borderRadius={8} width='50%' mt='5' >Continue with email</Button>
              <Button borderRadius={8} width='50%' mt='5' onPress={accessToken ? getUserData : signInWithGoogleAsync}>
              {accessToken ? "Get user data" : "Continue with google"}
              </Button>
              <Text>Not a member?<Link>Sign up</Link></Text>
              <StatusBar style="auto" />
             
            <Text>Are you a restaurant owner?</Text>
            <Button borderRadius={8} width='50%' mt='5'  >Continue with email</Button>
              <Button borderRadius={8} width='50%' mt='5'  onPress={accessToken ? getUserData : signInWithGoogleAsync}>
              {accessToken ? "Get user data" : "Continue with google"}
              </Button>
       
            </View>
        </Flex>
       
        
    </VStack>
    
  )
}

export default authentication

const styles = StyleSheet.create({
    container: {
        margin: 100,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      width: '100%',
      
    },
    userInfo: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    profilePic: {
      width: 50,
      height: 50
    },
    button: {
        borderRadius: 50,
        width: '100%',
    }
  });

