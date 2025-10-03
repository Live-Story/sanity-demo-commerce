FROM node:22 as builder

WORKDIR /app

# Copia file root (package.json, lockfile e turbo.json)
COPY package*.json turbo.json ./
# Copia package.json delle sotto-app e packages per caching migliore
COPY apps/studio/package*.json apps/studio/
COPY apps/storefront/package*.json apps/storefront/
COPY packages/sanity/package*.json packages/sanity/

# Copia tutto il codice
COPY . .

# Installa tutto dal root, così npm risolve i packages locali e le dipendenze
RUN npm install --legacy-peer-deps

# Costruisci i vari workspace (se serve, altrimenti rimuovi)
RUN npm run build --workspace=studio
#RUN npm run build --workspace=storefront

# ---------------------------
# Stage di runtime

FROM node:22

WORKDIR /app

COPY --from=builder /app ./

ENV HOST=0.0.0.0

EXPOSE 8000 8333

COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
