FROM python:3.6.3

# -- Install Pipenv:
RUN set -ex && pip install pipenv --upgrade
RUN set -ex && mkdir /app

WORKDIR /app

COPY . /app

RUN set -ex && pipenv install --deploy --system

RUN mkdir -p /stack/gooddjango
RUN cp /app/Pipfile /stack/gooddjango
RUN cp /app/Pipfile.lock /stack/gooddjango
RUN set -ex && cd /stack/gooddjango && pipenv install
RUN rm -rf /stack/gooddjango

EXPOSE 80:8080 

CMD ./entrypoint.sh