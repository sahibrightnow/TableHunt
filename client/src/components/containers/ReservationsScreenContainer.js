import BookingCard from '../listitems/BookingCard'
import { Box, Heading, Divider, Image, Text, Center, HStack, Stack, VStack, View, Spinner } from "native-base"

const ReservationsScreenContainer = ({ navigation, data }) => {
    return (
        <VStack bgColor="white" height="100%">
            <Heading size="lg" mt="20" ml="6">
                Booking List
            </Heading>
            <Text fontSize={16} fontWeight="bold" color="gray.500" ml="6" mt="5">Upcoming</Text>
            {data ? <BookingCard data={data} /> : <Spinner accessibilityLabel="Loading cards" />}

        </VStack>
    );
};

export default ReservationsScreenContainer;
