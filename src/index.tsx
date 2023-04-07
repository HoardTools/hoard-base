import React, { ReactNode, createContext, useContext, useState } from "react";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { DARK_THEME } from "./themes/dark";

export type HoardContextType = {
    theme: MantineThemeOverride;
    setTheme: (theme: MantineThemeOverride) => void;
};

const HoardContext = createContext<HoardContextType>(null as any);

export function useTheme(): [
    MantineThemeOverride,
    (theme: MantineThemeOverride) => void
] {
    const { theme, setTheme } = useContext(HoardContext);
    return [theme, setTheme];
}

export function HoardProvider(props: { children: ReactNode | ReactNode[] }) {
    const [theme, setTheme] = useState<MantineThemeOverride>(DARK_THEME);

    return (
        <HoardContext.Provider
            value={{
                theme,
                setTheme,
            }}
        >
            <MantineProvider
                theme={theme}
                withCSSVariables
                withGlobalStyles
                withNormalizeCSS
            >
                <Notifications />
                <ModalsProvider>{props.children}</ModalsProvider>
            </MantineProvider>
        </HoardContext.Provider>
    );
}
