module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/password-generator/'
    : '/',
  transpileDependencies: [
    'vuetify',
  ],
};
