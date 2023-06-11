
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
```

## curl
```sh
$ curl http://localhost:3000
$ curl http://localhost:3000/todo/list
$ curl http://localhost:3000/todo -s -X POST -d '{"title":"sample"}' -H "Content-Type: application/json"
$ curl -X PUT http://localhost:3000/todo/{id}/done
$ curl -X DELETE http://localhost:3000/todo/{id}
```

## article
  - https://zenn.dev/mikakane/books/nestjs-tutorial/viewer/setup