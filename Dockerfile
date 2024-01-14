FROM node:16-alpine as build-step
WORKDIR /app/
ENV PATH /app/florify/node_modules/.bin:$PATH
COPY ./florify/package.json /app/florify/package.json
WORKDIR /app/florify
RUN npm install esbuild@latest
RUN npm install
COPY ./florify /app/florify/
RUN npm run build
WORKDIR /app/

FROM python:3.11-slim-buster
WORKDIR /app
RUN apt-get update && \
    apt-get install -y python3-pip
COPY --from=build-step /app/florify/dist /app/florify/dist
# COPY ./backend/ /app/backend/
COPY ./requirements.txt /app/
COPY ./app.py /app/
COPY ./scripts/loadenv.sh /app/scripts/
RUN chmod +x /app/scripts/loadenv.sh && /app/scripts/loadenv.sh
ENV FLASK_ENV production
EXPOSE 80
WORKDIR /app
CMD ["./.venv/bin/python", "-m", "gunicorn", "--timeout", "3600", "-w", "4", "-b", "0.0.0.0:80", "--access-logfile", "-", "--error-logfile", "-", "app:app"]