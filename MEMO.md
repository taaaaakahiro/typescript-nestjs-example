
# typescript-nestjs-example

## command
```sh
# develop
$ npx nest g controller <new conrtoller name> #create controller
$ npx nest g service prisma #DB接続用に仕様する拡張サービス

# migrate db
$ npx prisma migrate dev --name <file name> #create table
$ npx ts-node src/seeding/todo.ts #seeding
$ npx prisma generate #execute the case to modify prisma.schema file

#format
$ npx prisma format # for schema.prisma
$ make lint # for *.ts
```

## curl
```sh
$ curl http://localhost:3001
$ curl http://localhost:3001/todo # list todo
$ curl http://localhost:3001/todo/{id} # get todo by id
```

## todo
  - [x] seeding. 
  - [x] middleware. 
  - [] interceptor. 
  - [x] cors. 
  - [] GraphQL. 
  - [x] Unit Test (Service, Controller). 
  - [] error handling
  - [] transaction. 


## article
  - https://zenn.dev/mikakane/books/nestjs-tutorial/viewer/setup