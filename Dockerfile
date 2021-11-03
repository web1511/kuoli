#制定node镜像版本
FROM node:10-alpine
ADD  . /app/
WORKDIR /app
RUN npm config set registry https://registry.npm.taobao.org/ && \
npm i
EXPOSE 8001
CMD ["node", "app.js"]
