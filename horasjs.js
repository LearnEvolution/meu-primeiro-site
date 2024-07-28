function iniciar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var top = window.document.getElementById('top')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
  //  msg.innerHTML = `Agora são ${hora} horas`
    
    if(hora >= 6 && hora < 12 ){
       img.src = 'manha.png'
       document.body.style.background = '#51aff7'
       msg.innerHTML = `Agora são ${hora}h ${min}m`
       top.innerHTML = 'Bom Dia!'
       
    }else if(hora >= 12 && hora <= 17){
       img.src = 'tarde.png'
      document.body.style.background = '#ef8c'
      msg.innerHTML = `Agora são ${hora}h ${min}m`
      top.innerHTML = 'Boa Tarde!'

   }else if(hora >= 0 && hora <= 5){
      img.src = 'madrugada.png'
     document.body.style.background = '#000'
     msg.innerHTML = `Agora são ${hora}h ${min}m`
     top.innerHTML = 'Boa Madrugada!'

    }else{
       img.src = 'noite.png'
       document.body.style.background = '#3c3b3b'
       msg.innerHTML = `Agora são ${hora}h ${min}m`
       top.innerHTML = 'Boa Noite!'
  
    }
}
