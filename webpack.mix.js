let mix = require('laravel-mix');

mix
.sass('src/assets/scss/main.scss', 'web/assets/css')
    .options({
        autoprefixer: {
            options: {
                overrideBrowserslist: [
                    'last 6 versions',
                ]
            }
        }
    })
.copyDirectory('src/assets/js', 'web/assets/js')
    .options({
        processCssUrls: false
    })
.copyDirectory('src/assets/fonts', 'web/assets/fonts')
    .options({
        processCssUrls: false
    })
.copyDirectory('src/assets/icons', 'web/assets/icons')
    .options({
        processCssUrls: false
    });