import config from "../storage/config.js";
export default{
    
    show(){

        config.dataMyArticle();
        Object.assign(this, JSON.parse(localStorage.getItem("myArticle")));

        const ws = new Worker("storage/wsMyArticle.js",{type:"module"});

        //enviamos un mensaje el worker
        ws.postMessage({module: "showArticle", data : this.article});
        let id = ["#firehouse"];
        let count = 0;
        //esto es lo que llega del worker
        ws.addEventListener("message",(e)=>{

            //estamos parseando lo que trae el evento (mensaje)
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            console.log(doc.body.children);
            
            //insertamos en nuestro index, en el selector #pingPongItems
            document.querySelector(id[count]).append(...doc.body.children);

            //finalizamos el worker
            (id.length-1==count) ? ws.terminate():count++;
        });
    }
}
 