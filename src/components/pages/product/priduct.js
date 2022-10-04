const upload = () => {
    /* getElementById */
    function $id(id) {
        return document.getElementById(id);
    }

    /* вывод сообщений */
    function Output(msg) {
        var m = $id("messages");
        m.innerHTML = msg + m.innerHTML;
    }

    /* проверка поддержки API */
    if (window.File && window.FileList && window.FileReader) {
        Init();
    }
    /* инициализация */
    function Init() {
        let fileselect = $id("fileselect"),
            filedrag = $id("filedrag"),
            submitbutton = $id("submitbutton");

        if (!fileselect || !filedrag || !submitbutton) return;

        /* выбор файла */
        fileselect.addEventListener("change", FileSelectHandler, false);

        /* проверка поддержки XHR2 */
        let xhr = new XMLHttpRequest();
        if (xhr.upload) {
            /* сброс файла */
            filedrag.addEventListener("dragover", FileDragHover, false);
            filedrag.addEventListener("dragleave", FileDragHover, false);
            filedrag.addEventListener("drop", FileSelectHandler, false);
            filedrag.style.display = "flex";

            /* удаление кнопки сабмитта */
            submitbutton.style.display = "none";
        }
    }

    // Файл над нужной областью
    function FileDragHover(e) {
        e.stopPropagation();
        e.preventDefault();
        e.target.className = (e.type == "dragover" ? "hover" : "");
    }

    // выбор файла
    function FileSelectHandler(e) {
        FileDragHover(e);

        // проходимся по объекту FileList 
        var files = e.target.files || e.dataTransfer.files;

        // парсим все объекты типа File
        for (var i = 0, f; f = files[i]; i++) {
            ParseFile(f);
        }
    }

    function ParseFile(file) {
        Output(
            "<p>" +
            file.name +
            "</p>"
        );
    }
}
upload();

let galleryThumbs = new Swiper('.product__thumbs .swiper-container', {
    direction: 'vertical',
    spaceBetween: 15,
    slidesPerView: 4,

    cssMode: true,
    allowTouchMove: false,

    navigation: {
        nextEl: '.product__nav .swiper-button-next',
        prevEl: '.product__nav .swiper-button-prev',
    },
    breakpoints: {
        768: {
            direction: 'horizontal',
            spaceBetween: 5,
            slidesPerView: 4,
        },
    }
});

let galleryTop = new Swiper('.product__images .swiper-container', {
    effect: 'fade',
    navigation: {
        nextEl: '.product__nav .swiper-button-next',
        prevEl: '.product__nav .swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});

let reviewsThumbs = new Swiper('.reviews__thumbs .swiper-container', {
    slidesPerView: "auto",
    cssMode: true,
    allowTouchMove: false,
});

let reviewsSlider = new Swiper('.reviews__images .swiper-container', {
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
    },
    thumbs: {
        swiper: reviewsThumbs
    }
});

let similarSwiper = new Swiper('.similar__slider .swiper-container', {
    spaceBetween: 70,
    slidesPerView: 2,

    navigation: {
        nextEl: '.similar__slider .swiper-button-next',
        prevEl: '.similar__slider .swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 5,

        },

        1201: {
            spaceBetween: 20,
            slidesPerView: 2,
        },
    }
});

let likeSwiper = new Swiper('.like__slider .swiper-container', {
    spaceBetween: 70,
    slidesPerView: 2,

    navigation: {
        nextEl: '.like__slider .swiper-button-next',
        prevEl: '.like__slider .swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 5,

        },

        1201: {
            spaceBetween: 20,
            slidesPerView: 2,
        },
    }
});

let topSwiper = new Swiper('.top__slider .swiper-container', {
    spaceBetween: 70,
    slidesPerView: 4,
    navigation: {
        nextEl: '.top__slider .swiper-button-next',
        prevEl: '.top__slider .swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 5,

        },
        992: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1201: {
            spaceBetween: 20,
        },
    }
});

let tovarSwiper = new Swiper('.tovar__slider .swiper-container', {
    spaceBetween: 70,
    slidesPerView: 4,
    navigation: {
        nextEl: '.tovar__slider .swiper-button-next',
        prevEl: '.tovar__slider .swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 5,

        },
        992: {
            slidesPerView: 2,
            spaceBetween: 20,

        },
        1201: {
            spaceBetween: 20,
        },
    }
});

let brandSwiper = new Swiper('.brand__slider .swiper-container', {
    spaceBetween: 23,
    slidesPerView: 6,
    slidesPerColumn: 2,

    navigation: {
        nextEl: '.brand__slider .swiper-button-next',
        prevEl: '.brand__slider .swiper-button-prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 5,

        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,

        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20,

        },
        1201: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    }
});