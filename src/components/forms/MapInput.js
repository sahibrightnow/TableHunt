import { MapView } from 'expo'

const MapInput = () => {
    return (
        <MapView
            style={{ flex: 1 }}

            showsUserLocation={true}

        />
    )
}

export default MapInput;