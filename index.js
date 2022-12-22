var listProduct = [
    {
        id : 0,
        name: "Hố sâu tử thần",
        img: "./img/hosaututhan.jpg"
    },
    {
        id: 1,
        name: "Vua Hải Tặc",
        img: "./img/onepiecered.jpg"
    },
    {
        id: 2,
        name: "Phi vụ nữa đêm",
        img: "./img/phivunuadem.jpg"
    },
    {
        id: 3,
        name: "Tro tàn rực lửa",
        img: "./img/trotanruclua.jpg"
    }
]



// show list phim 
document.querySelector(".btn-phim").onclick = function() {
    document.querySelector(".modalListPhim").classList.remove("hide")
    document.querySelector(".modalListPhim").classList.add("show")
}
// hide list phim

document.querySelector('.hideModal').onclick = function() {
    document.querySelector(".modalListPhim").classList.add("hide")
    document.querySelector(".modalListPhim").classList.remove("show")
    
} 



// show login 

document.querySelector(".header-user-login").onclick = function() {
    document.querySelector(".login").style.display = "flex"
}







function renderImg(index) {
    var img = document.querySelector(".container-img-item")
    img.id = listProduct[index].id
    
    img.src = listProduct[index].img
    img.classList.add("animationImg")
    setTimeout(
        function() {
            img.classList.remove('animationImg')
        },
        1000
    )
    setTimeout(
        function() {
            img.classList.add("animationImgOut")
        }
        ,2200
    )

}



function handleImg() {
    var img = document.querySelector(".container-img-item")
    
    var index = parseInt(img.id)+1;
    if (index > listProduct.length-1){
        index=0
    }
    img.classList.remove('animationImgOut')
    renderImg(index)

}


setInterval(handleImg,3000)
// console.log()



