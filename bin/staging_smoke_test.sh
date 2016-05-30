#!/bin/bash
set -e

NODE_ENV=test

sudo yum install ansible

ansible-playbook -i "localhost," -c local provisioning/ci.yml

cd e2e
npm install
LTTE_URL=http://sc-letters-staging.herokuapp.com npm run smoke
