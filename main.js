const imgs = document.querySelectorAll('.cars img');
const caixa = document.getElementById('c');




imgs.forEach((img) => {
    img.addEventListener('click', (event) => {


        if(event){

            event.preventDefault();


            const janela2 = document.createElement('div');
            janela2.classList.add('foto');
    
            const foto = document.createElement('img');
            foto.src = img.src;
    
            foto.classList.add('foto');
            
            janela2.appendChild(foto)
    
            caixa.appendChild(janela2);
            caixa.classList.remove('modal');
            caixa.classList.add('modal-open')


            caixa.addEventListener('click', (event) => {
                if(event.target.classList == 'modal-open'){
                    caixa.removeChild(janela2)
                    caixa.classList.remove('modal-open');
                    caixa.classList.add('modal')
            
                }
            })
    

            
        }


            
       
    

      
        

   
    




        

  

        

        
    })

    



 
   
})

