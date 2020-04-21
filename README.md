# backend-noty
Restful API for noty project front

# Getting Started

Clone the repo by using `git clone`.

Run `npm install` .
 
# Built With

```
Nestjs 
Typescript
Mongoose
Jest
```

### project structure

```
src
│   main.ts                         # App entry point
│   app.controller.ts               # App main controller
│   app.module.ts                   # App main module
│   app.service.ts                  # App main service
└───note 
    └───dto                         # Dto
    └───interfaces                  # Interface
    └───schema                      # schemas
    │   note.controller.spec.ts     #
    │   note.service.spec.ts        # 
    │   note.controller.ts          # 
    │   note.module.ts              # 
    │   note.service.ts             # 
```

### Running Dev Server

Run on your terminal `npm run start:dev`, the server will restart everytime we make a change in our code.

### Running Production Server

run `npm run start:prod`

### Other scripts
 
# Versioning
For the versions available, see the tags on this repository.

# Authors
Amell Fezai - Initial work
 
# License
This project is licensed under the MIT License - see the LICENSE.md file for details