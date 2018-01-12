#!/bin/bash
set -ex

# Change to working dir (mounted from host)
cd /stack/gooddjango

pipenv install

pipenv --where
pipenv --venv
echo "check path"
pwd
ls -lah ./

# Apply database migrations
echo "Apply database migrations"
pipenv run python manage.py migrate

# Start server
echo "Starting server"
pipenv run python manage.py runserver 0.0.0.0:80