export default{
    dataMyHeader(){
        localStorage.setItem("myHeader", JSON.stringify({
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
            
        }))
    },
    dataMyArticle(){
        localStorage.setItem("myArticle", JSON.stringify({
            article:[
                {
                    title:"Tenis De Mesa",
                    date:"",
                    by:"",
                    paragraph:""
        
                },
                {
                    title:"También Conocido como Ping-Pong o Pimpón",
                    date:"March 24, 2023 by",
                    by:"Jose Cabrejo",
                    paragraph:"Es un deporte de raqueta que se disputa entre dos jugadores o dos parejas (dobles). Es un deporte olímpico desde Seúl 1988, y el deporte con mayor número de practicantes, con 40 millones de jugadores compitiendo en todo el mundo.1​2​3​ Según un estudio realizado por la NASA, es el deporte más complicado que un ser humano puede practicar a nivel profesional.4​5​6​ Diversos estudios han demostrado que la práctica de este deporte mejora, entre otras, la capacidad y el tiempo de reacción, la coordinación ojo-mano, la concentración y la memoria. La regulación a nivel mundial de este deporte corre a cargo de la Federación Internacional de Tenis de Mesa (ITTF, por sus siglas en inglés), que agrupa a más de 200 organizaciones nacionales y 33 millones de federados a todos los niveles de competición, desde torneos de clubs hasta los campeonatos del mundo, que se celebran anualmente desde 1926 y bianualmente desde 1957, o el World Tour, un conjunto de torneos organizados por la ITTF que se celebran en todos los continentes y que reúne a los profesionales del más alto nivel. Nació en la década de 1870 en Inglaterra como una derivación del tenis. "
                },
                {
                    title:"Incorporación de los países asiáticos",
                    date:"",
                    by:"",
                    paragraph:"El primer país asiático en frenar el dominio europeo fue Japón, que dominó los mundiales entre 1952 y 1957. Este dominio fue el reflejo de una incorporación técnica aportada por este país: la espuma. "
                },
                {
                    title:"Condiciones de Juego",
                    date:"",
                    by:"",
                    paragraph:"This is some additional paragraph placeholder content. It's a slightly shorter version of the other highlyrepetitive body text used throughout. This is an example unordered list:",
                    listar:[
                        {
                            name:"El espacio de juego será rectangular y no menor de 14 m de largo, 7 m de ancho y 5 m de alto.",
                            href:"#"
                        },
                        {
                            name:"En competiciones por el título mundial u olímpico la intensidad luminosa, medida a la altura de la superficie de juego, deberá ser, como mínimo, de 1000 lux.",
                            href:"#"
                        },
                        {
                            name:"Cuando se juegue en varias mesas a la vez, el nivel de iluminación deberá ser el mismo para todas ellas. ",
                            href:"#"
                        },
                        {
                          name:"El fondo deberá ser, en general, oscuro y no podrá contener fuentes de luz brillante ni dejar pasar claridad a través de ventanas sin cubrir u otras aberturas.",
                          href:"#"
                        },
                        {
                          name:"El suelo no podrá ser de color claro, ni con brillo reflectante ni resbaladizo, y su superficie no podrá ser de ladrillo, cerámica, cemento o piedra. ",
                          href:"#"
                        }
                    ]
                },
                {
                    title:"Inicios",
                    date:"December 23, 2023 by",
                    by:"Jose Cabrejo",
                    paragraph:`Aunque a menudo se asocia el tenis de mesa con los países asiáticos, está ampliamente aceptado que este deporte nació en el último cuarto del siglo XIX en Inglaterra como una derivación del tenis. Es posible que jugadores de tenis ante la adversa climatología inventaran una especie de tenis en miniatura utilizando una mesa de billar o de comedor, en un club de tenis, y dividiéndola en dos campos con libros o simultáneamente con una cuerda. Como pelotas servirían algunos de los muchos modelos existentes para juegos infantiles, o incluso tapones de corcho convenientemente adaptados. Las raquetas serían tapas de cajas de puros o bates infantiles. Indudablemente se mezcla la leyenda con la realidad. Por esta versión se inclinan Gerald Gurney y Ron Crayden, dos profundos estudiosos en la historia del tenis de mesa. Los estudiantes universitarios adoptaron rápidamente el entonces juego de salón en toda Inglaterra. En 1884 la firma F. H. Ayres Ltd. (Frederick Henry Ayres) ya comercializaba un juego de tenis de salón en miniatura. El británico James Devonshire patenta, el 9 de octubre de 1885, su «Table Tennis», la primera vez de la que se tiene conocimiento en utilizar el término «tenis de mesa».11​ En julio de 1890, el industrial de Yorkshire David Forster, patentó un juego de mesa para sala, el cual consistía únicamente en una mesa rodeada con una especie de valla para mantener la pelota dentro de unos límites. No existen evidencias de su comercialización.`
                }
            ],
        }))
    },
    dataMyBanner(){
        localStorage.setItem("myBanner", JSON.stringify({
            image: "../img/two-tennis-rackets-and-ball-against-net-on-table-P37HCQZ-e1602572035813.jpg",
            comp:{
                title: "Tenis de mesa",
                paragraph:`El tenis de mesa (también conocido como ping-pong o pimpón) es un deporte de raqueta que se disputa entre dos jugadores o dos parejas (dobles). Es un deporte olímpico desde Seúl 1988, y el deporte con mayor número de practicantes, con 40 millones de jugadores compitiendo en todo el mundo.1​2​3​ Según un estudio realizado por la NASA, es el deporte más complicado que un ser humano puede practicar a nivel profesional.`,
                btn:{
                    name:"Saber más.....",
                    href:"https://es.wikipedia.org/wiki/Tenis_de_mesa"
                    },
            },
        }))
    }
}