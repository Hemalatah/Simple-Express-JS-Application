FROM node:alpine
COPY package.json package.json
RUN npm install

# Add your source files
COPY . .
EXPOSE 8050
CMD ["npm", "start"]
