import { StyleSheet } from 'react-native'
import { HStack, useDisclose, Button, VStack, Box, View, Container, Text, Checkbox, Actionsheet, ScrollView, TextArea } from 'native-base'
import SvgUri from 'react-native-svg-uri'
import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ModalDatePicker } from "react-native-material-date-picker";
import RadioButton from '../listitems/RadioButton'

const SelecingSeats = () => {
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
    const [selectedDate, setSelectedDate] = useState("");
    const [notes, setNotes] = useState("");
    const handleChange = text => setNotes(text);

    return (
        <View display="flex" mt="-8">
            {/* Top camera buttons */}
            <HStack display="flex" justifyContent="space-between" alignItems="center" mb="2">
                <Button>
                    <SvgUri source={require('../assets/cameraIcon.svg')} />
                </Button>
                <Text>KITCHEN AREA</Text>
                <Button>
                    <SvgUri source={require('../assets/cameraIcon.svg')} />
                </Button>
            </HStack>
            {/* End of top camera buttons */}

            <HStack display="flex" alignItems="center">
                <Container display="flex" alignItems="center" ml="-3" mr="3" >
                    {/* <Text borderWidth="1" ml="-7" mr="-2" style={{
                        transform: [{ rotate: '270deg' }],
                    }}>WINDOW</Text> */}
                    <Text>W</Text>
                    <Text>I</Text>
                    <Text>N</Text>
                    <Text>D</Text>
                    <Text>O</Text>
                    <Text>W</Text>
                </Container>
                {/* Table numbers start from top to bottom and left to right */}
                {/* First column */}
                <Container display="flex">
                    {/* Table 1 */}
                    <HStack display="flex" alignItems="center" w="188">
                        <Box w="35" h="35" borderColor="coolGray.400" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                        </Box>
                        {/* Table */}
                        {/* <Box w="100" h="60" mx="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                        </Box> */}
                        <Checkbox value="table1" colorScheme="success" accessibilityLabel="This is table 1" mx="2" style={styles.checkbox1} checkboxTickColor="success.700" />
                        <Box w="35" h="35" borderColor="coolGray.400" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                        </Box>
                    </HStack>
                    {/* End of table 1 */}

                    {/* Table 2 */}

                    <VStack mt="5" display="flex" justifyContent="center" w="102">
                        <HStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <Box w="35" h="35" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                        </HStack>
                        {/* Table */}
                        {/* <Box w="100" h="60" my="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                        </Box> */}
                        <Checkbox value="table2" colorScheme="success" accessibilityLabel="This is table 2" my="2" style={styles.checkbox1} />
                        <HStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <Box w="35" h="35" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                        </HStack>
                    </VStack>
                    {/* End of table 2 */}

                    {/* Table 3 */}
                    <VStack mt="5" display="flex" justifyContent="center" w="142">
                        <HStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <Box w="35" h="35" mr="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <Box w="35" h="35" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                        </HStack>
                        {/* Table */}
                        {/* <Box w="140" h="70" my="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                        </Box> */}
                        <Checkbox value="table3" colorScheme="success" accessibilityLabel="This is table 3" my="2" style={styles.checkbox2} />
                        <HStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <Box w="35" h="35" mr="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <Box w="35" h="35" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                        </HStack>
                    </VStack>

                    {/* End of table 3 */}
                    {/* Table 4 */}
                    <HStack mt="5" display="flex" alignItems="center" w="156">
                        <VStack display="flex" >
                            <Box w="35" h="35" mr="2" mb="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <Box w="35" h="35" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                        </VStack>
                        {/* Table */}
                        {/* <Box h="100" w="60" mx="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                        </Box> */}
                        <Checkbox value="table4" colorScheme="success" accessibilityLabel="This is table 4" mx="2" style={styles.checkbox3} />
                        <VStack display="flex" >
                            <Box w="35" h="35" mr="2" mb="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <Box w="35" h="35" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                        </VStack>
                    </HStack>
                    {/* End of table 4 */}
                </Container>
                {/* End of first column */}

                {/* Second column */}
                <Container display="flex" ml="-8" mt="-3">
                    {/* Table 5 */}
                    <VStack mt="5" display="flex" justifyContent="center" w="62">
                        <HStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                        </HStack>
                        {/* Table */}
                        {/* <Box w="60" h="100" my="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                        </Box> */}
                        <Checkbox value="table5" colorScheme="success" accessibilityLabel="This is table 5" my="2" style={styles.checkbox3} />
                        <HStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>

                        </HStack>
                    </VStack>
                    {/* End of table 5 */}

                    {/* Table 6 */}
                    <VStack mt="5" display="flex" justifyContent="center" w="62">
                        <HStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                        </HStack>
                        {/* Table */}
                        {/* <Box w="60" h="100" my="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                        </Box> */}
                        <Checkbox value="table6" colorScheme="success" accessibilityLabel="This is table 6" my="2" style={styles.checkbox3} />
                        <HStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>

                        </HStack>
                    </VStack>
                    {/* End of table 6 */}
                </Container>
                {/* End of second column */}

                {/* Third column */}
                <Container display="flex" ml="2" mt="-174">
                    {/* Table 7 */}
                    <HStack mt="5" mb="5" display="flex" justifyContent="center" w="103">
                        <VStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                        </VStack>
                        <VStack display="flex" justifyContent="center">
                            <HStack display="flex" justifyContent="center">
                                <Box w="35" h="35" mr="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                                    borderColor: "coolGray.600",
                                    backgroundColor: "gray.700"
                                }} _web={{
                                    shadow: 2,
                                    borderWidth: 0
                                }} _light={{
                                    backgroundColor: "gray.50"
                                }}>
                                </Box>

                            </HStack>
                            {/* Table */}
                            {/* <Box w="60" h="100" my="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box> */}
                            <Checkbox value="table7" colorScheme="success" accessibilityLabel="This is table 7" my="2" style={styles.checkbox3} />
                            <HStack display="flex" justifyContent="center">
                                <Box w="35" h="35" mr="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                                    borderColor: "coolGray.600",
                                    backgroundColor: "gray.700"
                                }} _web={{
                                    shadow: 2,
                                    borderWidth: 0
                                }} _light={{
                                    backgroundColor: "gray.50"
                                }}>
                                </Box>

                            </HStack>
                        </VStack>
                    </HStack>
                    {/* End of table 7 */}

                    {/* Table 8 */}
                    <VStack mt="5" display="flex" justifyContent="center" w="102">
                        <HStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <Box w="35" h="35" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                        </HStack>
                        {/* Table */}
                        {/* <Box w="100" h="60" my="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                        </Box> */}
                        <Checkbox value="table8" colorScheme="success" accessibilityLabel="This is table 8" my="2" style={styles.checkbox1} />
                        <HStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <Box w="35" h="35" borderColor="coolGray.400" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                        </HStack>
                    </VStack>
                    {/* End of table 8 */}
                </Container>
                {/* End of third column */}

                <Container display="flex" alignItems="center" ml="1">
                    {/* <Text borderWidth="1" ml="-7" mr="-2" style={{
                        transform: [{ rotate: '270deg' }],
                    }}>WINDOW</Text> */}
                    <Text>W</Text>
                    <Text>I</Text>
                    <Text>N</Text>
                    <Text>D</Text>
                    <Text>O</Text>
                    <Text>W</Text>
                </Container>
            </HStack>

            {/* Bottom Camera buttons */}
            <HStack display="flex" justifyContent="space-between" mt="2">
                <Button>
                    <SvgUri source={require('../assets/cameraIcon.svg')} />
                </Button>
                <Button>
                    <SvgUri source={require('../assets/cameraIcon.svg')} />
                </Button>
            </HStack>
            {/* End of bottom camera buttons */}
            {/* Actionsheet */}
            <Button mt="5" onPress={onOpen}>OPTIONS</Button>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                {/* Booking for number of people */}
                <Actionsheet.Content>
                    <ScrollView>
                        <Actionsheet.Item>
                            <Box display="flex" flexDirection="row" w="80" rounded="lg" px="5" py="2" overflow="hidden" borderColor="coolGray.200" borderWidth="1" shadow="9"
                                _dark={{
                                    borderColor: "coolGray.600",
                                    backgroundColor: "gray.700"
                                }} _web={{
                                    shadow: 9,
                                    borderWidth: 0
                                }} _light={{
                                    backgroundColor: "#FFF"
                                }}>
                                <SvgUri source={require('../assets/PersonIcon.svg')} height="50" width="30" />
                                <View ml="2">
                                    <Text fontSize="18" ml="4">Booking for</Text>

                                    <SelectDropdown
                                        data={numberOfPeople}
                                        onSelect={(selectedItem, index) => {
                                            console.log(selectedItem, index)
                                        }}
                                        defaultButtonText={"Number of people"}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem
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
                                                    size={18}
                                                />
                                            );
                                        }}
                                        dropdownIconPosition={"right"}
                                        dropdownStyle={styles.dropdown1DropdownStyle}
                                        rowStyle={styles.dropdown1RowStyle}
                                        rowTextStyle={styles.dropdown1RowTxtStyle}

                                    />
                                </View>
                            </Box>

                        </Actionsheet.Item>
                        {/* End of booking for number of people */}
                        {/* Date picker */}
                        <Actionsheet.Item>
                            <Box display="flex" flexDirection="row" w="80" rounded="lg" px="5" py="5" overflow="hidden" borderColor="coolGray.200" borderWidth="1" shadow="9"
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
                                    button={<SvgUri source={require('../assets/DatePickerIcon.svg')} height="40" width="28" />}
                                    locale="en"
                                    onSelect={(date) => {
                                        console.log(date);
                                        setSelectedDate(date.toDateString())
                                    }}
                                    isHideOnSelect={true}
                                    initialDate={new Date()}
                                    color="#6a994e"
                                />
                                <View ml="2" display="flex" flexDirection="row" >
                                    <View mr="9">
                                        <Text fontSize="18" ml="4" mt="-3">Date</Text>
                                        <Text fontSize="18" ml="4" mt="3" fontWeight="700">{selectedDate || (new Date()).toDateString()}</Text>
                                    </View>
                                    <View mt="8">
                                        <ModalDatePicker
                                            button={
                                                <FontAwesome
                                                    // name={isOpened ? "chevron-up" : "chevron-down"}
                                                    name={"chevron-down"}
                                                    color={"#444"}
                                                    size={18}
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
                                    </View>
                                </View>
                            </Box>
                        </Actionsheet.Item>
                        {/* End of date picker */}
                        {/* Time picker */}
                        <Actionsheet.Item>
                            <Text fontSize="18" ml="2">Select Time</Text>

                            {/* <Button my="3" mx="2" bgColor="white" variant="outline"
                                        _text={{
                                            color: "danger.500"
                                        }}
                                        style={{
                                            borderColor: "#f43f5e",
                                            borderWidth: "1",
                                            borderRadius: "4",
                                        }}
                                    >
                                        {time}
                                    </Button> */}
                            {/* {timings.map((time, index) => {
                                return (
                                    
                                )
                            }
                            )} */}

                            <RadioButton data={timingsData} />

                        </Actionsheet.Item>
                        {/* End of time picker */}
                        <Actionsheet.Item>
                            <Text fontSize="18" ml="2" mt="-3">Requests</Text>
                            <RadioButton data={requestsData} />
                        </Actionsheet.Item>
                        <Actionsheet.Item>
                            <Text fontSize="18" ml="2" mt="-3">Extra Notes</Text>
                            <TextArea value={notes} ml="2" mt="4" w="320" h="100" onChangeText={handleChange} placeholder="Any special requests?" />
                        </Actionsheet.Item>
                    </ScrollView>
                </Actionsheet.Content>
            </Actionsheet>
            {/* End of Actionsheet */}

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