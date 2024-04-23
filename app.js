


const container_padre = document.getElementById("padre");
const boton_generar = document.getElementById("btn-generar");


boton_generar.addEventListener("click", mostrar_emoji);

const emojis = ["😃", "😁", "🍖", "🍔", "😬", "🐕", "🤮", "😞", "🤗", "😫",
                "🎂", "🍎", "🇺🇾", "🌭", "🌶️", "🥵", "🍇", "🌞", "🐓", "💀",
                "🌵", "🍕", "🎀", "👽", "🎵", "💕", "🎸", "🍿", "🍀", "🎱",
                "🐖", "😍", "🦊", "😡", "🎈", "©️",  "®️", "📺", "🌱", "🌼"];

function mostrar_emoji() {
  

    limpiar();

    const random = generar_random();
    const p = document.createElement('p');
    p.style.padding = "1rem";
    p.style.fontSize= "2rem";
    p.textContent = emojis[random];
    container_padre.appendChild(p);
}

function generar_random() {
    return Math.floor(Math.random() * emojis.length);
}

function limpiar_emoji() {
    limpiar();
}

const limpiar = () => {
  if (container_padre.lastChild) {
      container_padre.removeChild(container_padre.lastChild);
  }
}


