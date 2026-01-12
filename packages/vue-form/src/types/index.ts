interface CurrencyOption extends SelectOption {
  code?: string;
  symbol?: string;
}

interface CountryPickerLabels {
  favorites?: string;
  allCountries?: string;
}

interface EmailErrorMessages {
  invalid?: string;
  required?: string;
}

interface FileErrorMessages {
  invalid?: string;
  maxSize?: string;
  minSize?: string;
  maxFiles?: string;
}

interface FileExtended extends File {
  description?: string;
}

interface InputOption {
  label: string;
  value: string | number;
}

interface Locales {
  [key: string]: Translation;
}

interface MonthPickerValue {
  month: number | string;
  year: number | string;
}

interface NumberErrorMessages {
  invalid?: string;
  required?: string;
}

interface PasswordErrorMessages {
  required?: string;
  weak?: string;
}

interface SelectOption extends Record<string, unknown> {
  disabled?: boolean;
  label?: string;
  value?: string | number;
  groupLabel?: string;
}

interface GroupedOption {
  label: string;
  options: SelectOption[];
}

interface TextErrorMessages {
  invalid?: string;
  required?: string;
}

interface Translation {
  [key: string]: string;
}

type Options = SelectOption[] | GroupedOption[];

export type {
  CurrencyOption,
  CountryPickerLabels,
  EmailErrorMessages,
  FileErrorMessages,
  FileExtended,
  GroupedOption,
  InputOption,
  Locales,
  MonthPickerValue,
  NumberErrorMessages,
  Options,
  PasswordErrorMessages,
  SelectOption,
  TextErrorMessages,
  Translation,
};

export type {
  IsEmailOptions,
  IsTextOptions,
  IsIntOptions,
  StrongPasswordOptions,
} from "./validator";
