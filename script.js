function tabuada(){
    var numeroTab = document.getElementById('txtNumero').value
    var numeroM = numeroTab
    var c = 0
    var resultadoTab
    var res = document.querySelector('div#res')
    res.innerHTML = ''

    if (numeroTab == '') {
        window.alert('favor inserir valor')
    } else {
    while (c < 10){

        c++
        resultadoTab = numeroM * c
        res.innerHTML += `${numeroTab} * ${c} = ${resultadoTab}<br>`   
    } }

}