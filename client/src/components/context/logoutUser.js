// logout User when user Authorization fails!
import { LoginContext } from "../context/LoginContext";
import { useNavigation } from '@react-navigation/native';


const logoutUser = () => {
    const navigation = useNavigation()

    const [accessToken, setAccessToken, userToken, setUserToken, userId, setUserId] = useContext(LoginContext)

    setAccessToken("");
    setUserToken("")
    setUserId("")

    alert('Invalid Session! Please log-in again!')

    setTimeout(() => {
        navigation.navigate("Authentication");
    }, 500);
}

export default logoutUser