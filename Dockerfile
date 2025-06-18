# Aşama 1: Bağımlılıkların kurulumu ve uygulamanın derlenmesi
FROM node:18-alpine AS builder

# Ortam değişkeni
ENV NODE_ENV=production

# Çalışma dizini
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle (devDependencies dahil)
RUN npm install

# Tüm proje dosyalarını kopyala
COPY . .

# Next.js uygulamasını üretime hazır şekilde derle
RUN npm run build

# Aşama 2: Sadece gerekli dosyalarla hafif bir imaj oluştur
FROM node:18-alpine AS runner

ENV NODE_ENV=production

# Uygulama klasörü
WORKDIR /app

# node_modules klasörü ve derlenmiş dosyalar dışındaki gerekli dosyaları kopyala
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# 3000 portunu aç
EXPOSE 3000

# Uygulama başlatma komutu
CMD ["npm", "start"]