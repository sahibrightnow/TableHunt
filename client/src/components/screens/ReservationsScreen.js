import React from "react";
import ReservationsScreenContainer from "../containers/ReservationsScreenContainer";

const ReservationsScreen = ({ navigation, route }) => (
    <ReservationsScreenContainer navigation={navigation} data={route.params} />
);

export default ReservationsScreen;


