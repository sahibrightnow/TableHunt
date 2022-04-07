import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BookingsIcon = (props) => (
    <Svg
        width={20}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M20 3.5C20 1.57 15.52 0 10 0S0 1.57 0 3.5c0 1.81 3.95 3.31 9 3.48V11H7.35c-.82 0-1.55.5-1.86 1.26L4 16h2l1.2-3h5.6l1.2 3h2l-1.5-3.74c-.3-.76-1.04-1.26-1.85-1.26H11V6.98c5.05-.17 9-1.67 9-3.48ZM10 2c4.05 0 6.74.86 7.72 1.5C16.74 4.14 14.05 5 10 5s-6.74-.86-7.72-1.5C3.26 2.86 5.95 2 10 2Z"
            fill={props.color}
        />
    </Svg>
)

export default BookingsIcon