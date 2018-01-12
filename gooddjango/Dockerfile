FROM python:3.6.3

# -- Install Pipenv:
RUN set -ex && pip install pipenv --upgrade
RUN set -ex && mkdir /app

WORKDIR /app

COPY . /app

RUN set -ex && pipenv install --deploy --system

EXPOSE 80:8080 

CMD ./entrypoint.sh