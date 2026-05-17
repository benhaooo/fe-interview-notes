---
title: 前端八股知识地图
outline: deep
---

# 前端八股知识地图（完整版）

> 优先级：🔴 高频必会 · 🟡 中频常考 · 🟢 加分项

---

## 一、JavaScript

### 🔴 核心基础
- [数据类型与类型判断](/javascript/data-types) — 7 基本 + 1 引用 / typeof / instanceof / Object.prototype.toString
- [类型转换与相等](/javascript/type-conversion) — 隐式 / 显式 / `==` vs `===`
- [变量声明与作用域](/javascript/variable-scope) — var / let / const / TDZ / 作用域链
- [闭包](/javascript/closure) — 原理、应用、内存泄漏
- [this 指向](/javascript/this) — 默认 / 隐式 / 显式 / new / 箭头
- [原型与原型链 / 继承](/javascript/prototype) — 组合 / 寄生组合 / class
- [new 操作符原理](/javascript/new)

### 🔴 异步
- [事件循环](/javascript/event-loop) — 宏任务 / 微任务 / 执行顺序
- [Promise](/javascript/promise) — 状态机、链式、静态方法、手写
- [async / await](/javascript/async-await) — 原理与错误处理
- [Generator](/javascript/generator) — 与 async 的关系
- [异步演进](/javascript/async-evolution) — 回调地狱 → Promise → async

### 🔴 ES6+
- [解构 / 展开 / 模板字符串](/javascript/es6-syntax)
- [Symbol / BigInt](/javascript/symbol-bigint)
- [Map / Set / WeakMap / WeakSet](/javascript/collections)
- [Proxy / Reflect](/javascript/proxy-reflect) — Vue3 响应式核心
- [Iterator / for...of](/javascript/iterator)
- [Module 与 CommonJS](/javascript/module)
- [可选链 / 空值合并](/javascript/optional-chaining)

### 🟡 进阶
- [执行上下文与执行栈](/javascript/execution-context)
- [垃圾回收](/javascript/garbage-collection) — 标记清除 / 引用计数 / V8 分代
- [内存泄漏](/javascript/memory-leak)
- [尾调用优化](/javascript/tail-call)
- [深拷贝](/javascript/deep-clone)
- [函数式编程](/javascript/functional)
- [正则表达式](/javascript/regex)

### 🟢 加分
- [V8 引擎原理](/javascript/v8-engine) — JIT / Hidden Class / Inline Cache
- [AST 抽象语法树](/javascript/ast)
- [Web Workers](/javascript/web-workers)
- [WebAssembly](/javascript/webassembly)

---

## 二、CSS

### 🔴 核心
- [盒模型](/css/box-model)
- [BFC](/css/bfc)
- [选择器优先级](/css/selector-priority)
- [定位](/css/positioning)
- [Flex 布局](/css/flex)
- [Grid 布局](/css/grid)
- [居中方案](/css/centering) — 至少 5 种
- [响应式布局](/css/responsive)

### 🟡 中频
- [层叠上下文 / z-index](/css/stacking-context)
- [浮动与清除浮动](/css/float)
- [CSS 变量](/css/variables)
- [伪类与伪元素](/css/pseudo)
- [transition / animation / keyframes](/css/animation)
- [CSS 性能优化](/css/performance) — 回流 / 重绘 / will-change / contain
- [移动端适配](/css/mobile-adaptation) — 1px / 安全区 / viewport
- [预处理器](/css/preprocessor) — Sass / Less

### 🟢 加分
- [CSS Houdini](/css/houdini)
- [CSS 新特性](/css/new-features) — Container Queries / `:has()` / Subgrid
- [CSS-in-JS 原理](/css/css-in-js)
- [Tailwind 原理](/css/tailwind)

---

## 三、HTML / DOM

### 🔴 核心
- [语义化标签](/html-dom/semantic)
- [display 类型](/html-dom/display-types) — 行内 / 块级 / 行内块
- [HTML5 新特性](/html-dom/html5)
- [DOM 事件流](/html-dom/event-flow)
- [事件委托](/html-dom/event-delegation)
- [DOM 操作性能](/html-dom/dom-performance) — DocumentFragment / 虚拟列表

### 🟡 中频
- [Shadow DOM](/html-dom/shadow-dom)
- [Canvas / SVG](/html-dom/canvas-svg)
- [Web Components](/html-dom/web-components)
- [无障碍 a11y / ARIA](/html-dom/accessibility)
- [meta 标签](/html-dom/meta-tags)

---

## 四、浏览器

