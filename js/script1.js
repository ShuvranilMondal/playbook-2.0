window.addEventListener('scroll',()=>{
    let btn = document.getElementById('home-btn');
    let nav = document.getElementById('bav-bg');
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        btn.style.opacity = '1';
        nav.style.backgroundColor =  'rgba(0, 0, 0, 0.445)';
    }else{
        btn.style.opacity = '0';
        nav.style.backgroundColor =  'rgba(0, 0, 0, 0.0)';
    };
});

let pc = document.getElementById('pc');
let close = document.getElementById('close-btn');
let close2 = document.getElementById('close-btn2');
let menu = document.getElementById('menu');
let xBox = document.getElementById('x-box');
let ps = document.getElementById('ps');
let search = document.getElementById('se-area');
let li = menu.getElementsByTagName('li');
let conBtn = document.getElementById("con-btn");

let open=()=>{
    let blackS =document.getElementById('black');
    let liBox = document.getElementById('li-box');
    liBox.classList.toggle('active');
    blackS.classList.toggle('active');
}

let open2=()=>{
    let blackS =document.getElementById('black');
    let liBox2 = document.getElementById('li-box2');
    liBox2.classList.toggle('active');
    blackS.classList.toggle('active');
}

let filter=()=>{
    let searchVal = search.value;
    for(i=0;i<li.length;i++){
        let h4 = li[i].getElementsByTagName('h4')[0];
        if(h4.innerHTML.toLowerCase().indexOf(searchVal.toLowerCase()) > -1){
            li[i].style.display = '';
        }else{
            li[i].style.display = 'none';
        }
    }
}





search.addEventListener('keyup',()=>{
    filter();
})

close.addEventListener('click',()=>{
    open();
})
close2.addEventListener('click',()=>{
    open2();
})

conBtn.addEventListener('click',()=>{
    open2();
    let re = document.querySelectorAll('.re');

    re.forEach((element)=>{
        element.innerHTML = '0';

        let counter = ()=>{
            let setVal = +element.getAttribute('data-target');
            let initialVal = +element.innerHTML;
            let re = (setVal/100);
            if(initialVal < setVal){
                element.innerHTML = Math.round(initialVal+re);
                setTimeout(counter,10);
            }else{
                element.innerHTML = setVal;
            }

        }
        counter()
    })

})