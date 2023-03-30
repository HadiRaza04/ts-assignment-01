"use strict";
// async function fetchText() {
//     // let response = await fetch();
//     // let data = await response.text();
//     // console.log(data);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function getText() {
    return __awaiter(this, void 0, void 0, function* () {
        let x = yield fetch("http://api.weatherapi.com/v1/current.json?key=8131237d20394a53bbb101622233003&q=Karachi&aqi=no");
        let y = yield x.text();
        // console.log(y);
        let jsonObj = JSON.parse(y);
        // console.log(jsonObj);
    });
}
getText();
document.getElementById("location").innerHTML = jsonObj.location;
//# sourceMappingURL=index.js.map