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

interface TextErrorMessages {
  invalid?: string;
  required?: string;
}

export type {
  EmailErrorMessages,
  NumberErrorMessages,
  PasswordErrorMessages,
  TextErrorMessages,
};

export type {
  IsEmailOptions,
  IsTextOptions,
  IsIntOptions,
  StrongPasswordOptions,
} from "./validator";
