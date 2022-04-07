import React from "react";
import BookingsScreenContainer from "../containers/BookingsScreenContainer";

const BookingsScreen = ({ navigation, route }) => (
  <BookingsScreenContainer navigation={navigation} data={route.params} />
);

export default BookingsScreen;
