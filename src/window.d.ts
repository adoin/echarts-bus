import { Emitter } from 'mitt';

type Events = {
  setTheme:string;
};
declare global {
  interface Window {
    __echarts_mitt_watcher?:Emitter<Events>;
    __echarts_current_theme?:string;
  }
}
