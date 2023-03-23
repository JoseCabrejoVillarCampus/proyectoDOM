export default{
    title: {
        name:"PING PONG",
        href:"#"
    },
    pingPongItems:[
        {
            name:"Historia",
            href:"#"
        },
        {
            name:"Inicios",
            href:"#"
        },
        {
            name:"Internacionalización",
            href:"#"
        },
        {
            name:"Reglamentación",
            href:"#"
        },
        {
            name:"La Escuela",
            href:"#"
        },
        {
            name:"Deporte Olímpico",
            href:"#"
        },
        {
            name:"La Mesa",
            href:"#"
        },
        {
            name:"La Pelota",
            href:"#"
        },
        {
            name:"La Raqueta",
            href:"#"
        },
        {
            name:"El Partido",
            href:"#"
        },
        {
            name:"El Servicio",
            href:"#"
        },
        {
            name:"Vestimenta",
            href:"#"
        },
        
    ],
    listTitle(){
        document.querySelector("#title").insertAdjacentHTML("beforeend",`<a class="blog-header-logo " href="#" >${this.title.name}</a>`)
    },
    listarItems(){
        let plantilla= "";
        this.pingPongItems.forEach((val, id) => {
            plantilla += `<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`
        });
        document.querySelector("#pingPongItems").insertAdjacentHTML("beforeend",plantilla);
    }
}



