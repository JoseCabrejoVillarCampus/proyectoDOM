import config from "../storage/config.js";
export default{
    
      show(){
        
        config.dataMyTable();
        Object.assign(this, JSON.parse(localStorage.getItem("myTable")))
        const ws = new Worker("storage/wsMyTable.js",{type:"module"});

        //enviamos un mensaje el worker
        ws.postMessage({module: "showTable", data : this.table});
        ws.postMessage({module: "cards", data : this.table});
        ws.postMessage({module: "list", data : this.table});
        let id = ["#table"];
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