export class Tinid {
  private static readonly chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  /**
   * Generates a random alphanumeric string ID.
   * @param length Length of the ID. Default is 8.
   * @returns Random ID string.
   */
  static generate(length: number = 8, charset: string = Tinid.chars): string {
    let result = '';
    const charsLength = charset.length;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charsLength);
      result += charset[randomIndex];
    }

    return result;
  }
}

export const tinid = (length?: number) => Tinid.generate(length);
