import { createContext, Dispatch, SetStateAction } from 'react';
import {lightTheme} from "./lightTheme";
import {darkTheme} from "./darkTheme";

// Default theme value
const DEFAULT_THEME = "light";

// Available themes
export const THEMES = {
    light: lightTheme,
    dark: darkTheme,
};

// Define the shape of the theme context
export type ThemeContextType = {
    mode: string;
    theme: typeof THEMES.light; // Adjust this if your theme structure is different
    setMode: Dispatch<SetStateAction<string>>;
    setTheme: Dispatch<SetStateAction<typeof THEMES.light>>; // Adjust this if your theme structure is different
};

// Default values for the theme context
export const defaultValues: ThemeContextType = {
    mode: DEFAULT_THEME,
    theme: THEMES[DEFAULT_THEME],
    setMode: () => {}, // Default no-op function
    setTheme: () => {}, // Default no-op function
};

// Create the ThemeContext with default values
export const ThemeContext = createContext<ThemeContextType>(defaultValues);

