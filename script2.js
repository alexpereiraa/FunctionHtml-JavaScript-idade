function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var nasc = document.getElementById('nasc');
    var res = document.getElementById('res');
    if(nasc.value.length == 0 || nasc.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente.');
    }else{
        var sexo = document.getElementsByName('sexo'); /*Se quiser pegar o sexo devo pegar a tag pelo nome e não por id*/
        var idade = ano - Number(nasc.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(sexo[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                img.style.width = '300px';
                img.setAttribute('src', 'menino.jpeg');
            }else if(idade < 21){
                img.style.width = '300px';
                img.setAttribute('src', 'jovemH.jpeg');
            }else if(idade < 50){
                img.style.width = '300px';
                img.setAttribute('src', 'homen.jpeg');
            }else{
                img.style.width = '300px';
                img.setAttribute('src', 'senhor.jpeg');
            }
        }else if(sexo[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                 img.style.width = '300px';
                 img.setAttribute('src', 'menina.jpeg');
            }else if(idade < 21){
                img.style.width = '300px'
                img.setAttribute('src', 'jovemM.jpeg');
            }else if(idade < 50){
                img.style.width = '300px'
                img.setAttribute('src', 'mulher.jpeg');
            }else{
                img.style.width = '300px'
                img.setAttribute('src', 'senhora.jpeg');
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${genero} com ${idade} anos `
        res.appendChild(img)
         
    }
}