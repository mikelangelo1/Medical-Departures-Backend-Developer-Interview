import * as React from 'react'
import { addClassNames } from '../../utils/functions';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttontype?: string;
    extraclass?: string;
    extralabelclass?: string
}

const AppButton = (props: Props) => {
    const { extraclass, buttontype } = props;

    let primaryClass = 'flex items-center justify-center text-white bg-medify-blue focus:ring-4 focus:ring-blue-300 font-medium rounded-[3px] text-sm px-2 py-[3px] w-full min-h-[40px] min-w-[fit-content] box-border'

    let buttonClass = primaryClass

    let titleClasses = 'font-[500] text-[16px] text-white'

    const renderContent = () => {
        if (props.children) return props.children;

        if (props.title) {
            return (
                <div className={`${titleClasses} ${props.extralabelclass}`}>
                    {props.title}
                </div>
            )
        }
    }

    return (
        <button
            type="button"
            className={
                addClassNames(
                    buttonClass,
                    extraclass,
                    props.disabled ? 'opacity-70' : ''
                )
            }
            {...props}
        >
            {renderContent()}
        </button>
    )
}

export default AppButton