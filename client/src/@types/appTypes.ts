
import React, { SVGProps } from "react";

export * from "./formTypes";

//types
export type AppointmentFormType = "new" | "edit";

export type StatusType = {
  label: string;
  value: string;
};

/**
 * Context
 */
export interface ConfirmModal {
  show: boolean;
  title: string;
  subTitle: string;
}

export interface SuccessModal {
  show: boolean;
  title: string;
  subTitle: string;
}

export interface AppContextType {
  confirmModalState?: ConfirmModal;
  successModalState?: SuccessModal;
  showSuccessModal?: (val: { title: string; subTitle: string }) => any;
  showConfirmModal?: (
    val: { title: string; subTitle: string },
    callback: () => any
  ) => any;
  hideSuccessModal?: () => any;
  hideConfirmModal?: () => any;
  handleConfirmModal?: () => any;
}

export interface SearchBarProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onResultChange?: (data: any) => any;
  onSelectItem?: (data: any) => any;
  selectedItem?: any;
  onChangeText?: (text: string) => any;
  showOnlySelectedItem?: boolean;
  alwaysShowItems: boolean;
}

/** components */
export interface MedifyTextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  extrainputclass?: string;
  extralabelclass?: string;
  rightcomponent?: React.ReactNode;
}

export interface MedifyTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  extrainputclass?: string;
  extralabelclass?: string;
}

export interface MedifySelectInputProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
}


export interface OtpFormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

/**svg */
export interface TsSvgProps extends SVGProps<SVGSVGElement> {
  strokecolor?: string;
  fillColor?: string;
  scale?: number;
}


export interface ResetUserPasswordFormValues {
  newPassword: string;
  confirmPassword: string;
}

export interface ResetUserPasswordFormProps {
  isLoading: boolean;
  onSubmit: (val: any) => any;
  onClose: () => any;
}

/**
 * modals
 *  */

export interface TestResultModalProps {
  show: boolean;
  onClose: () => any;
  test: any | undefined;
}

export interface ModalProps {
  show: boolean;
  onClose: (val: boolean) => void;
  children?: React.ReactNode;
  backdropClose?: boolean;
  dialogPanelExtraClass?: string;
}

export interface ReserUserPasswordModalProps {
  show: boolean;
  onSubmit: (val: any) => any;
  onClose: () => any;
}

