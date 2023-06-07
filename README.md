## 魔改的Echarts 能自动切换主题。

### 用法是 项目内安装mitt

切换主题位置
```typescript
    // 比如 我只有darkmode 来决定主题
    window.__echarts_mitt_watcher.emit('setTheme', darkMode ? 'dark' : 'light');
    window.__echarts_current_theme = darkMode ? 'dark' : 'light';
```

