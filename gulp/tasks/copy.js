export let copy = () => {
    return app.gulp.src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files))
};
export const copyImage = () => {
    return app.gulp.src("./src/img/**/*.*")
    .pipe(app.gulp.dest("./dist/img"))
    

};