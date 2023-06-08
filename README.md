## 魔改的Echarts 能自动切换主题。

### 用法是 项目内安装mitt
```npm
npm install mitt echarts-bus
```
```typescript main.ts 、main.js

import mitt from 'mitt';
window.__echarts_mitt_watcher = mitt<MEvents>();
```
切换主题位置
```typescript
    // 比如 我只有darkmode 来决定主题(light、dark) 
    window.__echarts_mitt_watcher.emit('setTheme', darkMode ? 'dark' : 'light');
    window.__echarts_current_theme = darkMode ? 'dark' : 'light';
```
light和默认主题不一样，想要默认主题的可以light换成无效的主题比如 'none

```typescript
    window.__echarts_mitt_watcher.emit('setTheme', darkMode ? 'dark' : 'none');
    window.__echarts_current_theme = darkMode ? 'dark' : 'none';
```
