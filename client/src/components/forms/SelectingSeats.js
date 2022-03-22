import { StyleSheet } from 'react-native'
import { HStack, useDisclose, Button, VStack, Box, View, Container, Text, Checkbox, Actionsheet } from 'native-base'
import SvgUri from 'react-native-svg-uri'

const SelecingSeats = () => {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();
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
                <Actionsheet.Content>
                    <Box w="100%" h={60} px={4} justifyContent="center">
                        <Text fontSize="16" color="gray.500" _dark={{
                            color: "gray.300"
                        }}>
                            Albums
                        </Text>
                    </Box>
                    <Actionsheet.Item>Delete</Actionsheet.Item>
                    <Actionsheet.Item>Share</Actionsheet.Item>
                    <Actionsheet.Item>Play</Actionsheet.Item>
                    <Actionsheet.Item>Favourite</Actionsheet.Item>
                    <Actionsheet.Item>Cancel</Actionsheet.Item>
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
});

export default SelecingSeats