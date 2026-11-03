const desktopDemo=document.getElementById('desktop-demo');
document.getElementById('reset').onclick=()=>desktopDemo.contentWindow.postMessage({type:'tempvault-demo-reset'},location.origin);
document.getElementById('expand-demo').onclick=async()=>{const area=document.querySelector('.desktop-demo-scroll');if(document.fullscreenElement){await document.exitFullscreen()}else if(area.requestFullscreen){await area.requestFullscreen()}else{area.classList.toggle('expanded')}};
