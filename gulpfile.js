var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
 mix.less('app.less', 'resources/css');

 mix.styles([
  'libs/font-awesome/css/font-awesome.css',
  'libs/bootstrap.css',
  'libs/slick/slick.css',
  'libs/flex-slider/flexslider.css',
  'libs/owl-carousel/owl.carousel.css',
  'libs/owl-carousel/owl.theme.css',
  'libs/owl-carousel/owl.transitions.css',
  'libs/prettyphoto.css',
  'libs/style.css',
  'libs/skin-blue.css'
 ]);

 mix.scripts([
  'libs/jquery.js',
  'libs/bootstrap.min.js',
  'libs/jquery.easing.min.js',
  'libs/flex-slider/jquery.flexslider.js',
  'libs/slick/slick.js',
  'libs/main.js',
  'libs/select2.min.js'
 ]);
});