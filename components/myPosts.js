import config from "../storage/config.js";
export default{
    
      show(){

        config.dataMyPost();
        Object.assign(this, JSON.parse(localStorage.getItem("myPost")));
        const ws = new Worker("storage/wsMyPost.js",{type:"module"});

        //enviamos un mensaje el worker
        ws.postMessage({module: "showPost", data : this.post});
        let id = ["#post"];
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