import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={4}
        height={10}
        fill="none"
        {...props}
    >
        <path
            fill="#717171"
            stroke="#717171"
            strokeWidth={0.75}
            d="M1 8.5c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1ZM1 1.5c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1ZM1 5c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1Z"
        />
    </svg>
)
export default SvgComponent
