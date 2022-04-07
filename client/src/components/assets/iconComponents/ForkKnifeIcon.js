import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ForkKnife = (props) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M7.875 3v3.75M7.875 10.875V21M10.5 3l.75 4.5a3.375 3.375 0 0 1-6.75 0L5.25 3M19.125 15h-5.25S15 4.5 19.125 3v18"
            stroke="#9CA3AF"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default ForkKnife