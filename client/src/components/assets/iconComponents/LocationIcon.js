import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LocationIcon = (props) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            stroke="#9CA3AF"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M19.5 9.5c0 6.75-7.5 12-7.5 12s-7.5-5.25-7.5-12a7.5 7.5 0 0 1 15 0v0Z"
            stroke="#9CA3AF"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default LocationIcon