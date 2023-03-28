export default{
    nav:[
        {
            title:"Un Poco de Historia",
            paragraph:"Nació en la década de 1870 en Inglaterra como una derivación del tenis. La historia de este deporte está marcada por una serie de evoluciones técnicas, como la naturaleza de los revestimientos de las raquetas, aumento del tamaño de la pelota, la reducción del número de tantos por juego o la introducción y posterior prohibición del uso de pegamentos rápidos.",
        },
        {
            title:"Principales Torneos",
            link:[
                {
                    name:"Abierto de Alemania",
                    href:"#",
                },
                {
                    name:"Abierto de Argentina",
                    href:"#",
                },
                {
                    name:"Abierto de Alemania",
                    href:"#",
                },
                {
                    name:"Abierto de Australia",
                    href:"#",
                },
                {
                    name:"Abierto de Austria",
                    href:"#",
                },
                {
                    name:"Abierto de Bielorussia",
                    href:"#",
                },
                {
                    name:"Abierto de Belgica",
                    href:"#",
                },
                {
                    name:"Abierto de Brasil",
                    href:"#",
                },
                {
                    name:"Abierto de Bulgaria",
                    href:"#",
                },
                {
                    name:"Abierto de Chile",
                    href:"#",
                },
                {
                    name:"Abierto de China",
                    href:"#",
                },
                {
                    name:"Abierto de Cheqia",
                    href:"#",
                }

            ],
        },
        {
            title:"WTT Cup Finals",
            link:[
                {
                    name:"Fan Zhendong 2021",
                    href:"#",
                },
                {
                    name:"Wang Chuqin 2022 ",
                    href:"#",
                },
                {
                    name:"Chen Meng 2020",
                    href:"#",
                }

            ],
        }
    ],
    show(){
        const ws = new Worker("storage/wsMyAside.js",{type:"module"});

        //enviamos un mensaje el worker
        ws.postMessage({module: "showAside", data : this.nav});
        ws.postMessage({module: "cards", data : this.nav});
        ws.postMessage({module: "list", data : this.nav});
        let id = ["#about"];
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
    }
    
}