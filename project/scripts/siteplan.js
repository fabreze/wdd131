const colorSchemaLight = {
    "primary": "#3C6090",
    "surfaceTint": "#3C6090",
    "onPrimary": "#FFFFFF",
    "primaryContainer": "#D4E3FF",
    "onPrimaryContainer": "#224876",
    "secondary": "#246488",
    "onSecondary": "#FFFFFF",
    "secondaryContainer": "#C8E6FF",
    "onSecondaryContainer": "#004C6D",
    "tertiary": "#8F4C32",
    "onTertiary": "#FFFFFF",
    "tertiaryContainer": "#FFDBCF",
    "onTertiaryContainer": "#71361E",
    "error": "#BA1A1A",
    "onError": "#FFFFFF",
    "errorContainer": "#FFDAD6",
    "onErrorContainer": "#93000A",
    "background": "#F9F9FF",
    "onBackground": "#191C20",
    "surface": "#F9F9FF",
    "onSurface": "#191C20",
    "surfaceVariant": "#E0E2EC",
    "onSurfaceVariant": "#43474E",
    "outline": "#74777F",
    "outlineVariant": "#C3C6CF",
    "shadow": "#000000",
    "scrim": "#000000",
    "inverseSurface": "#2E3035",
    "inverseOnSurface": "#F0F0F7",
    "inversePrimary": "#A5C8FF",
    "primaryFixed": "#D4E3FF",
    "onPrimaryFixed": "#001C3A",
    "primaryFixedDim": "#A5C8FF",
    "onPrimaryFixedVariant": "#224876",
    "secondaryFixed": "#C8E6FF",
    "onSecondaryFixed": "#001E2E",
    "secondaryFixedDim": "#94CDF6",
    "onSecondaryFixedVariant": "#004C6D",
    "tertiaryFixed": "#FFDBCF",
    "onTertiaryFixed": "#380D00",
    "tertiaryFixedDim": "#FFB59A",
    "onTertiaryFixedVariant": "#71361E",
    "surfaceDim": "#D9DAE0",
    "surfaceBright": "#F9F9FF",
    "surfaceContainerLowest": "#FFFFFF",
    "surfaceContainerLow": "#F3F3FA",
    "surfaceContainer": "#EDEDF4",
    "surfaceContainerHigh": "#E7E8EE",
    "surfaceContainerHighest": "#E1E2E9"
};

const colorSchemaDark = {
    "primary": "#A5C8FF",
    "surfaceTint": "#A5C8FF",
    "onPrimary": "#00315E",
    "primaryContainer": "#224876",
    "onPrimaryContainer": "#D4E3FF",
    "secondary": "#94CDF6",
    "onSecondary": "#00344D",
    "secondaryContainer": "#004C6D",
    "onSecondaryContainer": "#C8E6FF",
    "tertiary": "#FFB59A",
    "onTertiary": "#552009",
    "tertiaryContainer": "#71361E",
    "onTertiaryContainer": "#FFDBCF",
    "error": "#FFB4AB",
    "onError": "#690005",
    "errorContainer": "#93000A",
    "onErrorContainer": "#FFDAD6",
    "background": "#111318",
    "onBackground": "#E1E2E9",
    "surface": "#111318",
    "onSurface": "#E1E2E9",
    "surfaceVariant": "#43474E",
    "onSurfaceVariant": "#C3C6CF",
    "outline": "#8D9199",
    "outlineVariant": "#43474E",
    "shadow": "#000000",
    "scrim": "#000000",
    "inverseSurface": "#E1E2E9",
    "inverseOnSurface": "#2E3035",
    "inversePrimary": "#3C6090",
    "primaryFixed": "#D4E3FF",
    "onPrimaryFixed": "#001C3A",
    "primaryFixedDim": "#A5C8FF",
    "onPrimaryFixedVariant": "#224876",
    "secondaryFixed": "#C8E6FF",
    "onSecondaryFixed": "#001E2E",
    "secondaryFixedDim": "#94CDF6",
    "onSecondaryFixedVariant": "#004C6D",
    "tertiaryFixed": "#FFDBCF",
    "onTertiaryFixed": "#380D00",
    "tertiaryFixedDim": "#FFB59A",
    "onTertiaryFixedVariant": "#71361E",
    "surfaceDim": "#111318",
    "surfaceBright": "#37393E",
    "surfaceContainerLowest": "#0C0E13",
    "surfaceContainerLow": "#191C20",
    "surfaceContainer": "#1D2024",
    "surfaceContainerHigh": "#282A2F",
    "surfaceContainerHighest": "#32353A"
}

const lightModeColors = document.querySelector("#light-color-schema");
const colorSchemaLightKeys = Object.keys(colorSchemaLight);

const darkModeColors = document.querySelector("#dark-color-schema");
const colorSchemaDarkKeys = Object.keys(colorSchemaDark);

colorSchemaLightKeys.forEach(color => {
    const card = document.createElement("div");
    card.className = 'color-card';

    const colorBox = document.createElement("div");
    colorBox.className = 'color-box';
    colorBox.style.backgroundColor = colorSchemaLight[color];

    const description = document.createElement("div");
    description.className = "color-description";

    const colorRole = document.createElement("h4");
    colorRole.textContent = color;

    const colorValue = document.createElement("p");
    colorValue.textContent = colorSchemaLight[color];

    lightModeColors.appendChild(card);
    card.appendChild(colorBox);
    card.appendChild(description);
    description.appendChild(colorRole);
    description.appendChild(colorValue);
})

colorSchemaDarkKeys.forEach(color => {
    const card = document.createElement("div");
    card.className = 'color-card';

    const colorBox = document.createElement("div");
    colorBox.className = 'color-box';
    colorBox.style.backgroundColor = colorSchemaDark[color];

    const description = document.createElement("div");
    description.className = "color-description";

    const colorRole = document.createElement("h4");
    colorRole.textContent = color;

    const colorValue = document.createElement("p");
    colorValue.textContent = colorSchemaDark[color];

    darkModeColors.appendChild(card);
    card.appendChild(colorBox);
    card.appendChild(description);
    description.appendChild(colorRole);
    description.appendChild(colorValue);
})