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
        title:`juego de Ping-Pong de principios del siglo XX comercializado por la empresa Parker Brothers `,
        date:"Siglo XX",
        paragraph:"Museo de los Niños de Indianápolis",
        image:"img/Ping-Pong_2.jpg",
        btn:{
            name:"Continue Reading",
            href:"#"
        }
      }
      ],
    showPost(){
        this.post.forEach((val, id) => {
            document.querySelector("#post").insertAdjacentHTML("beforeend",
                `<div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards">
                  <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary">${val.article}</strong>
                    <h3 class="mb-0">${val.title}</h3>
                    <div class="mb-1 text-muted">${val.date}</div>
                    <p class="card-text mb-auto">${val.paragraph}</p>
                    <a href="${val.btn.href}" class="stretched-link">${val.btn.name}</a>
                  </div>
                  <div class="col-auto d-none d-lg-block">
                    <img src="${val.image}" class="responsiveImg">
                  </div>
                </div>
              </div>`
            )
        });
    }
        
    
}
console.log(post);