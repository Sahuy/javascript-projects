
setInterval(() => {
  let a = new Date();
 let t = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
  document.getElementById('time').innerHTML = t;
}, 1000);