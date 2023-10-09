import { Popover, Transition } from '@headlessui/react'
import * as React from 'react'
import useResponsive from '../hooks/useResponsive';

type TriggerEnum = 'click' | 'hover'

interface Props {
    button?: JSX.Element;
    content?: JSX.Element;
    open?: boolean;
    panelStyles?: React.CSSProperties;
    panelClasses?: string;
    trigger?: TriggerEnum;
    /**
     * to determine if the tooltip should trigger strictly on hover over button
     * or strictly on clicking button
     *
     * tapping outside has no effect
     */
    triggerStrict?: boolean;
    onClose?: () => any
}

const ToolTip = (props: Props) => {
    let timeout: NodeJS.Timeout
    // const [buttonId, setButtonId] = React.useState<string>('')
    const timeoutDuration = 250

    const popoverContainerRef = React.useRef<HTMLDivElement | null>(null) // useRef<HTMLButtonElement>(null)
    const buttonRef = React.useRef<HTMLButtonElement | null>(null) // useRef<HTMLButtonElement>(null)
    const [openState, setOpenState] = React.useState(false)

    const { isMobile } = useResponsive()

    const mounted = React.useRef(false)

    const dummyCount = React.useRef<number>(0)


    React.useEffect(() => {
        document.addEventListener("mousedown", handleAnyClick)

        return () => {
            document.removeEventListener("mousedown", handleAnyClick)
        }
    })


    const handleAnyClick = (event: any) => {
        // Check if the clicked element is the button
        if (buttonRef.current && buttonRef.current.contains(event.target)) {
            // Handle button click
            if (props.trigger === "click" || !props.trigger) {
                setOpenState((prevState) => !prevState); // Toggle open state
                clearTimeout(timeout); // Stop the hover timer if it's running
                return; //exit function
            }
        }

        // Close tooltip if another tooltip trigger button is tapped
        const allTriggerButtons = document.querySelectorAll('.tooltip-headlessui-button');
        allTriggerButtons.forEach((button) => {
            if (button.contains(event.target)) {
                setOpenState(false); // Close tooltip
            }
        });

        // If triggerStrict == true, ignore clicks outside for devices > 768px
        if (props.triggerStrict && props.trigger !== undefined && !isMobile) {
            return;
        }

        // Determine if clicked element is not in the popover DOM tree
        if (!popoverContainerRef.current?.contains(event.target)) {
            dummyCount.current++;
            setTimeout(() => {
                // Close Tooltip if it's not in the DOM tree
                setOpenState(false);
                if (props.onClose) {
                    props.onClose();
                }
            }, 0);
        }
    };


    const toggleMenu = (open: boolean) => {
        // log the current open state in React (toggle open state)
        setOpenState((openState) => !openState)
        // toggle the menu by clicking on buttonRef
        buttonRef?.current?.click()
    }

    // Open the menu after a delay of timeoutDuration
    const onHover = (open: boolean, action: string) => {
        //if trigger is by click then ignore hover events
        if (props.trigger) {
            if (props.trigger == "click") return
        }

        if (
            (!open && !openState && action === "onMouseEnter") ||
            (open && openState && action === "onMouseLeave")
        ) {
            clearTimeout(timeout)
            timeout = setTimeout(() => toggleMenu(open), timeoutDuration)
        }
    }

    return (
        <Popover
            ref={popoverContainerRef}
            className="relative">
            {(
                { open: popoverOpen }: { open: boolean }
            ) => {
                /** use manually managed open state instead of <PopOver/> default open prop */
                let open = openState;
                if (props.open !== undefined) {
                    //use open props before checking the inbuilt open props
                    open = props.open
                }

                return <div
                    onMouseEnter={() => onHover(open, "onMouseEnter")}
                    onMouseLeave={() => onHover(open, "onMouseLeave")}
                    className="flex flex-col items-center justify-center"
                >
                    <button
                        ref={buttonRef}
                        onClick={() => {

                        }}
                        className='tooltip-headlessui-button'
                    >
                        {props.button}
                    </button>
                    <Transition
                        show={open}
                        as={React.Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel
                            style={{
                                ...props.panelStyles
                            }}
                            static
                            className={"z-10 min-w-[200px] absolute bg-white rounded-md drop-shadow-md top-[50px] p-[10px] " + props.panelClasses}>
                            {props.content}
                        </Popover.Panel>
                    </Transition>
                </div>
            }
            }
        </Popover >
    )
}

export default ToolTip