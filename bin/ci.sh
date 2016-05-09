#!/bin/bash
set -e

echo '###################################'
echo '### Doing top-level npm install ###'
echo '###################################'

#TODO: We want to delete this step soon...
npm install

echo '############################'
echo '### Running lint & tests ###'
echo '############################'

npm run ci
