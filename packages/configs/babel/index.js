module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
        loose: true,
        /** Only parse modules if testing. If not, let bundler handle it */
        modules: process.env.NODE_ENV === 'test' ? 'commonjs' : false,
        debug: false,
        forceAllTransforms: true,
      },
    ],
  ],
  plugins: [],
};
