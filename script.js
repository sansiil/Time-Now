
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



document.querySelector('ul li:nth-child(2) a').addEventListener('click',()=>{
    const sections=document.querySelectorAll('section');
    sections.forEach(elem=>{
        if(!elem.classList.contains('lightblue')){
            elem.style.display='none';
        }
        document.querySelector('.lightblue').style.background="white";
        
    });
    const footer=document.querySelector('footer')
    footer.style.position='absolute';
    footer.style.bottom='-250px';
    footer.style.left='0';
    footer.style.right='0';


    const sec=document.createElement('section');
    sec.classList='df column sec';

    const sec__item1=document.createElement('div');
    sec__item1.classList='item item1 df column';


    const sec__item2=document.createElement('div');
    sec__item2.classList=' cards df';

    sec.appendChild(sec__item1);
    sec.appendChild(sec__item2);

    const h1=document.createElement('h1')
    h1.innerText='Flexible Plans for Everyone.';

    const p=document.createElement('p');
    p.innerText='Our plans are made for everyone. Whether you\'re'+
                 ' just starting out on social media, or have been on'+
                 ' there for a long time, we have a plan that\'s right for you.';

    const bill=document.createElement('div');
    bill.classList='df bill'
    
    const bold=document.createElement('b');
    bold.innerText='Billed Monthly';

    const bill__toogle=document.createElement('div');
    bill__toogle.classList='toggle';

    const toogle__ball=document.createElement('div');
    toogle__ball.classList='ball';

    bill__toogle.appendChild(toogle__ball);



    const bill_p=document.createElement('p');
    bill_p.innerText='Billed Yearly';

    bill.append(bold,bill__toogle,bill_p);
    
    sec__item1.append(h1,p,bill);
    
    const cards=document.createElement('div');
    cards.classList='cards df column';
    
    const cards__names=[{
        name:'card1',
        price:'$7',
        caption:'Perfect plan if you\'re'+' just starting out.',
        features:['LinkedIn Integration','Twitter Integration','Real-time Analytics']
    },
    {
        name:'card2',
        price:'$12',
        caption:'Perfect plan if you\'re'+' a heavy user of social media.',
        features:['LinkedIn Integration','Twitter Integration','Instagram Integration','Real-time Analytics']
    },
    {
        name:'card3',
        price:'$4',
        caption:'Perfect plan if you\'re'+'just starting out.',
        features:['LinkedIn Integration','Twitter Integration']
    }];
     cards__names.forEach(elem=>{
        
        const card=document.createElement('div');
        card.classList='card df column';
        
        const card__top=document.createElement('div');
        card__top.classList='card__top df column';
        
        const h4=document.createElement('h2');
        h4.classList='price';

        const span=document.createElement('span');
        span.innerText='/mo';

        h4.innerText=elem.price;
        h4.appendChild(span);

        const p=document.createElement('p');
        p.innerText=elem.caption;

        card__top.append(h4,p);


        

        // cards features add 

        const div=document.createElement('div');
        div.classList='card__mid df column';
        
        elem.features.forEach(e=>{

            const figure=document.createElement('figure');
            figure.classList='feature df';

            const img=document.createElement('img');
            img.src='Assets/Checkmark.svg';

            const feat=document.createElement('p');
            feat.innerText=e;

            figure.append(img,feat);
            div.appendChild(figure);
        });
        
        const button=document.createElement('button');
        button.innerText='Subscribe Now';


        card.append(card__top,div,button);
        sec__item2.appendChild(card);
     })




    document.body.appendChild(sec);
    

});