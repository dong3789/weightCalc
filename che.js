
var name = prompt("이름을 입력하세요", "");
var height = prompt("신장을 입력하세요", "");
var weight = prompt("체중을 입력하세요", "");
var properWeight = (height - 100) * 0.9;
var result = (weight >= (properWeight - 5)) && (weight <= (properWeight +5));

document.write("이름 : " + name + "<br>");
document.write("신장 : " + height + "<br>");
document.write("체중 : " + weight + "<br>");
document.write("적정 체중 : " + properWeight + "<br>");
document.write(name + "님은 ")
result ? document.write("축하합니다. 적정 체중 입니다.") : document.write("적정 체중이 아닙니다. ㅋ");
