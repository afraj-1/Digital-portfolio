function tipcal() {
    var total=document.getElementById("tba").value;
    var quality=document.getElementById("qs").value;
    var ppl=document.getElementById("np").value;

    cal=(total*quality)/ppl;
    document.getElementById("result").innerHTML=("Calculated tip: Rs."+cal +" per person")

}
