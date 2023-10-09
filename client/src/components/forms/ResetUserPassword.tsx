import { ErrorMessage, Field, Form, FormikProvider, useFormik } from 'formik'
import * as React from 'react'

import { ResetUserPasswordFormProps, ResetUserPasswordFormValues } from '../../@types/appTypes'
import AppButton from '../UI/button'

import * as Yup from 'yup'
import CustomTextInput from '../UI/CustomTextInput'

const ResetUserPasswordForm = (props: ResetUserPasswordFormProps) => {

    const initialValues: ResetUserPasswordFormValues = {
        newPassword: '',
        confirmPassword: ''
    }

    const formValidationSchema = Yup.object().shape({
        newPassword: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                'Password must contain at least one lowercase letter, one uppercase letter, and one number'
            ),
        confirmPassword: Yup.string()
            .required("Please re-type your password")
            // use oneOf to match one of the values inside the array.
            // use "ref" to get the value of password.
            .oneOf([Yup.ref("newPassword")], "Passwords does not match")
    });

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            props.onSubmit(values)
        }
    })


    const inputClasses = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    const labelClasses = `block mb-1 text-sm font-medium text-gray-900 `
    const errorMessageClasses = 'mt-2 text-xs text-red-600 font-medium'
    const inputWrap = 'flex justify-between lg:justify-start gap-4'

    const unitComponentStyle = "text-[13px] bg-[#F1F1F1] rounded-[3px] px-2 py-1 h-full min-w-[37px] flex items-center justify-center"


    return (
        <FormikProvider value={formik}>
            <Form>
                <div className="space-y-[20px]">
                    <div>

                        <Field
                            as={CustomTextInput}
                            label="New Password"
                            type='password'
                            name="newPassword"
                        />
                        <ErrorMessage className={errorMessageClasses} component={'p'} name="newPassword" />
                    </div>
                    <div>

                        <Field
                            as={CustomTextInput}
                            label="Confirm Password"
                            type='password'
                            name="confirmPassword"
                        />
                        <ErrorMessage className={errorMessageClasses} component={'p'} name="confirmPassword" />
                    </div>
                </div>

                <div className='w-full flex justify-end gap-[9px] mt-[50px]'>
                    <AppButton
                        title='Reset Password'
                        type="submit"
                        extraclass='!w-[70px]'
                    />
                    <AppButton
                        extraclass='!bg-[#F2F6FF] !w-[70px]'
                        extralabelclass='!text-[#1A2DD8]'
                        title='Cancel'
                        onClick={() => {
                            props.onClose?.()
                        }}
                    />
                </div>
            </Form>
        </FormikProvider>
    )
}

export default ResetUserPasswordForm