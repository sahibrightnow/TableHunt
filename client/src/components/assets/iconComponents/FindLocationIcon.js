import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const FindLocation = (props) => (
    <Svg
        width={42}
        height={42}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={21} cy={21} r={21} fill="#6A994E" />
        <Path
            d="M21 17c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm8.94 3A8.994 8.994 0 0 0 22 12.06V10h-2v2.06A8.994 8.994 0 0 0 12.06 20H10v2h2.06A8.994 8.994 0 0 0 20 29.94V32h2v-2.06A8.994 8.994 0 0 0 29.94 22H32v-2h-2.06ZM21 28c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7Z"
            fill="#fff"
        />
    </Svg>
)

export default FindLocation