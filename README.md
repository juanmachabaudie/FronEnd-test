<h1 align="center"> Test Práctico - Frontend </h1>

## Objetivos:

#### ● En base a los diseños dados, construir las siguientes tres vistas: <br/>

○ Caja de búsqueda <br/>
○ Resultados de la búsqueda <br/>
○ Detalle del producto <br/>

#### ● Las vistas son navegables de manera independiente y cuentan con su propia url:<br/>

○ Caja de Búsqueda: “/”<br/>
○ Resultados de la búsqueda: “/items?search=”<br/>
○ Detalle del producto: “/items/:id”<br/>

#### ● Construir los siguientes endpoints para ser utilizados desde las vistas:<br/>

○ /api/items?q= :query<br/>
○ /api/items/ :id<br/>

### Search Bar:

<img src="client\public\images\01_Buscador.png" alt="diseño1">

### Lista de productos buscados:

<img src="client\public\images\02_Detalle.png" alt="diseño2">

### Detalle de Producto:

<img src="client\public\images\02_Resultados.png" alt="diseño3">
<br/>
Para correr el test, hay que correr el Back (ubicado en la carpeta 'api') para poder tener resultados en las busquedas y luego el Front (ubicado en la carpeta 'client').

Lo primero, es abrir la terminal, ubicarse en la carpeta **api** y correr el comando **npm install** y luego **npm start**. Luego, el mismo proceso pero ahora situado en la carpeta **client**.

Listo! Una vez hecho, ya podes ingresar a tu navegador predeterminado e ingresar a **http://localhost:3000/**.
Queres ver los datos que traigo desde la api de mercado libre?
Podes ingresar a **http://localhost:3001/api/items?q=_Busqueda_** o **http://localhost:3001/api/items/_ID_Producto_** para el detalle.

<br/>

<hr/>

```javascript
const test = {
    author: {
        name: "Juan Manuel",
        speaker: "Gimenez Chabaudie",
        mail: "juanmanuelchabaudie@gmail.com",
        celular: "https://wa.me/+5491155760486"
    },
    back: [Javascript, Node, Express],
    front: [React, Sass, Css Grid],
    responsive: true,
    message: "Ojalá me llamen 🙏🏽  Saludos!!"
}
```
