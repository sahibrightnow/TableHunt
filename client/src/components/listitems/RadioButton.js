import React from 'react';
import { View, Text, ScrollView, HStack } from 'native-base';
import { Pressable } from 'react-native';
import { useState, useEffect } from "react";
import { StyleSheet } from 'react-native';

const RadioButton = ({ data, setData, selectedData }) => {

    const [userOption, setUserOption] = useState(selectedData);
    useEffect(() => {
        setData = setUserOption
        // setData(userOption)
        // console.log("selectedData", selectedData)
    }, [setUserOption, userOption])

    return (
        <View my="3" mx="1">

            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}>

                {data.map((item, index) => {
                    return (
                        /*Change the 'onPress' handler here */

                        <Pressable onPress={() => setUserOption(item.value)} key={index}>
                            <Text borderWidth="1" p="1" m="1" borderRadius="4" borderColor="danger.500"
                                style={ //Line 5
                                    item.value === userOption ? styles.selected : styles.unselected
                                }
                            >
                                {item.value}
                            </Text>
                        </Pressable>

                    );
                })}
            </ScrollView>
            <Text mt="4"> User option: {selectedData}</Text>
        </View>
    );
}

export default RadioButton;

const styles = StyleSheet.create({
    unselected: {
        color: '#924344',
        borderColor: '#924344',
    },
    selected: {
        backgroundColor: '#924344',
        borderColor: '#924344',
        color: 'white',
        overflow: 'hidden',
    },
});