import validator from "validator";
import { z } from "zod";

import type { EmailErrorMessages } from "../types";
import type { IsEmailOptions } from "../types/validator";

const schema = (
  errorMessages: EmailErrorMessages,
  options: IsEmailOptions | undefined,
) => {
  return z
    .string({
      required_error: errorMessages.required,
    })
    .min(1, { message: errorMessages.required })
    .refine((value) => !value || validator.isEmail(value, options || {}), {
      message: errorMessages.invalid,
    });
};

export default schema;
