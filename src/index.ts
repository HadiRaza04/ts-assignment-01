// async function fetchText() {
//     // let response = await fetch();
//     // let data = await response.text();
//     // console.log(data);


//     let response = await fetch('http://api.weatherapi.com/v1/current.json?key=8131237d20394a53bbb101622233003&q=Karachi&aqi=no');

//     console.log(response.status); // 200
//     console.log(response.statusText); // OK
    
//     if (response.status === 200) {
//         let data = await response.text();
//         // handle data
//     }
//     console.log(response.text()); // OK
// }
// fetchText();



async function getText() {
    let x = await fetch("http://api.weatherapi.com/v1/current.json?key=8131237d20394a53bbb101622233003&q=Karachi&aqi=no");
    let y = await x.text();
    // console.log(y);
    let jsonObj: Object = JSON.parse(y);
    // console.log(jsonObj);


}
getText();
document.getElementById("location").innerHTML = jsonObj.location;




