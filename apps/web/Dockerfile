# Базовый образ
FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Установка зависимостей
FROM base AS deps
COPY package*.json ./
COPY apps/web/package*.json ./apps/web/
COPY packages/ui/package*.json ./packages/ui/
COPY packages/shared-config/package*.json ./packages/shared-config/
RUN npm ci

# Сборка приложения
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build -w @repo/web

# Production образ
FROM base AS runner
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nuxtjs

COPY --from=builder /app/apps/web/.output /app/.output
USER nuxtjs

EXPOSE 3000
ENV PORT 3000

CMD ["node", ".output/server/index.mjs"]
