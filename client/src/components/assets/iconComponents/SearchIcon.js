import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SearchIcon = (props) => (
    <Svg
        width={20}
        height={14}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M5 3.5H0v-2h5v2Zm0 3H0v2h5v-2Zm13.59 7-3.83-3.83c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 12.09l-1.41 1.41ZM15 5.5c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3Zm-15 8h10v-2H0v2Z"
            fill="#D1D5DB"
        />
    </Svg>
)

export default SearchIcon