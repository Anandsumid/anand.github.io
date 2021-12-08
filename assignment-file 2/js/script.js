// Use window.addEventListener("scroll",) Event listener. 
// then add callback function that includes when the window height scroll down to 100vh and add 'fixed-top' class on Navbar element.
// For your mind: object.classList.add('class') this method is add class on selected element
// e.target.scrollingElement.scrollTop use that method when track scrolling amount
// window(scrollDetect())
// Add scrollDetect callback function on window.addEventlistener('scroll', callback) Listener
const navbar = document.getElementById("navbar-id")
const section1 = document.getElementById("section1")



function scrollDetect(event) {

    let scrollTop = event.target.scrollingElement.scrollTop;
    console.log(scrollTop)
    if (scrollTop > section1.offsetHeight + navbar.offsetHeight) {
        navbar.classList.add("fixed-top")
    } else {
        navbar.classList.remove("fixed-top")
    }

}


window.addEventListener("scroll", scrollDetect)


// Create an XMLHttpRequest object
// Create a callback function
// Open a GET request and use data from ../data/company_intro.json
// Send the request
const business_challenge = new XMLHttpRequest
business_challenge.onload = () => {
    const dataJSON = JSON.parse(business_challenge.responseText)
    const datas = dataJSON.data
    for (i = 0; i < datas.length; i++) {
        document.getElementById("section3Para").innerHTML += `<div class="col-lg-4">
    <div class="section8Margin" id='${datas[i].id}'>
    <div class="cardy">
    <img class=iconImage iconTitle" src="${datas[i].icon}"  alt="...">
        <h2>${datas[i].title}</h2>
        <p>${datas[i].content.slice(0,50)}</p>
        <a href="#" class="button">Learn More<i class="fas fa-arrow-right button"></i></a>
        
    </div>
</div>
</div>`


    }
}
business_challenge.open("GET", "../data/business_challenge.json")
business_challenge.send()





const company_intro = new XMLHttpRequest
company_intro.onload = () => {
    const dataJSON = JSON.parse(company_intro.responseText)
    const datas = dataJSON.data
    for (i = 0; i < 3; i++) {
        document.getElementById("section2Para").innerHTML += `<div class="col-lg-4">
    <div class="section8Margin" id='${datas[i].id}'>
    <img class="card-img-top" src="${datas[i].thumbnail}"  alt="...">
    <div class="cardy">
        <h2>${datas[i].title}</h2>
        <p>${datas[i].content.slice(0,150)}</p>
        <a href="#" class="button">Learn More<i class="fas fa-arrow-right button"></i></a>
        
    </div>
</div>
</div>`


    }
}
company_intro.open("GET", "../data/company_intro.json")
company_intro.send()


const post = new XMLHttpRequest
post.onload = () => {
    const dataJSON = JSON.parse(post.responseText)
    const datas = dataJSON.data
    for (i = 0; i < 3; i++) {
        document.getElementById("section8Post").innerHTML += `<div class="col-lg-4">
    <div class="section8Margin" id='${datas[i].id}'>
    <img class="card-img-top" src="${datas[i].thumbnail}"  alt="...">
    <div class="cardy">
        <h2>${datas[i].title}</h2>
        <p>${datas[i].content.slice(0,150)}</p>
        <a href="#" class="button">Learn More<i class="fas fa-arrow-right button"></i></a>
        
    </div>
</div>
</div>`


    }
}
post.open("GET", "../data/posts.json")
post.send()



const post1 = new XMLHttpRequest
post1.onload = () => {
    const dataJSON = JSON.parse(post1.responseText)
    const datas = dataJSON.data
    for (i = 0; i < datas.length; i++) {
        document.getElementById("section3Post").innerHTML += `<div class="col-lg-4">
    <div class="section8Margin" id='${datas[i].id}'>
    <img class="card-img-top" src="${datas[i].thumbnail}"  alt="...">
    <div class="cardy">
        <h2>${datas[i].title}</h2>
        <p>${datas[i].content.slice(0,150)}</p>
        <a href="#" class="button">Learn More<i class="fas fa-arrow-right button"></i></a>
        
    </div>
</div>
</div>`


    }
}
post1.open("GET", "../data/posts.json")
post1.send()


// Modal

// Define Play button variable
// Create a modal with a single line of JavaScript: https://getbootstrap.com/docs/5.1/components/modal/#via-javascript
// Define finsetModal then use Bootstrap modal Object request
// Create Click Event Listener on Play button variable (you already created above)
// add finsetModal.show() on callback function
// Select '.modal-body' class from finsetModal variable then use innerHTML method and add Youtube embed code


const playButton = document.getElementById("clickVideo");
var finsweetModal = new bootstrap.Modal(document.getElementById('uploadSong'), {
    backdrop: "static",
    keyboard: true,
})
playButton.addEventListener("click", () => {
    finsweetModal.show()
    document.getElementsByClassName("modal-body")[0].innerHTML = `<iframe width="470" height="600" src="https://www.youtube.com/embed/q2WvTaqe9zU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})