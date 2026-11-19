
document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.menu'),links=document.querySelector('.links');
 if(menu&&links) menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
 const page=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('.links a').forEach(a=>{if(a.getAttribute('href')===page)a.classList.add('active')});
 const form=document.querySelector('[data-demo-form]');
 if(form) form.addEventListener('submit',e=>{e.preventDefault();const msg=form.querySelector('.form-success');if(msg)msg.hidden=false;});
});
