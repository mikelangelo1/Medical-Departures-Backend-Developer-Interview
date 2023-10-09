import { Dialog, Transition } from '@headlessui/react';
import * as React from 'react';

import AppButton from '../UI/button';
import CustomModal from '../UI/CustomModal';

import * as TsSvgs from '../../assets/tsSvgs'
import { ReserUserPasswordModalProps } from '../../@types/appTypes';
import ResetUserPasswordForm from '../forms/ResetUserPassword';


const ReserUserPasswordModal = (props: ReserUserPasswordModalProps) => {

    return (
        <CustomModal
            show={props?.show}
            onClose={() => { }}
        >
            <div className='ml-[auto] w-[23px] cursor-pointer'>
                <TsSvgs.CloseIcon />
            </div>
            <div className='font-[600] text-[16px] my-[17px]'>
                Reset Password
            </div>
            <div
                className='w-full h-[1px] bg-[#4A9DFF29] mb-[30px]'
            />
            <ResetUserPasswordForm
                onSubmit={props.onSubmit}
                onClose={() => props.onClose?.()}
                isLoading={false}
            />
        </CustomModal>

    )
}

export default ReserUserPasswordModal