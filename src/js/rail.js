const rails = document.querySelectorAll('.rail')

rails.forEach(rail => {
    const [rightScroll, leftScroll] = rail.querySelectorAll('[class^="scroll-"]')
    leftScroll.addEventListener('click', () => {
        const vx = rail.clientWidth
        rightScroll.disabled = false  
        rail.scrollBy({left: -vx})
        if(rail.scrollLeft-vx < 0)
            leftScroll.disabled = true
    })
    rightScroll.addEventListener('click', () => {
        let scrollMaximo = rail.scrollWidth - rail.clientWidth-1;
        const vx = rail.clientWidth-15
        leftScroll.disabled = false
        rail.scrollBy({left: vx})
        if(scrollMaximo < rail.scrollLeft+vx)
            rightScroll.disabled = true
    })
})