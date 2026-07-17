const data=[
['Emergency','112'],['Police','100'],['Fire','101'],['Medical Emergency','108'],
['Women Helpline','181'],['Women Police','1091'],['Child Helpline','1098'],
['Child Helpline WhatsApp','14567'],['Senior Citizen','1800-11-4000'],
['Divyang','1800-11-5555'],['Human Trafficking','1800-180-5145'],
['Minority','1800-233-3330'],['Lok Shikayat','155260'],
['Cyber Crime','1930'],['Mental Health','14416'],
['NALSA Legal Aid','15100'],['UP State Legal Aid','1800-419-0234']];
const c=document.getElementById('cards');
function render(list){
c.innerHTML='';
list.forEach(([n,no])=>{
 const d=document.createElement('div');d.className='card';
 const clean=no.replace(/[^0-9]/g,'');
 const isWA=n.includes('WhatsApp');
 d.innerHTML=`<h3>${n}</h3><div class='num'>${no}</div>
 <a class='btn' href='${isWA?"https://wa.me/"+clean:"tel:"+clean}'>${isWA?"💬 WhatsApp":"📞 Call Now"}</a>`;
 c.appendChild(d);
});
}
render(data);
document.getElementById('search').oninput=e=>{
 const q=e.target.value.toLowerCase();
 render(data.filter(x=>x[0].toLowerCase().includes(q)||x[1].includes(q)));
};
