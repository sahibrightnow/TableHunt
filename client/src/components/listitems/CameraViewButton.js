import { Button, View, Modal, Image } from 'native-base';
import CameraIconComponent from '../assets/iconComponents/CameraIcon';
import React, { useState } from 'react';

const CameraViewButton = ({ imgSource, name }) => {
    const [showImageModal, setShowImageModal] = useState(false);

    return (
        <View>
            <Button borderRadius="20" px="4" py="2" bgColor="danger.300" onPress={() => setShowImageModal(true)}>
                <CameraIconComponent />
            </Button>
            {/* Opens display image modal */}
            <Modal isOpen={showImageModal} onClose={() => setShowImageModal(false)}>
                <Modal.Content w="500" h="800">
                    <Modal.CloseButton />
                    <Modal.Header>{name}</Modal.Header>
                    <Modal.Body>
                        {/* Display Image */}
                        <Image
                            source={imgSource}
                            alt={`${name} picture`}
                            resizeMode="contain"
                            height={600}
                            width={500}
                            roundedTop="lg"
                        />
                    </Modal.Body>

                </Modal.Content>
            </Modal>
        </View>
    )
}

export default CameraViewButton;