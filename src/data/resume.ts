export interface Job {
  company: string;
  role: string;
  period: string;
  desc: string;
  bullets: string[];
}

export interface Project {
  name: string;
  meta: string;
  desc?: string;
  stack?: string;
  bullets: string[];
}

export const profile = {
  name: '赵雪丽',
  title: '前端开发工程师 · 7 年经验',
  phone: '15333030204',
  email: 'z1253108690@126.com',
  location: '太原',
  education: '山西省财政税务专科学校 · 电子商务技术 · 大专',
  github: 'https://github.com/sherllyzhao',
  target: 'Vue 系中高级前端',
};

export const skills: { label: string; text: string }[] = [
  { label: '前端框架', text: '熟练使用 Vue 全家桶（Vue Router / Vuex / Axios），熟悉组件化开发与前后端分离模式，可独立完成中后台系统从 0 到 1 搭建。' },
  { label: 'UI 组件库', text: '熟练使用 Element UI、Ant Design Vue，能基于组件库二次封装业务组件，在多套 UI 体系下保持交互一致。' },
  { label: '数据可视化', text: '熟练使用 ECharts，具备政府级数据大屏经验（省级地图下钻、多图表联动、报表模板打印）。' },
  { label: '移动端 / 小程序', text: '熟悉 uni-app 与微信小程序开发，熟悉 H5 与原生 App 混合开发及双向交互（打卡、文件上传 / 预览）。' },
  { label: '桌面端', text: '熟悉 Electron 桌面应用开发，有多窗口通信、Session 持久化、脚本注入、exe / dmg 双平台打包经验。' },
  { label: '基础功底', text: '熟练掌握 HTML5、CSS3、SCSS、JavaScript（ES6+）、jQuery，可高保真还原设计稿并完成响应式适配。' },
  { label: '工程化', text: '熟悉 Git 协作、Vue CLI / Vite 构建；了解 Cloudflare Workers（Serverless）、GitHub Actions 自动化部署。' },
  { label: '拓展能力', text: '了解 React、Astro、TypeScript；熟练运用 AI 编程助手（如 Claude Code）进行方案调研、编码与测试，显著提升交付效率。' },
];

export const tags = [
  'Vue', 'Vue Router', 'Vuex', 'Element UI', 'Ant Design Vue', 'ECharts',
  'uni-app', '微信小程序', 'Electron', 'SCSS', 'ES6+', 'Vite',
  'Cloudflare Workers', 'GitHub Actions', 'React', 'Astro', 'TypeScript', 'Claude Code',
];

export const jobs: Job[] = [
  {
    company: '山西资海科技开发有限公司',
    role: '前端开发工程师',
    period: '2021.06 – 至今',
    desc: '龙采科技旗下子公司，研发公司自用 SaaS 产品线。',
    bullets: [
      '负责多条产品线前端开发，覆盖中后台管理系统、数据大屏、官网 / 落地页、H5、小程序及 Electron 桌面端，累计参与 10+ 个项目（官网、视频管家、云名片、抢单平台、员工端、AIGC、建站通及其插件等）。',
      '独立负责视频管家、抢单平台（客资端 / 员工端 / 大屏）、自动发布媒体工具等项目的前端全流程：需求沟通 → 设计稿还原 → 接口联调 → 上线维护。',
      '主导 Electron 自动发布媒体工具从 0 到 1 落地，打通抖音、小红书、视频号等 9 个内容平台的自动授权与发布。',
    ],
  },
  {
    company: '山西硬汉网络科技有限公司',
    role: '前端开发工程师',
    period: '2019.05 – 2021.05',
    desc: '优逸客旗下子公司，主要承接政府及公安信息化项目。',
    bullets: [
      '参与山西省公安厅、太原市公安局、太原市政法委等多个政府级项目前端开发：警情报表系统、情指大数据实战一体化平台、110 指挥中心警情数据可视化平台、政法干部信息管理系统、12110 数据接口系统。',
      '负责大屏可视化与数据统计分析模块，基于 ECharts 实现山西省地图下钻、多维度图表及报表打印。',
      '完成硬汉官网、狮子座公考官网、优逸客官网等企业官网的前端开发。',
    ],
  },
];

