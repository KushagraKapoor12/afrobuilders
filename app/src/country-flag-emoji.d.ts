declare module 'country-flag-emoji' {
  export function getEmojiFlag(countryCode: string): string | undefined;
  export function getCountryCode(emojiFlag: string): string | undefined;
  export function list(): Array<{
    code: string;
    emoji: string;
    unicode: string;
    name: string;
  }>;
}