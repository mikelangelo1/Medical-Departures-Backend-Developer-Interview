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
            strokeWidth={0.625}
            d="m11.055 8.946-2.108 2.109a1.49 1.49 0 1 1 2.108-2.108Z"
        />
        <path
            stroke="#292929"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.625}
            d="M12.424 7.405c-.73-.55-1.563-.85-2.425-.85-1.471 0-2.842.866-3.796 2.366-.375.588-.375 1.575 0 2.163.33.517.712.962 1.13 1.32M8.51 13.138c.475.2.979.308 1.491.308 1.471 0 2.842-.866 3.796-2.366.375-.588.375-1.575 0-2.163a6.751 6.751 0 0 0-.442-.612"
        />
        <path
            stroke="#292929"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.625}
            d="M11.462 10.292a1.485 1.485 0 0 1-1.175 1.175M8.944 11.055l-3.112 3.112M14.168 5.834l-3.112 3.112M11.055 8.946l-2.108 2.109a1.49 1.49 0 1 1 2.108-2.108Z"
        />
        <path
            stroke="#292929"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.625}
            d="M12.424 7.405c-.73-.55-1.563-.85-2.425-.85-1.471 0-2.842.866-3.796 2.366-.375.588-.375 1.575 0 2.163.33.517.712.962 1.13 1.32M8.51 13.138c.475.2.979.308 1.491.308 1.471 0 2.842-.866 3.796-2.366.375-.588.375-1.575 0-2.163a6.751 6.751 0 0 0-.442-.612"
        />
        <path
            stroke="#292929"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.625}
            d="M11.462 10.292a1.485 1.485 0 0 1-1.175 1.175M8.944 11.055l-3.112 3.112M14.168 5.834l-3.112 3.112"
        />
    </svg>
)
export default SvgComponent
