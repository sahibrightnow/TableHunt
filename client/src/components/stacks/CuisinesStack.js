import { TouchableOpacity } from 'react-native'
import { VStack, Image, HStack } from "native-base";

const CuisinesStack = ({ onOpen, setRestaurantType }) => {
    return (
        <VStack space={4} px={5} mt="-6">

            <HStack space={3}>
                <TouchableOpacity onPress={() => { onOpen(); setRestaurantType('Punjabi') }} activeOpacity={0.8}>
                    <Image
                        source={require('../assets/searchPage/cuisine_Punjabi.png')}
                        alt="Punjabi"
                        width={150}
                        rounded="lg"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { onOpen(); setRestaurantType('Korean') }} activeOpacity={0.8}>
                    <Image
                        source={require('../assets/searchPage/cuisine_Korean.png')}
                        alt="image base"
                        width={150}
                        rounded="lg"
                    />
                </TouchableOpacity>
            </HStack>
            <HStack space={3}>
                <TouchableOpacity onPress={() => { onOpen(); setRestaurantType('Chinese') }} activeOpacity={0.8}>
                    <Image //chinese img has a shadow
                        source={require('../assets/searchPage/cuisine_Chinese.png')}
                        alt="image base"
                        width={150}
                        rounded="lg"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { onOpen(); setRestaurantType('Italian') }} activeOpacity={0.8}>
                    <Image
                        source={require('../assets/searchPage/cuisine_Italian.png')}
                        alt="image base"
                        width={150}
                        rounded="lg"
                    />
                </TouchableOpacity>
            </HStack>
            <HStack space={3}>
                <TouchableOpacity onPress={() => { onOpen(); setRestaurantType('Vietnamese') }} activeOpacity={0.8}>
                    <Image
                        source={require('../assets/searchPage/cuisine_Vietnamese.png')}
                        alt="image base"
                        width={150}
                        rounded="lg"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { onOpen(); setRestaurantType('Lebanese') }} activeOpacity={0.8}>
                    <Image
                        source={require('../assets/searchPage/cuisine_Lebanese.png')}
                        alt="image base"
                        width={150}
                        rounded="lg"
                    />
                </TouchableOpacity>
            </HStack>
            <HStack space={3}>
                <TouchableOpacity onPress={() => { onOpen(); setRestaurantType('Greek') }} activeOpacity={0.8}>
                    <Image
                        source={require('../assets/searchPage/cuisine_Greek.png')}
                        alt="image base"
                        width={150}
                        rounded="lg"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { onOpen(); setRestaurantType('Japanese') }} activeOpacity={0.8}>
                    <Image
                        source={require('../assets/searchPage/cuisine_Japanese.png')}
                        alt="image base"
                        width={150}
                        rounded="lg"
                    />
                </TouchableOpacity>
            </HStack>
            <HStack space={3}>
                <TouchableOpacity onPress={() => { onOpen(); setRestaurantType('French') }} activeOpacity={0.8}>
                    <Image
                        source={require('../assets/searchPage/cuisine_French.png')}
                        alt="image base"
                        width={150}
                        rounded="lg"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { onOpen(); setRestaurantType('Cantonese') }} activeOpacity={0.8}>
                    <Image
                        source={require('../assets/searchPage/cuisine_Cantonese.png')}
                        alt="image base"
                        width={150}
                        rounded="lg"
                    />
                </TouchableOpacity>
            </HStack>
        </VStack >
    )
}

export default CuisinesStack