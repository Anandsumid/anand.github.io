const section1 = document.getElementById('section1')
const navbar = document.getElementById('navbarr')
function scrollDetect(event){
    let scrollTop = event.target.scrollingElement.scrollTop
    if(scrollTop>section1.offsetHeight+navbar.offsetHeight){
        navbar.classList.add('fixed-top')
    }
    else{
        navbar.classList.remove('fixed-top')
    }
}
// Use window.addEventListener("scroll",) Event listener. 
window.addEventListener('scroll', scrollDetect)
// then add callback function that includes when the window height scroll down to 100vh and add 'fixed-top' class on Navbar element.
// For your mind: object.classList.add('class') this method is add class on selected element
// e.target.scrollingElement.scrollTop use that method when track scrolling amount



// Add scrollDetect callback function on window.addEventlistener('scroll', callback) Listener


// Define Play button variable

// Create a modal with a single line of JavaScript: https://getbootstrap.com/docs/5.1/components/modal/#via-javascript
// Define finsetModal then use Bootstrap modal Object request


// Create Click Event Listener on Play button variable (you already created above)
// add finsetModal.show() on callback function
// Select '.modal-body' class from finsetModal variable then use innerHTML method and add Youtube embed code



// Create an XMLHttpRequest object
const assignment2 = document.querySelector('.secondbanner')
let secondbg = new XMLHttpRequest()

// Create a callback function
// Open a GET request and use data from ../data/company_intro.json
secondbg.open('GET', '../data/company_intro.json')
// Send the request
secondbg.onreadystatechange = function(){
    console.log(secondbg.readyState)
    if(secondbg.readyState==4){
            let response = JSON.parse(secondbg.responseText).data
            console.log(response)
            for(let i=0;i<response.length;i++){
                assignment2.innerHTML+=`<div class="col-xs-12 col-sm-6 col-md-4">
                <div class="cord w-100">
                    <img class="card-img-top" src="${response[i].thumbnail}" alt="Card image cap">
                    <div class="pt-3 card-detail">
                        <div class="flex-column justify-content-between h-100 d-flex">
                            <div>
                                <h2 class="card-title">${response[i].title}</h5>
                                    <p class="card-text">${response[i].content}</p>
                            </div>
                            <div>
                                <a href="#" class="koko">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            }
        }
    
}
secondbg.send()


const assignment4 = document.querySelector('.assignment4')
let latestblog = new XMLHttpRequest()
latestblog.open('GET', '../data/company_intro.json')
latestblog.onreadystatechange = function(){
    console.log(latestblog.readyState)
    if(latestblog.readyState==4){
            let response = JSON.parse(latestblog.responseText).data
            console.log(response)
            for(let j=0; j<response.length; j++){
                assignment4.innerHTML+=`<div class="col-xs-12 col-sm-6 col-md-4">
                <div class="cardd">
                    <img class="card-img-top img-fluid" src="${response[j].thumbnail}" alt="Card image cap">
                    <div class="card-body card-detail">
                        <div class="flex-column justify-content-between h-100 d-flex">
                            <div>
                                <h2 class="card-title">${response[j].title}</h5>
                                    <p class="card-text">${response[j].content}</p>
                            </div>
                            <div>
                                <a href="/blog.html" class="koko">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            }
    }
}
latestblog.send()

/*  Add subscription email action. When subscription POST request is successful, 
    change the email element and subscribe button into "Your subscription is successful" Text. 
    POST request should be done by AJAX request. We need a POST request end point for subscription email. 
*/
var subscribe= document.getElementById('subscribe')
// Define Subscribe by ID name
subscribe.addEventListener('click',()=>{
    
})
// Add CLICK Event Listener on the button
// Then using Fetch method POST input value to http://52.221.191.153/subscribe/subscription/create 
