// 个人主页文案。事实来源为 resume.ts，改为第一人称叙述。
// image 为 null 时作品卡片显示可替换的 CSS 构图区域；截图放到 public/works/ 后填路径即可。

export interface WorkLink {
  label: string;
  href: string;
}

export interface Work {
  slug: string;
  kicker: string;
  title: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  image: string | null;
  imageAlt: string;
  links: WorkLink[];
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Milestone {
  period: string;
  title: string;
  org: string;
  text: string;
}

export const site = {
  name: '赵雪丽',
  seal: '雪',
  role: '前端开发工程师',
  location: '山西 · 太原',
  email: 'z1253108690@126.com',
  github: 'https://github.com/sherllyzhao',
  githubLabel: 'github.com/sherllyzhao',
  url: 'https://sherllyzhao.github.io/resume',
  description: '赵雪丽的个人主页。七年前端开发经验，从政府数据大屏到 SaaS 中后台、Electron 桌面端与 Serverless 全栈的个人项目。',
};

export const nav = [
  { href: '#works', label: '作品' },
  { href: '#about', label: '关于' },
  { href: '#journey', label: '经历' },
  { href: 'cv/', label: '简历' },
];

export const hero = {
  kicker: 'Front-end developer · 太原',
  title: '写了七年前端，',
  titleEm: '从数据大屏到桌面端',
  titleEnd: '，把想法做成能用的东西。',
  lead: '你好，我是赵雪丽。日常用 Vue 搭中后台和大屏，也做 Electron 桌面工具、小程序和 H5；业余时间在 Cloudflare Workers 上把自己的小需求做成 Web + 桌面端的产品。',
  note: 'Vue · ECharts · Electron · uni-app · Cloudflare Workers',
};

export const works: Work[] = [
  {
    slug: 'sherlly-assistant',
    kicker: '个人项目 · 全栈开发',
    title: 'Sherlly Assistant',
    period: '进行中',
    summary: '我自己的任务提醒助手：周期提醒、重要程度、每日总结和账号记录，Web 端已上线，桌面端基于 Electron 实现。',
    highlights: [
      'Cloudflare Workers 提供 Serverless API，Durable Objects 持久化用户数据。',
      'React + Vite 的 Web 端托管在 GitHub Pages，自动化构建部署。',
      '借助 AI 编程助手实现 Electron 桌面端，理解主进程与渲染进程的通信机制。',
    ],
    stack: ['React', 'Vite', 'Electron', 'Cloudflare Workers', 'Durable Objects'],
    image: null,
    imageAlt: 'Sherlly Assistant Web 端与桌面端截图',
    links: [{ label: '源码', href: 'https://github.com/sherllyzhao' }],
  },
  {
    slug: 'media-publisher',
    kicker: 'Electron 桌面工具 · 参与开发',
    title: '自动发布媒体工具',
    period: '山西资海',
    summary: '给运营同事做的多平台内容自动发布工具，我参与了前端界面与业务逻辑开发，Electron 底层架构由 AI 工具协作完成。',
    highlights: [
      '负责前端界面开发：Vue 实现表单配置、素材管理与发布列表。',
      '理解 Electron 的多窗口通信与 Session 持久化机制。',
      '参与打包流程，输出 Windows exe 与 macOS dmg。',
    ],
    stack: ['Electron', 'Vue', 'Chromium', 'Node.js'],
    image: null,
    imageAlt: '自动发布媒体工具主界面截图',
    links: [],
  },
  {
    slug: 'task-platform',
    kicker: 'SaaS 中后台 + 数据大屏 · 独立负责',
    title: '抢单平台',
    period: '山西资海',
    summary: '客资端下发任务，员工端项目经理拆单派发、员工认领执行、逐级验收，数据大屏实时展示全貌。三端前端由我一个人从零搭起。',
    highlights: [
      '任务下发 → 认领 → 提交 → 逐级验收的完整状态流转与多角色权限控制。',
      '客资端用 Element UI、员工端用 Ant Design Vue，两套组件库下保持交互一致。',
      'ECharts 大屏实时展示任务分布与完成情况。',
    ],
    stack: ['Vue', 'Element UI', 'Ant Design Vue', 'ECharts', 'SCSS'],
    image: null,
    imageAlt: '抢单平台员工端与数据大屏截图',
    links: [],
  },
  {
    slug: 'police-dashboard',
    kicker: '政府级数据可视化',
    title: '情指大数据实战一体化平台',
    period: '山西硬汉 · 2019 – 2021',
    summary: '为太原市公安局做的警情可视化分析与执勤管理平台。我负责大屏和两个统计子系统。',
    highlights: [
      'ECharts 实现山西省地图逐级下钻与多类型图表联动。',
      '独立负责警情研判、警情统计分析两个子系统的筛选与动态数据展示。',
      '数据动态填充到文档模板，完成报表打印。',
    ],
    stack: ['Vue', 'Element UI', 'ECharts', 'SCSS'],
    image: null,
    imageAlt: '情指大数据平台大屏截图',
    links: [],
  },
];

export const about = {
  title: '关于我',
  paragraphs: [
    '2019 年入行，第一份工作在做政府和公安信息化项目的团队，天天和 ECharts、地图下钻、报表打印打交道，把「数据大屏」这件事从头到尾做熟了。',
    '2021 年到现在在山西资海，负责公司自用 SaaS 产品线的前端：中后台、官网落地页、H5、小程序，后来又接手了 Electron 桌面端。技术路线从 jQuery 走到 Vue，再到 Electron 和 Serverless，是被真实需求一步步推着走的。',
    '我习惯把一件事从需求沟通做到上线维护，多个项目是独立交付的。这两年也把 AI 编程助手融进日常流程——方案调研、编码、测试都用，但技术方案和代码质量的判断还是自己把关。',
  ],
  quote: '好用的东西不需要解释太多，把状态流转和边界情况都处理干净，用户自然会感觉到。',
};

export const skillGroups: SkillGroup[] = [
  { name: '框架与工程', items: ['Vue 全家桶', 'Vite / Vue CLI', 'SCSS', 'ES6+', 'TypeScript', 'React', 'Astro'] },
  { name: 'UI 与可视化', items: ['Element UI', 'Ant Design Vue', 'ECharts', '设计稿高保真还原', '响应式适配'] },
  { name: '多端交付', items: ['Electron', 'uni-app', '微信小程序', 'H5 与原生混合开发'] },
  { name: '云与协作', items: ['Cloudflare Workers', 'Durable Objects', 'GitHub Actions', 'Git', 'Claude Code'] },
];

export const journey: Milestone[] = [
  {
    period: '2021.06 – 至今',
    title: '前端开发工程师',
    org: '山西资海科技开发有限公司',
    text: '负责多条 SaaS 产品线前端：中后台、数据大屏、官网与落地页、H5、小程序、Electron 桌面端，累计参与 10+ 个项目，其中视频管家、抢单平台、自动发布媒体工具为独立负责。',
  },
  {
    period: '2019.05 – 2021.05',
    title: '前端开发工程师',
    org: '山西硬汉网络科技有限公司',
    text: '参与山西省公安厅、太原市公安局、太原市政法委等政府级项目，负责大屏可视化与数据统计分析模块，并完成多个企业官网前端。',
  },
  {
    period: '2019 之前',
    title: '电子商务技术',
    org: '山西省财政税务专科学校',
    text: '从这里开始接触网页开发，用 HTML、CSS 和 jQuery 写下第一批页面。',
  },
];

export const contact = {
  title: '想聊聊？',
  text: '无论是工作机会、项目合作，还是想交流 Vue、Electron 或 Cloudflare Workers 的实践，发封邮件给我就好。',
  cta: '给我写邮件',
};
