export const DEFAULT_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export class Tinid {
  /**
   * Generates a random alphanumeric string ID.
   * @param length Length of the ID. Default is 8.
   * @param charset Character set to use. Default is alphanumeric.
   * @returns Random ID string.
   */
  static generate(length: number = 8, charset: string = DEFAULT_CHARSET): string {
    let result = '';
    const charsLength = charset.length;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charsLength);
      result += charset[randomIndex];
    }

    return result;
  }
}

/**
 * Lightweight ID generator function.
 * @param length Length of the ID. Default is 8.
 * @returns Random ID string.
 */
export const tinid = (length?: number): string => Tinid.generate(length);
