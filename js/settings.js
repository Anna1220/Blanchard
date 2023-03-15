const TABLET_WIDTH=1280;const MOBILE_WIDTH=580;function debounce(f,ms){let isCooldown=!1;return function(){if(isCooldown)return;f.apply(this,arguments);isCooldown=!0;setTimeout(()=>isCooldown=!1,ms)}}
function getWindowWidth(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)}
window.MOBILE_WIDTH=MOBILE_WIDTH;window.TABLET_WIDTH=TABLET_WIDTH;window.debounce=debounce;window.getWindowWidth=getWindowWidth
