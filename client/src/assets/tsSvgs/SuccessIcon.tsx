import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={76}
        height={51}
        fill="none"
        {...props}
    >
        <path
            fill="#F0FDF4"
            fillRule="evenodd"
            d="m6 27.015 17.93 17.93L70.402 5.552"
            clipRule="evenodd"
        />
        <path
            stroke="#166534"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={10.854}
            d="m6 27.015 17.93 17.93L70.402 5.552"
        />
    </svg>
)
export default SvgComponent
