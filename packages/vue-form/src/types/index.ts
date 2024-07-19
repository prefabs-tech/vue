interface EmailErrorMessages {
  invalid?: string;
  required?: string;
}

interface NumberErrorMessages {
  invalid?: string;
  required?: string;
}

interface PasswordErrorMessages {
  required?: string;
  weak?: string;
}

export type { EmailErrorMessages, NumberErrorMessages, PasswordErrorMessages };

export type {
  IsEmailOptions,
  IsIntOptions,
  StrongPasswordOptions,
} from "./validator";
