# Стадия сборки: использовать образ Node.js на основе Alpine Linux
FROM node:14-alpine as build

# Установить рабочую директорию
WORKDIR /app

# Копировать package.json, yarn.lock и .yarnrc в рабочую директорию
COPY package.json yarn.lock ./

# Установить зависимости приложения с помощью Yarn
RUN yarn install

# Копировать остальные файлы и директории проекта
COPY . .

# Собрать React-приложение для продакшена с помощью Yarn
RUN yarn build

# Стадия развертывания: использовать образ Nginx на основе Alpine Linux
FROM nginx:stable-alpine

# Установить метаданные образа
LABEL org.opencontainers.image.source https://github.com/gldkru/React-todo

# Копировать собранные файлы из стадии сборки
COPY --from=build /app/dist /usr/share/nginx/html

# Копировать конфигурацию Nginx
COPY ./deploy/nginx.conf /etc/nginx/conf.d/default.conf

# Открыть порт 80
EXPOSE 80

# Запустить Nginx
CMD ["nginx", "-g", "daemon off;"]
