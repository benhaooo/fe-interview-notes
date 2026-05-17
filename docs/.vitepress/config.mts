import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '前端面试知识库',
  description: '系统化前端面试准备笔记 · 按知识地图整理',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  appearance: 'dark',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }]
  ],

  markdown: {
    lineNumbers: true,
    theme: { light: 'github-light', dark: 'github-dark' }
  },

  themeConfig: {
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最近更新' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色',
    darkModeSwitchTitle: '切换到深色',

    editLink: {
      pattern: 'https://github.com/benhaooo/fe-interview-notes/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },

    nav: [
      { text: '首页', link: '/' },
      {
        text: '基础',
        items: [
          { text: 'JavaScript', link: '/javascript/' },
          { text: 'CSS', link: '/css/' },
          { text: 'HTML / DOM', link: '/html-dom/' },
          { text: '浏览器', link: '/browser/' },
          { text: '网络', link: '/network/' }
        ]
      },
      {
        text: '框架',
        items: [
          { text: 'React', link: '/react/' },
          { text: 'Vue', link: '/vue/' }
        ]
      },
      {
        text: '工程',
        items: [
          { text: '工程化', link: '/engineering/' },
          { text: 'TypeScript', link: '/typescript/' },
          { text: '性能优化', link: '/performance/' }
        ]
      },
      {
        text: '实战',
        items: [
          { text: '手写代码', link: '/handwriting/' },
          { text: '加分项', link: '/extras/' }
        ]
      },
      { text: '知识地图', link: '/roadmap' }
    ],

    sidebar: {
      '/javascript/': sidebarJavaScript(),
      '/css/': sidebarCSS(),
      '/html-dom/': sidebarHTML(),
      '/browser/': sidebarBrowser(),
      '/network/': sidebarNetwork(),
      '/react/': sidebarReact(),
      '/vue/': sidebarVue(),
      '/engineering/': sidebarEngineering(),
      '/typescript/': sidebarTypeScript(),
      '/performance/': sidebarPerformance(),
      '/handwriting/': sidebarHandwriting(),
      '/extras/': sidebarExtras()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/benhaooo/fe-interview-notes' }
    ],

    footer: {
      message: '🔴 高频必会 · 🟡 中频常考 · 🟢 加分项',
      copyright: 'Built with VitePress'
    }
  }
})

function sidebarJavaScript() {
  return [
    {
      text: 'JavaScript',
      items: [{ text: '总览', link: '/javascript/' }]
    },
    {
      text: '🔴 核心基础',
      collapsed: false,
      items: [
        { text: '数据类型与类型判断', link: '/javascript/data-types' },
        { text: '类型转换与相等', link: '/javascript/type-conversion' },
        { text: '变量声明与作用域', link: '/javascript/variable-scope' },
        { text: '闭包', link: '/javascript/closure' },
        { text: 'this 指向', link: '/javascript/this' },
        { text: '原型与原型链 / 继承', link: '/javascript/prototype' },
        { text: 'new 操作符原理', link: '/javascript/new' }
      ]
    },
    {
      text: '🔴 异步',
      collapsed: false,
      items: [
        { text: '事件循环', link: '/javascript/event-loop' },
        { text: 'Promise', link: '/javascript/promise' },
        { text: 'async / await', link: '/javascript/async-await' },
        { text: 'Generator', link: '/javascript/generator' },
        { text: '异步演进', link: '/javascript/async-evolution' }
      ]
    },
    {
      text: '🔴 ES6+',
      collapsed: false,
      items: [
        { text: '解构 / 展开 / 模板字符串', link: '/javascript/es6-syntax' },
        { text: 'Symbol / BigInt', link: '/javascript/symbol-bigint' },
        { text: 'Map / Set / WeakMap / WeakSet', link: '/javascript/collections' },
        { text: 'Proxy / Reflect', link: '/javascript/proxy-reflect' },
        { text: 'Iterator / for...of', link: '/javascript/iterator' },
        { text: 'Module 与 CommonJS', link: '/javascript/module' },
        { text: '可选链 / 空值合并', link: '/javascript/optional-chaining' }
      ]
    },
    {
      text: '🟡 进阶',
      collapsed: false,
      items: [
        { text: '执行上下文与执行栈', link: '/javascript/execution-context' },
        { text: '垃圾回收', link: '/javascript/garbage-collection' },
        { text: '内存泄漏', link: '/javascript/memory-leak' },
        { text: '尾调用优化', link: '/javascript/tail-call' },
        { text: '深拷贝', link: '/javascript/deep-clone' },
        { text: '函数式编程', link: '/javascript/functional' },
        { text: '正则表达式', link: '/javascript/regex' }
      ]
    },
    {
      text: '🟢 加分',
      collapsed: true,
      items: [
        { text: 'V8 引擎原理', link: '/javascript/v8-engine' },
        { text: 'AST 抽象语法树', link: '/javascript/ast' },
        { text: 'Web Workers', link: '/javascript/web-workers' },
        { text: 'WebAssembly', link: '/javascript/webassembly' }
      ]
    }
  ]
}

