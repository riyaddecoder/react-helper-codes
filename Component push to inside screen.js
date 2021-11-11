    const setSidebarTopPosition = (e,id) => {
        e.preventDefault();
        if(e.target.className.includes("set-top-postion-on-hover")) { //put this class on both li and a tag
            let elem = document.querySelector('#' + id);
            let topPos = e.target.getBoundingClientRect().top - 150;
            elem.style.top = topPos+"px";
            if(window.innerHeight < elem.firstChild.getBoundingClientRect().bottom) {   //if sidebar goes bottom out of the screen
                elem.style.top = topPos-10-(elem.firstChild.getBoundingClientRect().bottom - window.innerHeight)+"px";
            }
        }
    }
