import React from 'react';
import { View, Text, ScrollView, HStack } from 'native-base';
import { Pressable } from 'react-native';
import { useState } from "react";
import { StyleSheet } from 'react-native';

const RadioButton = ({ data, onSelect, type, priceFilter, setPriceFilter }) => {

    const [userOption, setUserOption] = useState(null);
    const [price, setPrice] = useState()
    return (

        <View my="3" mx="1">
            {type == "filterModal" ? <HStack space={4} ml={1}>
                {data.map((item, index) => {
                    return (
                        /*Change the 'onPress' handler here */

                        <Pressable onPress={() => { setPriceFilter(index + 1); setPrice(index + 1); }} key={index}>
                            <Text borderWidth="1" p="1" m="1" borderRadius="4" borderColor="danger.300"
                                style={ //Line 5
                                    index + 1 === price ? styles.selectedPrice : styles.unselectedPrice
                                }
                            >
                                {item.value}
                            </Text>
                        </Pressable>

                    );
                })}
            </HStack> :

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
                </ScrollView>}
            {/* <Text mt="4"> User option: {userOption}</Text> */}
        </View >
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
    unselectedPrice: {
        color: '#924344',
    },
    selectedPrice: {
        backgroundColor: '#924344',
        color: 'white',
        overflow: 'hidden',
    },
});