import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
    <Svg
        width={props.width}
        height={props.height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5Zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2Zm0 16H7V3h14v14Z"
            fill={props.color}
            fillOpacity={0.5}
        />
        <Path
            d="M14 5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm-2.465 8.14c.215-.45 1.525-.89 2.465-.89s2.255.44 2.465.89c-.68.54-1.535.86-2.465.86-.93 0-1.785-.32-2.465-.86Zm5.645-.725c-.715-.87-2.45-1.165-3.18-1.165s-2.465.295-3.18 1.165A3.975 3.975 0 0 1 10 10c0-2.205 1.795-4 4-4s4 1.795 4 4c0 .91-.31 1.745-.82 2.415ZM14 7c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75S14.97 7 14 7Zm0 2.5A.749.749 0 1 1 14 8a.749.749 0 1 1 0 1.5Z"
            fill={props.color}
            fillOpacity={0.5}
        />
    </Svg>
)

export default SvgComponent