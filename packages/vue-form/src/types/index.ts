type CountryPickerGroups = Record<string, string[]>;

interface CountryPickerLabels {
  allCountries?: string;
  favorites?: string;
}

type CountryPickerLocales = Record<string, CountryPickerTranslation>;

type CountryPickerTranslation = Record<string, string>;

interface CurrencyOption extends SelectOption {
  code?: string;
  symbol?: string;
}

interface EmailErrorMessages {
  invalid?: string;
  required?: string;
}

interface FileErrorMessages {
  invalid?: string;
  maxFiles?: string;
  maxSize?: string;
  minSize?: string;
}

interface FileExtended extends File {
  description?: string;
}

interface GroupedOption {
  label: string;
  options: SelectOption[];
}

interface InputOption {
  label: string;
  value: number | string;
}

interface MonthPickerValue {
  month: number | string;
  year: number | string;
}

interface NumberErrorMessages {
  invalid?: string;
  required?: string;
}

type Options = GroupedOption[] | SelectOption[];
interface PasswordErrorMessages {
  required?: string;
  weak?: string;
}
interface SelectOption extends Record<string, unknown> {
  disabled?: boolean;
  groupLabel?: string;
  label?: string;
  value?: number | string;
}

interface TextErrorMessages {
  invalid?: string;
  required?: string;
}

export type {
  CountryPickerGroups,
  CountryPickerLabels,
  CountryPickerLocales,
  CountryPickerTranslation,
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
};

export type {
  IsEmailOptions,
  IsIntOptions,
  IsTextOptions,
  StrongPasswordOptions,
} from "./validator";
