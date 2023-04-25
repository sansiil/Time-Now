
// document.querySelector('ul li:nth-child(2) a').addEventListener('click',()=>{
//      const section=document.querySelectorAll('section');
//      section.forEach(e=>{
//         if (!e.classList.contains('lightblue')){
//               e.innerHTML='';
//               e.style.background='white';
             
//         }
//         document.querySelector('.lightblue').style.background='white';

//      });
//      const naya=document.createElement('se');
//      naya.innerHTML="adhdjjdjddj";
//      document.body.appendChild(naya);
// })
 

// when prcing is clicked, this function is activated

document.querySelector('ul li:nth-child(2) a').addEventListener('click',()=>{
    // every section is selected and filtered
    //const sections=document.querySelectorAll('section');
    //section without lightblue class is selected which is better
    const sections=document.querySelectorAll('section:not(.lightblue)');

    // sections.forEach(elem=>{
    //     if(!elem.classList.contains('lightblue')){
    //         elem.style.display='none';
    //     }
    //     document.querySelector('.lightblue').style.background="white";
   
    // });
    //elem is all the section in html except lightblue section.
    sections.forEach(elem=>{
           elem.style.display='none';});
    document.querySelector('.lightblue').style.background="white";
    //new section is created
    const sec=document.createElement('section');
    sec.classList='df column sec';

    const sec__item1=document.createElement('div');
    sec__item1.classList='item item1 df column';


    const sec__item2=document.createElement('div');
    sec__item2.classList=' cards df';

    sec.append(sec__item1,sec__item2);

    // sec.appendChild(sec__item1);
    // sec.appendChild(sec__item2);down better if multiple items to add
    

    //sec__item1 js
    //innerhtml better
    sec__item1.innerHTML=`
    <h1>Flexible Plans for Everyone.</h1>
    <p>Our plans are made for everyone. Whether you're just starting out
        on social media, or have been on there for a long time, we have
         a plan that's right for you.
    </p>
    <div class="df bill">
    <b>Billed Monthly</b>
    <label class="switch">
        <input type="checkbox">
        <span class=" slider ball"></span>
    </label>
    <p>Billed Yearly</p></div>
    `;

    //sec__item1 longer version
    // const h1=document.createElement('h1')
    // h1.innerText='Flexible Plans for Everyone.';

    // const p=document.createElement('p');
    // p.innerText='Our plans are made for everyone. Whether you\'re'+
    //              ' just starting out on social media, or have been on'+
    //              ' there for a long time, we have a plan that\'s right for you.';

    // const bill=document.createElement('div');
    // bill.classList='df bill'
    
    // const bold=document.createElement('b');
    // bold.innerText='Billed Monthly';

    // const bill__toogle=document.createElement('div');
    // bill__toogle.classList='toggle';

    // const toogle__ball=document.createElement('div');
    // toogle__ball.classList='ball';

    // bill__toogle.appendChild(toogle__ball);



    // const bill_p=document.createElement('p');
    // bill_p.innerText='Billed Yearly';

    // bill.append(bold,bill__toogle,bill_p);
    
    // sec__item1.append(h1,p,bill);
 
    //sec__item2 js
    const cards=document.createElement('div');
    cards.classList='cards df column';
    
    const cards__names=[{
        name:'card1',
        price:'7',
        caption:'Perfect plan if you\'re'+' just starting out.',
        features:['LinkedIn Integration','Twitter Integration','Real-time Analytics']
    },
    {
        name:'card2',
        price:'12',
        caption:'Perfect plan if you\'re'+' a heavy user of social media.',
        features:['LinkedIn Integration','Twitter Integration','Instagram Integration','Real-time Analytics']
    },
    {
        name:'card3',
        price:'4',
        caption:'Perfect plan if you\'re'+'just starting out.',
        features:['LinkedIn Integration','Twitter Integration']
    }];
     cards__names.forEach(elem=>{
        
         const card=document.createElement('div');
         card.classList='card df column';
        
         const card__top=document.createElement('div');
         card__top.classList='card__top df column';
        
        //individually creating tags is hectic
        //down is better
        // const h4=document.createElement('h2');
        // h4.classList='price';

        // const span=document.createElement('span');
        // span.innerText='/mo';

        // h4.innerText=elem.price;
        // h4.appendChild(span);

        // const p=document.createElement('p');
        // p.innerText=elem.caption;

        // card__top.append(h4,p);
        
        //better and simple
        card__top.innerHTML = `
             <h2 class="price">$${elem.price}
             <span>/mo</span>
             </h2>
             <p>${elem.caption}</p>
            `;

        // cards features add 
        
        const div=document.createElement('div');
        div.classList='card__mid df column';
        
        elem.features.forEach(e=>{

            const figure=document.createElement('figure');
            figure.classList='feature df';

            // const img=document.createElement('img');
            // img.src='Assets/Checkmark.svg';

            // const feat=document.createElement('p');
            // feat.innerText=e;

            // figure.append(img,feat);

            figure.innerHTML=`
                  <img src="Assets/Checkmark.svg">
                  <p>${e}</p>
            `;
            div.appendChild(figure);
            
        });
        
        
        const button=document.createElement('button');
        button.innerText='Subscribe Now';

        //sec__item2 cards, each card is made and appended each time
        card.append(card__top,div,button);
        sec__item2.appendChild(card);
    });

    
    document.body.appendChild(sec);

    const footer=document.querySelector('footer');
    
    footer.parentNode.insertBefore(sec,footer);



    //for input checkbox
    const check=document.querySelector('input[type="checkbox"]');

    //change is to see if anythings happens for input checkbox
    check.addEventListener('change',()=>{
        if(check.checked){
            let i=0;
            //if checked will go through
            //each cards and changes price and span to yr
             document.querySelectorAll('.card').forEach(card=>{
                const p=card.querySelector('.price');
    
                p.outerHTML=`
                <h2 class="price">$${cards__names[i].price*10}
                <span>/yr</span>
                </h2>
                `;
                i++;
                
             });
        }
        //while unchecked
        else{
            let i=0;
            document.querySelectorAll('.card').forEach(card=>{
                
                const p=card.querySelector('.price');

                p.outerHTML=`
                <h2 class="price">$${cards__names[i].price}
                <span>/mo</span>
                </h2>
                `;
                i++;
            });
        };
    });
});


//ham burger when clicked
document.querySelector('.ham').addEventListener('click', ()=>{

    const li=document.body.querySelectorAll('li');
    const buttonc=document.body.querySelector('button');
    const ul=document.body.querySelector('ul');
    console.log(buttonc.style.display)
    if(buttonc.style.display==='none' || buttonc.style.display===''){
        buttonc.style.display='flex';
        li.forEach(elem=>{
            elem.style.display='flex'
        });
        ul.style.height='150px';
        ul.style.padding='4% 0';
    }
    else{
        buttonc.style.display='';
        li.forEach(elem=>{
            elem.style.display='';
        });
        ul.style.height='0';
        ul.style.padding='0';
    };
});


