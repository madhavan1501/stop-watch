      
      
        let  start= document.querySelector('.start');
        let  stop= document.querySelector('.stop');
        let  reset= document.querySelector('.reset');
        let  hrs= document.querySelector('.hrs');
        let  min= document.querySelector('.min');
        let  sec= document.querySelector('.sec');
        let msec=document.querySelector('.msec'); 

        let h=m=s=ms=0;


        function str(){     // JAVA SCRIPT
            timer=setInterval(()=>{
                if(ms<100){
                    ms++;
                }
                else if(s<59){
                    ms=0;
                    s++;
                }
                else if(m<59){
                    ms=0;
                    s=0;
                    m++;
                }else if(h<23){
                    ms=0;
                    s=0;
                    m=0;
                    h++;
                }
                update();
            },10)
        start.classList.add('start-true');
        }


                    function update(){
                            msec.innerText=ms<10?'0'+ms:ms;
                            sec.innerText=s<10?'0'+s:s;
                            min.innerText=m<10?'0'+m:m;
                            hrs.innerText=h<10?'0'+h:h;
                    }


                    start.addEventListener('click',str);


                    stop.addEventListener('click',()=>{
                        clearInterval(timer);
                        start.classList.remove('start-true');
                    });


                    reset.addEventListener('click',()=>{
                        clearInterval(timer);
                        h=m=s=ms=0;
                        update();
                        start.classList.remove('start-true');
                    });






