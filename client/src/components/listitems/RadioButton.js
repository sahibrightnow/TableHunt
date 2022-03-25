import React from 'react';
import { View, Text, ScrollView } from 'native-base';
import { Pressable } from 'react-native';
import { useState } from "react";
import { StyleSheet } from 'react-native';

const RadioButton = ({ data, onSelect }) => {

    const [userOption, setUserOption] = useState(null);
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
            <Text mt="4"> User option: {userOption}</Text>
        </View>
    );
}

export default RadioButton;

const styles = StyleSheet.create({
    unselected: {
        color: '#f43f5e',

    },
    selected: {
        backgroundColor: '#f43f5e',
        color: 'white',
        overflow: 'hidden',
    },
});