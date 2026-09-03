FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
COPY public ./public
COPY src ./src
RUN npm install
RUN npm run build
# Serve production build with a simple server
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]