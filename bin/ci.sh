#!/bin/bash
set -e

sudo yum install ansible

ansible-playbook -v -i "localhost," -c local provisioning/ci.yml

echo '###################################'
echo '### Doing top-level npm install ###'
echo '###################################'

#TODO: We want to delete this step soon...
npm install --silent

echo '############################'
echo '### Running lint & tests ###'
echo '############################'

npm test
