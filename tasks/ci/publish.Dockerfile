FROM node:14-bullseye

RUN apt-get update && apt-get install -y jq awscli
