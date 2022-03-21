import { View, Image, Text, Center } from "native-base";
import React, {useContext} from "react";
import { StyleSheet } from "react-native";
import { LoginContext } from "../context/LoginContext";


const ProfileScreenContainer = () => {
  const [userInfo] = useContext(LoginContext)
  return (
    <View style={styles.userInfo}>

          <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
          <Text style={{ fontSize: 14 }}>Welcome {userInfo.name}</Text>
          <Text>{userInfo.email}</Text>
        </View>
  );
};

export default ProfileScreenContainer;

const styles = StyleSheet.create({
  userInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePic: {
    width: 50,
    height: 50
  }
 })
