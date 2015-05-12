var gulp = require("gulp");
var concat = require("gulp-concat");
var nodemon = require("gulp-nodemon");
var uglify = require("gulp-uglify");
var annotate = require("gulp-ng-annotate");

gulp.task("task1", function(done){
    setTimeout(function(){
       console.log("I am task 1 and I am really done"); 
       done();
    }, 2000);
    console.log("task 1");
});

gulp.task("task2", function(done){
    setTimeout(function(){
       console.log("I am task 2 and I am really done"); 
       done();
    }, 3000);
    console.log("task 2");
});

gulp.task("default", ["task1", "task2"], function(){
    console.log("Hello from gulp");
});

gulp.task("js", function(){
    gulp.src(["client/app/the_app.js", "client/app/**/*.js"])
        .pipe(concat("all.js"))        
            .pipe(annotate())
                .pipe(uglify())
                    .pipe(gulp.dest("prod"));
});

gulp.task("watch:js", ["js"], function(){
    gulp.watch("client/app/**/*.js", ["js"]);
});

gulp.task("dev:server", function(){
    nodemon({
        script: "server.js",
        ext: "js",
        env: {
            ENV: "development",
            CONN: "mongodb://localhost/my_world",
            JWT_SECRET: "bar"
        }
    });
});

gulp.task("prod:server", ["watch:js"], function(){
    nodemon({
        script: "server.js",
        ext: "js",
        env: {
            ENV: "production",
            CONN: "mongodb://localhost/my_world",
            JWT_SECRET: "bar"
        }
    });
});

