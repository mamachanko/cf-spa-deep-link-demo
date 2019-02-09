#!/usr/bin/env bash -xe

rm -rf dist
npx ng build --output-path dist/bundle
cp -r nginx Staticfile dist
