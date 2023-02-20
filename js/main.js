// thay ng ta hay quan li code z ne 

const app = {

    //cai start nay giup gom lai may cai o duoi cho no gon, khoi chay 1 lan het luonnnn hehehehe
    start: function () {
        this.handleEventFunction();
    },

    //may cai trong nay se bat su kien lam nhiem vu gi dos
    handleEventFunction: function () {
        //Scroll to top 
        const toTheTop = document.querySelector(".topbutton");
        window.addEventListener("scroll", () => {
            // console.log(window.pageYOffset)

            if (window.pageYOffset > 1200) {
                toTheTop.classList.add("active");
                // console.log(toTheTop)
            } else {
                toTheTop.classList.remove("active");
            }
        })

        // Load video logo in the first time
        // var introVideoLogo = document.getElementById("intro_logo");
        // introVideoLogo.innerHTML = `<div id="video_logo">
        //                                  <video autoplay loop muted plays-inline src="assets/video/logoanime_fv.mp4"></video>
        //                             </div>`;
        // giải thích: ko cần innerhtml vì làm vậy khi setinterval nó bị delay r mới xóa,
        //cách này hợp lí hơn load 1 phát vào luôn r xóa thẻ có id intro_logo \
        



        let counter = 0;
        const countInterval = setInterval(count,1650)
        function count(){
            var introVideoLogo = document.getElementById("intro_logo");
            
            console.log(counter++);
            if(counter > 1){
                clearInterval(countInterval);
                introVideoLogo.remove();
            }
        }



        //Scroll and appear the black background
        // const blackBackGround = document.querySelector(".movie-gradation .img-2");
        // window.addEventListener("scroll", () => {
        //     // console.log(window.pageYOffset)

        //     if (window.pageYOffset > 1541) {
        //         blackBackGround.classList.add("active");
        //         console.log(blackBackGround)
        //     } else {
        //         blackBackGround.classList.remove("active");
        //     }
        // })


    }

}
//Ket qua l day 
app.start();

// ma ne dung cai on load start gi do qua coi thay load dc cai video luc dau a






