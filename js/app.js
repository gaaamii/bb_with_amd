(function() {
  requirejs.config({
  // pathsオプションの設定。"module/name": "path"を指定します。拡張子（.js）は指定しません。
    paths: {
      'Backbone': 'lib/backbone',
      'jquery': 'lib/jquery',
      'underscore': 'lib/underscore'
    }
  });
  define(["Backbone"], function(Backbone) {
    console.log(Backbone);
  });
})();
