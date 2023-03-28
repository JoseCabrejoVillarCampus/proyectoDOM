export default{
    image: "../img/two-tennis-rackets-and-ball-against-net-on-table-P37HCQZ-e1602572035813.jpg",
    comp:{
        title: "Tenis de mesa",
        paragraph:`El tenis de mesa (también conocido como ping-pong o pimpón) es un deporte de raqueta que se disputa entre dos jugadores o dos parejas (dobles). Es un deporte olímpico desde Seúl 1988, y el deporte con mayor número de practicantes, con 40 millones de jugadores compitiendo en todo el mundo.1​2​3​ Según un estudio realizado por la NASA, es el deporte más complicado que un ser humano puede practicar a nivel profesional.`,
        btn:{
            name:"Saber más.....",
            href:"https://es.wikipedia.org/wiki/Tenis_de_mesa"
            },
    },
    showImage(){
        document.querySelector(".imgStyle").style.backgroundImage = `url(${this.image})`;
    },
    show(){
        // creamos el worker
        const ws = new Worker("storage/wsMyBanner.js",{type:"module"});

        //enviamos un mensaje el worker
        ws.postMessage({module: "showSectionBanner", data : this.comp});
        let id = ["#banner"];
        let count = 0;
        //esto es lo que llega del worker
        ws.addEventListener("message",(e)=>{

            //estamos parseando lo que trae el evento (mensaje)
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            
            //insertamos en nuestro index, en el selector #pingPongItems
            document.querySelector(id[count]).append(...doc.body.children);

            //finalizamos el worker
            (id.length-1==count) ? ws.terminate():count++;
        });
    },
}