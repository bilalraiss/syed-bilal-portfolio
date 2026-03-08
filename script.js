document.getElementById("year").textContent = new Date().getFullYear();

function toast(msg){
  const el = document.getElementById("toast");
  el.textContent = msg;
  setTimeout(()=>{ el.textContent = ""; }, 2000);
}

function copyText(text){
  navigator.clipboard.writeText(text)
    .then(()=>toast("Copied ✅"))
    .catch(()=>toast("Copy failed ❌"));
}

function handleCopy(e){
  e.preventDefault();
  return false;
}
