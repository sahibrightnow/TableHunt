import React, { useState, useEffect, useRef } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Button, useDisclose, Actionsheet, View, Modal, VStack, HStack, Text, Image } from 'native-base';
import SvgUri from 'react-native-svg-uri'
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

const CameraButton = ({ name, cameraPic, setCameraPic }) => {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();
    const [showImageModal, setShowImageModal] = useState(false);
    const [showCameraModal, setShowCameraModal] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);

    // camera ref to access camera
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();


    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    // function to take a picture
    const takePicture = async () => {
        if (cameraRef) {
            console.log("cameraRef", cameraRef)
            try {
                let photo = await cameraRef.current.takePictureAsync({
                    quality: 1,
                    // base64: true,
                    allowEditing: true,
                    aspect: [4, 3],
                });
                console.log("photo", photo)
                return photo
                // setShowImageModal(true);
            } catch (error) {
                console.log("error", error)
            }
        }
    };

    // function to pick an image
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setCameraPic(result.uri);
        }
    };

    return (
        <View>
            <Button borderRadius="20" px="4" py="2" bgColor="danger.300" onPress={onOpen}>
                <SvgUri source={require('../assets/cameraIcon.svg')} />
            </Button>
            {/* Camera Button actionsheet */}
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    {cameraPic ? <Actionsheet.Item onPress={() => setShowImageModal(true)}>
                        Look Inside
                    </Actionsheet.Item> : null}
                    <Actionsheet.Item onPress={pickImage}>
                        Choose from Gallery
                    </Actionsheet.Item>
                    <Actionsheet.Item onPress={() => {
                        setShowCameraModal(true);
                        setType(
                            type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                        );
                    }}>
                        Camera
                    </Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
            {/* End of camera button actionsheet */}

            {/* Opens display image modal */}
            <Modal isOpen={showImageModal} onClose={() => setShowImageModal(false)}>
                <Modal.Content w="500" h="800">
                    <Modal.CloseButton />
                    <Modal.Header>{name}</Modal.Header>
                    <Modal.Body>
                        {/* Display Image */}
                        <Image
                            source={{ uri: cameraPic }}
                            alt={`${name} picture`}
                            resizeMode="contain"
                            height={600}
                            width={500}
                            roundedTop="lg"
                        />
                    </Modal.Body>

                </Modal.Content>
            </Modal>
            {/* End of display image modal */}

            {/* Open camera modal */}
            <Modal isOpen={showCameraModal} onClose={() => setShowCameraModal(false)}>
                <Modal.Content w="500" h="800">
                    <Modal.CloseButton />
                    <Modal.Header>{name}</Modal.Header>
                    <Modal.Body>
                        <View style={styles.container}>
                            <Camera style={styles.camera} type={type} ref={cameraRef}>
                                <View style={styles.cameraContainer}>
                                    {/* Camera View */}
                                </View>
                            </Camera>
                        </View>
                    </Modal.Body>
                    <Modal.Footer space={2} display="flex" justifyContent="space-around" alignItems="center">
                        <Button variant="ghost" colorScheme="blueGray"
                            onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}>
                            Flip
                        </Button>
                        <Button variant="ghost" colorScheme="blueGray" onPress={async () => {
                            const picRef = await takePicture()
                            console.log("picRef", picRef)
                            setCameraPic(picRef.uri)
                        }}>
                            Capture
                        </Button>
                        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                            setShowCameraModal(false);
                        }}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
            {/* End of camera modal */}
        </View>
    )
}

export default CameraButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    cameraContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
        padding: 260,
    },
}); 
