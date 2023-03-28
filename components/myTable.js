export default{
    table:[
        {
          title:"CAMPEONES",
          paragraph:"En la siguiente tabla se muestran los jugadores —hombres y mujeres— que han conseguido al menos cinco victorias individuales en sus participaciones en dichas competiciones: ",
          camp:[
            {
              name:"Ma Long",
              victorias:"2008-2019",
              jjoo:"4",
              cdm:"2",
              cm:"5",
              total:"11"
            },
            {
              name:"Wang Nan",
              victorias:"1997-2007",
              jjoo:"3",
              cdm:"4",
              cm:"2",
              total:"9"
            },
            {
              name:"Liu Shiwen",
              victorias:"2009-2019",
              jjoo:"1",
              cdm:"5",
              cm:"3",
              total:"9"
            },
            {
              name:"Ding Ning",
              victorias:"2011-2018",
              jjoo:"4",
              cdm:"3",
              cm:"1",
              total:"8",
            },
            {
              name:"Deng Yaping",
              victorias:"1991-1997",
              jjoo:"5",
              cdm:"1",
              cm:"1",
              total:"7"
            }
          ]
        }
      ],
      show(){
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