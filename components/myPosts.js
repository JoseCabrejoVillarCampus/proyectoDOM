export default{
    post:[{
        article:"Mondial Ping - Men's Singles",
        title:"Ma Long-Koki Niwa",
        date:"2013 World Table Tennis Championships",
        paragraph:`English: 2013 World Table Tennis Championships, Paris. Men's Singles Round 4. Ma Long vs Koki Niwa.
        Français : Championnats du monde de tennis de table, Paris. Huitième de finale simple homme. Ma Long vs Koki Niwa.`,
        image:"img/table-tennis-ping-pong-passion-sport.jpg",
        btn:{
            name:"Continue Reading",
            href:"#"
        }
      },
      {
        article:"Swedish table tennis player",
        title:"Jan-Ove Waldner",
        date:"14 de noviembre de 2012",
        paragraph:`English: Swedish table tennis player representing Spårvägen BTK.`,
        image:"img/Jan-Ove_Waldner.JPG",
        btn:{
            name:"Continue Reading",
            href:"#"
        }
      },
      {
        article:"Summer Olympics",
        title:"Riocentro table tennis venuet",
        date:"6 de agosto de 2016",
        paragraph:`Archivo:Riocentro table tennis venue 2016 Summer Olympics 06.08.2016.`,
        image:"img/Riocentro_table_tennis_venue_2016_Summer_Olympics_06.08.2016.jpg",
        btn:{
            name:"Continue Reading",
            href:"#"
        }
      },
      {
        article:"Dimensiones",
        title:"Mesa de tenis de mesa",
        date:"17:02 16 oct 2005",
        paragraph:`Diagrama que muestra las dimensiones de una mesa de tenis de mesa..`,
        image:"img/Mesa_de_tenis_de_mesa.jpg",
        btn:{
            name:"Continue Reading",
            href:"#"
        }
      },
      {
        article:"Ping Pong Vintage",
        title:`juego de Ping-Pong de principios del siglo XX`,
        date:"Siglo XX",
        paragraph:"Museo de los Niños de Indianápolis, comercializado por la empresa Parker Brothers",
        image:"img/Ping-Pong_2.jpg",
        btn:{
            name:"Continue Reading",
            href:"#"
        }
      }
      ],
      show(){
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