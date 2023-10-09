import * as React from 'react'

import { Formik, Form, Field, FormikProps, ErrorMessage, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import AppButton from '../../components/UI/button';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Spinner from '../../components/UI/Spinner';
import Logo from '../../components/Logo';
import { formatServerErrorMessage } from '../../utils/functions';
import { OtpFormValues, PasswordChangeFormValues } from '../../@types/appTypes';
import MedifyTextInput from '../../components/UI/CustomTextInput';
import { useForgotPasswordMutation, useResetPasswordMutation } from '../../store/rtk-query/userApi';
import { ArrowBackIcon } from '../../assets/tsSvgs';

const SignIn = () => {
    const navigate = useNavigate()

    const [searchParams, setSearchParams] = useSearchParams({});

    const [countdown, setCountdown] = React.useState<number>(120);

    const [otp, setOtp] = React.useState<string>('')

    /** apis */
    const [forgotPassword, forgotPasswordState] = useForgotPasswordMutation()
    const [resetPassword, resetPasswordState] = useResetPasswordMutation()


    const step = React.useMemo(() => {
        let val = searchParams.get('step') || '1'
        return val
    }, [searchParams])

    /** countdown */
    var countdownTimer: NodeJS.Timer | undefined;

    React.useEffect(() => {
        if (countdown < 0) {
            clearInterval(countdownTimer)
        }
        return clearInterval(countdownTimer)
    }, [countdown])

    const startCountdown = () => {
        //clear any existing countdown
        clearInterval(countdownTimer);
        setCountdown(60)

        countdownTimer = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown === 1) {
                    clearInterval(countdownTimer); // Clear the interval once countdown reaches 0
                    return 0; // Set a different value (-1) to indicate timer expiration
                }
                return prevCountdown - 1;
            });
        }, 1000);
    }

    const timer = React.useMemo(() => {
        const minutes = Math.floor(countdown / 60);
        const seconds = countdown % 60;

        let timerText = `(${minutes}:${seconds < 10 ? '0' : ''}${seconds})`

        return timerText
    }, [countdown])

    const form1Val = {
        email: '',
    }

    const form2Val: OtpFormValues = {
        key1: '',
        key2: '',
        key3: '',
        key4: '',
        key5: '',
        key6: '',
    }

    const form3Val: PasswordChangeFormValues = {
        password: '',
        confirmPassword: ''
    }

    const form1ValidationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
    });

    const form2ValidationShape: any = {};
    for (let key in form2Val) {
        form2ValidationShape[key] = Yup.string().required('Required')
    }
    const form2ValidationSchema = Yup.object().shape(form2ValidationShape) as Yup.ObjectSchema<OtpFormValues>



    const form1Formik = useFormik({
        onSubmit: values => {
            // same shape as initial values
            console.log(values);
            sendForgotPassword(values)
        },
        validationSchema: form1ValidationSchema,
        initialValues: form1Val
    })

    const inputClasses = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    const labelClasses = `block mb-1 text-sm font-medium text-gray-900 `
    const errorMessageClasses = 'mt-2 text-xs text-red-600 font-medium'
    const inputWrap = 'flex justify-between lg:justify-start gap-4'

    const sendForgotPassword = async (values: typeof form1Val) => {
        let data = {
            email: values?.email
        };
        console.log('data ', data
        )
        const res: any = await forgotPassword(data)

        console.log('res ', res)

        /**
         * TODO
         *
         * remove the temporary error?.data check
         */
        if (res?.error && res?.error?.data != 'OTP sent successfully.') {
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


        setSearchParams({
            step: "2"
        })

        startCountdown()
        toast.success("An email has been sent to your mail box");
    }

    const onSubmitOtp = (values: typeof form2Val) => {
        const formikKeys = Object.keys(form2Val);
        const formikKeyVals: string[] = []
        formikKeys.forEach((formikKey) => {
            const val = values[formikKey as keyof OtpFormValues]
            formikKeyVals.push(val)
        })

        const otpVal = formikKeyVals.join('')
        setOtp(otpVal)

        setSearchParams({ step: '3' })
    }

    const onResetPassword = async (values: PasswordChangeFormValues) => {
        let data = {
            email: form1Formik?.values.email,
            otp: otp,
            newPassword: values.password
        };

        console.log('data ', data)

        const res: any = await resetPassword(data)

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

        setSearchParams({
            step: "1"
        })

        toast.success("Password reset successfully");
    }

    const renderSubHeading = () => {
        if (step == '1') return

        if (step == '2') {
            return (
                <div className='text-[#555555] text-[16px]'>
                    Please enter the code sent to {form1Formik.values.email} for verification
                </div>
            )
        }

        if (step == '3') {
            return (
                <>
                    <div
                        onClick={() => navigate(-1)}
                        className='cursor-pointer gap-[5px] bg-[#FCFCFC] h-[40px] px-2 w-[fit-content] flex items-center mb-[32px]'>
                        <ArrowBackIcon />
                        <span>Go Back</span>
                    </div>
                    <div className='text-[#555555] text-[16px]'>
                        Enter your new password
                    </div>
                </>
            )
        }
    }


    const renderForm = () => {


        return (
            <FormikProvider
                value={form1Formik}
            >
                <Form>
                    <div className="space-y-4">
                        <div>
                            <Field
                                as={MedifyTextInput}
                                label="Email Address"
                                name="email"
                                type="email"
                            />
                            <ErrorMessage className={errorMessageClasses} component={'p'} name="email" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-6 w-full">

                        <AppButton
                            type='submit'
                            buttontype={'primary'}
                        >
                            Submit
                        </AppButton>
                    </div>
                    {forgotPasswordState.isLoading && <Spinner />}
                </Form>
            </FormikProvider>
        )
    }

    return (
        <main className="bg-white">
            <div className="relative flex">
                {/* Content */}
                <div
                    className="hidden md:flex md:w-1/2 bg-medify-blue flex-col justify-center"
                    aria-hidden="true"
                >
                    <div className="w-[80%]">
                        <Logo
                            theme="white"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 bg-white">
                    <div className="min-h-screen h-full flex flex-col justify-center ">
                        <div className=" mx-auto px-8 py-8 bg-white min-w-[85%] md:min-w-[70%]">
                            <div className="text-3xl text-gray-800 font-bold mb-6">
                                {step == '2' ? "OTP" : "Reset Password"}
                            </div>
                            {renderSubHeading()}
                            {/* Form */}
                            {renderForm()}
                        </div>
                    </div>
                </div>

            </div>
        </main>

    )
}

export default SignIn