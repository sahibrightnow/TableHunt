import React from 'react';
import { View, Text, ScrollView, HStack } from 'native-base';
import { Pressable } from 'react-native';
import { useState } from "react";
import { StyleSheet } from 'react-native';

const RadioButton = ({ data, setData, selectedData, type, setPriceFilter }) => {

    const [userOption, setUserOption] = useState(selectedData);
    const [price, setPrice] = useState()

    return (
        <View my="3" mx="1">

            {type == "filterModal" ? <HStack space={4} ml={1}>
                {data.map((item, index) => {
                    return (
                        <Pressable onPress={() => { setPriceFilter(index + 1); setPrice(index + 1); }} key={index}>
                            <Text borderWidth="1" p="1" m="1" borderRadius="4" borderColor="danger.300"
                                style={
                                    index + 1 === price ? styles.selected : styles.unselected
                                }
                            >
                                {item.value}
                            </Text>
                        </Pressable>

                    );
                })}
            </HStack>
                :
                <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}>

                    {data.map((item, index) => {
                        return (
                            <Pressable onPress={() => { setUserOption(item.value); setData(item.value); }} key={index}>
                                <Text borderWidth="1" p="1" m="1" borderRadius="4" borderColor="danger.500"
                                    style={
                                        item.value === userOption ? styles.selected : styles.unselected
                                    }
                                >
                                    {item.value}
                                </Text>
                            </Pressable>

                        );
                    })}
                </ScrollView>
            }
        </View >
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