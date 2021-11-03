#制定node镜像版本
FROM keymetrics/pm2:latest-alpine
WORKDIR /usr/src/app
ADD  . /usr/src/app
RUN npm config set registry https://registry.npm.taobao.org/ && \
npm i
EXPOSE 8001
CMD ["pm2-runtime", "start", "process.yml"]
