"use client";

import {
  MouseEventHandler,
  startTransition,
  useActionState,
  useState,
} from "react";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import { sendMessage } from "@/lib/action";
import { formState } from "@/types";
import ErrorText from "@/components/ErrorText";

const initialValue: formState = {
  isError: false,
  isSuccess: false,
  errors: {},
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendMessage,
    initialValue
  );
  const [firstName, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit: MouseEventHandler<HTMLButtonElement> = function (e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstname", firstName);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("message", message);
    startTransition(() => {
      formAction(formData);
    });
  };
  return (
    <form className="bg-[#202020] col-start-1 col-end-13 md:col-start-2 md:col-end-12 rounded-4xl p-8 flex flex-col gap-4 shadow-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <FormInput
            type="text"
            placeholder="Enter your firstname"
            name="firstname"
            setInput={setFirstname}
            value={firstName}
          />
          {state.isError && state.errors.firstname && (
            <ErrorText>{state.errors.firstname[0]}</ErrorText>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <FormInput
            type="text"
            placeholder="Enter your lastname"
            name="lastname"
            setInput={setLastname}
            value={lastname}
          />
          {state.isError && state.errors.lastname && (
            <ErrorText>{state.errors.lastname[0]}</ErrorText>
          )}
        </div>
      </div>

      <FormInput
        type="email"
        placeholder="Enter your email"
        name="email"
        setInput={setEmail}
        value={email}
      />
      {state.isError && state.errors.email && (
        <ErrorText>{state.errors.email[0]}</ErrorText>
      )}
      <FormTextarea
        max={250}
        min={10}
        placeholder="Enter your message"
        name="message"
        value={message}
        setInput={setMessage}
      />
      {state.isError && state.errors.message && (
        <ErrorText>{state.errors.message[0]}</ErrorText>
      )}
      <button
        onClick={handleSubmit}
        className="py-3 bg-[rgb(16,16,16)] rounded-lg"
      >
        SEND
      </button>
      {state.isSuccess && (
        <p className="text-green-600 font-bold">
          Message was successfully sent
        </p>
      )}
    </form>
  );
}
