import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={6}
        height={11}
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            d="m4.991 3.866-1.719-1.9a.18.18 0 0 0-.267 0L1.318 3.845a.406.406 0 0 1-.572.031.404.404 0 0 1-.032-.571L2.835.943c.161-.18.442-.18.604-.001l2.155 2.383a.404.404 0 0 1-.03.57.406.406 0 0 1-.573-.029ZM4.991 7.134l-1.719 1.9a.18.18 0 0 1-.267 0L1.318 7.155a.406.406 0 0 0-.572-.031.404.404 0 0 0-.032.571l2.121 2.362c.161.18.442.18.604.001l2.155-2.383a.404.404 0 0 0-.03-.57.406.406 0 0 0-.573.029Z"
        />
    </svg>
)
export default SvgComponent
