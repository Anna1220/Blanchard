function setSearch(params){const openBtn=document.querySelector(`.${params.openBtnClass}`);const search=document.querySelector(`.${params.searchClass}`);const closeBtn=search.querySelector(`.${params.closeBtnClass}`);search.addEventListener("animationend",function(evt){if(this._isOpened){this.classList.remove(params.activeClass);this.classList.remove(params.hiddenClass);this._isOpened=!1}else{this._isOpened=!0}});search.addEventListener('click',function(evt){evt._isSearch=!0});openBtn.addEventListener("click",function(evt){this.disabled=!0;this.style.opacity=0;if(!search.classList.contains(params.activeClass)&&!search.classList.contains(params.hiddenClass)){search.classList.add(params.activeClass)}});closeBtn.addEventListener('click',function(){openBtn.disabled=!1;openBtn.style.opacity='';search.classList.add(params.hiddenClass)});document.body.addEventListener('click',function(evt){if(!evt._isSearch&&search._isOpened){openBtn.disabled=!1;openBtn.style.opacity='';search.classList.add(params.hiddenClass)}})}
setSearch({openBtnClass:"js-open-search",closeBtnClass:"js-close-search",searchClass:"js-search-form",activeClass:"is-search-opened",hiddenClass:"is-search-closed"})
