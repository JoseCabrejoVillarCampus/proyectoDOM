export default{
    image: "../img/two-tennis-rackets-and-ball-against-net-on-table-P37HCQZ-e1602572035813.jpg",
    title: "Tenis de mesa",
    paragraph:`El tenis de mesa (también conocido como ping-pong o pimpón) es un deporte de raqueta que se disputa entre dos jugadores o dos parejas (dobles). Es un deporte olímpico desde Seúl 1988, y el deporte con mayor número de practicantes, con 40 millones de jugadores compitiendo en todo el mundo.1​2​3​ Según un estudio realizado por la NASA, es el deporte más complicado que un ser humano puede practicar a nivel profesional.`,
    btn:{
        name:"Saber más.....",
        href:"https://es.wikipedia.org/wiki/Tenis_de_mesa"
    },
    showImage(){
        document.querySelector(".imgStyle").style.backgroundImage = `url(${this.image})`;
    },
    showSectionBanner(){
        document.querySelector("#banner").insertAdjacentHTML("beforeend",
        `<h1 class="display-4 ten">${this.title}</h1>
        <p class="lead my-3" ten>${this.paragraph}</p>
        <p class="lead mb-0"><a href="${this.btn.href}" target="_blank class="text-white fw-bold">${this.btn.name}</a></p>
        `)
    }
}