exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
  getConfig,
}) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      externals: {
        canvas: true,
      },
    });
  }
};
