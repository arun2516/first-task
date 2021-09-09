// var request = new XMLHttpRequest();
// request.open('GET','https://restcountries.eu/rest/v2/all',true);
// request.send();
// request.onload = function(){
//     var data = JSON.parse(request.response);
//     var res = data.map((element)=>element.currencies.filter((elem)=>elem.code === "USD").map((element)=>element.name));
//     console.log(res);

// }

var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(request.response);
    let res=[];
    data.map(function(element){
        element.currencies.filter(function(elem){
            if(elem.code === "USD"){
                console.log(element.name);
            }
        })
    })

}