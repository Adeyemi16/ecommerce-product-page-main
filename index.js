let two = document.getElementById('two');
let one = document.getElementById('one');
let three = document.getElementById('three');
let four = document.getElementById('four');

let twob = document.getElementById('twob');
let oneb = document.getElementById('oneb');
let threeb = document.getElementById('threeb');
let fourb = document.getElementById('fourb');
let minus = document.getElementById('minus');
let add = document.getElementById('add');
let cartsvg = document.getElementById('cartsvg')
let addb = document.getElementById('addb');
let delet = document.getElementById('delete');
let deletb = document.getElementById('deleteb')
let main = document.getElementById('main')
let maib = document.getElementById('maib')
let maic = document.getElementById('maic')
let maid = document.getElementById('maid')
let close = document.getElementById('close');
let strokec = document.getElementById('strokec');
let strokeb = document.getElementById('strokeb');
let stroked = document.getElementById('stroked')

let strokee = document.getElementById('strokee');
let strokef = document.getElementById('strokef');
let strokeg = document.getElementById('strokeg');
let menu = document.getElementById('menu');
let navclose = document.getElementById('navclose')

minus.addEventListener('click', () => {
    let number = document.getElementById('number').innerText;
    let total = parseInt(number, 10)
    if (total < 1) {
        
    }

    else {
        total = total - 1;
    let totalb = total.toString();
    console.log(total)
    console.log(totalb)
    let finish = document.getElementById('number').innerText = totalb;
    }
    
})

add.addEventListener('click', () => {
    let number = document.getElementById('number').innerText;
    let total = parseInt(number, 10)
    total = total + 1;
    let totalb = total.toString();
    console.log(total)
    console.log(totalb)
    let finish = document.getElementById('number').innerText = totalb;
})

two.addEventListener('click', () => {
    two.classList.remove('thumbnails')
    two.classList.add('current')

    let one = document.getElementById('one');
    one.classList.add('thumbnails')
    one.classList.remove('current')

    let three = document.getElementById('three');
    three.classList.add('thumbnails')
    three.classList.remove('current')

    let four = document.getElementById('four');
    four.classList.add('thumbnails')
    four.classList.remove('current')


    let pic = document.getElementById('main');
    let picb = document.getElementById('maib')
    let picc = document.getElementById('maic')
    let picd = document.getElementById('maid')


   
    picc.classList.remove('main')
    picc.classList.add('none')
    picd.classList.remove('main')
    picd.classList.add('none')

    picb.classList.add('main')
    picb.classList.remove('none')
    pic.classList.remove('main')
    pic.classList.add('none')

})

one.addEventListener('click', () => {
    one.classList.remove('thumbnails')
    one.classList.add('current')

    let two = document.getElementById('two');
    two.classList.add('thumbnails')
    two.classList.remove('current')

    let three = document.getElementById('three');
    three.classList.add('thumbnails')
    three.classList.remove('current')

    let four = document.getElementById('four');
    four.classList.add('thumbnails')
    four.classList.remove('current')

    let pic = document.getElementById('main');
    let picb = document.getElementById('maib')
    let picc = document.getElementById('maic')
    let picd = document.getElementById('maid')


   
    picc.classList.remove('main')
    picc.classList.add('none')
    picd.classList.remove('main')
    picd.classList.add('none')

    picb.classList.remove('main')
    picb.classList.add('none')
    pic.classList.add('main')
    pic.classList.remove('none')


})

three.addEventListener('click', () => {
    three.classList.remove('thumbnails')
    three.classList.add('current')

    let two = document.getElementById('two');
    two.classList.add('thumbnails')
    two.classList.remove('current')

    let one = document.getElementById('one');
    one.classList.add('thumbnails')
    one.classList.remove('current')

    let four = document.getElementById('four');
    four.classList.add('thumbnails')
    four.classList.remove('current')




    let pic = document.getElementById('main');
    let picb = document.getElementById('maib')
    let picc = document.getElementById('maic')
    let picd = document.getElementById('maid')


   
    picc.classList.add('main')
    picc.classList.remove('none')
    picd.classList.remove('main')
    picd.classList.add('none')

    picb.classList.remove('main')
    picb.classList.add('none')
    pic.classList.remove('main')
    pic.classList.add('none')

})

