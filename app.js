const masivi =  [12, 56, 34, 22, 12, 14, 90, 33, 39, 11, 23, 19];
let luwi = [];
let kenti = [];

for(let i = 0; i<masivi.length;i++){
    if(masivi[i] % 2 == 0){
        luwi.push(masivi[i])
    }else{
        kenti.push(masivi[i])
    }
}
document.write(luwi + "<br>");
document.write(kenti)