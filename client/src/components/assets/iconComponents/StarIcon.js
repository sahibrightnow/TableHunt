import * as React from "react"
import Svg, { Path } from "react-native-svg"

const StarIcon = (props) => (
    <Svg
        width={18}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="m9 13.328 4.635 2.797-1.23-5.273L16.5 7.305l-5.393-.457L9 1.875 6.893 6.848 1.5 7.304l4.095 3.547-1.23 5.273L9 13.328Z"
            fill={props.color}
        />
    </Svg>
)

export default StarIcon