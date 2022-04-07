import * as React from "react"
import Svg, { Path } from "react-native-svg"

const FilterListIcon = (props) => (
    <Svg
        width={props.width}
        height={props.height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M7 12h4v-2H7v2ZM0 0v2h18V0H0Zm3 7h12V5H3v2Z" fill="#fff" />
    </Svg>
)

export default FilterListIcon
