FROM node:12-alpine

RUN npm install -g yarn

COPY . ./

RUN echo hi
RUN echo $DOKKU_ROOT
RUN echo $SHEETS_CREDS

RUN yarn install

EXPOSE 80

CMD yarn dokku