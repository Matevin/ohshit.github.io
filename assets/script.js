// small utilities used by multiple pages
function escapeHtml(s){return String(s||'').replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":"&#39;"})[c])}


// optional: show console ascii art
console.log('%c ОФИГЕННЫЙ САЙТ С МУСОРОМ ', 'background:#ff66c4;color:#111;padding:6px;border-radius:6px')