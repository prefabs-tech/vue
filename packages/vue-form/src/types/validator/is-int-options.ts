interface IsIntOptions {
  /**
   * if `false`, will disallow integer values with leading zeroes
   * @default true
   */
  allow_leading_zeroes?: boolean | undefined;

  /**
   * enforce integers being less than the value provided
   */
  gt?: number | undefined;

  /**
   * enforce integers being greater than the value provided
   */
  lt?: number | undefined;

  /**
   * to check the integer max boundary
   */
  max?: number | undefined;

  /**
   * to check the integer min boundary
   */
  min?: number | undefined;
}

export type { IsIntOptions };
