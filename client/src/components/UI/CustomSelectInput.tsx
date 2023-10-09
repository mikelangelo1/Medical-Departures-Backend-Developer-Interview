import * as React from 'react';
import { MedifySelectInputProps } from '../../@types/appTypes';


const CustomSelectInput = (props: MedifySelectInputProps) => {
    const inputClasses = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[3px] block w-full p-2.5"
    const labelClasses = `block mb-1 text-sm font-medium text-gray-900 `

    const { label } = props

    return (
        <div>
            {props.label ? <label className="block text-sm font-medium mb-1">
                {label}
            </label> : undefined}
            <select className={inputClasses}
                {...props}
            />
        </div>
    )
}

export default CustomSelectInput