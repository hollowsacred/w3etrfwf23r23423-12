import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = "./dist";
const sourceFolder = "./src";
export const path = {
  build: {
    js: `${buildFolder}/js/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`,
    scss: `${buildFolder}/files/css`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    js: `${sourceFolder}/js/app.js`,
    html: `${sourceFolder}/*.html`,
    files: `${sourceFolder}/files/**/*.*`,
    scss: `${sourceFolder}/scss/style.scss`,
    fonts: `${sourceFolder}/fonts/`,
  },
  watch: {
    js: `${sourceFolder}/js/**/*.js`,
    scss: `${sourceFolder}/**/*.scss`,
    html: `${sourceFolder}/**/*.html`,
    files: `${sourceFolder}/files/**/*.*`,
    img:`${sourceFolder}/img/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  sourceFolder: sourceFolder,
  rootFolder: rootFolder,
  ftp: "",
};
