const Encore = require('@symfony/webpack-encore');

Encore
// directory where compiled assets will be stored
    .setOutputPath('assets/dist/')
    // public path used by the web server to access the output path
    .setPublicPath('/assets/dist')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addStyleEntry('css/app', './assets/src/app.scss')

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .disableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild(['assets/dist'], (options) => {
        options.verbose = true;
        options.root = __dirname;
        options.exclude = ['fonts', 'images'];
    })

    .configureCssLoader(function(options){
      options.url = false;
      options.importLoaders = 2;
    })

    .enableBuildNotifications(true, (options) => {
        options.alwaysNotify = true;
        options.title = 'Sass Base';
    })

    .enableSourceMaps(!Encore.isProduction())

    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // uncomment if you use Sass/SCSS files
    .enableSassLoader()

    // Autoprefixer
    .enablePostCssLoader()
;

module.exports = Encore.getWebpackConfig();
