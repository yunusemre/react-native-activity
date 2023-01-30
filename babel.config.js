module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@/components': './src/components',
          '@/theme': './src/theme',
          '@/screens': './src/screens',
          '@/services': './src/services',
          '@/utils': './src/utils',
          '@/store': './src/store',
          '@/navigation': './src/navigation',
          '@/assets': './src/assets',
        },
      },
    ],
  ],
};
