interface CurrencyOption extends SelectOption {
  code?: string;
  symbol?: string;
}

interface CountryPickerLabels {
  allCountries?: string;
  favorites?: string;
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

type CountryPickerTranslation = Record<string, string>;
type CountryPickerLocales = Record<string, CountryPickerTranslation>;
type CountryPickerGroups = Record<string, string[]>;

type Options = SelectOption[] | GroupedOption[];

export type {
  CountryPickerGroups,
  CountryPickerLabels,
  CountryPickerLocales,
  CurrencyOption,
  EmailErrorMessages,
  FileErrorMessages,
  FileExtended,
  GroupedOption,
  InputOption,
  MonthPickerValue,
  NumberErrorMessages,
  Options,
  PasswordErrorMessages,
  SelectOption,
  TextErrorMessages,
  CountryPickerTranslation,
};

export type {
  IsEmailOptions,
  IsTextOptions,
  IsIntOptions,
  StrongPasswordOptions,
} from "./validator";
