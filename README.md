# AMD形式でBackboneを読み込み

Backbone.jsのソースコードを読んでいたら、こんな記述があった。

```javascript
if (typeof define === 'function' && define.amd) {
  define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
    // Export global even in AMD case in case this script is loaded with
    // others that may still expect a global Backbone.
    root.Backbone = factory(root, exports, _, $);
  });
} 
```

このコードを利用できるのか確かめただけなのがこのリポジトリ。
