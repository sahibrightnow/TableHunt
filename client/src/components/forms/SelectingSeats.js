import { StyleSheet } from 'react-native'
import { HStack, useDisclose, Button, VStack, Box, View, Container, Text, Checkbox, Pressable, Actionsheet, ScrollView, TextArea, Center } from 'native-base'
import SvgUri from 'react-native-svg-uri'
import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ModalDatePicker } from "react-native-material-date-picker";
import RadioButton from '../listitems/RadioButton'
import CameraButton from '../listitems/CameraButton'
import TableMap from '../forms/TableMap'
import * as ImagePicker from 'expo-image-picker';
import Chair from '../listitems/Chair'
import Window from '../listitems/Window'
import Door from '../listitems/Door'

const SelecingSeats = ({ navigation }) => {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    // const [numberOfPeople, setNumberOfPeople] = useState(1)
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
    const tableData = ["Table 1", "Table 2", "Table 3", "Table 4", "Table 5", "Table 6", "Table 7", "Table 8"]
    const [tableOption, setTableOption] = useState();
    // let request;
    // let timing;
    const [request, setRequest] = useState('No request')
    const [timing, setTiming] = useState('Select a time')
    const [selectedDate, setSelectedDate] = useState("");
    const [notes, setNotes] = useState("none");
    const handleChange = text => setNotes(text);

    const [camera1Pic, setCamera1Pic] = useState()
    const [camera2Pic, setCamera2Pic] = useState()
    const [camera3Pic, setCamera3Pic] = useState()
    const [camera4Pic, setCamera4Pic] = useState()

    const [selectedNumOfPeople, setSelectedNumOfPeople] = useState(1)
    const [vaccineCardImg, setVaccineCardImg] = useState()
    const [selectedVaccineCardImg, setSelectedVaccineCardImg] = useState(false)

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
            setVaccineCardImg(result.uri);
        }
    };

    return (
        <View display="flex" mt="-8">
            {/* Top camera buttons */}
            <HStack display="flex" justifyContent="space-between" alignItems="center" mb="2" overflow="hidden">
                <CameraButton name="Camera 1" cameraPic={camera1Pic} setCameraPic={setCamera1Pic} />
                <Text>KITCHEN AREA</Text>
                <CameraButton name="Camera 2" cameraPic={camera2Pic} setCameraPic={setCamera2Pic} />
            </HStack>
            {/* End of top camera buttons */}

            {/* Table map */}
            {/* <TableMap /> */}
            <HStack display="flex" alignItems="center">
                <View ml="-3" mr="3">
                    <Window />
                </View>
                {/* Table numbers start from top to bottom and left to right */}
                {/* First column */}
                <Container display="flex">
                    {/* Table 1 */}
                    <HStack display="flex" alignItems="center" w="188" >
                        <Chair />
                        {/* Table */}
                        <Pressable onPress={() => setTableOption(tableData[0])}>
                            <Box w="100" h="60" mx="2" borderColor="coolGray.400" borderWidth="1"
                                style={
                                    tableOption === tableData[0] ? { backgroundColor: '#6a994e' } : { backgroundColor: '#eee' }
                                }
                            >
                            </Box>
                        </Pressable>
                        {/* <Checkbox value="table1" colorScheme="success" accessibilityLabel="This is table 1" mx="2" style={styles.checkbox1} checkboxTickColor="success.700" /> */}
                        <Chair />
                    </HStack>
                    {/* End of table 1 */}

                    {/* Table 2 */}

                    <VStack mt="5" display="flex" justifyContent="center" w="102" >
                        <HStack display="flex" justifyContent="center">
                            <View mr="2" >
                                <Chair />
                            </View>
                            <Chair />
                        </HStack>
                        {/* Table */}
                        <Pressable onPress={() => setTableOption(tableData[1])}>
                            <Box w="100" h="60" my="2" borderColor="coolGray.400" borderWidth="1"
                                style={
                                    tableOption === tableData[1] ? { backgroundColor: '#6a994e' } : { backgroundColor: '#eee' }
                                }
                            >
                            </Box>
                        </Pressable>
                        {/* <Checkbox value="table2" colorScheme="success" accessibilityLabel="This is table 2" my="2" style={styles.checkbox1} /> */}
                        <HStack display="flex" justifyContent="center">
                            <View mr="2" >
                                <Chair />
                            </View>

                            <Chair />
                        </HStack>
                    </VStack>
                    {/* End of table 2 */}

                    {/* Table 3 */}
                    <VStack mt="5" display="flex" justifyContent="center" w="142" >
                        <HStack display="flex" justifyContent="center">
                            <View mr="2" >
                                <Chair />
                            </View>
                            <View mr="2" >
                                <Chair />
                            </View>
                            <Chair />
                        </HStack>
                        {/* Table */}
                        <Pressable onPress={() => setTableOption(tableData[2])}>
                            <Box w="140" h="70" my="2" borderColor="coolGray.400" borderWidth="1"
                                style={
                                    tableOption === tableData[2] ? { backgroundColor: '#6a994e' } : { backgroundColor: '#eee' }
                                }
                            >
                            </Box>
                        </Pressable>
                        {/* <Checkbox value="table3" colorScheme="success" accessibilityLabel="This is table 3" my="2" style={styles.checkbox2} /> */}
                        <HStack display="flex" justifyContent="center">
                            <View mr="2" >
                                <Chair />
                            </View>
                            <View mr="2" >
                                <Chair />
                            </View>
                            <Chair />
                        </HStack>
                    </VStack>

                    {/* End of table 3 */}
                    {/* Table 4 */}
                    <HStack mt="5" display="flex" alignItems="center" w="148">
                        <VStack display="flex" mr="2" >
                            <View mb="2" >
                                <Chair />
                            </View>

                            <Chair />
                        </VStack>
                        {/* Table */}
                        <Pressable onPress={() => setTableOption(tableData[3])}>
                            <Box h="100" w="60" mx="2" borderColor="coolGray.400" borderWidth="1"
                                style={
                                    tableOption === tableData[3] ? { backgroundColor: '#6a994e' } : { backgroundColor: '#eee' }
                                }
                            >
                            </Box>
                        </Pressable>
                        {/* <Checkbox value="table4" colorScheme="success" accessibilityLabel="This is table 4" style={styles.checkbox3} /> */}
                        <VStack display="flex" ml="2" >
                            <View mb="2" >
                                <Chair />
                            </View>
                            <Chair />
                        </VStack>
                    </HStack>
                    {/* End of table 4 */}
                </Container>
                {/* End of first column */}

                {/* Second column */}
                <Container display="flex" ml="-8" mt="-3">
                    {/* Table 5 */}
                    <VStack mt="5" display="flex" justifyContent="center" w="62" >
                        <HStack display="flex" justifyContent="center" >
                            <Chair />
                        </HStack>
                        {/* Table */}
                        <Pressable onPress={() => setTableOption(tableData[4])}>
                            <Box w="60" h="100" my="2" borderColor="coolGray.400" borderWidth="1"
                                style={
                                    tableOption === tableData[4] ? { backgroundColor: '#6a994e' } : { backgroundColor: '#eee' }
                                }
                            >
                            </Box>
                        </Pressable>
                        {/* <Checkbox value="table5" colorScheme="success" accessibilityLabel="This is table 5" my="2" style={styles.checkbox3} /> */}
                        <HStack display="flex" justifyContent="center">
                            <Chair />

                        </HStack>
                    </VStack>
                    {/* End of table 5 */}

                    {/* Table 6 */}
                    <VStack mt="5" display="flex" justifyContent="center" w="62">
                        <HStack display="flex" justifyContent="center">
                            <Chair />
                        </HStack>
                        {/* Table */}
                        <Pressable onPress={() => setTableOption(tableData[5])}>
                            <Box w="60" h="100" my="2" borderColor="coolGray.400" borderWidth="1"
                                style={
                                    tableOption === tableData[5] ? { backgroundColor: '#6a994e' } : { backgroundColor: '#eee' }
                                }
                            >
                            </Box>
                        </Pressable>
                        {/* <Checkbox value="table6" colorScheme="success" accessibilityLabel="This is table 6" my="2" style={styles.checkbox3} /> */}
                        <HStack display="flex" justifyContent="center">
                            <Chair />

                        </HStack>
                    </VStack>
                    {/* End of table 6 */}
                </Container>
                {/* End of second column */}

                {/* Third column */}
                <Container display="flex" ml="2" mt="-50">
                    {/* Table 7 */}
                    <HStack mt="5" mb="5" display="flex" justifyContent="center" w="103" >
                        <VStack display="flex" justifyContent="center">
                            <View mr="2" >
                                <Chair />
                            </View>
                        </VStack>
                        <VStack display="flex" justifyContent="center" >
                            <HStack display="flex" justifyContent="center">
                                <Chair />

                            </HStack>
                            {/* Table */}
                            <Pressable onPress={() => setTableOption(tableData[6])}>
                                <Box w="60" h="100" my="2" borderColor="coolGray.400" borderWidth="1"
                                    style={
                                        tableOption === tableData[6] ? { backgroundColor: '#6a994e' } : { backgroundColor: '#eee' }
                                    }
                                >
                                </Box>
                            </Pressable>
                            {/* <Checkbox value="table7" colorScheme="success" accessibilityLabel="This is table 7" my="2" style={styles.checkbox3} /> */}
                            <HStack display="flex" justifyContent="center">
                                <Chair />

                            </HStack>
                        </VStack>
                    </HStack>
                    {/* End of table 7 */}

                    {/* Table 8 */}
                    <VStack display="flex" justifyContent="center" w="102" >
                        <HStack display="flex" justifyContent="center">
                            <View mr="2" >
                                <Chair />
                            </View>
                            <Chair />
                        </HStack>
                        {/* Table */}
                        <Pressable onPress={() => setTableOption(tableData[7])}>
                            <Box w="100" h="60" my="2" borderColor="coolGray.400" borderWidth="1"
                                style={
                                    tableOption === tableData[7] ? { backgroundColor: '#6a994e' } : { backgroundColor: '#eee' }
                                }
                            >
                            </Box>
                        </Pressable>
                        {/* <Checkbox value="table8" colorScheme="success" accessibilityLabel="This is table 8" my="2" style={styles.checkbox1} /> */}
                        <HStack display="flex" justifyContent="center">
                            <View mr="2" >
                                <Chair />
                            </View>
                            <Chair />
                        </HStack>
                    </VStack>
                    {/* End of table 8 */}
                    <Door />
                </Container>
                {/* End of third column */}
                <Window />
            </HStack>
            {/* End of table map */}

            {/* Bottom Camera buttons */}
            <HStack display="flex" justifyContent="space-between" mt="2">
                <CameraButton name="Camera 3" cameraPic={camera3Pic} setCameraPic={setCamera3Pic} />
                <CameraButton name="Camera 4" cameraPic={camera4Pic} setCameraPic={setCamera4Pic} />
            </HStack>
            {/* End of bottom camera buttons */}


            {/* Book NOW Actionsheet */}
            <Button mt="5" bgColor="danger.300" onPress={onOpen}>BOOK NOW</Button>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                {/* Booking for number of people */}
                <Actionsheet.Content>
                    <ScrollView>
                        {/* <Actionsheet.Item> */}
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
                                <SvgUri source={require('../assets/PersonIcon.svg')} height="50" width="26" />
                                <View ml="2" mb={0}>
                                    <Text fontSize="18" ml="2" mt="-1" mb="-1">Booking for</Text>
                                    <View ml="-2" mb={-3}>
                                        <SelectDropdown
                                            data={numberOfPeople}
                                            onSelect={(selectedItem, index) => {
                                                console.log("selected numberOfPeople", selectedItem)
                                                setSelectedNumOfPeople(selectedItem)
                                            }}
                                            defaultButtonText={"Number of people"}
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
                                                        style={{ marginRight: 25 }}
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
                        {/* </Actionsheet.Item> */}
                        {/* End of booking for number of people */}
                        {/* Date picker */}
                        {/* <Actionsheet.Item> */}
                        <Center mt="3">
                            {/* <Pressable onPress={(date) =>
                                setSelectedDate(date.toDateString())}> */}
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
                                    button={<SvgUri source={require('../assets/DatePickerIcon.svg')} height="50" width="25" />}
                                    locale="en"
                                    onSelect={(date) => {
                                        console.log("date selected", date.toDateString());
                                        const newDate = new Date();
                                        console.log("new date", newDate.toDateString());
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
                                    {/* <View mt="8">
                                        <ModalDatePicker
                                            button={
                                                <FontAwesome
                                                    // name={isOpened ? "chevron-up" : "chevron-down"}
                                                    name={"chevron-down"}
                                                    color={"#444"}
                                                    size={12}
                                                />
                                            }
                                            locale="en"
                                            onSelect={(date) => {
                                                console.log(date);
                                                setSelectedDate(date.toDateString())
                                            }}
                                            isHideOnSelect={true}
                                            initialDate={new Date()}
                                            color="#6a994e"
                                        />
                                    </View> */}
                                </View>
                            </Box>
                            {/* </Pressable> */}
                        </Center>
                        {/* </Actionsheet.Item> */}
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
                                        pickImage()
                                        setSelectedVaccineCardImg(true)
                                    }}>
                                        {!selectedVaccineCardImg ? <SvgUri source={require('../assets/vaccineCardNotSubmitted.svg')} height="50" width="26" /> : <SvgUri source={require('../assets/vaccineCardSubmitted.svg')} height="50" width="26" />}

                                    </Pressable>
                                )
                                )}
                            </ScrollView>
                        </Actionsheet.Item>
                        <Actionsheet.Item mt={-4}>
                            <Text fontSize="18" ml="2" mt="-3">Extra Notes</Text>
                            <TextArea value={notes} ml="2" mt="4" w="325" h="100" onChangeText={handleChange} placeholder="Any special requests?" />
                        </Actionsheet.Item>
                        {/* <Actionsheet.Item> */}
                        <Center>
                            <Button w="330" size="lg" variant="outline" borderColor="#924344" onPress={() => navigation.navigate("Reservations", { selectedNumOfPeople, notes, selectedDate, timing, request })}>
                                <Text color="#924344" fontSize="17px" py="1">CONFIRM BOOKING</Text>
                            </Button>
                        </Center>
                        {/* </Actionsheet.Item> */}
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