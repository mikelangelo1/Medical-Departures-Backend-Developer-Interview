import { Dialog, Transition } from '@headlessui/react';
import * as React from 'react';
import { ModalProps } from '../../@types/appTypes';
import { addClassNames } from '../../utils/functions';


const CustomModal = (props: ModalProps) => {

    return (
        <Transition appear show={props.show} as={React.Fragment}>
            <Dialog
                open={props.show}
                onClose={() => {
                    props.onClose(false)
                }}
                as="div" className="relative z-50"
            >
                <Transition.Child
                    as={React.Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={React.Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className={
                                addClassNames(
                                    "w-full w-[fit-content] max-w-[500px] transform overflow-y-hidden overflow-x-scroll rounded-[3px] bg-white p-6 text-left align-middle shadow-xl transition-all",
                                    props.dialogPanelExtraClass
                                )
                            }>
                                {props.children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default CustomModal