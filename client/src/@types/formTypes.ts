import { ObjectSchema } from "yup";
import { FormikProps } from "formik";

/*** FORMS */

/**
 * Reset password
 */
export interface OtpFormValues {
  key1: string;
  key2: string;
  key3: string;
  key4: string;
  key5: string;
  key6: string;
}

export interface OtpFormProps {
  initialValues: OtpFormValues;
  isLoading: boolean;
  onSubmit: (val: any) => any;
  validationSchema?: ObjectSchema<OtpFormValues>;
  countdownTimerValue: string;
}

//
export interface PasswordChangeFormValues {
  password: string;
  confirmPassword: string;
}

export interface PasswordChangeFormProps {
  initialValues: PasswordChangeFormValues;
  isLoading: boolean;
  onSubmit: (val: any) => any;
  countdownTimerValue?: string;
  validationSchema?: any;
}

export interface AddUserFormValues {
  firstName: string;
  lastName: string;
  username: string;
  sex: string;
  role: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AddUserFormProps {
  initialValues: AddUserFormValues;
  isLoading: boolean;
  formik: FormikProps<AddUserFormValues>;
  formIsUpdate: boolean;
}


