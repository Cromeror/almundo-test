# almundo-back

### Configuración
En la carpeta **/back/config** se encuentra un archivo **default.json** el cual se deberá configurar la variable *"mongodb": "mongodb://localhost:27017/bd_test"* para poder conectarnos a la Base de datos **bd_test**
### Ejecutando el backend
  - Se deben levantar el servicio de *MongoDB*: **sudo service mongod start**
  - Usando la terminar navegamos hasta la la carpeta **/back** del proyecto.
  - Ejecuta el comando **npm i**
  - Despues de esperar la instalación de dependencias, debemos ejecutar el comando **npm run dev**
  - Luego de esperar deberá aparecer el siguiente mensaje: *info: Feathers application started on http://localhost:XXXX*

> 

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/almundo-back; npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
