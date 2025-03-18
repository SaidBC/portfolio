import { z } from "zod";

const messageSchema = z.object({
  firstname: z
    .string({
      message: "Firstname is required",
    })
    .min(1, {
      message: "Firstname must not be empty",
    }),
  lastname: z
    .string({
      message: "Lastname is required",
    })
    .min(1, {
      message: "Lastname must not be empty",
    }),
  email: z
    .string({
      message: "Email is required",
    })
    .min(1, {
      message: "Email must not be empty",
    })
    .email({
      message: "Invalid email",
    }),
  message: z
    .string()
    .min(10, {
      message: "Message min is 10 characters",
    })
    .max(250, {
      message: "Message max is 10 characters",
    }),
});

export default messageSchema;
