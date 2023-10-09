import * as React from "react"
import { SVGProps } from "react"
import { TsSvgProps } from "../../@types/appTypes"
const SvgComponent = (props: TsSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={22}
        fill="none" {...props}>
        <path
            stroke={props.strokecolor || "#fff"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.366}
            d="M5.75 1.894v2.732M13.036 1.894v2.732M1.652 8.35h15.482M17.59 7.812v7.741c0 2.733-1.367 4.554-4.554 4.554H5.75c-3.188 0-4.554-1.821-4.554-4.554v-7.74c0-2.733 1.366-4.554 4.554-4.554h7.286c3.187 0 4.553 1.821 4.553 4.553Z"
        />
        <path
            stroke={props.strokecolor || "#fff"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.821}
            d="M9.389 12.548h.008M6.018 12.548h.008M6.018 15.28h.008"
        />
    </svg>
)
export default SvgComponent
