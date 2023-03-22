export default{
    post:{
        article:"FOR SERVERS",
        title:"Featured post",
        date:"Nov 12",
        paragraph:`This is a wider card with supporting text below as a natural lead-in to
        additional content.`,
        image:"img/table-tennis-ping-pong-passion-sport.jpg",
        btn:{
            name:"Continue Reading",
            href:"#"
        }
    },
    showPost(){
        this.post.array.forEach((val, id) => {
            document.querySelector("#post").insertAdjacentHTML("beforeend",
                `<div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards">
                  <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary">FOR SERVERS</strong>
                    <h3 class="mb-0">Featured post</h3>
                    <div class="mb-1 text-muted">Nov 12</div>
                    <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to
                      additional content.</p>
                    <a href="#" class="stretched-link">Continue reading</a>
                  </div>
                  <div class="col-auto d-none d-lg-block">
                    <img src="./img/table-tennis-ping-pong-passion-sport.jpg" class="responsiveImg">
                  </div>
                </div>
              </div>`
            )
        });
    }
        
    
}