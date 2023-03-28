let wsMyFooter={
    showFooter(p1){
        let plantilla ="";
        p1.forEach((val, id) =>{
            plantilla += `<p>${val.paragraph} <a href=${val.href}>${val.paragraph2}</a> by <a
                href=${val.href2}>${val.paragraph3}</a>.</p>
                <p>
                <a href="#">${val.paragraph4}</a>
                </p>`
            });
            return plantilla;
    }
}
self.addEventListener("message",(e)=>{
    postMessage(wsMyFooter[`${e.data.module}`](e.data.data));
})