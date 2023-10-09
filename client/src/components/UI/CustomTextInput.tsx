import * as React from 'react';
import { MedifyTextInputProps } from '../../@types/appTypes';
import { EyeClosedIcon, EyeOpenIcon } from '../../assets/tsSvgs';
import { addClassNames } from '../../utils/functions';


const CustomTextInput = (props: MedifyTextInputProps) => {
    const containerClasses = "border border-gray-300 rounded-[3px] block w-full p-1 min-h-[40px] flex items-center"
    const labelClasses = `block mb-1 text-sm font-medium text-gray-900 `

    const [showPass, setShowPass] = React.useState<boolean>(false)
    const [isPassword, setIsPassword] = React.useState<boolean>(false)

    const { label } = props

    React.useEffect(() => {
        if (props.type == 'password') {
            setIsPassword(true)
        }
        //for tracking password types
    }, [])

    const renderRightComponent = () => {

        return (
            <div className='flex gap-1'>
                {isPassword ? <div
                    className='cursor-pointer'
                    onClick={() => setShowPass(!showPass)}
                >
                    {showPass ? <EyeOpenIcon /> : <EyeClosedIcon />}
                </div> : undefined}
                {
                    props.rightcomponent && <div >
                        {props.rightcomponent}
                    </div>
                }
            </div>
        )
    }

    return (
        <div>
            {props.label ? <label className="block text-sm font-medium mb-1">
                {label}
            </label> : undefined}
            <div
                className={
                    addClassNames(
                        containerClasses,
                        props.disabled ? 'bg-gray-100' : ''
                    )
                }
            >

                <input
                    className={
                        addClassNames(
                            'text-gray-900 text-sm text-[13px] w-full',
                        )
                    }
                    {...props}
                    {...{
                        ...(isPassword && { type: showPass ? 'text' : 'password' })
                    }}
                />
                {renderRightComponent()}
            </div>
        </div>
    )
}

export default CustomTextInput