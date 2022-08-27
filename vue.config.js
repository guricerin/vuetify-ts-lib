const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  // https://stackoverflow.com/questions/61452230/mixed-up-css-on-production-build-of-vue-cli
  css: {
    extract: false
  }
});
