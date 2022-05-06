import replace from "gulp-replace";
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // (Cообщения подсказки)
import browserSync from "browser-sync";
import ifPlugin from "gulp-if";
export const plugins = {
    replace:replace,
    plumber:plumber,
    notify:notify,
    browserSync:browserSync,
    if:ifPlugin,

};