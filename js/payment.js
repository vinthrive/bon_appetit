
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return decodeURIComponent(sParameterName[1]);
        }
    }
}

let payment_title = GetURLParameter('title');
let payment_image = GetURLParameter('image');
let payment_price = GetURLParameter('price');

document.getElementById("payment_title").innerHTML = payment_title
document.getElementById("payment_image").src = "img/" + payment_image;
document.getElementById("payment_price").innerHTML = "$" + payment_price
console.log(menu_name);
console.log(menu_price);