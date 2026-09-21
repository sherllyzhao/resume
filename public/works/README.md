# 作品截图

把截图放到这个目录，然后在 `src/data/site.ts` 对应作品的 `image` 字段填相对路径，例如：

```ts
image: '/works/sherlly-assistant.png',
```

建议规格：

- 比例 16:10（卡片按这个比例裁切，其他比例会被 `object-fit: cover` 裁掉边缘）
- 宽度 ≥ 1280px，PNG 或 JPG，单张控制在 300KB 以内
- 文件名用作品的 `slug`：`sherlly-assistant`、`media-publisher`、`task-platform`、`police-dashboard`
- 涉及公司或政府项目的界面，先打码或换成脱敏演示数据
