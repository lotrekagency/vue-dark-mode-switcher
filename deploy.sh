#!/usr/bin/env sh

# abort on errors
set -e

# build
echo Linting..
yarn lint
echo Building. this may take a minute...
yarn build:demo

# navigate into the build output directory
cd dist/demo

# if you are deploying to a custom domain
# echo 'example.com' > CNAME

echo Deploying..
git init
git add -A
git commit -m 'deploy'

# deploy
git push -f git@github.com:lotrekagency/vue-dark-mode-switcher.git master:gh-pages

cd -