function sidebarCSS() {
  return [
    { text: 'CSS', items: [{ text: '总览', link: '/css/' }] },
    {
      text: '🔴 核心',
      collapsed: false,
      items: [
        { text: '盒模型', link: '/css/box-model' },
        { text: 'BFC', link: '/css/bfc' },
        { text: '选择器优先级', link: '/css/selector-priority' },
        { text: '定位', link: '/css/positioning' },
        { text: 'Flex 布局', link: '/css/flex' },
        { text: 'Grid 布局', link: '/css/grid' },
        { text: '居中方案', link: '/css/centering' },
        { text: '响应式布局', link: '/css/responsive' }
      ]
    },
    {
      text: '🟡 中频',
      collapsed: false,
      items: [
        { text: '层叠上下文 / z-index', link: '/css/stacking-context' },
        { text: '浮动与清除浮动', link: '/css/float' },
        { text: 'CSS 变量', link: '/css/variables' },
        { text: '伪类与伪元素', link: '/css/pseudo' },
        { text: 'transition / animation', link: '/css/animation' },
        { text: 'CSS 性能优化', link: '/css/performance' },
        { text: '移动端适配', link: '/css/mobile-adaptation' },
        { text: '预处理器', link: '/css/preprocessor' }
      ]
    },
    {
      text: '🟢 加分',
      collapsed: true,
      items: [
        { text: 'CSS Houdini', link: '/css/houdini' },
        { text: 'CSS 新特性', link: '/css/new-features' },
        { text: 'CSS-in-JS 原理', link: '/css/css-in-js' },
        { text: 'Tailwind 原理', link: '/css/tailwind' }
      ]
    }
  ]
}

function sidebarHTML() {
  return [
    { text: 'HTML / DOM', items: [{ text: '总览', link: '/html-dom/' }] },
    {
      text: '🔴 核心',
      collapsed: false,
      items: [
        { text: '语义化标签', link: '/html-dom/semantic' },
        { text: 'display 类型', link: '/html-dom/display-types' },
        { text: 'HTML5 新特性', link: '/html-dom/html5' },
        { text: 'DOM 事件流', link: '/html-dom/event-flow' },
        { text: '事件委托', link: '/html-dom/event-delegation' },
        { text: 'DOM 操作性能', link: '/html-dom/dom-performance' }
      ]
    },
    {
      text: '🟡 中频',
      collapsed: false,
      items: [
        { text: 'Shadow DOM', link: '/html-dom/shadow-dom' },
        { text: 'Canvas / SVG', link: '/html-dom/canvas-svg' },
        { text: 'Web Components', link: '/html-dom/web-components' },
        { text: '无障碍 a11y / ARIA', link: '/html-dom/accessibility' },
        { text: 'meta 标签', link: '/html-dom/meta-tags' }
      ]
    }
  ]
}

function sidebarBrowser() {
  return [
    { text: '浏览器', items: [{ text: '总览', link: '/browser/' }] },
    {
      text: '🔴 核心',
      collapsed: false,
      items: [
        { text: '输入 URL 到页面渲染', link: '/browser/url-to-render' },
        { text: '渲染流程', link: '/browser/rendering-pipeline' },
        { text: '回流与重绘', link: '/browser/reflow-repaint' },
        { text: '缓存策略', link: '/browser/cache' },
        { text: '跨域', link: '/browser/cors' },
        { text: '浏览器存储', link: '/browser/storage' },
        { text: '浏览器安全', link: '/browser/security' }
      ]
    },
    {
      text: '🟡 中频',
      collapsed: false,
      items: [
        { text: '多进程架构', link: '/browser/multi-process' },
        { text: 'JS 引擎与渲染引擎协作', link: '/browser/js-render-engine' },
        { text: '合成层 / GPU 加速', link: '/browser/composite-gpu' },
        { text: 'Performance API 与性能指标', link: '/browser/performance-api' },
        { text: 'Service Worker / PWA', link: '/browser/service-worker' },
        { text: '页面生命周期', link: '/browser/page-lifecycle' },
        { text: '内存泄漏排查', link: '/browser/memory-debug' }
      ]
    },
    {
      text: '🟢 加分',
      collapsed: true,
      items: [
        { text: '浏览器指纹', link: '/browser/fingerprint' },
        { text: 'Web Vitals 优化', link: '/browser/web-vitals' },
        { text: 'DevTools 高级', link: '/browser/devtools-advanced' }
      ]
    }
  ]
}

