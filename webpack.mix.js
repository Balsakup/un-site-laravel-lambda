const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .autoload({
        'jquery'   : [ '$', 'window.jQuery', 'jQuery', 'window.$', 'jquery', 'window.jquery' ],
        'popper.js': [ 'Popper', 'window.Popper' ]
    })
    .js('resources/admin/js/app.js', 'public/js/admin.js')
    .sass('resources/admin/sass/app.scss', 'public/css/admin.css')
    .sourceMaps(!mix.inProduction())
    .disableNotifications();

if (mix.inProduction()) {
    mix.version();
}
