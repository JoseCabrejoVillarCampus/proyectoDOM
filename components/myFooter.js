export default{
    foot:[
        {
            paragraph:"Blog PingPong",
            paragraph2:"Bootstrap",
            paragraph3:"Jose Cabrejo",
            paragraph4:"Back to top",
            href:"https://getbootstrap.com/",
            href2:"https://twitter.com/mdo",
            href3:"",
            href4:""
        }
    ],
    show(){
        const ws = new Worker("storage/wsMyFooter.js",{type:"module"});

        //enviamos un mensaje el worker
        ws.postMessage({module: "showFooter", data : this.foot});
        let id = ["#footer"];
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

