// Основные модули
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

// Передаем значения в глобальную переменную
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  gulp: gulp,
  path: path,
  plugins: plugins,
};
// Импорт задач
import { copy, copyImage } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { copyHtml } from "./gulp/tasks/html.js";
import { copyScss } from "./gulp/tasks/scss.js";
import { server } from "./gulp/tasks/server.js";
import { js } from "./gulp/tasks/js.js";
import { zip } from "./gulp/tasks/zip.js";




// gulp.task("server", function () {

//   browserSync.init({
//     server: path.buildFolder,
//   });

// });
// Наблюдатель за изменениями файлов
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, copyHtml);
  gulp.watch(path.watch.scss,copyScss);
  gulp.watch(path.watch.img,copyImage);
  gulp.watch(path.watch.js,js);
}
const mainTasks = gulp.parallel(copy, copyHtml, copyImage, copyScss, js);
//Передаем задачи последовательно сначала copy потом watcher
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset,mainTasks);
const deployZip = gulp.series(reset,mainTasks,zip);
gulp.task("default", dev);
export {dev};
export {build};
export {deployZip};