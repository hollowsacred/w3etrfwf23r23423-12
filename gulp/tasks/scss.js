import gulpSass from "gulp-sass";
import shadowSass from "sass";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css"; // сжатие css
// import webpCss from "gulp-webpcss"; // Вывод webp изображений 
import autoprefixer from "gulp-autoprefixer"; // Добавление вендорных префиксов
import groupCssMediaQueries from "gulp-group-css-media-queries"; // групировка медиа запросов


const sass = gulpSass(shadowSass);
export const copyScss = () => {
  return app.gulp
    .src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "Scss",
          message: "Error: <%= error.message %>",
        })
      )
    )
    
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(app.plugins.replace(/@img\//g, '../../img/'))
    .pipe(
        app.plugins.if(
            app.isBuild,
        groupCssMediaQueries()
        )
    )
    .pipe( app.plugins.if(
        app.isBuild,
        autoprefixer(
        {
            grid:true,
            overrideBrowserslist:["last 3 versions"],
            cascade:true,
            
        }
    ))
    )
    .pipe(app.gulp.dest(app.path.build.scss))
    .pipe( app.plugins.if(
        app.isBuild,
        cleanCss()
        )
    )
    .pipe(rename({
        extname:".min.css",
    }))
    .pipe(app.gulp.dest(app.path.build.scss))
    .pipe(app.plugins.browserSync.stream());
};