four.addEventListener('click', () => {
    four.classList.remove('thumbnails')
    four.classList.add('current')

    let two = document.getElementById('two');
    two.classList.add('thumbnails')
    two.classList.remove('current')

    let one = document.getElementById('one');
    one.classList.add('thumbnails')
    one.classList.remove('current')

    let three = document.getElementById('three');
    three.classList.add('thumbnails')
    three.classList.remove('current')

    let pic = document.getElementById('main');
    let picb = document.getElementById('maib')
    let picc = document.getElementById('maic')
    let picd = document.getElementById('maid')


   
    picc.classList.remove('main')
    picc.classList.add('none')
    picd.classList.add('main')
    picd.classList.remove('none')

    picb.classList.remove('main')
    picb.classList.add('none')
    pic.classList.remove('main')
    pic.classList.add('none')

})



twob.addEventListener('click', () => {
    twob.classList.remove('thumbnails')
    twob.classList.add('current')

    let one = document.getElementById('oneb');
    one.classList.add('thumbnails')
    one.classList.remove('current')

    let three = document.getElementById('threeb');
    three.classList.add('thumbnails')
    three.classList.remove('current')

    let four = document.getElementById('fourb');
    four.classList.add('thumbnails')
    four.classList.remove('current')


    let pic = document.getElementById('pic');
    let picb = document.getElementById('picb')
    let picc = document.getElementById('picc')
    let picd = document.getElementById('picd')


    pic.classList.remove('mainb')
    pic.classList.add('none')
    picb.classList.add('mainb')
    picb.classList.remove('none')
    picc.classList.remove('mainb')
    picc.classList.add('none')
    picd.classList.remove('mainb')
    picd.classList.add('none')

    let strokeb = document.getElementById('strokeb')
    strokeb.classList.add('none')
    strokeb.classList.remove('stroke')

    

    let stroke = document.getElementById('stroke');
    stroke.classList.add('none')
    stroke.classList.remove('stroke')

    let strokec = document.getElementById('strokec');
    strokec.classList.remove('none')
    strokec.classList.add('stroke')

    let stroked = document.getElementById('stroked');
    stroked.classList.remove('none')
    stroked.classList.add('stroke')

    let strokef = document.getElementById('strokef');
    strokef.classList.add('none')
    strokef.classList.remove('stroke')

    let strokeg = document.getElementById('strokeg');
    strokeg.classList.add('none')
    strokeg.classList.remove('stroke')

    let strokee = document.getElementById('strokee');
    strokee.classList.add('none')
    strokee.classList.remove('stroke')

    let strokeh = document.getElementById('strokeh');
    strokeh.classList.add('none')
    strokeh.classList.remove('stroke')
})

