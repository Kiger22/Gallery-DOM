/* import './style.css' */

const butonPublicar = document.querySelector("button");

const PRODUCTOS = /* JSON.parse(localStorage.getItem("products")) || */[];

let formVisible = false;

const crearProducto = () => {
  const nombre = document.querySelector("#nombre");
  const imagen = document.querySelector("#imagen");
  const precio = document.querySelector("#precio");
  const tipo = document.querySelector("#tipo");

  const newProduct = {
    nombre: nombre.value,
    imagen: imagen.value,
    precio: precio.value,
    tipo: tipo.value
  }
  PRODUCTOS.push(newProduct);
  /* localStorage.setItem("products", JSON.stringify(PRODUCTOS)); */
  pintaProductos(PRODUCTOS);

}

const divProductos = document.createElement("div");
divProductos.classList.add("productos");
document.body.append(divProductos);


divProductos.innerHTML = `
  <div class="hamburguesas"></div>
  <div class="wraps"></div>
  <div class="acompañantes"></div>
  <div class="bebidas"></div>
  `;

const pintaProductos = (listProductos) => {

  const hamburguesas = document.querySelector(".hamburguesas");
  const wraps = document.querySelector(".wraps");
  const acompañantes = document.querySelector(".acompañantes");
  const bebidas = document.querySelector(".bebidas");



  hamburguesas.innerHTML = '<h2>Hamburguesas</h2>';
  wraps.innerHTML = "<h2>Wraps</h2>";
  acompañantes.innerHTML = "<h2>Acompañantes</h2>";
  bebidas.innerHTML = "<h2>Bebidas</h2>";
  //!Lo mismo sin innerHTML

  for (const producto of listProductos) {

    let productoHTML = `
        <div class="producto">
            <h3>${producto.nombre}</h3>
            <div>
              <img src="${producto.imagen}"/>
            </div>
            <p>${producto.precio}</p>
        </div>
    `
    //!Otra manera de hacerlo sin innerHTML
    /* const insertarProducto = () => {
      const divProducto = document.createElement("div");
      divProducto.classList.add("producto");

      const h3 = document.createElement("h3");
      h3.textContent = producto.nombre;

      const div = document.createElement("div");
      const imagenProducto = document.createElement("img");
      imagenProducto.src = producto.imagen;
      div.append(imagenProducto);

      const p = document.createElement("p");
      p.textContent = producto.precio;

      divProducto.append(h3);
      divProducto.append(div);
      divProducto.append(p);
    }
 */

    if (producto.tipo === "hamburguesa") {
      hamburguesas.innerHTML += productoHTML;
    } else if (producto.tipo === "wrap") {
      wraps.innerHTML += productoHTML;
    } else if (producto.tipo === "acompañante") {
      acompañantes.innerHTML += productoHTML;
    } else {
      bebidas.innerHTML += productoHTML;
    }
  }

}

const botonForm = document.querySelector(".botonForm");
const form = document.querySelector("form");


const toogleFormulario = () => {
  if (formVisible === true) {
    form.classList.add("noVisible");
    formVisible = false;
  } else {
    form.classList.remove("noVisible");
    formVisible = true;
  }
}

botonForm.addEventListener("click", toogleFormulario);
butonPublicar.addEventListener("click", crearProducto);

