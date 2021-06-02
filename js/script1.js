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
let menu = document.getElementById('menu');
let xBox = document.getElementById('x-box');
let ps = document.getElementById('ps');
let search = document.getElementById('se-area');
let li = menu.getElementsByTagName('li');

let open=()=>{
    let blackS =document.getElementById('black');
    let liBox = document.getElementById('li-box');
    liBox.classList.toggle('active');
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