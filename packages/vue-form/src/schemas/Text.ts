import { z } from "zod";

import type { TextErrorMessages } from "../types";

const schema = (errorMessages: TextErrorMessages) => {
  return z.string({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalid,
  });
};

export default schema;
