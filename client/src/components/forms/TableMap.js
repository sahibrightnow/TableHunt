import { HStack, VStack, Box, View, Container, Pressable } from 'native-base'
import { StyleSheet } from 'react-native'
import Chair from '../listitems/Chair'
import Window from '../listitems/Window'
import Door from '../listitems/Door'

const TableMap = ({ tableOption, setTableOption }) => {

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

    const tableData = ["Table 1", "Table 2", "Table 3", "Table 4", "Table 5", "Table 6", "Table 7", "Table 8"]

    return (
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
    )
}

export default TableMap