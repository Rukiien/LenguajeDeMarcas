const productos = [
    { id: 1,  nombre: "Bulbasaur",  precio: 20, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",  desc: "Clásico tipo planta, suave y coleccionable." },
    { id: 2,  nombre: "Ivysaur",    precio: 24, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",  desc: "Evolución intermedia, perfecto para tu estantería." },
    { id: 3,  nombre: "Venusaur",   precio: 35, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",  desc: "Tamaño premium: presencia garantizada." },

    { id: 4,  nombre: "Charmander", precio: 22, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",  desc: "Pequeño, cálido y muy abrazable." },
    { id: 5,  nombre: "Charmeleon", precio: 27, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",  desc: "Para fans del fuego con más carácter." },
    { id: 6,  nombre: "Charizard",  precio: 45, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",  desc: "Edición legendaria: el rey del sofá." },

    { id: 7,  nombre: "Squirtle",   precio: 21, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",  desc: "Compacto y fresquito, perfecto para regalo." },
    { id: 8,  nombre: "Wartortle",  precio: 26, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",  desc: "Estilo clásico y look muy coleccionable." },
    { id: 9,  nombre: "Blastoise",  precio: 39, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",  desc: "Edición robusta: para entrenadores serios." },

    { id: 10, nombre: "Caterpie",   precio: 12, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png", desc: "Baratito y mono para completar equipo." },
    { id: 11, nombre: "Metapod",    precio: 14, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png", desc: "El peluche más 'chill' de la tienda." },
    { id: 12, nombre: "Butterfree", precio: 23, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png", desc: "Ligero, elegante y decorativo." },

    { id: 13, nombre: "Weedle",     precio: 12, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png", desc: "Pequeño, ideal para colección." },
    { id: 14, nombre: "Kakuna",     precio: 14, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png", desc: "Minimalista y curioso." },
    { id: 15, nombre: "Beedrill",   precio: 24, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png", desc: "Para fans del tipo bicho con actitud." },

    { id: 16, nombre: "Pidgey",     precio: 13, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png", desc: "Súper clásico, tamaño escritorio." },
    { id: 17, nombre: "Pidgeotto",  precio: 18, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png", desc: "Evolución intermedia, muy buen detalle." },
    { id: 18, nombre: "Pidgeot",    precio: 29, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png", desc: "Look épico para decorar estantería." },

    { id: 19, nombre: "Rattata",    precio: 11, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png", desc: "Pequeñín para completar la colección." },
    { id: 20, nombre: "Raticate",   precio: 17, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png", desc: "Más grande, mismo estilo clásico." },

    { id: 21, nombre: "Spearow",    precio: 13, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png", desc: "Un básico de Kanto." },
    { id: 22, nombre: "Fearow",     precio: 24, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png", desc: "Alas grandes, presencia visual." },

    { id: 23, nombre: "Ekans",      precio: 15, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png", desc: "Tipo veneno, estilo único." },
    { id: 24, nombre: "Arbok",      precio: 26, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png", desc: "Imponente, muy coleccionable." },

    { id: 25, nombre: "Pikachu",    precio: 25, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", desc: "El favorito de la tienda: cute y eléctrico." },
    { id: 26, nombre: "Raichu",     precio: 28, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png", desc: "Más potente, mismo carisma." },

    { id: 27, nombre: "Sandshrew",  precio: 18, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png", desc: "Suave y con textura adorable." },
    { id: 28, nombre: "Sandslash",  precio: 29, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png", desc: "Más grande, para coleccionistas." },

    { id: 29, nombre: "Nidoran♀",   precio: 16, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png", desc: "Edición Kanto, tamaño mini." },
    { id: 30, nombre: "Nidorina",   precio: 21, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png", desc: "Bonito y perfecto para completar evoluciones." }
];


const STORAGE_KEY = "carritoPokemon";

let carrito = [];
let filtroPrecio = "all";

window.addEventListener("load", () => {
    cargarCarritoDeMemoria();
    renderCatalogo();
    actualizarCarritoDOM();

    const buscar = document.getElementById("buscar");
    if (buscar) buscar.addEventListener("input", renderCatalogo);

    document.querySelectorAll("[data-filter]").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("[data-filter]").forEach(b => b.classList.remove("chip--active"));
            btn.classList.add("chip--active");
            filtroPrecio = btn.dataset.filter;
            renderCatalogo();
        });
    });

    const btnVaciar = document.getElementById("btn-vaciar");
    if (btnVaciar) {
        btnVaciar.addEventListener("click", () => {
            carrito = [];
            guardarEnStorage();
            actualizarCarritoDOM();
        });
    }

    const btnComprar = document.getElementById("btn-comprar");
    if (btnComprar) {
        btnComprar.addEventListener("click", () => {
            if (carrito.length === 0) {
                alert("Tu carrito está vacío.");
                return;
            }
            alert("Compra realizada (demo). ¡Gracias!");
            carrito = [];
            guardarEnStorage();
            actualizarCarritoDOM();
        });
    }
});

function productosFiltrados() {
    const input = document.getElementById("buscar");
    const q = (input ? input.value : "").trim().toLowerCase();

    return productos.filter(p => {
        const okTexto = p.nombre.toLowerCase().includes(q);

        let okPrecio = true;
        if (filtroPrecio === "0-24") okPrecio = p.precio <= 24;
        if (filtroPrecio === "25-29") okPrecio = p.precio >= 25 && p.precio <= 29;
        if (filtroPrecio === "30+") okPrecio = p.precio >= 30;

        return okTexto && okPrecio;
    });
}

function renderCatalogo() {
    const contenedor = document.getElementById("catalogo");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    productosFiltrados().forEach(prod => {
        const card = document.createElement("article");
        card.className = "producto-card";

        card.innerHTML = `
      <div class="flip" tabindex="0" aria-label="Ver descripción de ${escapeHtml(prod.nombre)}">
        <div class="flip__inner">
          <div class="flip__front">
            <img src="${prod.img}" alt="Peluche de ${escapeHtml(prod.nombre)}">
          </div>
          <div class="flip__back">
            <p class="flip__desc">${escapeHtml(prod.desc ?? "Edición especial de PokStore.")}</p>
          </div>
        </div>
      </div>

      <h3 class="producto-nombre">${escapeHtml(prod.nombre)}</h3>
      <p class="producto-precio">${prod.precio}€</p>
      <button type="button" data-add="${prod.id}">Añadir al carrito</button>
    `;

        contenedor.appendChild(card);
    });

    contenedor.querySelectorAll("[data-add]").forEach(btn => {
        btn.addEventListener("click", () => agregarAlCarrito(Number(btn.dataset.add)));
    });
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;

    carrito.push(producto);
    guardarEnStorage();
    actualizarCarritoDOM();
}

function quitarDelCarrito(index) {
    carrito.splice(index, 1);
    guardarEnStorage();
    actualizarCarritoDOM();
}

function actualizarCarritoDOM() {
    const lista = document.getElementById("lista-carrito");
    const totalSpan = document.getElementById("total");
    const contador = document.getElementById("contador-carrito");

    if (lista) lista.innerHTML = "";

    let total = 0;

    carrito.forEach((prod, index) => {
        total += prod.precio;

        if (!lista) return;

        const li = document.createElement("li");
        li.className = "cart__item";
        li.innerHTML = `
      <div>
        <strong>${escapeHtml(prod.nombre)}</strong><br>
        <small>${prod.precio}€</small>
      </div>
      <button type="button" class="cart__remove" aria-label="Quitar ${escapeHtml(prod.nombre)}" data-remove="${index}">✕</button>
    `;
        lista.appendChild(li);
    });

    if (totalSpan) totalSpan.textContent = total;
    if (contador) contador.textContent = carrito.length;

    if (lista) {
        lista.querySelectorAll("[data-remove]").forEach(btn => {
            btn.addEventListener("click", () => quitarDelCarrito(Number(btn.dataset.remove)));
        });
    }
}

function guardarEnStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(carrito));
}

function cargarCarritoDeMemoria() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    try {
        const data = JSON.parse(raw);
        if (Array.isArray(data)) carrito = data;
    } catch {
        carrito = [];
    }
}

function escapeHtml(str) {
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}