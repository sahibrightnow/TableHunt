import { HStack, useDisclose, Button, VStack, Box, View, Container, Text } from 'native-base'
import SvgUri from 'react-native-svg-uri'

const SelecingSeats = () => {
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
                <Container display="flex" borderWidth="1" alignItems="center" ml="-3" mr="3" >
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
                    <HStack display="flex" alignItems="center" borderWidth="1" w="188">
                        <Box w="35" h="35" borderColor="coolGray.200" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                        </Box>
                        <Box w="100" h="60" mx="2" borderColor="coolGray.200" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                        </Box>
                        <Box w="35" h="35" borderColor="coolGray.200" borderWidth="1" _dark={{
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

                    <VStack mt="5" display="flex" justifyContent="center" borderWidth="1" w="102">
                        <HStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.200" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <Box w="35" h="35" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                        <Box w="100" h="60" my="2" borderColor="coolGray.200" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                        </Box>
                        <HStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.200" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <Box w="35" h="35" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                    <VStack mt="5" display="flex" justifyContent="center" borderWidth="1" w="142">
                        <HStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.200" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <Box w="35" h="35" mr="2" borderColor="coolGray.200" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <Box w="35" h="35" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                        <Box w="140" h="70" my="2" borderColor="coolGray.200" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                        </Box>
                        <HStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.200" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <Box w="35" h="35" mr="2" borderColor="coolGray.200" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <Box w="35" h="35" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                    <HStack mt="5" display="flex" alignItems="center" borderWidth="1" w="156">
                        <VStack display="flex" >
                            <Box w="35" h="35" mr="2" mb="2" borderColor="coolGray.200" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <Box w="35" h="35" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                        <Box h="100" w="60" mx="2" borderColor="coolGray.200" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                        </Box>
                        <VStack display="flex" >
                            <Box w="35" h="35" mr="2" mb="2" borderColor="coolGray.200" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <Box w="35" h="35" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                    <VStack mt="5" display="flex" justifyContent="center" borderWidth="1" w="62">
                        <HStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                        <Box w="60" h="100" my="2" borderColor="coolGray.200" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                        </Box>
                        <HStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                    <VStack mt="5" display="flex" justifyContent="center" borderWidth="1" w="62">
                        <HStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                        <Box w="60" h="100" my="2" borderColor="coolGray.200" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                        </Box>
                        <HStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                    <HStack mt="5" mb="5" display="flex" justifyContent="center" borderWidth="1" w="100">
                        <VStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                                <Box w="35" h="35" mr="2" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                            <Box w="60" h="100" my="2" borderColor="coolGray.200" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <HStack display="flex" justifyContent="center">
                                <Box w="35" h="35" mr="2" borderColor="coolGray.200" borderWidth="1" _dark={{
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

                    <VStack mt="5" display="flex" justifyContent="center" borderWidth="1" w="102">
                        <HStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.200" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <Box w="35" h="35" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                        <Box w="100" h="60" my="2" borderColor="coolGray.200" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                        </Box>
                        <HStack display="flex" justifyContent="center">
                            <Box w="35" h="35" mr="2" borderColor="coolGray.200" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                            </Box>
                            <Box w="35" h="35" borderColor="coolGray.200" borderWidth="1" _dark={{
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

                <Container display="flex" borderWidth="1" alignItems="center" ml="1">
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
        </View>
    )
}

export default SelecingSeats