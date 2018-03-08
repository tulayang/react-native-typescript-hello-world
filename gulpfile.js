const Gulp = require('gulp')                     // 任务分发工具 
const Typescript = require('gulp-typescript')    // 编译器
const Sourcemaps = require('gulp-sourcemaps')    // sourcemaps 生成，用于 debug
const Rimraf = require('rimraf')                 // 删除文件
const Path = require('path')                    
const tsconfig = require('./tsconfig.json')      // TypeScript 配置

const PROJ_DIR = __dirname                       // 项目目录
const SOURCE_DIR = Path.join(PROJ_DIR, 'src')    // 源文件目录
const DIST_DIR = Path.join(PROJ_DIR, 'dist')     // 目标文件目录

function watch(sources, tasks) {
// 文件监视程序，当文件修改的时候触发一些事件
// sources: Array<string> - 监视的文件路径
// tasks: Array<strings> - 打算运行的任务
  Gulp.watch(sources, {
    debounceDelay: 20,
    mode: 'auto',
    cwd: PROJ_DIR
  }).on('change', function (e) {
    const now = new Date()
    const time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
    const pathname = Path.relative(process.cwd(), e.path)
    console.log('[\033[90m' + time + '\033[0m] ' + pathname + ' was \033[35m' + e.type + '\033[0m')
    Gulp.start.apply(Gulp, tasks)
  })
}

Gulp.task('clear', function (cb) {
// 删除目标文件目录
  Rimraf.sync(DIST_DIR)
  cb()
})

Gulp.task('copy', function () {
// 源文件目录 -> 拷贝非代码文件 -> 目标文件目录
  return Gulp
           .src(Path.join(SOURCE_DIR, './**/*.!(ts|tsx)'), {
             base: SOURCE_DIR
           })
           .pipe(Gulp.dest(DIST_DIR))
})

Gulp.task('com', ['copy'], function () {
// 编译　tsx 文件
  return Gulp
           .src(Path.join(SOURCE_DIR, './**/*.+(ts|tsx)'), {
             base: SOURCE_DIR
           })
           .pipe(Sourcemaps.init())
           .pipe(Typescript(tsconfig.compilerOptions))
           .pipe(Sourcemaps.write('.'))
           .pipe(Gulp.dest(DIST_DIR))
})

Gulp.task('watchfiles', function () {
// 监视文件变化
  watch(['src/**/*.!(ts|tsx)'], ['copy'])
  watch(['src/**/*.+(ts|tsx)'], ['com'])
})

Gulp.task('build', ['clear', 'copy', 'com'])
Gulp.task('watch', ['build', 'watchfiles'])