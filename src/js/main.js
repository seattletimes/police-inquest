// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(12345678), 5000);

require("component-responsive-frame/child");

const { Gallery, ScrollBar, scrollBus } = window['vue-detached-scrollbar']
var app = new Vue({
    el: '#app',
    components: {
        Gallery,
        ScrollBar,
    },
    data: {
        scrollBus,
        imageGallery: [
            {src: 'https://www.allthingsdogs.com/wp-content/uploads/2020/10/Long-Haired-Wiener-Dogs.jpg'},
        ]
    }
})