oneb.addEventListener('click', () => {
    oneb.classList.remove('thumbnails')
    oneb.classList.add('current')

    let two = document.getElementById('twob');
    two.classList.add('thumbnails')
    two.classList.remove('current')

    let three = document.getElementById('threeb');
    three.classList.add('thumbnails')
    three.classList.remove('current')

    let four = document.getElementById('fourb');
    four.classList.add('thumbnails')
    four.classList.remove('current')



    let pic = document.getElementById('pic');
    let picb = document.getElementById('picb')
    let picc = document.getElementById('picc')
    let picd = document.getElementById('picd')


   
    picc.classList.remove('mainb')
    picc.classList.add('none')
    picd.classList.remove('mainb')
    picd.classList.add('none')

    picb.classList.remove('mainb')
    picb.classList.add('none')
    pic.classList.add('mainb')
    pic.classList.remove('none')

    let stroked = document.getElementById('stroked');
    stroked.classList.add('none')
    stroked.classList.remove('stroke')


    let strokec = document.getElementById('strokec');
    strokec.classList.add('none')
    strokec.classList.remove('stroke')

    let stroke = document.getElementById('stroke');
    stroke.classList.remove('none')
    stroke.classList.add('stroke')

    let strokeb = document.getElementById('strokeb');
    strokeb.classList.remove('none')
    strokeb.classList.add('stroke')

    let strokee = document.getElementById('strokee');
    strokee.classList.add('none')
    strokee.classList.remove('stroke')

    let strokef = document.getElementById('strokef');
    strokef.classList.add('none')
    strokef.classList.remove('stroke')

    let strokeg = document.getElementById('strokeg');
    strokeg.classList.add('none')
    strokeg.classList.remove('stroke')

    let strokeh = document.getElementById('strokeh');
    strokeh.classList.add('none')
    strokeh.classList.remove('stroke')
})

threeb.addEventListener('click', () => {
    threeb.classList.remove('thumbnails')
    threeb.classList.add('current')

    let two = document.getElementById('twob');
    two.classList.add('thumbnails')
    two.classList.remove('current')

    let one = document.getElementById('oneb');
    one.classList.add('thumbnails')
    one.classList.remove('current')

    let four = document.getElementById('fourb');
    four.classList.add('thumbnails')
    four.classList.remove('current')



    let pic = document.getElementById('picb');
    let picb = document.getElementById('picc')
    let picc = document.getElementById('pic')
    let picd = document.getElementById('picd')


    pic.classList.remove('mainb')
    pic.classList.add('none')
    picb.classList.add('mainb')
    picb.classList.remove('none')
    picc.classList.remove('mainb')
    picc.classList.add('none')
    picd.classList.remove('mainb')
    picd.classList.add('none')

    stroked.classList.add('none')
    stroked.classList.remove('stroke')
    let strokec = document.getElementById('strokec');
    strokec.classList.add('none')
    strokec.classList.remove('stroke')

    let strokee = document.getElementById('strokee');
    strokee.classList.remove('none')
    strokee.classList.add('stroke')

    let strokef = document.getElementById('strokef');
    strokef.classList.remove('none')
    strokef.classList.add('stroke')

    let stroke = document.getElementById('stroke');
    stroke.classList.add('none')
    stroke.classList.remove('stroke')

    let strokeb = document.getElementById('strokeb');
    strokeb.classList.add('none')
    strokeb.classList.remove('stroke')

    let strokeg = document.getElementById('strokeg');
    strokeg.classList.add('none')
    strokeg.classList.remove('stroke')

    let strokeh = document.getElementById('strokeh');
    strokeh.classList.add('none')
    strokeh.classList.remove('stroke')
})

fourb.addEventListener('click', () => {
    fourb.classList.remove('thumbnails')
    fourb.classList.add('current')

    let two = document.getElementById('twob');
    two.classList.add('thumbnails')
    two.classList.remove('current')

    let one = document.getElementById('oneb');
    one.classList.add('thumbnails')
    one.classList.remove('current')

    let three = document.getElementById('threeb');
    three.classList.add('thumbnails')
    three.classList.remove('current')



    let pic = document.getElementById('picb');
    let picb = document.getElementById('picc')
    let picc = document.getElementById('pic')
    let picd = document.getElementById('picd')


    pic.classList.remove('mainb')
    pic.classList.add('none')
    picb.classList.remove('mainb')
    picb.classList.add('none')
    picc.classList.remove('mainb')
    picc.classList.add('none')
    picd.classList.add('mainb')
    picd.classList.remove('none')

    stroked.classList.add('none')
    stroked.classList.remove('stroke')
    let strokec = document.getElementById('strokec');
    strokec.classList.add('none')
    strokec.classList.remove('stroke')

    let strokee = document.getElementById('strokee');
    strokee.classList.add('none')
    strokee.classList.remove('stroke')

    let strokef = document.getElementById('strokef');
    strokef.classList.add('none')
    strokef.classList.remove('stroke')

    let stroke = document.getElementById('stroke');
    stroke.classList.add('none')
    stroke.classList.remove('stroke')

    let strokeb = document.getElementById('strokeb');
    strokeb.classList.add('none')
    strokeb.classList.remove('stroke')

    let strokeg = document.getElementById('strokeg');
    strokeg.classList.remove('none')
    strokeg.classList.add('stroke')

    let strokeh = document.getElementById('strokeh');
    strokeh.classList.remove('none')
    strokeh.classList.add('stroke')
})

