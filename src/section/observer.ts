export const fadeIns=(isHightlight:boolean)=>{
    const faders=document.querySelectorAll('.fade-in')
    const sliders=document.querySelectorAll('.slide-in')
    const appearOptions={
        threshold:isHightlight?1:0.5,
        rootMargin:isHightlight?"0px 0px -200px 0px":"0px 0px -100px 0px"
    }
    const fadeOnScroll=new IntersectionObserver((entries, appearOnScroll)=>{
        entries.forEach((entry)=>{
            if(!entry.isIntersecting){
                return
            }else{
                entry.target.classList.add('appear')
                appearOnScroll.unobserve(entry.target)
            }
        })
    },appearOptions)
    const slideOnScroll=new IntersectionObserver((entries, appearOnScroll)=>{
        entries.forEach((entry)=>{
            if(!entry.isIntersecting){
                return
            }else{
                entry.target.classList.add('appear')
                appearOnScroll.unobserve(entry.target)
            }
        })
    },{
        threshold:0.5
    })
    faders.forEach(fader=>{
        fadeOnScroll.observe(fader)
    })
    sliders.forEach(slider=>{
        slideOnScroll.observe(slider)
    })
}