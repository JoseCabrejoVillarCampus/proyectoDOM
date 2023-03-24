export default{
    nav:[
        {
            title:"Un Poco de Historia",
            paragraph:"Nació en la década de 1870 en Inglaterra como una derivación del tenis. La historia de este deporte está marcada por una serie de evoluciones técnicas, como la naturaleza de los revestimientos de las raquetas, aumento del tamaño de la pelota, la reducción del número de tantos por juego o la introducción y posterior prohibición del uso de pegamentos rápidos.",
        },
        {
            title:"Principales Torneos",
            link:[
                {
                    name:"Abierto de Alemania",
                    href:"#",
                },
                {
                    name:"Abierto de Argentina",
                    href:"#",
                },
                {
                    name:"Abierto de Alemania",
                    href:"#",
                },
                {
                    name:"Abierto de Australia",
                    href:"#",
                },
                {
                    name:"Abierto de Austria",
                    href:"#",
                },
                {
                    name:"Abierto de Bielorussia",
                    href:"#",
                },
                {
                    name:"Abierto de Belgica",
                    href:"#",
                },
                {
                    name:"Abierto de Brasil",
                    href:"#",
                },
                {
                    name:"Abierto de Bulgaria",
                    href:"#",
                },
                {
                    name:"Abierto de Chile",
                    href:"#",
                },
                {
                    name:"Abierto de China",
                    href:"#",
                },
                {
                    name:"Abierto de Cheqia",
                    href:"#",
                }

            ],
        },
        {
            title:"WTT Cup Finals",
            link:[
                {
                    name:"Fan Zhendong 2021",
                    href:"#",
                },
                {
                    name:"Wang Chuqin 2022 ",
                    href:"#",
                },
                {
                    name:"Chen Meng 2020",
                    href:"#",
                }

            ],
        }
    ],
    showAside(){
        const data = this.nav.map((val, id)=>{
            return (
                (val,id)
                ? this.list(val)
                : this.cards(val)
            );
        });
        document.querySelector("#about").insertAdjacentHTML("beforeend", data.join(""))  
    },
    cards(p1){
        return `
        <div class="p-4">
            <h4 class="titleaside fst-italic">${p1.title}</h4>
            <p class="lis mb-0">${p1.paragraph}</p>
          </div>
        `;
    },
    list(p1){
        return`
        <div class="p-4">
            <h4 class="titleaside fst-italic">${p1.title}</h4>
            <ol class="list-unstyled mb-0">
              ${p1.link.map((val, id)=>`<li ><a class="lis" href="${val.href}">${val.name}</a></li>`).join("")}
            </ol>
          </div>
        `;
    }
    
}