cartsvg.addEventListener('click', () => {
    let cart = document.getElementById('cart');
    cart.classList.toggle('cart')
    cart.classList.toggle('none')
})

addb.addEventListener('click', () => {

    let number = document.getElementById('number').innerText;
    let total = parseInt(number, 10)
    if (total < 1) {
        
    }

    else {

        let number = document.getElementById('number').innerText;
        let total = parseInt(number, 10)
        // let numberb = document.getElementById('prodtotal').innerText;
        // let totalb = parseInt(numberb, 10);
        let bm = total.toString();
        let am = document.getElementById('li').innerText = bm;
        let totalb = 125;

        let totalc = totalb * total;

        totalc = totalc.toString();

        let finish = document.getElementById('prodtotal').innerText = totalc;

        let empty = document.getElementById('empty');

        empty.classList.remove('contp')
        empty.classList.add('contphide')
    
        let order = document.getElementById('order');
    
        order.classList.remove('orderhide')
        order.classList.add('order')

        let cart = document.getElementById('cart');
        cart.classList.add('cart')
        cart.classList.remove('none');

        let emptyc = document.getElementById('emptyc');
        emptyc.classList.remove('contp');
        emptyc.classList.add('nonec')
    }
})

delet.addEventListener('click', () => {
    let empty = document.getElementById('empty');

    empty.classList.add('contp')
    empty.classList.remove('contphide')

    let order = document.getElementById('order');

    order.classList.add('orderhide')
    order.classList.remove('order')
})

deletb.addEventListener('click', () => {
    let empty = document.getElementById('empty');

    empty.classList.add('contp')
    empty.classList.remove('contphide')

    let order = document.getElementById('order');

    order.classList.add('orderhide')
    order.classList.remove('order')
})

main.addEventListener('click', () => {
    let mainb = document.getElementById('overlay')
    mainb.classList.remove('noneb')
    mainb.classList.add('overlay')

    let nav = document.getElementById('n');
    nav.classList.add('navb')

    let mai = document.getElementById('m');
    mai.classList.add('mab')
})




maib.addEventListener('click', () => {
    let mainb = document.getElementById('overlay')
    mainb.classList.remove('noneb')
    mainb.classList.add('overlay')

    let nav = document.getElementById('n');
    nav.classList.add('navb')

    let mai = document.getElementById('m');
    mai.classList.add('mab')
})

maic.addEventListener('click', () => {
    let mainb = document.getElementById('overlay')
    mainb.classList.remove('noneb')
    mainb.classList.add('overlay')

    let nav = document.getElementById('n');
    nav.classList.add('navb')

    let mai = document.getElementById('m');
    mai.classList.add('mab')
})

maid.addEventListener('click', () => {
    let mainb = document.getElementById('overlay')
    mainb.classList.remove('noneb')
    mainb.classList.add('overlay')

    let nav = document.getElementById('n');
    nav.classList.add('navb')

    let mai = document.getElementById('m');
    mai.classList.add('mab')
})

