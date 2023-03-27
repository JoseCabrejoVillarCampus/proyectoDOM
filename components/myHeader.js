export default{
    title: {
        name:"PING PONG",
        href:"#"
    },
    pingPongItems:[
        {
            name:"Historia",
            href:"#"
        },
        {
            name:"Inicios",
            href:"#"
        },
        {
            name:"Internacionalización",
            href:"#"
        },
        {
            name:"Reglamentación",
            href:"#"
        },
        {
            name:"La Escuela",
            href:"#"
        },
        {
            name:"Deporte Olímpico",
            href:"#"
        },
        {
            name:"La Mesa",
            href:"#"
        },
        {
            name:"La Pelota",
            href:"#"
        },
        {
            name:"La Raqueta",
            href:"#"
        },
        {
            name:"El Partido",
            href:"#"
        },
        {
            name:"El Servicio",
            href:"#"
        },
        {
            name:"Vestimenta",
            href:"#"
        },
        
    ],
    
    show(){
        // creamos el worker
        const ws = new Worker("storage/wsMyHeader.js",{type:"module"});

        //enviamos un mensaje el worker
        ws.postMessage({module: "listTitle", data : this.title});
        ws.postMessage({module: "listarItems", data : this.pingPongItems});
        let id = ["#title","#pingPongItems"];
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



