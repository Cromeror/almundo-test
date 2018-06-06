# almundo-back

### Configuración
En la carpeta **/back/config** se encuentra un archivo **default.json** el cual se deberá configurar la variable *"mongodb": "mongodb://localhost:27017/bd_test"* para poder conectarnos a la Base de datos **bd_test**
### Ejecutando el backend
  - Se deben levantar el servicio de *MongoDB*: **sudo service mongod start**
  - Usando la terminar navegamos hasta la la carpeta **/back** del proyecto.
  - Ejecuta el comando **npm i**
  - Despues de esperar la instalación de dependencias, debemos ejecutar el comando **npm run dev**
  - Luego de esperar deberá aparecer el siguiente mensaje: *info: Feathers application started on http://localhost:XXXX*

IMPORTANTE: La subida de las imagenes las hice usando el servicio de storange de firebase, todas las imagenes se encuentran alojadas en ese servicio por lo tanto al momento de realizar la carga de los hoteles podria usar alguna de estas imagenes.
[00650d24_b.jpg] [11820110_10_b.jpg] [12287657_13_b.jpg] [1688561_29_b.jpg] 

Para crear un hotel recomiendo el uso de una herramienta como Postman o CURL para realizar la respectiva petición POST, la estructura del objeto que se va a crear, debe corresponder a la siguiente:
```
  {
      "id": "249942",
      "name": "Hotel Stefanos",
      "stars": 3,
      "price": 994.18,
      "image": "https://firebasestorage.googleapis.com/v0/b/almundo-test-81efb.appspot.com/o/assets%2Fimages%2Fhotels%2F00650d24_b.jpg?alt=media&token=66526b15-c9e1-4044-93e8-ba104157aa21",
      "amenities": [
        "safety-box",
        "nightclub",
        "deep-soaking-bathtub",
        "beach",
        "business-center"
      ]
    }
```

[00650d24_b.jpg]: <https://firebasestorage.googleapis.com/v0/b/almundo-test-81efb.appspot.com/o/assets%2Fimages%2Fhotels%2F00650d24_b.jpg?alt=media&token=66526b15-c9e1-4044-93e8-ba104157aa21>
[11820110_10_b.jpg]: <https://firebasestorage.googleapis.com/v0/b/almundo-test-81efb.appspot.com/o/assets%2Fimages%2Fhotels%2F11820110_10_b.jpg?alt=media&token=9ce5c2d5-ae00-47bc-8934-bf3edb57c21f>
[12287657_13_b.jpg]: <https://firebasestorage.googleapis.com/v0/b/almundo-test-81efb.appspot.com/o/assets%2Fimages%2Fhotels%2F12287657_13_b.jpg?alt=media&token=de4fb78a-e0b5-4fd7-97ec-b2371dd721c6>
[1688561_29_b.jpg]: <https://firebasestorage.googleapis.com/v0/b/almundo-test-81efb.appspot.com/o/assets%2Fimages%2Fhotels%2F1688561_29_b.jpg?alt=media&token=4e974af8-c84d-4b8a-965c-d97a4cbbe1de>

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
