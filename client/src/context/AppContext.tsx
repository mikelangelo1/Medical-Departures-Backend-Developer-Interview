import * as React from 'react'
import { AppContextType, ConfirmModal, SuccessModal } from '../@types/appTypes';



export const AppContext = React.createContext<AppContextType>({

});


const AppContextProvider = (props: any) => {

    const [menuOpen, setMenuOpen] = React.useState<boolean>(false)

    const [confirmModal, setConfirmModal] = React.useState<ConfirmModal | undefined>(undefined)
    const [confirmCallBack, setConfirmCallBack] = React.useState<any | undefined>(undefined)
    const [successModal, setSuccessModal] = React.useState<SuccessModal | undefined>(undefined)

    const showSuccessModal = (data: { title: string; subTitle: string }) => {
        setSuccessModal({
            show: true,
            subTitle: data.subTitle,
            title: data.title
        })
    }

    const hideSuccessModal = () => {
        setSuccessModal(undefined)
    }

    const showConfirmModal = (options: { title: string; subTitle: string }, callback?: () => any) => {
        setConfirmModal({
            show: true,
            subTitle: options.subTitle,
            title: options.title
        })

        setConfirmCallBack(() => callback)
    }

    const hideConfirmModal = () => {
        setConfirmCallBack(undefined)
        setConfirmModal(undefined)
    }

    const handleConfirmModal = () => {
        if (confirmCallBack) {
            confirmCallBack()
        }
        hideConfirmModal()
    }

    return (
        <AppContext.Provider
            value={{
                hideConfirmModal,
                hideSuccessModal,
                showConfirmModal,
                showSuccessModal,
                handleConfirmModal,
                confirmModalState: confirmModal,
                successModalState: successModal
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;