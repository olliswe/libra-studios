type screenType = "phone" | "tablet" | "laptop" | "desktop" | "wide" | "custom";

const fonts = {
  Bodini: "Bodini",
  ProximaRegular: "ProximaRegular",
} as const;

const colors = {
  darkgreen: "#003333",
  orange: "#ffe9cc",
} as const;

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

const media: { [key in screenType]: any } = {
  custom: customMediaQuery,
  wide: customMediaQuery(1600),
  desktop: customMediaQuery(1200),
  laptop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};

const customMediaSizeQuery = (size: number) => `${size}px`;

const mediaSizes: { [key in screenType]: any } = {
  custom: customMediaSizeQuery,
  wide: customMediaSizeQuery(1600),
  desktop: customMediaSizeQuery(1200),
  laptop: customMediaSizeQuery(922),
  tablet: customMediaSizeQuery(768),
  phone: customMediaSizeQuery(576),
};

export const theme = {
  fonts,
  colors,
  media,
  mediaSizes,
};

export type ITheme = typeof theme;
