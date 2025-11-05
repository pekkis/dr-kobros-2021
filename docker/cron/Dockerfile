# syntax=docker.io/docker/dockerfile:1

FROM node:24-alpine AS base
RUN npm -g i pnpm

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm i --frozen-lockfile

# Rebuild the source code only when needed
FROM deps AS erunner
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

CMD ["pnpm exec tsx", "scripts/cron.ts"]
