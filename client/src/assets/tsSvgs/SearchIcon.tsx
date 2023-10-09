import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
        width={19}
        height={19}
        {...props}>
        <path
            stroke="#717171"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.667 14a6.333 6.333 0 1 0 0-12.667 6.333 6.333 0 0 0 0 12.667ZM14.667 14.666l-1.333-1.333"
        />
    </svg>
)
export default SvgComponent