close.addEventListener('click', () => {
    let mainb = document.getElementById('overlay')
    mainb.classList.add('none')
    mainb.classList.remove('overlay')

    let nav = document.getElementById('n');
    nav.classList.remove('navb')

    let mai = document.getElementById('m');
    mai.classList.remove('mab')
})



strokeb.addEventListener('click', () => {
    let pic = document.getElementById('pic');
    let picb = document.getElementById('picb')

    pic.classList.remove('mainb')
    pic.classList.add('none')
    picb.classList.add('mainb')
    picb.classList.remove('none')

    strokeb.classList.add('none')
    strokeb.classList.remove('stroke')
    let stroke = document.getElementById('stroke');
    stroke.classList.add('none')
    stroke.classList.remove('stroke')

    let strokec = document.getElementById('strokec');
    strokec.classList.remove('none')
    strokec.classList.add('stroke')

    let stroked = document.getElementById('stroked');
    stroked.classList.remove('none')
    stroked.classList.add('stroke')

    let two = document.getElementById('twob');
    two.classList.remove('thumbnails')
    two.classList.add('current')

    let one = document.getElementById('oneb');
    one.classList.add('thumbnails')
    one.classList.remove('current')

    let three = document.getElementById('threeb');
    three.classList.add('thumbnails')
    three.classList.remove('current')

    let four = document.getElementById('fourb');
    four.classList.add('thumbnails')
    four.classList.remove('current')

})


strokec.addEventListener('click', () => {
    let pic = document.getElementById('pic');
    let picb = document.getElementById('picb')

    picb.classList.remove('mainb')
    picb.classList.add('none')
    pic.classList.add('mainb')
    pic.classList.remove('none')

    strokec.classList.add('none')
    strokec.classList.remove('stroke')
    let stroked = document.getElementById('stroked');
    stroked.classList.add('none')
    stroked.classList.remove('stroke')

    let strokeb = document.getElementById('strokeb');
    strokeb.classList.remove('none')
    strokeb.classList.add('stroke')

    let stroke = document.getElementById('stroke');
    stroke.classList.remove('none')
    stroke.classList.add('stroke')


    let one = document.getElementById('oneb');
    one.classList.remove('thumbnails')
    one.classList.add('current')

    let two = document.getElementById('twob');
    two.classList.add('thumbnails')
    two.classList.remove('current')

    let three = document.getElementById('threeb');
    three.classList.add('thumbnails')
    three.classList.remove('current')

    let four = document.getElementById('fourb');
    four.classList.add('thumbnails')
    four.classList.remove('current')
})




    
stroked.addEventListener('click', () => {
    let pic = document.getElementById('picb');
    let picb = document.getElementById('picc')

    pic.classList.remove('mainb')
    pic.classList.add('none')
    picb.classList.add('mainb')
    picb.classList.remove('none')

    stroked.classList.add('none')
    stroked.classList.remove('stroke')
    let strokec = document.getElementById('strokec');
    strokec.classList.add('none')
    strokec.classList.remove('stroke')

    let strokee = document.getElementById('strokee');
    strokee.classList.remove('none')
    strokee.classList.add('stroke')

    let strokef = document.getElementById('strokef');
    strokef.classList.remove('none')
    strokef.classList.add('stroke')

    let two = document.getElementById('twob');
    two.classList.add('thumbnails')
    two.classList.remove('current')

    let one = document.getElementById('oneb');
    one.classList.add('thumbnails')
    one.classList.remove('current')

    let three = document.getElementById('threeb');
    three.classList.remove('thumbnails')
    three.classList.add('current')

    let four = document.getElementById('fourb');
    four.classList.add('thumbnails')
    four.classList.remove('current')

})




