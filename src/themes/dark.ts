import { MantineThemeOverride } from "@mantine/core";

export const DARK_THEME: Partial<MantineThemeOverride> = {
    colorScheme: "dark",
    colors: {
        brand: [
            "#E7E3D7",
            "#D8CFB6",
            "#CFBF94",
            "#CCB371",
            "#D0AB4C",
            "#D9A624",
            "#D59D0D",
            "#AB831C",
            "#8A6E25",
            "#715D29",
        ],
    },
    primaryColor: "brand",
};
