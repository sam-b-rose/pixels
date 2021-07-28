const rem = (px: number, base: number = 16) => `${px / base}rem`;

const theme = {
  fontSizes: [
    rem(12),
    rem(14),
    rem(16),
    rem(24),
    rem(32),
    rem(48),
    rem(64),
    rem(96),
    rem(128),
  ],
  space: ['0px', '4px', '8px', '16px', '32px', '64px', '128px', '256px'],
  colors: {
    blue: '#07c',
    red: '#e10',
  },
};

export default theme;
