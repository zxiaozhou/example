# 最小案例

## 一、运行

1. yarn install
2. npm run dev，此时浏览器提示
```
Unable to parse HTML; Illegal tag name. Use '&lt;' to print '<'.
 at {"file":"/index.html","line":13,"column":4}
11 |    <div id="app"></div>
12 |    <script type="module" src="/src/main.ts"></script>
13 |    <%- injectScript %>
   |     ^
14 |  </body>
15 |

```

## 二、相关配置
1. 根目录vite.config.ts文件：createHtmlPlugin
2. 根目录index.html文件：<%- injectScript %>