import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PersonIcon = (props) => (
    <Svg
        width={17}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.435 0c-2.33 0-4.217 1.79-4.217 4s1.887 4 4.217 4c2.33 0 4.218-1.79 4.218-4s-1.887-4-4.218-4Zm2.109 4c0-1.1-.95-2-2.109-2-1.16 0-2.109.9-2.109 2s.95 2 2.109 2c1.16 0 2.109-.9 2.109-2Zm4.217 9c-.21-.71-3.48-2-6.326-2-2.847 0-6.116 1.29-6.327 2.01V14h12.653v-1ZM0 13c0-2.66 5.62-4 8.435-4 2.816 0 8.436 1.34 8.436 4v3H0v-3Z"
            fill="#9CA3AF"
        />
    </Svg>
)

export default PersonIcon