function sidebarNetwork() {
  return [
    { text: '网络', items: [{ text: '总览', link: '/network/' }] },
    {
      text: '🔴 核心',
      collapsed: false,
      items: [
        { text: 'HTTP 1.0/1.1/2/3', link: '/network/http-versions' },
        { text: 'HTTPS / TLS', link: '/network/https' },
        { text: 'TCP 三次握手 / 四次挥手', link: '/network/tcp-handshake' },
        { text: 'TCP vs UDP', link: '/network/tcp-udp' },
        { text: 'HTTP 状态码', link: '/network/http-status' },
        { text: 'HTTP 请求方法', link: '/network/http-methods' },
        { text: 'HTTP Headers', link: '/network/http-headers' },
        { text: 'DNS 解析', link: '/network/dns' }
      ]
    },
    {
      text: '🟡 中频',
      collapsed: false,
      items: [
        { text: 'WebSocket', link: '/network/websocket' },
        { text: 'CDN 原理', link: '/network/cdn' },
        { text: 'RESTful API', link: '/network/restful' },
        { text: 'JWT vs Session', link: '/network/jwt-session' },
        { text: '正向 / 反向代理', link: '/network/proxy' },
        { text: '队头阻塞 / 多路复用', link: '/network/multiplexing' },
        { text: 'QUIC 协议', link: '/network/quic' }
      ]
    },
    {
      text: '🟢 加分',
      collapsed: true,
      items: [
        { text: 'gRPC / GraphQL', link: '/network/grpc-graphql' },
        { text: 'SSE', link: '/network/sse' },
        { text: '中间人攻击', link: '/network/mitm' }
      ]
    }
  ]
}

function sidebarReact() {
  return [
    { text: 'React', items: [{ text: '总览', link: '/react/' }] },
    {
      text: '🔴 核心',
      collapsed: false,
      items: [
        { text: 'JSX 本质', link: '/react/jsx' },
        { text: '组件生命周期', link: '/react/lifecycle' },
        { text: 'Hooks 原理', link: '/react/hooks' },
        { text: 'Hooks 规则', link: '/react/hooks-rules' },
        { text: '自定义 Hook', link: '/react/custom-hooks' },
        { text: 'setState 同步异步', link: '/react/setstate' },
        { text: '事件系统', link: '/react/event-system' },
        { text: 'Diff 算法', link: '/react/diff' },
        { text: '受控 vs 非受控', link: '/react/controlled' },
        { text: 'Context 原理与陷阱', link: '/react/context' }
      ]
    },
    {
      text: '🟡 中频',
      collapsed: false,
      items: [
        { text: 'Fiber 架构', link: '/react/fiber' },
        { text: '并发模式', link: '/react/concurrent' },
        { text: 'React 18 新特性', link: '/react/react-18' },
        { text: '状态管理对比', link: '/react/state-management' },
        { text: 'React Router', link: '/react/router' },
        { text: '虚拟 DOM', link: '/react/virtual-dom' },
        { text: '性能优化', link: '/react/performance' },
        { text: '错误边界', link: '/react/error-boundary' },
        { text: 'Portals', link: '/react/portals' }
      ]
    },
    {
      text: '🟢 加分',
      collapsed: true,
      items: [
        { text: 'React Server Components', link: '/react/rsc' },
        { text: 'Suspense + Streaming SSR', link: '/react/streaming-ssr' },
        { text: 'React 编译器', link: '/react/compiler' },
        { text: 'Scheduler 原理', link: '/react/scheduler' },
        { text: '从零实现简易 React', link: '/react/mini-react' }
      ]
    }
  ]
}

