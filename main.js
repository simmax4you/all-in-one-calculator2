var constant=Number(document.getElementById("input").value);
function Calculate_all(){
    var constant=Number(document.getElementById("input").value);
    output1 = constant*constant;
    output2 = constant/constant;
    output3 = constant+constant;
    output4 = constant-constant;
    document.getElementById("multiplicationA").innerHTML=output1;
    document.getElementById("additionA").innerHTML=output3;
}