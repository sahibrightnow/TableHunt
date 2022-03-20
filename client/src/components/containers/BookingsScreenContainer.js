import { Center, VStack } from "native-base";
import React from "react";
import SelectingSeats from "../forms/SelectingSeats";

const BookingsScreenContainer = ({ data }) => {
  return (
    <VStack space={5} py={10} px={5}>
      <SelectingSeats />
    </VStack>
  );
};

export default BookingsScreenContainer;
