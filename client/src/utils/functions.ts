import moment from "moment";

import _ from "lodash";
import axios from "axios";

import { diff } from "deep-object-diff";


interface Base64Result {
  success: boolean;
  base64String?: string;
  error?: string;
}

export const objectIsNotEmpty = (obj: object) => {
  if (!obj) return false;

  if (Object.keys(obj).length < 1) return false;

  return true;
};

export const formatServerErrorMessage = (
  _message: Array<string> | string
): string => {
  let message = "";
  if (_message) {
    if (Array.isArray(_message)) {
      message = _message.join("\n");
    } else if (typeof _message == "string") {
      message = _message;
    }
  }

  return message;
};

/**
 * add up html element classes
 */

export const addClassNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

export function omitEmptyObjectValues(obj: any): any {
  return _.omitBy(obj, (value) => _.isNil(value) || value === "");
}

export const fileToBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

export function base64ToFile(base64String: any, fileName: any) {
  // Extract the content type and base64 data from the input
  const matches = base64String.match(/^data:(.*);base64,(.*)$/);

  if (!matches || matches.length !== 3) {
    throw new Error("Invalid Base64 string format");
  }

  const contentType = matches[1];
  const base64Data = matches[2];

  // Convert the base64 data to a Blob
  const byteCharacters = atob(base64Data);
  const byteArrays = [];
  for (let i = 0; i < byteCharacters.length; i++) {
    byteArrays.push(byteCharacters.charCodeAt(i));
  }
  const blob = new Blob([new Uint8Array(byteArrays)], { type: contentType });

  // Create a File object from the Blob
  const file = new File([blob], fileName, { type: contentType });

  return file;
}

export function ageToDOB(age: string) {
  // Get the current date
  const currentDate = moment();
  const dob = currentDate.subtract(parseInt(age), "years");

  // Format the resulting date in the desired format (e.g., 'YYYY-MM-DD')
  const formattedDOB = dob.format("MM-DD-YYYY");

  return formattedDOB;
}

export async function downloadAndConvertToBase64(
  imageUrl: string
): Promise<Base64Result> {
  try {
    // Fetch the image data
    const response = await axios.get(imageUrl, {
      responseType: "blob",
    });

    // Check if the response is a valid image
    const contentType = response.headers["content-type"];
    if (!contentType || !contentType.startsWith("image/")) {
      return { success: false, error: "The provided URL is not an image." };
    }

    // Convert the image to base64
    const base64String = await fileToBase64(response?.data);

    if (typeof base64String !== "string") {
      return { success: false, error: "Error occured in parsing" };
    }

    return { success: true, base64String };
  } catch (error: any) {
    console.error("Error:", error.message);
    return { success: false, error: error.message };
  }
}

/**
 *
 * Function to check deep equality of two objects
 *
 * @param obj1
 * @param obj2
 * @returns {boolean}
 */
export function isDeepEqual(obj1: any, obj2: any): boolean {
  const difference = diff(obj1, obj2);
  return Object.keys(difference).length === 0;
}
