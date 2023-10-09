import { ErrorMessage, Field, Form, FormikProvider, useFormik } from 'formik'
import * as React from 'react'

import { AddUserFormProps, AddUserFormValues } from '../../@types/appTypes'
import AppButton from '../UI/button'

import * as Yup from 'yup'
import CustomTextInput from '../UI/CustomTextInput'
import CustomSelectInput from '../UI/CustomSelectInput'
import Spinner from '../UI/Spinner'

const AddUserForm = (props: AddUserFormProps) => {

    const formik = props.formik
    const formIsUpdate = props.formIsUpdate


    const inputClasses = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    const labelClasses = `block mb-1 text-sm font-medium text-gray-900 `
    const errorMessageClasses = 'mt-2 text-xs text-red-600 font-medium'
    const inputWrap = 'flex justify-between lg:justify-start gap-4'

    const unitComponentStyle = "text-[13px] bg-[#F1F1F1] rounded-[3px] px-2 py-1 h-full min-w-[37px] flex items-center justify-center"


    return (
        <FormikProvider value={formik}>
            <Form>

                <div className="grid grid-cols-2 gap-[30px] sm:grid-cols-3">
                    <div>

                        <Field
                            as={CustomTextInput}
                            label="Firstname"
                            name="firstName"
                        />
                        <ErrorMessage className={errorMessageClasses} component={'p'} name="firstName" />
                    </div>
                    <div>

                        <Field
                            as={CustomTextInput}
                            label="Lastname"
                            name="lastName"
                        />
                        <ErrorMessage className={errorMessageClasses} component={'p'} name="lastName" />
                    </div>
                    <div>

                        <Field
                            as={CustomTextInput}
                            label="Username"
                            name="username"
                        />
                        <ErrorMessage className={errorMessageClasses} component={'p'} name="username" />
                    </div>

                    <div>

                        <Field
                            as={CustomSelectInput}
                            label="Sex"
                            name="sex"
                        >
                            <option value='' hidden disabled>Select a sex</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>

                        </Field>
                        <ErrorMessage className={errorMessageClasses} component={'p'} name="sex" />
                    </div>
                    <div>

                        <Field
                            as={CustomTextInput}
                            label="Phone Number"
                            name="phoneNumber"
                        />
                        <ErrorMessage className={errorMessageClasses} component={'p'} name="phoneNumber" />
                    </div>
                    <div>

                        <Field
                            as={CustomTextInput}
                            label="Email"
                            name="email"
                        />
                        <ErrorMessage className={errorMessageClasses} component={'p'} name="email" />
                    </div>
                    {
                        formIsUpdate ? undefined : <>
                            <div>

                                <Field
                                    as={CustomTextInput}
                                    label="Password"
                                    name="password"
                                    type='password'
                                />
                                <ErrorMessage className={errorMessageClasses} component={'p'} name="password" />
                            </div>
                            <div>

                                <Field
                                    as={CustomTextInput}
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    type='password'
                                />
                                <ErrorMessage className={errorMessageClasses} component={'p'} name="confirmPassword" />
                            </div>
                        </>
                    }
                </div>
                {props.isLoading && <Spinner />}
            </Form>
        </FormikProvider>
    )
}

export default AddUserForm