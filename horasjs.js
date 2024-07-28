function iniciar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
  //  msg.innerHTML = `Agora são ${hora} horas`
    
    if(hora >= 0 && hora < 12 ){
       img.src = 'manha.png'
       document.body.style.background = '#51aff7'
       msg.innerHTML = `Bom dia! Agora são ${hora}h ${min}m`
       
    }else if(hora >= 12 && hora <= 17){
       img.src = 'tarde.png'
      document.body.style.background = '#ef8c4c'
      msg.innerHTML = `Boa tarde! Agora são ${hora}h ${min}m`
      
    }else{
       img.src = 'noite.png'
       document.body.style.background = '#3c3b3b'
       msg.innerHTML = `Boa Noite! Agora são ${hora}h ${min}m`
  
    }
}
