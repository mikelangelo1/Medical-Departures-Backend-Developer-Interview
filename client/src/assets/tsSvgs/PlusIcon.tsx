import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <path
      stroke="#1A2DD8"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M1 5h8M5 9V1"
    />
  </svg>
)
export default SvgComponent
