/*  Add subscription email action. When subscription POST request is successful, 
    change the email element and subscribe button into "Your subscription is successful" Text. 
    POST request should be done by AJAX request. We need a POST request end point for subscription email. 
*/
// Define Subscribe by ID name
// Add CLICK Event Listener on the button
// Then using Fetch method POST input value to http://52.221.191.153/subscribe/subscription/create 


const subscribe = document.getElementById('subscribe')
subscribe.addEventListener('click', () => {
    var submitEmail = document.getElementById('email').value
    const URL = "http://52.221.191.153/subscribe/subscription/create";
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
            "email": `${submitEmail}`
        }),
        headers: {
            "Content-Type": "application/json",
            // "Accept":"application/json"
        }
    }

    fetch(URL, requestOptions).then(res => res.json())
        .then(res => {
            console.log(res.message)
        })


        .then(function (data) {
            console.log(data)
        })
})