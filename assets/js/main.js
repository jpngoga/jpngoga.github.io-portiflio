! function() {
    "use strict";
    var e = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
        t = $("#preloader");
    e ? t.remove() : (setTimeout(function() { t.addClass("preloaded") }, 800), setTimeout(function() { t.remove() }, 2e3));
    const i = (e, t = !1) => (e = e.trim(), t ? [...document.querySelectorAll(e)] : document.querySelector(e)),
        o = (e, t, o, a = !1) => {
            let s = i(t, a);
            s && (a ? s.forEach(t => t.addEventListener(e, o)) : s.addEventListener(e, o))
        },
        a = e => { window.scrollTo({ top: 0, behavior: "smooth" }) };
    o("click", ".mobile-nav-toggle", function(e) { i("#navbar").classList.toggle("navbar-mobile"), this.classList.toggle("fa-bars"), this.classList.toggle("fa-times") }), o("click", "#navbar .nav-link", function(e) {
        let t = i(this.hash);
        if (t) {
            e.preventDefault();
            let o = i("#navbar"),
                s = i("#header"),
                l = i("section", !0);
            if (i("#navbar .nav-link", !0).forEach(e => { e.classList.remove("active") }), this.classList.add("active"), o.classList.contains("navbar-mobile")) {
                o.classList.remove("navbar-mobile");
                let e = i(".mobile-nav-toggle");
                e.classList.toggle("fa-bars"), e.classList.toggle("fa-times")
            }
            s.classList.contains("header-top") ? (l.forEach(e => { e.classList.remove("section-show") }), t.classList.add("section-show")) : (s.classList.add("header-top"), setTimeout(function() { l.forEach(e => { e.classList.remove("section-show") }), t.classList.add("section-show") }, 350)), a(this.hash)
        }
    }, !0), window.addEventListener("load", () => {
        if (window.location.hash) {
            let e = i(window.location.hash);
            if (e) {
                i("#header");
                i("#navbar .nav-link", !0).forEach(e => { e.getAttribute("href") == window.location.hash ? e.classList.add("active") : e.classList.remove("active") }), setTimeout(function() { e.classList.add("section-show") }, 350), a(window.location.hash)
            }
        }
    }), new Swiper(".testimonials-slider", { speed: 600, loop: !0, autoplay: { delay: 5e3, disableOnInteraction: !1 }, slidesPerView: "auto", pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 }, breakpoints: { 320: { slidesPerView: 1, spaceBetween: 20 }, 992: { slidesPerView: 2, spaceBetween: 20 }, 1200: { slidesPerView: 3, spaceBetween: 20 } } }), window.addEventListener("load", () => {
        let e = i(".portfolio-container");
        if (e) {
            let t = new Isotope(e, { itemSelector: ".portfolio-item", layoutMode: "fitRows" }),
                a = i(".portfolio-flters li", !0);
            o("click", ".portfolio-flters li", function(e) { e.preventDefault(), a.forEach(function(e) { e.classList.remove("filter-active") }), this.classList.add("filter-active"), t.arrange({ filter: this.getAttribute("data-filter") }) }, !0)
        }
    });
    GLightbox({ selector: ".portfolio-lightbox" }), GLightbox({ selector: ".portfolio-details-lightbox", width: "90%", height: "90vh" });
    new Swiper(".portfolio-details-slider", { speed: 400, loop: !0, autoplay: { delay: 5e3, disableOnInteraction: !1 }, pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 } });
    GLightbox({ selector: ".blog-page-lightbox", width: "90%", height: "90vh" });
    new Swiper(".blog-details-slider", { speed: 400, loop: !0, autoplay: { delay: 5e3, disableOnInteraction: !1 }, pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 } }), (new WOW).init()
}();