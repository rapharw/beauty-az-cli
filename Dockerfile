# # UBUNTU
# FROM ubuntu:21.10

# # RUN echo "Europe/Stockholm" > /etc/timezone
# # RUN dpkg-reconfigure -f noninteractive tzdata

# # ENV TZ=America/Sao_Paulo
# # RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# # RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install tzdata

# # ENV TZ=Asia/Taipei
# # RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# # RUN dpkg-reconfigure --frontend noninteractive tzdata

# # RUN ln -fs /usr/share/zoneinfo/US/Pacific-New /etc/localtime && dpkg-reconfigure -f noninteractive tzdata

# RUN apt-get update

# RUN apt-get update && apt-get install -y \ 
#     timedatectl

# RUN timedatectl set-local-rtc 1

# RUN apt-get install -y \
#     ca-certificates \
#     curl

# ARG NODE_VERSION=14.16.0
# ARG NODE_PACKAGE=node-v$NODE_VERSION-linux-x64
# ARG NODE_HOME=/opt/$NODE_PACKAGE

# ENV NODE_PATH $NODE_HOME/lib/node_modules
# ENV PATH $NODE_HOME/bin:$PATH

# RUN curl https://nodejs.org/dist/v$NODE_VERSION/$NODE_PACKAGE.tar.gz | tar -xzC /opt/

# # comes with npm
# RUN npm install -g typescript

# RUN curl -sL https://aka.ms/InstallAzureCLIDeb | bash

# RUN npm --version


# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# # Install app dependencies
# COPY package*.json /usr/src/app/
# RUN npm install
# # Bundle app source
# COPY . /usr/src/app

# CMD [ "npm", "start" ]














## CentOS OS
## ---------
FROM centos/nodejs-10-centos7

ENV LANG en_US.UTF-8  
ENV LANGUAGE en_US:en  
ENV LC_ALL en_US.UTF-8

USER root

## Import the Microsoft repository key
RUN rpm --import https://packages.microsoft.com/keys/microsoft.asc

## Create local azure-cli repository
COPY azure-cli.repo /etc/yum.repos.d/azure-cli.repo

## Install Azure CLI with the yum install command
RUN yum install azure-cli -y

RUN npm install -g typescript



RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
COPY . /usr/src/app
RUN npm install
RUN npm run build

CMD [ "npm", "start" ]