<div align="center">
  <img alt="logo" src="./public/assets/global/logo.svg#gh-light-mode-only" width="70" />
  <img alt="logo" src="./public/assets/global/logo-light.svg#gh-dark-mode-only" width="70" />
</div>
<h1 align="center">
  He Fang Portfolio
</h1>

<div align="center">
  基于 Astro 的个人求职作品集，内容来自医疗健康产品方向简历
</div>

<br />

![Letter Theme Preview](./public/assets/global/preview.jpg)

当前站点适合作为个人 portfolio / 在线履历使用，重点展示医疗健康产品、数字疗法与脑科学相关项目经验，并支持部署到 GitHub Pages。

## Key Features

- Astro v6 + Tailwind v4
- 面向在线履历与案例展示
- 响应式与 SEO 友好
- GitHub Pages 自动部署工作流
- 内容主要维护在 `CV.md` 与 `src/content`

## Getting Started

### Development

```bash
git clone https://github.com/Rosie-HF/portfolio.git .
pnpm install
pnpm run dev
```

## Customization

1. `astro.config.mjs`
   - `SITE_URL`：例如 `https://rosie-hf.github.io`
   - `BASE_URL`：例如仓库名 `portfolio`
2. `CV.md`：原始简历内容
3. `src/content`：站点配置、案例、履历、FAQ 内容
4. `src/styles/global.css`：全局视觉风格
5. `.github/workflows/deploy-pipeline.yml`：GitHub Pages 部署工作流

## GitHub Pages 部署

1. 把仓库推到 `https://github.com/Rosie-HF/portfolio.git`
2. 进入仓库 `Settings > Pages`
3. Source 选择 `GitHub Actions`
4. 进入 `Settings > Secrets and variables > Actions > Variables`
5. 新建两个仓库变量
   - `PUBLIC_BASE_URL`
     - 填 `portfolio`
   - `PUBLIC_SITE_URL`
     - 填 `https://rosie-hf.github.io`
6. 推送到默认分支后，工作流会自动构建并发布到 GitHub Pages
7. 最终访问地址会是 `https://rosie-hf.github.io/portfolio/`

## Build

```bash
pnpm install
pnpm build
pnpm preview
```

## License

MIT for the original theme. Your content belongs to you.