### 🔴 核心
- [输入 URL 到页面渲染（超高频）](/browser/url-to-render)
- [渲染流程](/browser/rendering-pipeline) — DOM → CSSOM → Render Tree → Layout → Paint → Composite
- [回流与重绘](/browser/reflow-repaint)
- [缓存策略](/browser/cache) — 强缓存 / 协商缓存 / Cache-Control / ETag
- [跨域](/browser/cors) — 同源策略 / CORS / JSONP / 代理 / postMessage
- [浏览器存储](/browser/storage) — Cookie / localStorage / sessionStorage / IndexedDB
- [浏览器安全](/browser/security) — XSS / CSRF / 点击劫持 / CSP

### 🟡 中频
- [多进程架构](/browser/multi-process) — Browser / Renderer / GPU / Plugin
- [JS 引擎与渲染引擎协作](/browser/js-render-engine)
- [合成层 / GPU 加速](/browser/composite-gpu)
- [Performance API 与性能指标](/browser/performance-api) — FCP / LCP / FID / CLS / TTFB / TTI
- [Service Worker / PWA](/browser/service-worker)
- [页面生命周期](/browser/page-lifecycle)
- [内存泄漏排查](/browser/memory-debug)

### 🟢 加分
- [浏览器指纹](/browser/fingerprint)
- [Web Vitals 优化](/browser/web-vitals)
- [DevTools 高级](/browser/devtools-advanced)

---

## 五、网络

### 🔴 核心
- [HTTP 1.0 / 1.1 / 2 / 3](/network/http-versions)
- [HTTPS / TLS](/network/https)
- [TCP 三次握手 / 四次挥手](/network/tcp-handshake)
- [TCP vs UDP](/network/tcp-udp)
- [HTTP 状态码](/network/http-status)
- [HTTP 请求方法](/network/http-methods)
- [HTTP Headers](/network/http-headers)
- [DNS 解析](/network/dns)

### 🟡 中频
- [WebSocket](/network/websocket)
- [CDN 原理](/network/cdn)
- [RESTful API](/network/restful)
- [JWT vs Session](/network/jwt-session)
- [正向 / 反向代理](/network/proxy)
- [队头阻塞 / 多路复用](/network/multiplexing)
- [QUIC 协议](/network/quic)

### 🟢 加分
- [gRPC / GraphQL](/network/grpc-graphql)
- [SSE](/network/sse)
- [中间人攻击 / 证书固定](/network/mitm)

---

## 六、React

### 🔴 核心
- [JSX 本质](/react/jsx)
- [组件生命周期](/react/lifecycle)
- [Hooks 原理](/react/hooks)
- [Hooks 规则](/react/hooks-rules)
- [自定义 Hook](/react/custom-hooks)
- [setState 同步异步](/react/setstate) — React 17 vs 18
- [事件系统](/react/event-system)
- [Diff 算法](/react/diff)
- [受控 vs 非受控](/react/controlled)
- [Context 原理与陷阱](/react/context)

### 🟡 中频
- [Fiber 架构](/react/fiber)
- [并发模式](/react/concurrent) — useTransition / useDeferredValue
- [React 18 新特性](/react/react-18)
- [状态管理对比](/react/state-management) — Redux / Zustand / Jotai / Recoil
- [React Router](/react/router)
- [虚拟 DOM](/react/virtual-dom)
- [性能优化](/react/performance)
- [错误边界](/react/error-boundary)
- [Portals](/react/portals)

### 🟢 加分
- [React Server Components](/react/rsc)
- [Suspense + Streaming SSR](/react/streaming-ssr)
- [React 编译器](/react/compiler)
- [Scheduler 原理](/react/scheduler)
- [从零实现简易 React](/react/mini-react)

---

## 七、Vue

### 🔴 核心
- [响应式原理](/vue/reactivity) — Vue2 defineProperty / Vue3 Proxy
- [依赖收集与派发更新](/vue/dep-collection)
- [虚拟 DOM 与 Diff](/vue/vdom-diff)
- [组件生命周期](/vue/lifecycle)
- [Composition vs Options](/vue/composition-api)
- [computed / watch / watchEffect](/vue/computed-watch)
- [v-model 原理](/vue/v-model)
- [nextTick 原理](/vue/nexttick)
- [模板编译过程](/vue/compile)

### 🟡 中频
- [Vue Router 原理](/vue/router)
- [Vuex / Pinia](/vue/vuex-pinia)
- [keep-alive 原理](/vue/keep-alive)
- [插槽](/vue/slots)
- [Teleport / Suspense](/vue/teleport-suspense)
- [Vue3 性能优化](/vue/vue3-perf) — 静态提升 / Patch Flags / Tree Flattening
- [Ref / Reactive / toRefs](/vue/ref-reactive)

### 🟢 加分
- [Vue3 编译优化细节](/vue/compile-advanced)
- [自定义渲染器](/vue/custom-renderer)
- [Vue Vapor Mode](/vue/vapor)

---

## 八、工程化

