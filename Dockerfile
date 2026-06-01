FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY backend/package*.json ./backend/
COPY frontend/dist ./frontend/dist
COPY frontend/package*.json ./frontend/

RUN npm install && cd backend && npm install && npx prisma generate --schema=prisma/schema.prisma

COPY backend/ ./backend/

EXPOSE 10000

CMD cd backend && npx prisma db push --schema=prisma/schema.prisma && node server.js
