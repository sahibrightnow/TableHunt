import { Center, VStack } from "native-base";
import React from "react";
import SelectingSeats from "../forms/SelectingSeats";

const BookingsScreenContainer = ({ navigation }) => {
  return (
    <VStack space={5} py={10} px={5}>
      <SelectingSeats navigation={navigation} />
    </VStack>
  );
};

export default BookingsScreenContainer;
