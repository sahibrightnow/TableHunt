import React from "react";
import RestaurantContainer from "../containers/RestaurantContainer";

const RestaurantScreen = ({ navigation, route }) => (
    <RestaurantContainer navigation={navigation} data={route.params} />
);

export default RestaurantScreen;
