import { Button } from 'native-base';
import SvgUri from 'react-native-svg-uri'

const CameraButton = ({ data }) => {
    return (
        <Button borderRadius="20" px="4" py="2" bgColor="danger.300">
            <SvgUri source={require('../assets/CameraIcon.svg')} />
        </Button>
    )
}

export default CameraButton;