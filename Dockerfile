# Build: Vite + TypeScript + prerender scripts (tsx not in lockfile; install without mutating package.json)
FROM node:22-bookworm-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci && npm install tsx@^4.19.0 --no-save

COPY . .
RUN npm run build

# Runtime: static files only
FROM nginx:1.27-alpine AS runner

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 3123

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -qO- http://127.0.0.1:3123/ >/dev/null || exit 1