function sidebarVue() {
  return [
    { text: 'Vue', items: [{ text: '总览', link: '/vue/' }] },
    {
      text: '🔴 核心',
      collapsed: false,
      items: [
        { text: '响应式原理', link: '/vue/reactivity' },
        { text: '依赖收集与派发更新', link: '/vue/dep-collection' },
        { text: '虚拟 DOM 与 Diff', link: '/vue/vdom-diff' },
        { text: '组件生命周期', link: '/vue/lifecycle' },
        { text: 'Composition vs Options', link: '/vue/composition-api' },
        { text: 'computed / watch / watchEffect', link: '/vue/computed-watch' },
        { text: 'v-model 原理', link: '/vue/v-model' },
        { text: 'nextTick 原理', link: '/vue/nexttick' },
        { text: '模板编译过程', link: '/vue/compile' }
      ]
    },
    {
      text: '🟡 中频',
      collapsed: false,
      items: [
        { text: 'Vue Router 原理', link: '/vue/router' },
        { text: 'Vuex / Pinia', link: '/vue/vuex-pinia' },
        { text: 'keep-alive 原理', link: '/vue/keep-alive' },
        { text: '插槽', link: '/vue/slots' },
        { text: 'Teleport / Suspense', link: '/vue/teleport-suspense' },
        { text: 'Vue3 性能优化', link: '/vue/vue3-perf' },
        { text: 'Ref / Reactive / toRefs', link: '/vue/ref-reactive' }
      ]
    },
    {
      text: '🟢 加分',
      collapsed: true,
      items: [
        { text: 'Vue3 编译优化细节', link: '/vue/compile-advanced' },
        { text: '自定义渲染器', link: '/vue/custom-renderer' },
        { text: 'Vue Vapor Mode', link: '/vue/vapor' }
      ]
    }
  ]
}

function sidebarEngineering() {
  return [
    { text: '工程化', items: [{ text: '总览', link: '/engineering/' }] },
    {
      text: '🔴 核心',
      collapsed: false,
      items: [
        { text: 'Webpack 核心概念', link: '/engineering/webpack-core' },
        { text: 'Webpack 打包流程', link: '/engineering/webpack-flow' },
        { text: '常用 Loader 和 Plugin', link: '/engineering/webpack-loader-plugin' },
        { text: 'Webpack 优化', link: '/engineering/webpack-optimization' },
        { text: 'Vite 原理', link: '/engineering/vite' },
        { text: 'Webpack vs Vite', link: '/engineering/webpack-vs-vite' },
        { text: 'Babel 原理', link: '/engineering/babel' },
        { text: '模块化 CommonJS / ESM', link: '/engineering/modules' }
      ]
    },
    {
      text: '🟡 中频',
      collapsed: false,
      items: [
        { text: 'Source Map', link: '/engineering/source-map' },
        { text: 'HMR 热更新', link: '/engineering/hmr' },
        { text: 'CSS 模块化方案', link: '/engineering/css-modules' },
        { text: '代码规范', link: '/engineering/lint' },
        { text: '包管理 npm / yarn / pnpm', link: '/engineering/package-managers' },
        { text: 'Monorepo', link: '/engineering/monorepo' },
        { text: 'CI / CD', link: '/engineering/ci-cd' }
      ]
    },
    {
      text: '🟢 加分',
      collapsed: true,
      items: [
        { text: '手写简易 Webpack', link: '/engineering/mini-webpack' },
        { text: 'Rollup / esbuild / SWC', link: '/engineering/rollup-esbuild-swc' },
        { text: 'Module Federation', link: '/engineering/module-federation' },
        { text: '构建产物分析', link: '/engineering/bundle-analyzer' }
      ]
    }
  ]
}

function sidebarTypeScript() {
  return [
    { text: 'TypeScript', items: [{ text: '总览', link: '/typescript/' }] },
    {
      text: '🔴 核心',
      collapsed: false,
      items: [
        { text: '基础类型 / 联合 / 交叉', link: '/typescript/basic-types' },
        { text: 'interface vs type', link: '/typescript/interface-vs-type' },
        { text: '泛型', link: '/typescript/generics' },
        { text: '内置工具类型', link: '/typescript/utility-types' },
        { text: '类型守卫', link: '/typescript/type-guards' },
        { text: '枚举', link: '/typescript/enum' }
      ]
    },
    {
      text: '🟡 中频',
      collapsed: false,
      items: [
        { text: '协变与逆变', link: '/typescript/variance' },
        { text: '声明文件 .d.ts', link: '/typescript/declaration' },
        { text: '条件 / 映射 / 模板字面量类型', link: '/typescript/advanced-types' },
        { text: 'infer 关键字', link: '/typescript/infer' },
        { text: 'any vs unknown vs never', link: '/typescript/any-unknown-never' },
        { text: 'TS 在 React/Vue 最佳实践', link: '/typescript/best-practices' }
      ]
    },
    {
      text: '🟢 加分',
      collapsed: true,
      items: [
        { text: '类型体操', link: '/typescript/type-challenges' },
        { text: 'TS 编译原理', link: '/typescript/compile' }
      ]
    }
  ]
}

