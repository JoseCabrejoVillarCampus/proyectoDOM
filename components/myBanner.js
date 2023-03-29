import config from "../storage/config.js";
export default{
    
    showImage(){

        config.dataMyBanner();
        Object.assign(this, JSON.parse(localStorage.getItem("myBanner")));
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