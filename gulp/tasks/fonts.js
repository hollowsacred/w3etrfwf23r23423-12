import fs, { appendFile } from "fs";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";
export const otfToTTF = () => {
    return app.gulp.src(`${app.path.src.fonts}/*.otf`,{})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title:"FONTS",
            message:"Error: <%= error.message %>",
        })
    ))
    .pipe(fonter({
        formats:['ttf'],
    }))
    .pipe(app.gulp.dest(app.path.build.fonts))
}
export const ttfToWOFF = () => {
    return app.gulp.src(`${app.path.src.fonts}/*.ttf`,{})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title:"FONTS",
            message:"Error: <%= error.message %>",
        })
    ))
    // Конвертируем в woff
    .pipe(fonter({
        formats:['woff'],
    }))
    // Выгружаем в папку с результатом
    .pipe(app.gulp.dest(app.path.build.fonts))
    // Ищем файлы шрифтов .ttf 
    .pipe(app.gulp.src(`${app.path.src.fonts}/*.ttf`))
    // Конвертируем в .woff2
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(app.path.build.fonts))
}