### 🔴 核心
- [Webpack 核心概念](/engineering/webpack-core)
- [Webpack 打包流程](/engineering/webpack-flow)
- [常用 Loader 和 Plugin](/engineering/webpack-loader-plugin)
- [Webpack 优化](/engineering/webpack-optimization)
- [Vite 原理](/engineering/vite)
- [Webpack vs Vite](/engineering/webpack-vs-vite)
- [Babel 原理](/engineering/babel)
- [模块化 CommonJS / ESM](/engineering/modules)

### 🟡 中频
- [Source Map](/engineering/source-map)
- [HMR 热更新](/engineering/hmr)
- [CSS 模块化方案](/engineering/css-modules)
- [代码规范](/engineering/lint) — ESLint / Prettier / Husky / lint-staged
- [包管理 npm / yarn / pnpm](/engineering/package-managers)
- [Monorepo](/engineering/monorepo)
- [CI / CD](/engineering/ci-cd)

### 🟢 加分
- [手写简易 Webpack](/engineering/mini-webpack)
- [Rollup / esbuild / SWC](/engineering/rollup-esbuild-swc)
- [Module Federation](/engineering/module-federation)
- [构建产物分析](/engineering/bundle-analyzer)

---

## 九、TypeScript

### 🔴 核心
- [基础类型 / 联合 / 交叉](/typescript/basic-types)
- [interface vs type](/typescript/interface-vs-type)
- [泛型](/typescript/generics)
- [内置工具类型](/typescript/utility-types)
- [类型守卫](/typescript/type-guards)
- [枚举](/typescript/enum)

### 🟡 中频
- [协变与逆变](/typescript/variance)
- [声明文件 .d.ts](/typescript/declaration)
- [条件 / 映射 / 模板字面量类型](/typescript/advanced-types)
- [infer 关键字](/typescript/infer)
- [any vs unknown vs never](/typescript/any-unknown-never)
- [TS 在 React/Vue 最佳实践](/typescript/best-practices)

### 🟢 加分
- [类型体操](/typescript/type-challenges)
- [TS 编译原理](/typescript/compile)

---

## 十、性能优化

### 🔴 核心
- [加载优化](/performance/loading)
- [渲染优化](/performance/rendering)
- [图片优化](/performance/images)
- [首屏优化](/performance/first-screen)
- [性能指标](/performance/metrics)

### 🟡 中频
- [长列表 / 虚拟滚动](/performance/virtual-list)
- [Web Worker](/performance/web-worker)
- [防抖与节流](/performance/debounce-throttle)
- [内存泄漏排查](/performance/memory-leak)
- [Lighthouse](/performance/lighthouse)

### 🟢 加分
- [性能监控体系](/performance/monitoring)
- [框架级优化实战](/performance/framework-optimization)

---

## 十一、手写代码

### 🔴 必须会
- [new / call / apply / bind](/handwriting/new-call-apply-bind)
- [instanceof](/handwriting/instanceof)
- [Promise 完整版](/handwriting/promise)
- [Promise.all / race / allSettled / any](/handwriting/promise-methods)
- [防抖 / 节流](/handwriting/debounce-throttle)
- [深拷贝](/handwriting/deep-clone)
- [柯里化](/handwriting/curry)
- [EventEmitter 发布订阅](/handwriting/event-emitter)
- [数组扁平化 / 去重](/handwriting/flatten-unique)
- [Ajax / fetch 封装](/handwriting/ajax-fetch)

### 🟡 常考
- [async/await 实现](/handwriting/async-from-generator)
- [JSON.stringify / JSON.parse](/handwriting/json-stringify-parse)
- [模板字符串解析](/handwriting/template-string)
- [LRU 缓存](/handwriting/lru)
- [LazyMan](/handwriting/lazyman)
- [并发控制调度器](/handwriting/concurrency-control)
- [数组转树 / 树转数组](/handwriting/tree-array)
- [虚拟 DOM 渲染](/handwriting/vdom-render)
- [简易路由 Hash / History](/handwriting/simple-router)

---

## 十二、其他加分项

- [设计模式](/extras/design-patterns) — 单例 / 观察者 / 策略 / 代理 / 装饰器 / 工厂 / 适配器
- [跨端方案](/extras/cross-platform) — 小程序双线程 / RN / Flutter / Electron
- [微前端](/extras/micro-frontend) — qiankun / Module Federation / Web Components
- [SSR / SSG / ISR](/extras/ssr) — Next.js / Nuxt / Hydration
- [算法与数据结构](/extras/algorithms) — 数组 / 链表 / 树 / 双指针 / 滑窗 / DP / 回溯

---

## 怎么用

1. **打印或做清单** — 每点标记：✅ 能讲清 / ⚠️ 模糊 / ❌ 不会。
2. 先扫 🔴，再扫 🟡，🟢 有余力再看。
3. 每天 2-3 个点，**手写 + 讲一遍** 比看文章有效 10 倍。
4. 模拟面试时对着这个地图随机抽题。
