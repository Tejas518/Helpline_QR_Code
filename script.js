const data = [
['राष्ट्रीय विधिक सेवा प्राधिकरण (NALSA)', '15100'],
['उत्तर प्रदेश राज्य विधिक सेवा प्राधिकरण (UPSLSA)', '1800-419-0234'],
['आपातकालीन सेवा', '112'],
['पुलिस', '100'],
['अग्निशमन सेवा', '101'],
['एम्बुलेंस / चिकित्सा आपातकाल', '108'],
['महिला हेल्पलाइन', '181'],
['महिला पुलिस हेल्पलाइन', '1091'],
['चाइल्ड हेल्पलाइन', '1098'],
['चाइल्ड हेल्पलाइन व्हाट्सएप', '14567'],
['वरिष्ठ नागरिक हेल्पलाइन', '1800-11-4000'],
['दिव्यांगजन हेल्पलाइन', '1800-11-5555'],
['मानव तस्करी हेल्पलाइन', '1800-180-5145'],
['अल्पसंख्यक हेल्पलाइन', '1800-233-3330'],
['लोक शिकायत हेल्पलाइन', '155260'],
['साइबर अपराध हेल्पलाइन', '1930'],
['मानसिक स्वास्थ्य हेल्पलाइन', '14416'],
];
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
