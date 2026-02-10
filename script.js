let t1 = gsap.timeline({scrollTrigger:{
    trigger: ".about",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    markers: true
}})
t1.to("#can",{
    top:"98%",
    left: "12%",
    width:"30%",
    rotate:"30deg"

},'Chocolate')
t1.to("#Chocolate",{
    top:"160%",
    left: "23%",
    width: "28%"

},'Chocolate')
t1.to("#chocolate2",{
    width:"15%",
    top:"160%",
    left: "20%",
    rotate: "-15deg"

},'Chocolate')
t1.to("#almond",{
    top:"110%",
    rotate: "130deg",
    left: "70%"

},'Chocolate')
t1.to("#almond2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"

},'Chocolate')

let t2 = gsap.timeline({scrollTrigger:{
    trigger: ".product",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    markers: true
}})

t2.to("#Chocolate",{
    width:"28%",
    left:"42%",
    top:"214%"
},'can')
t2.to("#can",{
    width:"30%",
    top:"218%",
    left:"35%",
    rotate: "0deg"
},'can')
t2.to("#chocolate2",{
    width:"15%",
    left:"35%",
    top:"270%"
},'can')