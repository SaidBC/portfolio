import { formState } from "@/types";
import clientEnv from "@/utils/clientEnv";
import { Message } from "@prisma/client";
import axios from "axios";

interface sendMessageResponse {
  success: boolean;
  data?: Message;
  errors: {
    [key: string]: string[];
  };
}

export async function sendMessage(
  prevState: any,
  formData: FormData
): Promise<formState> {
  try {
    console.log(clientEnv);
    const res = await axios.post<sendMessageResponse>(
      clientEnv.NEXT_PUBLIC_API_URL + "/messages",
      Object.fromEntries(formData)
    );
    const sendMessageRes = res.data;
    if (!sendMessageRes.success)
      return {
        isSuccess: false,
        isError: true,
        errors: sendMessageRes.errors,
      };
    return {
      isSuccess: true,
      isError: false,
      errors: {},
    };
  } catch (error) {
    console.error(error);
    return {
      isSuccess: false,
      isError: true,
      errors: {
        request: ["An error uccoured"],
      },
    };
  }
}
