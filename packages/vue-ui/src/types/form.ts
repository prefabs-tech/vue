interface EmailErrorMessages {
  invalid?: string;
  required?: string;
}

interface PasswordErrorMessages {
  weak?: string;
  required?: string;
}

export type { EmailErrorMessages, PasswordErrorMessages };
