FROM node:alpine
COPY --from=0 /go/bin/hello-app .
RUN npm install

# Add your source files
COPY . .
EXPOSE 8050
CMD ["npm", "start"]
