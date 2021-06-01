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