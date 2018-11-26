exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
  getConfig
}) => {
  if (stage === 'build-html') {
    console.log('change WP config', getConfig());
    actions.setWebpackConfig({
      externals: {
        canvas: true
      }
    });
  }
};