function sidebarPerformance() {
  return [
    { text: '性能优化', items: [{ text: '总览', link: '/performance/' }] },
    {
      text: '🔴 核心',
      collapsed: false,
      items: [
        { text: '加载优化', link: '/performance/loading' },
        { text: '渲染优化', link: '/performance/rendering' },
        { text: '图片优化', link: '/performance/images' },
        { text: '首屏优化', link: '/performance/first-screen' },
        { text: '性能指标', link: '/performance/metrics' }
      ]
    },
    {
      text: '🟡 中频',
      collapsed: false,
      items: [
        { text: '长列表 / 虚拟滚动', link: '/performance/virtual-list' },
        { text: 'Web Worker', link: '/performance/web-worker' },
        { text: '防抖与节流', link: '/performance/debounce-throttle' },
        { text: '内存泄漏排查', link: '/performance/memory-leak' },
        { text: 'Lighthouse', link: '/performance/lighthouse' }
      ]
    },
    {
      text: '🟢 加分',
      collapsed: true,
      items: [
        { text: '性能监控体系', link: '/performance/monitoring' },
        { text: '框架级优化实战', link: '/performance/framework-optimization' }
      ]
    }
  ]
}

function sidebarHandwriting() {
  return [
    { text: '手写代码', items: [{ text: '总览', link: '/handwriting/' }] },
    {
      text: '🔴 必须会',
      collapsed: false,
      items: [
        { text: 'new / call / apply / bind', link: '/handwriting/new-call-apply-bind' },
        { text: 'instanceof', link: '/handwriting/instanceof' },
        { text: 'Promise 完整版', link: '/handwriting/promise' },
        { text: 'Promise.all / race / allSettled / any', link: '/handwriting/promise-methods' },
        { text: '防抖 / 节流', link: '/handwriting/debounce-throttle' },
        { text: '深拷贝', link: '/handwriting/deep-clone' },
        { text: '柯里化', link: '/handwriting/curry' },
        { text: 'EventEmitter 发布订阅', link: '/handwriting/event-emitter' },
        { text: '数组扁平化 / 去重', link: '/handwriting/flatten-unique' },
        { text: 'Ajax / fetch 封装', link: '/handwriting/ajax-fetch' }
      ]
    },
    {
      text: '🟡 常考',
      collapsed: false,
      items: [
        { text: 'async/await 实现', link: '/handwriting/async-from-generator' },
        { text: 'JSON.stringify / parse', link: '/handwriting/json-stringify-parse' },
        { text: '模板字符串解析', link: '/handwriting/template-string' },
        { text: 'LRU 缓存', link: '/handwriting/lru' },
        { text: 'LazyMan', link: '/handwriting/lazyman' },
        { text: '并发控制调度器', link: '/handwriting/concurrency-control' },
        { text: '数组转树 / 树转数组', link: '/handwriting/tree-array' },
        { text: '虚拟 DOM 渲染', link: '/handwriting/vdom-render' },
        { text: '简易路由', link: '/handwriting/simple-router' }
      ]
    }
  ]
}

function sidebarExtras() {
  return [
    { text: '加分项', items: [{ text: '总览', link: '/extras/' }] },
    {
      text: '🟡 模块',
      collapsed: false,
      items: [
        { text: '设计模式', link: '/extras/design-patterns' },
        { text: '跨端方案', link: '/extras/cross-platform' },
        { text: '微前端', link: '/extras/micro-frontend' },
        { text: 'SSR / SSG / ISR', link: '/extras/ssr' }
      ]
    },
    {
      text: '🟢 算法',
      collapsed: true,
      items: [{ text: '算法与数据结构', link: '/extras/algorithms' }]
    }
  ]
}
