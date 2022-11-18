

  
    document.addEventListener('DOMContentLoaded', function(){
    
        let i = 0;
        typeFunc = () => {
          let info = "Hi! I am Efraim";
          if(i < info.length){
              document.querySelector('#text').innerHTML += info.charAt(i);
              i++
          }
        }

        setInterval(typeFunc, 200);

    })


    document.addEventListener('DOMContentLoaded', function(){

        goto = (keyword) => {
            const identifier = '#' + keyword;
            const divSelect = document.querySelector(identifier);
            console.log(divSelect)
            divSelect.scrollIntoView({behavior: "smooth"});
            
            if(keyword === "contact"){
                activeState('5');
            }else{
                activeState('2');
            }
        }
        
        scaleImage = () =>{
            document.querySelector('#hero-img').src = "asssets/japan-tree.svg";
        }
        minImage = () =>{
            document.querySelector('#hero-img').src = "asssets/monster.svg";
        }


   
       
        scaleMe = (keyword) =>{
           const identifier = ".skill-col-"+ keyword;
           const divTools = document.querySelector(identifier);
           divTools.style.boxShadow = "5px 5px rgb(64, 237, 232)";
        }

        
        outScaleMe = (keyword) =>{
            const identifier = ".skill-col-"+ keyword;
            const divTools = document.querySelector(identifier);
            divTools.style.boxShadow = "10px 10px rgb(64, 237, 232)";
         }

       
        appendAtag =(keyword)=>{
         
            let x = parseInt(keyword)-1;
            const identifier = ".btn-"+ keyword;
            const divProj = document.querySelector(identifier);
            const newP = document.createElement('H5');
            newP.classList.add('card-text');
            newP.classList.add('card-warning');
            divProj.appendChild(newP);
            newP.innerHTML= "Coming Soon";
            
            let pics = ['papa bear.png','zebu.png','Languages subscription.png','slp 2.png','foley.png'];
            let picTemp = "asssets/project_img/";
            let picImg = picTemp + pics[x]
            const imgProj = document.querySelectorAll('.cardImg');
            imgProj[x].src = picImg;
         }


         activeState = (keyword) =>{
            let temp = '.nav-'+ keyword;
            const navSelect = document.querySelector(temp);
            navSelect.style.backgroundColor = "rgb(64, 237, 232)";
          
            for(let i = 1; i <= 5; i++){
                if(i !== parseInt(keyword)){
                     let tempNav = document.querySelector('.nav-'+i);
                    
                     console.log(tempNav)
                     tempNav.style.backgroundColor ="#1F1D20";
                }
               
            }
         }
          
    });
    

    


