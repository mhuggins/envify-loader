# Deprecated: use [transform-loader](https://github.com/webpack/transform-loader) + [envify](https://github.com/hughsk/envify) instead.

## envify loader for webpack

### Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

In the webpack module.loaders config:

```
{ test: /\.js$/, loader: "envify-loader" }
```

Alternatively, the custom loader can be used by specifying a query option:

```
var config = { host: "example.com", port: 80 };
{ test: /\.js$/, loader: "envify-loader", query: { custom: config } }
```

### License

MIT (http://www.opensource.org/licenses/mit-license.php)