export const projects: Project[] = [
  {
    name: '抢单平台（客资端 / 员工端 / 数据大屏）',
    meta: '山西资海 · 前端开发（独立负责）',
    desc: '面向客资与员工的任务派发与验收系统：客资端下发项目与任务，员工端项目经理拆分派单、员工认领执行、逐级提交验收，数据大屏实时展示任务全貌。',
    stack: 'Vue、Element UI（客资端）、Ant Design Vue（员工端）、ECharts + HTML（大屏）、SCSS、Axios',
    bullets: [
      '独立完成客资端、员工端、数据大屏三端前端开发与接口联调。',
      '实现任务下发 → 认领 → 提交 → 逐级验收的完整状态流转与多角色权限控制。',
      '基于 ECharts 搭建数据大屏，实时展示任务分布与完成情况。',
    ],
  },
  {
    name: '太原市公安局情指大数据实战一体化平台',
    meta: '山西硬汉 · 前端开发',
    desc: '面向辖区警情全貌的可视化分析与执勤管理平台，涵盖警情研判、报表处理、执勤信息 / 调度 / 考核、接处警工作量考核及全流程执法办案数据可视化。',
    stack: 'Vue、Element UI、ECharts、SCSS、Axios',
    bullets: [
      '负责大屏可视化界面开发，基于 ECharts 实现山西省地图逐级下钻及多类型图表联动。',
      '独立负责警情研判、警情统计分析两个子系统：列表渲染、多条件筛选与动态数据展示。',
      '实现数据动态填充至表格与文档模板，完成文档 / 报表打印功能。',
    ],
  },
  {
    name: '自动发布媒体工具（Electron 桌面端）',
    meta: '山西资海 · 独立开发',
    desc: '面向运营人员的多平台内容自动发布工具：支持抖音、小红书、视频号的视频发布，以及百家号、腾讯内容开放平台、新浪头条、搜狐号、今日头条、网易号的图文自动授权与发布，打包为 Windows exe / macOS dmg。',
    stack: 'Electron、Vue、Chromium、Node.js',
    bullets: [
      '从 0 到 1 主导架构设计与全部功能实现：基于 Electron 内置 Chromium，按 URL 自动注入脚本完成表单填写、图片 / 视频上传、立即或定时发布。',
      '设计多账号独立 Session 与持久化方案，登录态重启不丢失；实现主窗口与子窗口双向通信及跨页面全局数据存储。',
      '攻克持久化存储、注入脚本事件信任（isTrusted）、头条表单保存失败等难点，完成 exe / dmg 双平台打包。',
      '全程结合 AI 编程助手完成方案调研与编码，大幅缩短交付周期。',
    ],
  },
  {
    name: 'AIGC 内容生产平台',
    meta: '山西资海 · 前端开发',
    desc: '集素材库、数字人、视频拼剪、GEO 文章生成、AI 生图 / 生视频于一体的内容生产系统。',
    stack: 'Vue、Element UI、SCSS、Axios',
    bullets: [
      '负责素材库、数字人两个模块的前端开发。',
      '借助 AI 辅助重构 GEO 拓词工具：解决海量关键词全量展示与 5000 条上限之间的冲突，保证每个词可见且渲染性能可控。',
    ],
  },
  {
    name: '太原市政法干部信息管理系统',
    meta: '山西硬汉 · 前端开发',
    desc: '为太原市政法委开发的干部信息管理平台，覆盖公检法司全体干部的模糊 / 精确查询、列表与详情、组织架构查看、导出打印及数据分析。',
    stack: 'Vue 全家桶、Element UI、ECharts、Axios',
    bullets: [
      '负责数据分析模块：基于 ECharts 完成多维度干部数据的可视化统计与分析。',
      '完成查询、列表、详情等页面的功能实现、接口对接与数据渲染。',
    ],
  },
  {
    name: '视频管家',
    meta: '山西资海 · 前端开发（独立负责）',
    desc: '摄像头设备管理与监控内容查看系统。',
    stack: 'Vue、Element UI、SCSS、Axios、西瓜视频播放器（Xigua Player）',
    bullets: ['独立负责前端开发：集成西瓜播放器解析并播放监控流，实现摄像头参数配置与远程控制。'],
  },
  {
    name: '12110 数据接口系统',
    meta: '山西硬汉 · 前端开发',
    desc: '分省级 / 市级两个子系统，提供签名配置管理、IP 地址管理、访问测试等功能。',
    stack: 'Vue、Element UI、SCSS、Axios',
    bullets: ['负责省级子系统全部页面开发与功能实现，完成接口对接与动态数据渲染。'],
  },
  {
    name: 'Sherlly Assistant（个人项目 · 四端全栈）',
    meta: '个人项目 · 独立开发',
    desc: '个人任务提醒助手：支持周期提醒、提醒时间与重要程度设置、每日总结、网站账号密码记录，覆盖 Web、Windows 桌面端、Android 手机端。',
    stack: 'React（JSX）、Vite、Electron、Expo（React Native）、Cloudflare Workers、Durable Objects、KV、GitHub Pages、GitHub Actions',
    bullets: [
      '独立完成需求梳理、架构设计与多端实现：Cloudflare Workers 提供 Serverless API，Durable Objects 持久化用户数据；Web 端托管于 GitHub Pages，Electron 与 Expo 客户端复用同一套接口。',
      '通过 GitHub Actions 实现 push 自动构建部署；搭建 Pages 代理层解决 API 网络可达性问题。',
      '全程以 AI 编程助手协作开发，实践「需求拆解 → AI 生成 → 人工验证」的高效工作流。',
    ],
  },
  {
    name: '官网 / 落地页 / H5 / 小程序类项目',
    meta: '山西资海 · 前端开发',
    bullets: [
      '资海云官网及旗下官网、产品落地页：HTML / CSS / JS、jQuery、Swiper、animate.css；完成页面布局、响应式改造与 Ajax 数据对接。',
      '云经理 App 内嵌 H5：申请、审批与详情展示页面；与原生 App 交互实现打卡、文件上传与文件预览（PHP 模板 + HTML / CSS）。',
      '餐饮小程序：uni-app；点菜推荐、自定义菜单、下单及返利活动页面开发与功能迭代。',
    ],
  },
];

export const evaluation = [
  '7 年前端开发经验，技术路径从 jQuery → Vue → Electron / Serverless 持续演进，从政府级数据大屏到企业 SaaS 中后台均有完整交付经验。',
  '具备独立负责项目的能力：需求沟通、设计稿还原、接口联调、上线维护全流程闭环，多个项目为独立开发交付。',
  '积极拥抱 AI 编程工具并将其融入日常开发流程，在提升效率的同时保持对技术方案与代码质量的把控；注重团队协作，善于总结复盘。',
];
