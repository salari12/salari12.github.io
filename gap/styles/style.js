const filter container = document.querySelector(".gallery-filter"),  
 galleryItems = document.querySelectorAll(".gallery-item");  
 filter container.addEventListener("click", (event) =>{  
  if(event.target.classList.contains("filter-item")){  
        // deactivate existing active 'filter-item'  
        filter container.querySelector(".active").classList.remove("active");  
        // activate new 'filter-item'  
        event.target.classList.add("active");  
        const filter value = event. target.getAttribute("data-filter");  
        galleryItems.forEach((item) =>{  
    if(item.classList.contains(filterValue) || filter value === 'all'){  
         item.classList.remove("hide");  
          item.classList.add("show");  
    }  
    else{  
         item.classList.remove("show");  
         item.classList.add("hide");  
    }  
        });  
  }  
 });  