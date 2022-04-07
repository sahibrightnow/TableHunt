import { StyleSheet } from 'react-native'
import { HStack, useDisclose, Button, Box, View, Text, Pressable, Actionsheet, ScrollView, TextArea, Center, Spinner, Image } from 'native-base'
import SvgUri from 'react-native-svg-uri'
import Svg, { Path } from "react-native-svg"
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ModalDatePicker } from 'react-native-material-date-picker';
import RadioButton from '../listitems/RadioButton'
import CameraButton from '../listitems/CameraButton'
import TableMap from '../forms/TableMap'
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios'
import { REACT_APP_SERVER } from 'react-native-dotenv'
import React, { useState, useEffect, useContext } from 'react'
import { LoginContext } from '../context/LoginContext'
import CameraViewButton from '../listitems/CameraViewButton'
import DatePickerIcon from '../assets/iconComponents/DatePickerIcon'
import PeopleIcon from '../assets/iconComponents/PeopleIcon'

const SelecingSeats = ({ data, navigation }) => {
    const [accessToken, setAccessToken, userInfo, setUserInfo, userToken, setUserToken, userId, setUserId] = useContext(LoginContext)

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    const numberOfPeople = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const timingsData = [
        { value: "9:30 AM" },
        { value: "10:00 AM" },
        { value: "10:30 AM" },
        { value: "11:00 AM" },
        { value: "11:30 AM" },
        { value: "12:00 PM" },
        { value: "12:30 PM" },
        { value: "1:00 PM" },
        { value: "1:30 PM" },
        { value: "2:00 PM" },
        { value: "2:30 PM" },
        { value: "3:00 PM" },
        { value: "3:30 PM" },
        { value: "4:00 PM" },
        { value: "4:30 PM" },
        { value: "5:00 PM" },
        { value: "5:30 PM" },
        { value: "6:00 PM" },
        { value: "6:30 PM" },
        { value: "7:00 PM" },
        { value: "7:30 PM" },
        { value: "8:00 PM" },
        { value: "8:30 PM" },
        { value: "9:00 PM" },
        { value: "9:30 PM" },
        { value: "10:00 PM" },
        { value: "10:30 PM" },
        { value: "11:00 PM" },
        { value: "11:30 PM" },
    ]
    const requestsData = [
        { value: "High-Chair" },
        { value: "Wheel-chair access" },
    ]
    const [tableOption, setTableOption] = useState();
    const [request, setRequest] = useState('No request')
    const [timing, setTiming] = useState()
    const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
    const [notes, setNotes] = useState();
    const [reservationDetails, setReservationDetails] = useState({})
    const [camera1Pic, setCamera1Pic] = useState()
    const [camera2Pic, setCamera2Pic] = useState()
    const [camera3Pic, setCamera3Pic] = useState()
    const [camera4Pic, setCamera4Pic] = useState()
    const [dataLoaded, setDataLoaded] = useState(false)

    // Image Overlay
    // const [imgIsDisplayed, setImgIsDisplayed] = useState(false);

    const [selectedNumOfPeople, setSelectedNumOfPeople] = useState(1)
    const [vaccineCardImg, setVaccineCardImg] = useState([...Array(selectedNumOfPeople)])

    useEffect(() => {
        setVaccineCardImg([...Array(selectedNumOfPeople)])
    }, [selectedNumOfPeople])

    useEffect(() => {
        setReservationDetails({
            numberOfPeople: selectedNumOfPeople,
            bookingDate: selectedDate,
            bookingTime: timing,
            tableNumber: tableOption,
            restaurantName: data.restaurantDetails.name,
            placeId: data.restaurantDetails.place_id,
            vicinity: data.restaurantDetails.vicinity,
            specialRequests: request,
            extraNotes: notes,
            time: Math.floor(new Date(`${selectedDate} ${timing}`).getTime() / 1000),
            vaccineProof: vaccineCardImg.filter(el => el !== undefined)
        });
        setDataLoaded(true);
    },
        [selectedNumOfPeople, selectedDate, timing, request, notes, tableOption, vaccineCardImg])

    // function to pick an image
    const pickImage = async (index) => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            let images = [...vaccineCardImg];
            images[index] = result.uri;
            setVaccineCardImg(images);
        }
        else {
            setVaccineCardImg([...vaccineCardImg]);
        }
    };

    const createReservation = () => {
        axios.post(`https://tablehunt.herokuapp.com/api/v1/reservations`, { ...reservationDetails, userId: userId }, {
            headers: { 'Authorization': userToken }
        })
            .then(res => console.log("Reservation successful"))
            .catch(err => console.log("Error while creating reservation", err))
    }

    return (
        <View display="flex" mt="-6">

            {/* <Image
                source={require('../assets/restaurantImgs/topLeft.jpg')}
                alt="Top left image"
                style={{
                    display: 'flex',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,

                }}
            />  */}
            {/* Top camera buttons */}
            <HStack display="flex" justifyContent="space-between" alignItems="center" mb="2" overflow="hidden">
                {/* <CameraButton name="Camera 1" cameraPic={camera1Pic} setCameraPic={setCamera1Pic} /> */}
                <CameraViewButton imgSource={require('../assets/restaurantImgs/topLeft.jpg')} name="Camera 1" />

                <Text>KITCHEN AREA</Text>
                {/* <CameraButton name="Camera 2" cameraPic={camera2Pic} setCameraPic={setCamera2Pic} /> */}
                <CameraViewButton imgSource={require('../assets/restaurantImgs/topRight.jpg')} name="Camera 2" />
            </HStack>
            {/* End of top camera buttons */}

            {/* Table map */}
            <TableMap
                tableOption={tableOption}
                setTableOption={setTableOption} />
            {/* End of table map */}

            {/* Bottom Camera buttons */}
            <HStack display="flex" justifyContent="space-between" mt="2">
                {/* <CameraButton name="Camera 3" cameraPic={camera3Pic} setCameraPic={setCamera3Pic} />
                <CameraButton name="Camera 4" cameraPic={camera4Pic} setCameraPic={setCamera4Pic} /> */}
                <CameraViewButton imgSource={require('../assets/restaurantImgs/bottomLeft.jpg')} name="Camera 3" />
                <CameraViewButton imgSource={require('../assets/restaurantImgs/bottomRight.jpg')} name="Camera 4" />
            </HStack>
            {/* End of bottom camera buttons */}


            {/* Book NOW Actionsheet */}
            {tableOption ?
                <Button mt="5" color="#FFFFFF" bgColor="danger.300" onPress={onOpen}>
                    <Text color="#FFFFFF" fontSize="16px" py="0.5" >Book Now</Text>
                </Button>
                :
                <Button mt="5" color="#FFFFFF" bgColor="danger.300" onPress={onOpen} isDisabled>
                    <Text color="#FFFFFF" fontSize="16px" py="0.5" >Book Now</Text>
                </Button>}
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                {/* Booking for number of people */}
                <Actionsheet.Content>
                    <ScrollView>
                        <Center mt="2">
                            <Box display="flex" flexDirection="row" w="80" rounded="lg" px="4" py="2" overflow="hidden" borderColor="coolGray.200" borderWidth="1" shadow="9"
                                _dark={{
                                    borderColor: "coolGray.600",
                                    backgroundColor: "gray.700"
                                }} _web={{
                                    shadow: 9,
                                    borderWidth: 0
                                }} _light={{
                                    backgroundColor: "#FFF"
                                }}>
                                {/* <SvgUri source={require('../assets/PersonIcon.svg')} height="50" width="26" /> */}
                                <PeopleIcon height="50" width="26" />
                                <View ml="2" mb={0}>
                                    <Text fontSize="18" ml="2" mt="-1" >Booking for</Text>
                                    <View ml="-2" mb={-3}>
                                        <SelectDropdown
                                            data={numberOfPeople}
                                            onSelect={(selectedItem, index) => {
                                                setSelectedNumOfPeople(selectedItem)
                                            }}
                                            defaultButtonText={`${selectedNumOfPeople} person`}
                                            buttonTextAfterSelection={(selectedItem, index) => {
                                                if (selectedItem == 1) {
                                                    return `${selectedItem} person`
                                                } else {
                                                    return `${selectedItem} people`
                                                }
                                            }}
                                            rowTextForSelection={(item, index) => {
                                                return item
                                            }}
                                            buttonStyle={styles.dropdown1BtnStyle}
                                            buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                            renderDropdownIcon={(isOpened) => {
                                                return (
                                                    <FontAwesome
                                                        name={isOpened ? "chevron-up" : "chevron-down"}
                                                        color={"#444"}
                                                        size={12}
                                                        style={{ marginRight: 70 }}
                                                    />
                                                );
                                            }}
                                            dropdownIconPosition={"right"}
                                            dropdownStyle={styles.dropdown1DropdownStyle}
                                            rowStyle={styles.dropdown1RowStyle}
                                            rowTextStyle={styles.dropdown1RowTxtStyle}

                                        />
                                    </View>
                                </View>
                            </Box>
                        </Center>
                        {/* End of booking for number of people */}
                        {/* Date picker */}
                        <Center mt="3">
                            <Box display="flex" flexDirection="row" w="80" rounded="lg" px="4" py="2" overflow="hidden" borderColor="coolGray.200" borderWidth="1" shadow="9"
                                _dark={{
                                    borderColor: "coolGray.600",
                                    backgroundColor: "gray.700"
                                }} _web={{
                                    shadow: 9,
                                    borderWidth: 0
                                }} _light={{
                                    backgroundColor: "#FFF"
                                }}>
                                <ModalDatePicker
                                    button={<DatePickerIcon />}
                                    locale="en"
                                    onSelect={(date) => {
                                        // console.log("date selected", date.toDateString());
                                        const newDate = new Date();
                                        // console.log("new date", newDate.toDateString());
                                        if (date < newDate) {
                                            setSelectedDate(newDate.toDateString())
                                        } else {
                                            setSelectedDate(date.toDateString())
                                        }
                                    }}
                                    isHideOnSelect={true}
                                    initialDate={new Date()}
                                    color="#6a994e"
                                />
                                <View ml="2" display="flex" flexDirection="row" >
                                    <View mr="10">
                                        <Text fontSize="18" ml="1" mt="-1">Date</Text>
                                        <Text fontSize="16" ml="1" mt="1" fontWeight="700">{selectedDate || (new Date()).toDateString()}</Text>
                                    </View>
                                </View>
                            </Box>
                        </Center>
                        {/* End of date picker */}
                        {/* Time picker */}
                        <Actionsheet.Item mt={0}>
                            <Text fontSize="18" ml="2">Select Time</Text>
                            <RadioButton data={timingsData} setData={setTiming} selectedData={timing} />
                        </Actionsheet.Item>
                        {/* End of time picker */}
                        <Actionsheet.Item mt={-4}>
                            <Text fontSize="18" ml="2" mt="-3">Requests</Text>
                            <RadioButton data={requestsData} setData={setRequest} selectedData={request} />
                        </Actionsheet.Item>
                        <Actionsheet.Item mt={-4}>
                            <Text fontSize="18" ml="2" mt="-3">Vaccine Proof</Text>
                            <ScrollView display="flex" flexDirection="row" w="80" px="4" py="2" horizontal={true} showsHorizontalScrollIndicator={false} >
                                {[...Array(selectedNumOfPeople)].map((_, index) => (
                                    <Pressable mr="5" key={index} onPress={() => {
                                        pickImage(index)
                                    }}>
                                        {vaccineCardImg && vaccineCardImg[index]
                                            ? <SvgUri source={require('../assets/vaccineCardSubmitted.svg')} height="50" width="26" />
                                            : <SvgUri source={require('../assets/vaccineCardNotSubmitted.svg')} height="50" width="26" />}

                                    </Pressable>
                                )
                                )}
                            </ScrollView>
                        </Actionsheet.Item>
                        <Actionsheet.Item mt={-4}>
                            <Text fontSize="18" ml="2" mt="-3">Extra Notes</Text>
                            <TextArea value={notes} ml="2" mt="4" w="325" h="100" onChangeText={(text) => { setNotes(text); setDataLoaded(false); }} placeholder="Any special requests?" />
                        </Actionsheet.Item>
                        <Center>
                            {dataLoaded && timing
                                ? <Button w="330" size="lg" variant="outline" bgColor='danger.300' borderColor="#924344"
                                    onPress={() => {
                                        console.log("VACCINE", vaccineCardImg)
                                        createReservation();
                                        setTimeout(() => {
                                            navigation.navigate("Reservations", { ...reservationDetails, vaccineCardImg });
                                        }, 500);
                                    }}
                                >
                                    <Text color="#FFFFFF" fontSize="16px" py="1" >CONFIRM BOOKING</Text>
                                </Button>
                                : <Button w="330" size="lg" variant="outline" bgColor='danger.300' borderColor="#924344" isDisabled>
                                    <Text color="#FFFFFF" fontSize="16px" py="1">CONFIRM BOOKING</Text>
                                </Button>
                            }
                        </Center>
                    </ScrollView>
                </Actionsheet.Content>
            </Actionsheet>
            {/* End of BOOK NOW Actionsheet */}

        </View>
    )
}

const styles = StyleSheet.create({
    checkbox1: {
        width: 100,
        height: 60,
        borderWidth: 1,
        borderColor: '#9ca3af',
        borderRadius: 0,
    },
    checkbox2: {
        width: 140,
        height: 70,
        borderWidth: 1,
        borderColor: '#9ca3af',
        borderRadius: 0,
    },
    checkbox3: {
        width: 60,
        height: 100,
        borderWidth: 1,
        borderColor: '#9ca3af',
        borderRadius: 0,
    },
    dropdown1BtnStyle: {
        width: "70%",
        height: 50,
        backgroundColor: "#FFF",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#FFF",
    },
    dropdown1BtnTxtStyle: { color: "#444", textAlign: "left", fontWeight: "700" },
    dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
    dropdown1RowStyle: {
        backgroundColor: "#EFEFEF",
        borderBottomColor: "#C5C5C5",
    },
    dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
});

export default SelecingSeats