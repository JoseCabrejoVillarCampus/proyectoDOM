let wsMyBanner={
    showSectionBanner(p1){
        return `<h1 class="display-4 ten">${p1.title}</h1>
        <p class="lead my-3" ten>${p1.paragraph}</p>
        <p class="lead mb-0"><a href="${p1.btn.href}" target="_blank class="text-white fw-bold">${p1.btn.name}</a></p>
        `
        }
    }
self.addEventListener("message",(e)=>{
    postMessage(wsMyBanner[`${e.data.module}`](e.data.data));
})