#!/usr/bin/env bash

echo kuoli Project
# docker-compose up -d --force-recreate --build
ls


# 获取最新版代码


git pull

node app.js
# 强制重新编译容器
# docker-compose down
# docker-compose up -d --force-recreate --build