interface CurrencyOption extends SelectOption {
  code?: string;
  symbol?: string;
}

interface CountryData {
  code: string;
  i18n?: Partial<CountryOption["i18n"]>;
}

interface CountryOption {
  code: string;
  i18n: {
    en: string;
    fr: string;
    th: string;
    [key: string]: string;
  };
}

interface CountryPickerLabels {
  favorites?: string;
  allCountries?: string;
}

interface CountryResolvedData {
  favorites: CountryOption[];
  allCountries: CountryOption[];
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

export type {
  CountryData,
  CurrencyOption,
  CountryOption,
  CountryPickerLabels,
  CountryResolvedData,
  EmailErrorMessages,
  FileErrorMessages,
  FileExtended,
  GroupedOption,
  InputOption,
  MonthPickerValue,
  NumberErrorMessages,
  PasswordErrorMessages,
  SelectOption,
  TextErrorMessages,
};

export type {
  IsEmailOptions,
  IsTextOptions,
  IsIntOptions,
  StrongPasswordOptions,
} from "./validator";
