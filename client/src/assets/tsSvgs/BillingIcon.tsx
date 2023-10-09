import * as React from "react"
import { SVGProps } from "react"
import { TsSvgProps } from "../../@types/appTypes"
const SvgComponent = (props: TsSvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <path
            stroke={props.strokecolor || "#717171"}
            fill={props.strokecolor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.275}
            d="M3.436 14.074c.612-.663 1.556-.612 2.091.115l.765 1.02c.6.803 1.594.803 2.194 0l.752-1.008c.536-.714 1.48-.765 2.091-.114 1.34 1.428 2.423.956 2.423-1.046V4.586c0-3.022-.714-3.774-3.545-3.774H4.545C1.715.812 1 1.564 1 4.586v8.455c.013 1.977 1.11 2.448 2.436 1.033Z"
        />
    </svg>
)
export default SvgComponent