strokee.addEventListener('click', () => {
    let pic = document.getElementById('picb');
    let picb = document.getElementById('picc')

    picb.classList.remove('mainb')
    picb.classList.add('none')
    pic.classList.add('mainb')
    pic.classList.remove('none')

    strokee.classList.add('none')
    strokee.classList.remove('stroke')
    let strokef = document.getElementById('strokef');
    strokef.classList.add('none')
    strokef.classList.remove('stroke')

    let stroked = document.getElementById('stroked');
    stroked.classList.remove('none')
    stroked.classList.add('stroke')

    let strokec = document.getElementById('strokec');
    strokec.classList.remove('none')
    strokec.classList.add('stroke')

    let two = document.getElementById('twob');
    two.classList.remove('thumbnails')
    two.classList.add('current')

    let one = document.getElementById('oneb');
    one.classList.add('thumbnails')
    one.classList.remove('current')

    let three = document.getElementById('threeb');
    three.classList.add('thumbnails')
    three.classList.remove('current')

    let four = document.getElementById('fourb');
    four.classList.add('thumbnails')
    four.classList.remove('current')
})




strokef.addEventListener('click', () => {
    let pic = document.getElementById('picc');
    let picb = document.getElementById('picd')

    pic.classList.remove('mainb')
    pic.classList.add('none')
    picb.classList.add('mainb')
    picb.classList.remove('none')

    strokef.classList.add('none')
    strokef.classList.remove('stroke')
    let strokee = document.getElementById('strokee');
    strokee.classList.add('none')
    strokee.classList.remove('stroke')

    let strokeg = document.getElementById('strokeg');
    strokeg.classList.remove('none')
    strokeg.classList.add('stroke')

    let strokeh = document.getElementById('strokeh');
    strokeh.classList.remove('none')
    strokeh.classList.add('stroke')

    let two = document.getElementById('twob');
    two.classList.add('thumbnails')
    two.classList.remove('current')

    let one = document.getElementById('oneb');
    one.classList.add('thumbnails')
    one.classList.remove('current')

    let three = document.getElementById('threeb');
    three.classList.add('thumbnails')
    three.classList.remove('current')

    let four = document.getElementById('fourb');
    four.classList.remove('thumbnails')
    four.classList.add('current')

})


strokeg.addEventListener('click', () => {
    let pic = document.getElementById('picc');
    let picb = document.getElementById('picd')

    picb.classList.remove('mainb')
    picb.classList.add('none')
    pic.classList.add('mainb')
    pic.classList.remove('none')

    strokeg.classList.add('none')
    strokeg.classList.remove('stroke')
    let strokeh = document.getElementById('strokeh');
    strokeh.classList.add('none')
    strokeh.classList.remove('stroke')

    let stroked = document.getElementById('strokef');
    strokef.classList.remove('none')
    strokef.classList.add('stroke')

    let strokee = document.getElementById('strokee');
    strokee.classList.remove('none')
    strokee.classList.add('stroke')

    let two = document.getElementById('twob');
    two.classList.add('thumbnails')
    two.classList.remove('current')

    let one = document.getElementById('oneb');
    one.classList.add('thumbnails')
    one.classList.remove('current')

    let three = document.getElementById('threeb');
    three.classList.remove('thumbnails')
    three.classList.add('current')

    let four = document.getElementById('fourb');
    four.classList.add('thumbnails')
    four.classList.remove('current')
})

menu.addEventListener('click', () => {
    let links = document.getElementById('links');
    links.classList.remove('links');
    links.classList.add('linksshow')

    let main = document.getElementById('m');
    main.classList.add('nonec');
})

navclose.addEventListener('click', () => {
    let links = document.getElementById('links');
    links.classList.add('links');
    links.classList.remove('linksshow')


    let main = document.getElementById('m');
    main.classList.remove('nonec');
})




let checkout = document.getElementById('checkout');

checkout.addEventListener('click', () => {
    let emptyc = document.getElementById('emptyc');
    emptyc.classList.remove('nonec')
    emptyc.classList.add('contp')
    let order = document.getElementById('order');
    order.classList.add('none')
    order.classList.remove('order')
})