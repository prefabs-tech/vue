import validator from "validator";
import { z } from "zod";

import type { NumberErrorMessages } from "../types";
import type { IsIntOptions } from "../types/validator";

const schema = (
  errorMessages: NumberErrorMessages,
  options: IsIntOptions | undefined,
) => {
  return z.coerce
    .number({
      error: errorMessages.required,
    })
    .refine((value) => validator.isInt(String(value), options || {}), {
      message: errorMessages.invalid,
    });
};

export default schema;
