export default defineNuxtConfig({
    app: {
        pageTransition: { name: "page", mode: "out-in" },
        head: {
            meta: [
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                { charset: "utf-8" },
            ],
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.cdnfonts.com/css/helvetica-neue-5",
                },
            ],
        },
    },
    css: ["@/assets/css/reset.css", "@/assets/css/global.css"],
});
