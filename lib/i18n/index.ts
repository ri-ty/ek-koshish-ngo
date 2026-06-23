import { en } from "./en";
import { hi } from "./hi";
import type { Language, Translations } from "./types";

export type { Language, Translations };

export const translations: Record<Language, Translations> = { en, hi };

export { en, hi };
