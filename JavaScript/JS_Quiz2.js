var userNum = prompt("몇까지의 3의 배수를 찾을까요?");
var result = []; 
var total = 0;

if(userNum === null) {
    alert("입력하지않음");
} else {
    for(var i=1; i <= userNum; i++){
        if(i % 3 === 0) {
            result[i-1] = i;
            total++;
            document.write(result[i-1] + ", ");
        }
    }
}


document.write("<h4>" + userNum + "까지의 3의 배수 개수: " + total + "</h2>");