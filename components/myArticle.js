import config from "../storage/config.js";
export default{
    
    show(){

        config.dataMyArticle();
        Object.assign(this, JSON.parse(localStorage.getItem("myArticle")));

        const ws = new Worker("storage/wsMyArticle.js",{type:"module"});

        //enviamos un mensaje el worker
        ws.postMessage({module: "showArticle", data : this.article});
        ws.postMessage({module: "cards", data : this.article});
        ws.postMessage({module: "list", data : this.article});
        ws.postMessage({module: "showTable", data : this.table});
        ws.postMessage({module: "cards", data : this.table});
        ws.postMessage({module: "list", data : this.table});
        let id = ["#firehouse"];
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
