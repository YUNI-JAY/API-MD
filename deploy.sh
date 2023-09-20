#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件

yarn build

# 进入生成的文件夹

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'add'

git push -f git@github.com:YUNI-JAY/API-MD.git main:blog
# git push -f git@github.com:你的git名/你的git项目名.git master:你的git分支

cd -


