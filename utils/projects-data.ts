import projectRedesignPreviewImage from "/media/images/project-cases/shop-redesign/project-shop-redesign-preview.png";
import projectRedesignStepsImage from "/media/images/project-cases/shop-redesign/project-shop-redesign-steps.png";
import projectRedesignStep2Img1 from "/media/images/project-cases/shop-redesign/project-shop-redesign-step-2-img-1.png";
import projectRedesignStep3Img1 from "/media/images/project-cases/shop-redesign/project-shop-redesign-step-3-img-1.png";
import projectRedesignStep3Img2 from "/media/images/project-cases/shop-redesign/project-shop-redesign-step-3-img-2.png";

export const projects = [
    {
        name: "shop-redesign-case",
        preview_title: "Редизайн интернет магазина",
        preview_img: projectRedesignPreviewImage,
        steps_title: "Процесс редизайна",
        steps_img: projectRedesignStepsImage,
        steps: [
            {
                title: "Цели и задачи на проект",
                readtime: "1 мин на прочтение",
                description:
                    'Заказчик поставил перед нами две важные задачи. Во-первых, увеличить количество пользователей, выбравших способ оплаты "Наличные". Во-вторых, провести аудит и выявить основные ошибки на веб-сайте.',
                images: [projectRedesignStep2Img1],
            },
            {
                title: "Подготовка к редизайну",
                readtime: "1 мин на прочтение",
                description:
                    "Для начала, я провел анализ метрик сайта, сфокусировав внимание на данных из Яндекс.Метрики. В процессе исследования я изучил все доступные показатели, а также анализировал тепловые карты и данные из вебвизора.\nСледующим этапом было создание структуры текущего проекта, основываясь на пользовательском пути (user flow). Завершив построение этой схемы, я приступил к исследованию рынка. Это включало в себя анализ крупных конкурентов, выявление их преимуществ перед нашим интернет-магазином и выявление недостатков.\nПосле обсуждения с клиентом и анализа рынка, я приступил к разработке нового user flow, который включал в себя обновленные элементы сайта и улучшенную структуру.",
                images: [projectRedesignStep3Img1, projectRedesignStep3Img2],
            },
        ],
    },
];
