import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CurrencyCircleDollar = (props) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M12 15.75v1.5M12 6.75v1.5M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
            stroke="#9CA3AF"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M9.75 15.75h3.375a1.875 1.875 0 1 0 0-3.75h-2.25a1.875 1.875 0 1 1 0-3.75h3.375"
            stroke="#9CA3AF"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default CurrencyCircleDollar
