import * as React from "react"
import { SVGProps } from "react"
import { TsSvgProps } from "../../@types/appTypes"
const SvgComponent = (props: TsSvgProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={18}
        fill="none"
        style={{ transform: `scale(${props.scale || 1})` }}
        {...props}
    >
        <path
            stroke={props.strokecolor || "#717171"}
            strokeLinecap="round"
            strokeWidth={2.25}
            d="m3.278 2.998 12.946 11.718M3.28 14.716 16.226 2.998"
        />
    </svg>
)
export default SvgComponent
