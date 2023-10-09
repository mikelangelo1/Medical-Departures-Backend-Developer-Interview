import * as React from "react"
import { SVGProps } from "react"
import { TsSvgProps } from "../../@types/appTypes"
const SvgComponent = (props: TsSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <path
            stroke={props.strokecolor || "#717171"}
            fill={props.strokecolor}
            strokeWidth={1.27}
            d="m10.686 1.738 5.179 3.624c.391.274.773.733 1.057 1.277.284.544.443 1.12.443 1.601v6.096a3.52 3.52 0 0 1-3.519 3.519H4.154a3.528 3.528 0 0 1-3.519-3.528V8.123c0-.445.143-.991.402-1.518.26-.525.607-.976.963-1.254l4.503-3.514c1.138-.882 3-.928 4.183-.099ZM9 16.203c.72 0 1.31-.59 1.31-1.31v-2.697c0-.72-.59-1.31-1.31-1.31-.72 0-1.31.59-1.31 1.31v2.697c0 .72.59 1.31 1.31 1.31Z"
        />
    </svg>
)
export default SvgComponent
