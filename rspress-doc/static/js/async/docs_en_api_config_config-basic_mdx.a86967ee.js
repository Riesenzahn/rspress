(self.webpackChunk_rspress_docs=self.webpackChunk_rspress_docs||[]).push([["docs_en_api_config_config-basic_mdx"],{50247:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var i,r=s("66791"),o=s("190"),l=s("93376");function t(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",p:"p",pre:"pre",blockquote:"blockquote"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"basic-config",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basic-config",children:"#"}),"Basic Config"]}),"\n",(0,r.jsxs)(n.h2,{id:"base",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#base",children:"#"}),"base"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"/"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Deployment base path. For example, if you plan to deploy your site to ",(0,r.jsx)(n.code,{children:"https://foo.github.io/bar/"}),", then you should set ",(0,r.jsx)(n.code,{children:"base"})," to ",(0,r.jsx)(n.code,{children:'"/bar/"'}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="rspress.config.ts"',children:"import { defineConfig } from 'rspress/config';\n\nexport default defineConfig({\n  base: '/bar/',\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"title",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#title",children:"#"}),"title"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:'"Island"'})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Site title. This parameter will be used as the title of the HTML page. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="rspress.config.ts"',children:"import { defineConfig } from 'rspress/config';\n\nexport default defineConfig({\n  title: 'My Site',\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"description",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#description",children:"#"}),"description"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Site description. This will be used as the description of the HTML page. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="rspress.config.ts"',children:"import { defineConfig } from 'rspress/config';\n\nexport default defineConfig({\n  description: 'My Site Description',\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"icon",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#icon",children:"#"}),"icon"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Site icon. This path will be used as the icon path for the HTML page. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="rspress.config.ts"',children:"import { defineConfig } from 'rspress/config';\n\nexport default defineConfig({\n  icon: '/favicon.ico',\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The framework will find your icon in the ",(0,r.jsx)(n.code,{children:"public"})," directory, of course you can also set it to a CDN address."]}),"\n",(0,r.jsxs)(n.h2,{id:"logo",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#logo",children:"#"}),"logo"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"string | { dark: string; light: string }"})]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Site logo. This path will be used as the logo path in the upper left corner of the navbar. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="rspress.config.ts"',children:"import { defineConfig } from 'rspress/config';\n\nexport default defineConfig({\n  logo: '/logo.png',\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The framework will find your icon in the ",(0,r.jsx)(n.code,{children:"public"})," directory, you can also set it to a CDN address."]}),"\n",(0,r.jsx)(n.p,{children:"Of course you can set different logos for dark/light mode:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="rspress.config.ts"',children:"import { defineConfig } from 'rspress/config';\n\nexport default defineConfig({\n  logo: {\n    dark: '/logo-dark.png',\n    light: '/logo-light.png',\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"outdir",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outdir",children:"#"}),"outDir"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"doc_build"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Custom output directory for built sites. for example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="rspress.config.ts"',children:"import { defineConfig } from 'rspress/config';\n\nexport default defineConfig({\n  outDir: 'doc_build',\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"locales",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#locales",children:"#"}),"locales"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"Locale[]"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:"",children:"export interface Locale {\n  lang: string;\n  label: string;\n  title?: string;\n  description?: string;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"I18n config of the site. for example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="rspress.config.ts"',children:"import { defineConfig } from 'rspress/config';\n\nexport default defineConfig({\n  locales: [\n    {\n      lang: 'en-US',\n      label: 'English',\n      title: 'Doc Tools',\n      description: 'Doc Tools',\n    },\n    {\n      lang: 'zh-CN',\n      label: '简体中文',\n      title: '文档框架',\n      description: '文档框架',\n    },\n  ],\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"mediumzoom",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mediumzoom",children:"#"}),"mediumZoom"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"boolean"})," | ",(0,r.jsx)(n.code,{children:"{ selector?: string }"})]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Whether to enable the image zoom function. It is enabled by default, you can disable it by setting ",(0,r.jsx)(n.code,{children:"mediumZoom"})," to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The bottom layer is implemented using the ",(0,r.jsx)(n.a,{href:"https://github.com/francoischalifour/medium-zoom",target:"_blank",rel:"noopener noreferrer",children:"medium-zoom"})," library."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example usage:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="rspress.config.ts"',children:"import { defineConfig } from 'rspress/config';\n\nexport default defineConfig({\n  // Turn off image zoom\n  mediumZoom: false,\n  // Configure the CSS selector to customize the picture to be zoomed, the default is '.modern-doc img'\n  mediumZoom: {\n    selector: '.modern-doc img',\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"search",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#search",children:"#"}),"search"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"{ searchHooks: string }"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can add search runtime hooks logic through the ",(0,r.jsx)(n.code,{children:"searchHooks"})," parameter, for example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="rspress.config.ts"',children:"import { defineConfig } from 'rspress/config';\nimport path from 'path';\n\nexport default defineConfig({\n  search: {\n    searchHooks: path.join(__dirname, 'searchHooks.ts'),\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.code,{children:"searchHooks.ts"}),", you need to export the ",(0,r.jsx)(n.code,{children:"onSearch"})," function, which will be called every time a search is performed. The input parameter is the search keyword, and you can customize the search interception logic here, for example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="searchHooks.ts"',children:"// Supports async function\nexport async function onSearch(query: string) {\n  // Execute custom logic, such as logging reporting\n  console.log(query);\n}\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"globaluicomponents",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#globaluicomponents",children:"#"}),"globalUIComponents"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Type: ",(0,r.jsx)(n.code,{children:"string[]"})]}),"\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can register global UI components through the ",(0,r.jsx)(n.code,{children:"globalUIComponents"})," parameter, for example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="rspress.config.ts"',children:"import { defineConfig } from 'rspress/config';\nimport path from 'path';\n\nexport default defineConfig({\n  globalUIComponents: [path.join(__dirname, 'components', 'MyComponent.tsx')],\n});\n"})}),"\n","\n",(0,r.jsx)(l.default,{})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fapi%2Fconfig%2Fconfig-basic.mdx"]={toc:[{id:"base",text:"base",depth:2},{id:"title",text:"title",depth:2},{id:"description",text:"description",depth:2},{id:"icon",text:"icon",depth:2},{id:"logo",text:"logo",depth:2},{id:"outdir",text:"outDir",depth:2},{id:"locales",text:"locales",depth:2},{id:"mediumzoom",text:"mediumZoom",depth:2},{id:"search",text:"search",depth:2},{id:"globaluicomponents",text:"globalUIComponents",depth:2}],title:"Basic Config",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}}}]);