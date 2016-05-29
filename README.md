# Letters To The Editor Boilerplate

[![Build Status](https://snap-ci.com/solarcitizens/letters-to-the-editor/branch/master/build_image)](https://snap-ci.com/solarcitizens/letters-to-the-editor/branch/master)

## Tech:
  * React
  * seamless-immutable
  * Webpack + Babel + ES6 + JSX
  * Hot Module Reloading
  * Source maps
  * ESLint
  * Jasmine + Karma + PhantomJS

## Development setup

0. Install [VirtualBox](https://www.virtualbox.org/)
0. Install [Vagrant](https://www.vagrantup.com/downloads.html)
0. Install [Ansible](https://docs.ansible.com/ansible/intro_installation.html)
0. Clone the project

        git clone https://github.com/solarcitizens/letters-to-the-editor.git

0. Start the Vagrant VM

        vagrant up && vagrant provision

0. Log onto the VM

        vagrant ssh

0. Find the project files

        cd /vagrant

0. Install dependencies

        npm install

0. Email configuration [Optional]

        1. Get a Mailgun account.
        2. Add MAILGUN_API_KEY="your-key" to environment vars
        3. Turn on the toggle `email.sendEmails` in each specific environment (`config/default.json`, `config/staging.json`, `config/production.json`)

0. Run the tests

        npm test

0. Start the server

        npm start




