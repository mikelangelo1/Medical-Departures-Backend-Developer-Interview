import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <path
            stroke="#717171"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.188}
            d="M7.046 5.985c.245-2.85 1.71-4.013 4.916-4.013h.103c3.539 0 4.956 1.417 4.956 4.956v5.161c0 3.539-1.417 4.956-4.956 4.956h-.103c-3.182 0-4.647-1.148-4.908-3.95M11.875 9.5h-9.01M4.631 6.848 1.98 9.5l2.652 2.652"
        />
    </svg>
)
export default SvgComponent
