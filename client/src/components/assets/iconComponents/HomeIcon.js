import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HomeIcon = (props) => (
    <Svg
        width={22}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M11 2 5 6.58V5H3v3.11L0 10.4l1.21 1.59L3 10.62V20h16v-9.38l1.79 1.36L22 10.4 11 2Zm6 16h-5v-4h-2v4H5V9.1l6-4.58 6 4.58V18ZM9 0c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H3c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1h2Z"
            fill={props.color}
        />
    </Svg>
)

export default HomeIcon