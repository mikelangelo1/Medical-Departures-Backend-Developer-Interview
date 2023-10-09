import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        {...props}
    >
        <path
            stroke="#292929"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.599}
            d="M11.432 10c0 .79-.638 1.429-1.429 1.429-.79 0-1.429-.639-1.429-1.429s.639-1.429 1.43-1.429c.79 0 1.428.639 1.428 1.43Z"
        />
        <path
            stroke="#292929"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.599}
            d="M10 13.3c1.409 0 2.722-.83 3.636-2.266.36-.563.36-1.509 0-2.072-.914-1.437-2.227-2.267-3.636-2.267-1.41 0-2.723.83-3.637 2.267-.36.563-.36 1.509 0 2.072C7.277 12.47 8.591 13.3 10 13.3Z"
        />
    </svg>
)
export default SvgComponent
