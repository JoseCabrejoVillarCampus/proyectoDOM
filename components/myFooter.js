import config from "../storage/config.js";
export default{
    
    show(){

        config.dataMyFooter();
        Object.assign(this, JSON.parse(localStorage.getItem("myFooter")));
        
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

