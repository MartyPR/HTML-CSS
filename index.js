const sideMenu= document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const  ThemeToggler=document.querySelector(".theme-toggle");
menuBtn.addEventListener('click',()=>{
     sideMenu.style.display='block';
})
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display='none';
    sideMenu.style.display='transparent';
})



ThemeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');
    ThemeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    ThemeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})


Orders.forEach(order =>{
    const tr =  document.createElement('tr');
    const trcontent =`
            <td>${order.productName}</td>
            <td>${order.productNumber}</td>
            <td>${order.shipping}</td>
            <td class="${order.shipping ==='Declined' ? 'danger'
            : order.shipping === 'Pending' ? 'warning':'primary'}">${order.shipping}</td>
            <td class="primary">Details</td>
    `;
    tr.innerHTML=trcontent;
    document.querySelector('table tbody').appendChild(tr);
})
