import * as React from "react"
import { SVGProps } from "react"
import { TsSvgProps } from "../../@types/appTypes"
const SvgComponent = (props: TsSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={19}
        fill="none" {...props}>
        <path
            stroke={props.strokecolor || "#717171"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.271}
            d="M8.47 9.317a4.235 4.235 0 1 0 0-8.47 4.235 4.235 0 0 0 0 8.47ZM1.194 17.788c0-3.278 3.262-5.93 7.277-5.93.813 0 1.6.11 2.338.314"
        />
        <path
            stroke={props.strokecolor || "#717171"}
            fill={props.strokecolor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.398}
            d="M15.799 14.265c0 2.565-2.373 4.078-3.437 4.44a.802.802 0 0 1-.455 0c-.455-.154-1.15-.521-1.792-1.086-.866-.762-1.644-1.885-1.644-3.354 0-1.135.91-2.05 2.033-2.05.669 0 1.26.323 1.633.816a2.035 2.035 0 0 1 2.445-.647 2.047 2.047 0 0 1 1.217 1.88Z"
        />
    </svg>
)
export default SvgComponent
