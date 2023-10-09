import { Disclosure } from '@headlessui/react';
import { useFormik } from 'formik';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AddUserFormValues, AppContextType } from '../@types/appTypes';
import { ArrowBackIcon, ArrowRightIcon } from '../assets/tsSvgs';
import AddUserForm from '../components/forms/AddUserForm';
import ToolTip from '../components/Tooltip';
import AppButton from '../components/UI/button';
import { AppContext } from '../context/AppContext';


import * as Yup from 'yup'
import { useGetMyProfileQuery, useUpdateMyProfileMutation } from '../store/rtk-query/userApi';
import { formatServerErrorMessage } from '../utils/functions';
import { toast } from 'react-toastify';
import { updatedDiff } from 'deep-object-diff';


const EditProfile = () => {
    const navigate = useNavigate()
    const { showConfirmModal, showSuccessModal } = React.useContext<AppContextType>(AppContext)

    const { data: profileData, isLoading: profileLoading } = useGetMyProfileQuery({})

    const [updateProfile, updateProfileState] = useUpdateMyProfileMutation()

    const initialValues: AddUserFormValues = React.useMemo(() => {
        let vals: AddUserFormValues = {
            firstName: '',
            lastName: '',
            username: '',
            sex: '',
            role: '',
            phoneNumber: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

        if (profileData) {
            vals.firstName = profileData?.firstName;
            vals.lastName = profileData?.lastName;
            vals.username = profileData?.username;
            vals.sex = profileData?.Sex;
            vals.phoneNumber = profileData?.phoneNumber;
            vals.email = profileData?.email;
            vals.role = profileData?.role?.id;
        }

        return vals
    }, [profileData])

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        username: Yup.string().required('Username is required'),
        sex: Yup.string().required('Sex is required'),
        role: Yup.string().required('Role is required'),
        phoneNumber: Yup.string().required('Phone number is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
    });

    const formik = useFormik({
        onSubmit: (values) => {
            onConfirmSave(values)
        },
        initialValues: initialValues,
        enableReinitialize: true,
        validationSchema: validationSchema
    })


    const onConfirmSave = (values: AddUserFormValues) => {
        showConfirmModal?.({
            title: 'Save Changes',
            subTitle: 'Are you sure you want to save the changes made to your profile?'
        },
            function () {
                onSubmit(values)
            }
        )
    }


    const onSubmit = async (values: AddUserFormValues) => {
        const updatedObj = updatedDiff(initialValues, values);

        const data: any = {
            ...updatedObj
        }

        const res: any = await updateProfile({
            body: data,
            userId: profileData?.id
        });

        if (res?.error) {
            let message = formatServerErrorMessage(res?.error?.data?.message)

            if (message.length > 0) {
                toast.error(message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            return;
        }

        showSuccessModal?.({
            title: 'Profile Updated',
            subTitle: 'Your profile has been updated successfully!'
        })

    }


    return (
        <div className='px-4 md:px-[70px] pb-20 md:pt-[50px]'>
            <div
                onClick={() => navigate(-1)}
                className='cursor-pointer gap-[5px] bg-[#FCFCFC] h-[40px] px-2 w-[fit-content] flex items-center mb-[32px]'>
                <ArrowBackIcon />
                <span>Go Back</span>
            </div>
            <div className='flex justify-between mb-[30px] items-center'>
                <div className='font-bold text-[16px]'>
                    <span>Profile</span>
                </div>
                <div className='w-[fit-content] flex'>

                    <AppButton
                        title={"Save Changes"}
                        onClick={() => formik.handleSubmit()}
                    />
                </div>
            </div>
            <div
                className='w-full h-[1px] bg-[#4A9DFF29] mb-[30px]'
            />
            <AddUserForm
                formik={formik}
                initialValues={initialValues}
                isLoading={updateProfileState.isLoading}
                formIsUpdate={true}
            />
        </div>
    )
}

export default EditProfile