export default{
    foot:[
        {
            paragraph:"Blog PingPong",
            paragraph2:"Bootstrap",
            paragraph3:"Jose Cabrejo",
            paragraph4:"Back to top",
            href:"https://getbootstrap.com/",
            href2:"https://twitter.com/mdo",
            href3:"",
            href4:""
        }
    ],
    showFooter(){
        this.foot.forEach((val, id) =>{
            document.querySelector("#footer").insertAdjacentHTML("beforeend",`
                <p>${val.paragraph} <a href=${val.href}>${val.paragraph2}</a> by <a
                href=${val.href2}>${val.paragraph3}</a>.</p>
                <p>
                <a href="#">${val.paragraph4}</a>
                </p>
                `)
        });
    }
}

