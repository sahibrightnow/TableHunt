import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DatePickerIcon = (props) => (
    <Svg
        width={22}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M20.687 1.8H16.26V.2c0-.11-.095-.2-.211-.2h-1.476c-.116 0-.211.09-.211.2v1.6H7.612V.2c0-.11-.094-.2-.21-.2H5.925c-.116 0-.21.09-.21.2v1.6h-4.43c-.466 0-.843.358-.843.8v16.6c0 .442.377.8.844.8h19.401c.467 0 .844-.358.844-.8V2.6c0-.442-.377-.8-.844-.8Zm-1.054 16.4H2.34V8.7h17.293v9.5ZM2.34 7V3.6h3.374v1.2c0 .11.095.2.211.2h1.477c.116 0 .21-.09.21-.2V3.6h6.749v1.2c0 .11.095.2.21.2h1.477c.116 0 .21-.09.21-.2V3.6h3.375V7H2.34Z"
            fill="#9CA3AF"
        />
    </Svg>
)

export default DatePickerIcon