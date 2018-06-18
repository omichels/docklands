#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/ubuntu_java8 ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);
