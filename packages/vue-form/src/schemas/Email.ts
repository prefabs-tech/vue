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
      message: errorMessages.required,
    })
    .refine((value) => validator.isEmail(value, options || {}), {
      message: errorMessages.invalid,
    });
};

export default schema;
