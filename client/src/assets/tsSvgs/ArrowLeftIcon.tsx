import * as React from "react"
import { SVGProps } from "react"
import { TsSvgProps } from "../../@types/appTypes"
const SvgComponent = (props: TsSvgProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={7}
        height={10}
        fill="none"
        {...props}
    >
        <path
            stroke={props.strokecolor || "#292D32"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d="M5.523.953 1.477 5l4.046 4.046"
        />
    </svg>
)
export default SvgComponent
