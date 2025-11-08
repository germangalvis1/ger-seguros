(function(){
  const PHONE_NUMBER = "5731111234567"; // international without +
  const WHATSAPP_MESSAGE = "Hola%20GER-SEGUROS,%20quiero%20informaci%C3%B3n";
  const WH_URL = `https://wa.me/${PHONE_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  document.addEventListener('DOMContentLoaded', function(){
    const wh = document.getElementById('whatsappBtn');
    if(wh){ wh.href = WH_URL; }
    const year = document.getElementById('year');
    if(year){ year.textContent = new Date().getFullYear(); }
  });
})();