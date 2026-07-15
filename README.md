# Sweetaste*

甜點品牌 Sweetaste 的官方形象首頁,使用 [Claude Code](https://claude.com/claude-code) 對照設計稿(`home.jpg`)逐一刻出還原,包含配色、字級、間距與各區塊的響應式版面。

線上網址:https://a1113791.github.io/sweet-claude/

## 專案說明

本專案由 Claude 依據設計稿進行開發,流程大致為:

1. 分析設計稿,拆解出色彩、字體、圓角、陰影等視覺樣式,轉換為 `tailwind.config.js` 的語意化 design token(如 `primary`、`text-main`、`bg-alt`),元件內不使用寫死的色碼
2. 依區塊拆分為獨立元件(`Header`、`Hero`、`FeatureSection`、`ProductGrid`、`Newsletter`、`Footer` 等),置於 `src/components/home/`
3. 逐一比對設計稿的像素數值(顏色、尺寸、間距、字級)微調樣式,並套用 RWD 斷點讓版面在行動裝置上維持可用性
4. 每次修改後執行 `npm run build` 與 `npm run lint` 驗證

## 技術棧

- [React 19](https://react.dev/) + TypeScript
- [Vite 8](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) 圖示庫
- [oxlint](https://oxc.rs/) 程式碼檢查
- [gh-pages](https://www.npmjs.com/package/gh-pages) 部署至 GitHub Pages

## 開發

```bash
npm install
npm run dev      # 啟動開發伺服器
npm run build    # TypeScript 型別檢查 + 正式建置
npm run lint      # 執行 oxlint 檢查
npm run preview  # 預覽正式建置結果
```

## 部署

```bash
npm run deploy
```

會先執行 `predeploy`(即 `npm run build`),再透過 `gh-pages` 將 `dist/` 發佈到 `gh-pages` 分支。
