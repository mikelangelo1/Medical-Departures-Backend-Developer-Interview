import * as React from "react";

import { Formik, Form, Field, FormikProps, ErrorMessage } from "formik";
import * as Yup from "yup";
import AppButton from "../../components/UI/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import Spinner from "../../components/UI/Spinner";
import { formatServerErrorMessage } from "../../utils/functions";

import { useDispatch } from 'react-redux'
import { loginSuccess } from "../../store/reducers/userSlice";
import Logo from "../../components/Logo";
import { useLoginMutation } from "../../store/rtk-query/userApi";

interface FormValues {
  [key: string]: string;
}

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch()

  const [login, loginState] = useLoginMutation()

  const onLogin = async (values: FormValues) => {
    const data = {
      email: values.email,
      password: values.password,
    };

    const res: any = await login(data)

    if (res?.error) {
      let message = formatServerErrorMessage(res?.error?.data?.message)

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
      return;
    }

    // const origin = location.state?.from?.pathname || "/";

    // navigate(origin);
  };

  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const formValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required("Required"),
    password: Yup.string().required("Required"),
  });

  const inputClasses =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";
  const labelClasses = `block mb-1 text-sm font-medium text-gray-900 `;
  const errorMessageClasses = "mt-2 text-xs text-red-600 font-medium";
  const inputWrap = "flex justify-between lg:justify-start gap-4";

  const renderForm = () => {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={formValidationSchema}
        onSubmit={(values) => {
          // same shape as initial values
          onLogin(values);
        }}
      >
        <Form>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <Field name="email" className={inputClasses} />
              <ErrorMessage
                className={errorMessageClasses}
                component={"p"}
                name="email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <Field name="password" className={inputClasses} type="password" />
              <ErrorMessage
                className={errorMessageClasses}
                component={"p"}
                name="password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between my-[30px]">

            {/* {loginState.isLoading && <Spinner />} */}
            <div className="ml-auto">
              <span className="text-[14px] text-[#717171]">Forgot Password?{' '}</span>
              <Link
                to="/reset-password"
                className="text-sm underline hover:no-underline text-medify-blue"
              >
                click here
              </Link>
            </div>
          </div>
          <AppButton type="submit" >
            Login
          </AppButton>
          {loginState.isLoading && <Spinner />}
        </Form>
      </Formik>
    );
  };

  return (
    <main className="bg-gray-200">
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
              <h1 className="text-3xl text-gray-800 font-bold mb-6">
                Login
              </h1>
              {/* Form */}
              {renderForm()}
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-gray-200"></div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default SignIn;
