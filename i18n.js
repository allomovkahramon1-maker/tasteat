document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(`
        .section__info,
        .section__info2,
        .section__text,
        .section__text2,
        .section__josefine,
        .section__try,
        .section__starters,
        .testimonial-header,
        .section6 .image,
        .section__offers,
        .section__b__img,
        .section__b__img2,
        .section__card,
        .section__stage,
        .section__open .card,
        .card__section,
        .reservation,
        .footer__left,
        .footer__center,
        .footer__right
    `);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-animation");
            } else {
                // Ekrandan chiqsa animatsiyani qayta tayyorlaydi
                entry.target.classList.remove("show-animation");
            }
        });
    }, {
        threshold: 0.15
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});




//



document.addEventListener("DOMContentLoaded", () => {

    const translations = {
        en: {
            "Call - 123 456 789": "Call - 123 456 789",
            "Reservation": "Reservation",
            "Home": "Home",
            "About Us": "About Us",
            "Our Menu": "Our Menu",
            "Pages": "Pages",
            "Blog": "Blog",
            "Contact Us": "Contact Us",

            "Welcome to Restaurant": "Welcome to Restaurant",
            "The people, food and the prime locations make the perfect place good friends & family to come together and have great time.":
                "The people, food and the prime locations make the perfect place good friends & family to come together and have great time.",
            "View Menu": "View Menu",

            "Locate Us": "Locate Us",
            "Riverside 25, San Diego, California":
                "Riverside 25, San Diego, California",
            "Open Hours": "Open Hours",
            "Mon To Fri 9:00 AM - 9:00 PM":
                "Mon To Fri 9:00 AM - 9:00 PM",

            "The Delicious Story": "The Delicious Story",
            "Plan for this restaurant to deliver healthy food.":
                "Plan for this restaurant to deliver healthy food.",
            "Happily in the fourth year by fulfill the motto.":
                "Happily in the fourth year by fulfill the motto.",

            "Menu": "Menu",
            "Try Our Special dishes": "Try Our Special dishes",
            "Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.":
                "Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.",
            "See all dishes": "See all dishes",

            "Starters": "Starters",
            "Raw Scallops from Erquy": "Raw Scallops from Erquy",
            "Spring Roll": "Spring Roll",
            "French Onion Soup": "French Onion Soup",
            "Tomato Bruschetta": "Tomato Bruschetta",

            "Main Dish": "Main Dish",
            "Grilled Salmon with Dill Sauce": "Grilled Salmon with Dill Sauce",
            "Roast Beef with Vegetable": "Roast Beef with Vegetable",
            "Marrkesh Vegetetarian Curruy": "Marrkesh Vegetetarian Curruy",
            "Spicy Vegan Potato Curry": "Spicy Vegan Potato Curry",

            "Dessert": "Dessert",
            "Apple Pie with Cream": "Apple Pie with Cream",
            "Lemon Meringue Pie": "Lemon Meringue Pie",

            "Testimonial": "Testimonial",
            "Our Clients Say": "Our Clients Say",
            "We love to hear from customers, so please leave a comment or say hello in an email.":
                "We love to hear from customers, so please leave a comment or say hello in an email.",

            "offers": "offers",
            "Our Offer dishes": "Our Offer dishes",
            "Our chefs create melt-in-your-mouth dishes that'll satiate even the fussiest eaters now the dishes are in offers use it based on hunger.":
                "Our chefs create melt-in-your-mouth dishes that'll satiate even the fussiest eaters now the dishes are in offers use it based on hunger.",

            "50% Offer Going": "50% Offer Going",
            "Chicken Burger": "Chicken Burger",
            "Chicken burger with the tasty toppings and leaves.":
                "Chicken burger with the tasty toppings and leaves.",
            "Chicken Pizza": "Chicken Pizza",
            "Pizza with multiple flavor and the toping are mixed.":
                "Pizza with multiple flavor and the toping are mixed.",

            "Popular Dishes": "Popular Dishes",
            "Chicken Manjoori": "Chicken Manjoori",
            "Hotdog": "Hotdog",
            "Fresh Salmon": "Fresh Salmon",
            "Veg Burger": "Veg Burger",

            "Dish relished by all age groups as a starter dish at parties.":
                "Dish relished by all age groups as a starter dish at parties.",
            "Grilled sausage served in the slit of a partially sliced bun.":
                "Grilled sausage served in the slit of a partially sliced bun.",
            "Beat the health blues with our Super Immune Blue Juice Recipe.":
                "Beat the health blues with our Super Immune Blue Juice Recipe.",
            "Burgers may be made from ingredients like beans.":
                "Burgers may be made from ingredients like beans.",

            "What we offer": "What we offer",
            "Our Great Services": "Our Great Services",
            "The atmosphere set the stage. It’s about more than just a dining room away from your home. food takes the spotlight as guests.":
                "The atmosphere set the stage. It’s about more than just a dining room away from your home. food takes the spotlight as guests.",

            "Opened 24/7": "Opened 24/7",
            "Special Menus": "Special Menus",
            "Home Delivery": "Home Delivery",

            "Be First Who Read News": "Be First Who Read News",
            "Explore the latest stories about our dishes, offers, events and future plans here.":
                "Explore the latest stories about our dishes, offers, events and future plans here.",
            "Delicious": "Delicious",
            "Cooking": "Cooking",
            "View More": "View More",

            "The Legend of US Cuisine: The Story of Hungry People":
                "The Legend of US Cuisine: The Story of Hungry People",
            "The Most Popular Delicious Food of Mediterranean Cuisine":
                "The Most Popular Delicious Food of Mediterranean Cuisine",

            "RESERVATION": "RESERVATION",
            "Book Your Table": "Book Your Table",
            "Name": "Name",
            "Email": "Email",
            "Persons": "Persons",
            "Timing": "Timing",
            "Date": "Date",
            "Book A Table": "Book A Table",

            "#TheTastEat": "#TheTastEat",
            "CONTACT": "CONTACT",
            "WORKING HOURS": "WORKING HOURS",
            "Mon - Fri:": "Mon - Fri:",
            "Sat:": "Sat:",
            "Sun:": "Sun:",
            "Join our mailing list for updates, Get news & offers events.":
                "Join our mailing list for updates, Get news & offers events.",
            "Subscribe": "Subscribe",
            "Styleguide": "Styleguide",
            "Licenses": "Licenses",
            "Protected": "Protected",
            "Not Found": "Not Found"
        },

        ru: {
            "Call - 123 456 789": "Позвонить - 123 456 789",
            "Reservation": "Бронирование",
            "Home": "Главная",
            "About Us": "О нас",
            "Our Menu": "Наше меню",
            "Pages": "Страницы",
            "Blog": "Блог",
            "Contact Us": "Связаться с нами",

            "Welcome to Restaurant": "Добро пожаловать в ресторан",
            "The people, food and the prime locations make the perfect place good friends & family to come together and have great time.":
                "Люди, вкусная еда и отличное расположение делают это место идеальным для встреч с друзьями и семьёй.",
            "View Menu": "Посмотреть меню",

            "Locate Us": "Наш адрес",
            "Riverside 25, San Diego, California":
                "Riverside 25, Сан-Диего, Калифорния",
            "Open Hours": "Часы работы",
            "Mon To Fri 9:00 AM - 9:00 PM":
                "Пн - Пт 9:00 - 21:00",

            "The Delicious Story": "Наша вкусная история",
            "Plan for this restaurant to deliver healthy food.":
                "План — готовить для гостей полезную и вкусную еду.",
            "Happily in the fourth year by fulfill the motto.":
                "Уже четвёртый год мы с удовольствием следуем нашему девизу.",

            "Menu": "Меню",
            "Try Our Special dishes": "Попробуйте наши фирменные блюда",
            "Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.":
                "Каждый визит к нам — это приятное впечатление от великолепной еды и уютной атмосферы.",
            "See all dishes": "Посмотреть все блюда",

            "Starters": "Закуски",
            "Raw Scallops from Erquy": "Сырые гребешки из Эрки",
            "Spring Roll": "Спринг-ролл",
            "French Onion Soup": "Французский луковый суп",
            "Tomato Bruschetta": "Томатная брускетта",

            "Main Dish": "Основные блюда",
            "Grilled Salmon with Dill Sauce": "Лосось на гриле с укропным соусом",
            "Roast Beef with Vegetable": "Ростбиф с овощами",
            "Marrkesh Vegetetarian Curruy": "Марокканское овощное карри",
            "Spicy Vegan Potato Curry": "Острое веганское картофельное карри",

            "Dessert": "Десерт",
            "Apple Pie with Cream": "Яблочный пирог со сливками",
            "Lemon Meringue Pie": "Лимонный пирог с меренгой",

            "Testimonial": "Отзывы",
            "Our Clients Say": "Что говорят наши клиенты",
            "We love to hear from customers, so please leave a comment or say hello in an email.":
                "Мы любим получать отзывы от наших клиентов. Оставьте комментарий или напишите нам.",

            "offers": "Предложения",
            "Our Offer dishes": "Наши специальные предложения",
            "50% Offer Going": "Скидка 50%",
            "Chicken Burger": "Куриный бургер",
            "Chicken burger with the tasty toppings and leaves.":
                "Куриный бургер с вкусными начинками и свежей зеленью.",
            "Chicken Pizza": "Куриная пицца",
            "Pizza with multiple flavor and the toping are mixed.":
                "Пицца с несколькими вкусами и разнообразными начинками.",

            "Popular Dishes": "Популярные блюда",
            "Chicken Manjoori": "Курица Манджури",
            "Hotdog": "Хот-дог",
            "Fresh Salmon": "Свежий лосось",
            "Veg Burger": "Овощной бургер",

            "What we offer": "Что мы предлагаем",
            "Our Great Services": "Наши отличные услуги",
            "Opened 24/7": "Открыто 24/7",
            "Special Menus": "Специальное меню",
            "Home Delivery": "Доставка на дом",

            "Be First Who Read News": "Будьте первым, кто узнает новости",
            "Explore the latest stories about our dishes, offers, events and future plans here.":
                "Узнайте больше о наших блюдах, предложениях, мероприятиях и планах.",
            "Delicious": "Вкусное",
            "Cooking": "Кулинария",
            "View More": "Подробнее",

            "RESERVATION": "БРОНИРОВАНИЕ",
            "Book Your Table": "Забронируйте столик",
            "Name": "Имя",
            "Email": "Электронная почта",
            "Persons": "Количество гостей",
            "Timing": "Время",
            "Date": "Дата",
            "Book A Table": "Забронировать столик",

            "#TheTastEat": "#TheTastEat",
            "CONTACT": "КОНТАКТЫ",
            "WORKING HOURS": "ЧАСЫ РАБОТЫ",
            "Join our mailing list for updates, Get news & offers events.":
                "Подпишитесь на рассылку и получайте новости и специальные предложения.",
            "Subscribe": "Подписаться",
            "Styleguide": "Стайлгайд",
            "Licenses": "Лицензии",
            "Protected": "Защищённые",
            "Not Found": "Не найдено"
        },

        uz: {
            "Call - 123 456 789": "Qo‘ng‘iroq - 123 456 789",
            "Reservation": "Bron qilish",
            "Home": "Bosh sahifa",
            "About Us": "Biz haqimizda",
            "Our Menu": "Menyumuz",
            "Pages": "Sahifalar",
            "Blog": "Blog",
            "Contact Us": "Bog‘lanish",

            "Welcome to Restaurant": "Restoranimizga xush kelibsiz",
            "The people, food and the prime locations make the perfect place good friends & family to come together and have great time.":
                "Ajoyib odamlar, mazali taomlar va qulay joy do‘stlar hamda oila bilan vaqt o‘tkazish uchun mukammal muhit yaratadi.",
            "View Menu": "Menyuni ko‘rish",

            "Locate Us": "Manzilimiz",
            "Riverside 25, San Diego, California":
                "Riverside 25, San Diego, Kaliforniya",
            "Open Hours": "Ish vaqtimiz",
            "Mon To Fri 9:00 AM - 9:00 PM":
                "Dushanba - Juma 09:00 - 21:00",
            "Reservation": "Bron qilish",

            "The Delicious Story": "Mazali hikoyamiz",
            "Plan for this restaurant to deliver healthy food.":
                "Restoranimizda sog‘lom va mazali taomlar tayyorlashni rejalashtirdik.",
            "Happily in the fourth year by fulfill the motto.":
                "To‘rtinchi yilimizda ham o‘z shiorimizga sodiq holda faoliyat yuritmoqdamiz.",

            "Menu": "Menyu",
            "Try Our Special dishes": "Maxsus taomlarimizni tatib ko‘ring",
            "Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.":
                "Biz bilan har bir ovqatlanish mazali taomlar va o‘ziga xos qulay muhit bilan unutilmas bo‘lishi kerak.",
            "See all dishes": "Barcha taomlarni ko‘rish",

            "Starters": "Gazakslar",
            "Raw Scallops from Erquy": "Erkudan xom taroqchalar",
            "Spring Roll": "Spring roll",
            "French Onion Soup": "Fransuz piyoz sho‘rvasi",
            "Tomato Bruschetta": "Pomidorli brusketta",

            "Main Dish": "Asosiy taomlar",
            "Grilled Salmon with Dill Sauce": "Grilda pishirilgan losos va ukrop sousi",
            "Roast Beef with Vegetable": "Sabzavotli rostbif",
            "Marrkesh Vegetetarian Curruy": "Marokashcha sabzavotli karri",
            "Spicy Vegan Potato Curry": "Achchiq vegan kartoshka karri",

            "Dessert": "Desert",
            "Apple Pie with Cream": "Qaymoqli olma pirogi",
            "Lemon Meringue Pie": "Limonli merenga pirogi",

            "Testimonial": "Mijozlar fikri",
            "Our Clients Say": "Mijozlarimiz nima deydi",
            "We love to hear from customers, so please leave a comment or say hello in an email.":
                "Mijozlarimiz fikrini eshitishni yaxshi ko‘ramiz. Izoh qoldiring yoki bizga email orqali yozing.",

            "offers": "Takliflar",
            "Our Offer dishes": "Maxsus takliflarimiz",
            "50% Offer Going": "50% chegirma",
            "Chicken Burger": "Tovuqli burger",
            "Chicken burger with the tasty toppings and leaves.":
                "Mazali qo‘shimchalar va yangi ko‘katlar bilan tayyorlangan tovuqli burger.",
            "Chicken Pizza": "Tovuqli pitsa",
            "Pizza with multiple flavor and the toping are mixed.":
                "Turli xil ta’mlar va qo‘shimchalar bilan tayyorlangan pitsa.",

            "Popular Dishes": "Mashhur taomlar",
            "Chicken Manjoori": "Chicken Manjoori",
            "Hotdog": "Hot-dog",
            "Fresh Salmon": "Yangi losos",
            "Veg Burger": "Sabzavotli burger",

            "What we offer": "Biz nimalarni taklif qilamiz",
            "Our Great Services": "Ajoyib xizmatlarimiz",
            "Opened 24/7": "24/7 ochiq",
            "Special Menus": "Maxsus menyular",
            "Home Delivery": "Uyga yetkazib berish",

            "Be First Who Read News": "Yangiliklarni birinchi bo‘lib o‘qing",
            "Explore the latest stories about our dishes, offers, events and future plans here.":
                "Taomlarimiz, takliflarimiz, tadbirlarimiz va kelajakdagi rejalarimiz haqidagi so‘nggi yangiliklarni o‘qing.",
            "Delicious": "Mazali",
            "Cooking": "Pazandachilik",
            "View More": "Batafsil",

            "RESERVATION": "BRON QILISH",
            "Book Your Table": "Stolingizni bron qiling",
            "Name": "Ism",
            "Email": "Email",
            "Persons": "Mehmonlar soni",
            "Timing": "Vaqt",
            "Date": "Sana",
            "Book A Table": "Stolni bron qilish",

            "#TheTastEat": "#TheTastEat",
            "CONTACT": "BOG‘LANISH",
            "WORKING HOURS": "ISH VAQTI",
            "Mon - Fri:": "Du - Ju:",
            "Sat:": "Shan:",
            "Sun:": "Yak:",
            "Join our mailing list for updates, Get news & offers events.":
                "Yangiliklar, chegirmalar va tadbirlar haqida ma’lumot olish uchun obuna bo‘ling.",
            "Subscribe": "Obuna bo‘lish",
            "Styleguide": "Stil qo‘llanmasi",
            "Licenses": "Litsenziyalar",
            "Protected": "Himoyalangan",
            "Not Found": "Topilmadi"
        }
    };


    // ==========================================
    // ORIGINAL MATNLARNI SAQLAB QOLISH
    // ==========================================

    const originalTexts = new WeakMap();

    function saveOriginalText(element) {
        if (!originalTexts.has(element)) {
            originalTexts.set(element, element.textContent.trim());
        }
    }


    // ==========================================
    // TEXT NODE TARJIMA
    // ==========================================

    function translateTextNodes(language) {

        const dictionary = translations[language];

        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {

                    const parent = node.parentElement;

                    if (!parent) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    // Script va style ichidagi textlarni o'tkazib yuboramiz
                    if (
                        parent.tagName === "SCRIPT" ||
                        parent.tagName === "STYLE"
                    ) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    if (!node.nodeValue.trim()) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );


        const nodes = [];

        let node;

        while (node = walker.nextNode()) {
            nodes.push(node);
        }


        nodes.forEach(textNode => {

            if (!textNode.datasetOriginal) {
                textNode.datasetOriginal = textNode.nodeValue;
            }

            const original = textNode.datasetOriginal.trim();

            if (dictionary[original]) {

                const leadingSpace =
                    textNode.nodeValue.match(/^\s*/)?.[0] || "";

                const trailingSpace =
                    textNode.nodeValue.match(/\s*$/)?.[0] || "";

                textNode.nodeValue =
                    leadingSpace +
                    dictionary[original] +
                    trailingSpace;
            }
            else {

                // English ga qaytishda original text
                textNode.nodeValue = textNode.datasetOriginal;
            }
        });
    }


    // ==========================================
    // INPUT PLACEHOLDERLAR
    // ==========================================

    function translateInputs(language) {

        const dictionary = translations[language];

        document.querySelectorAll("input").forEach(input => {

            if (!input.dataset.originalPlaceholder) {
                input.dataset.originalPlaceholder =
                    input.placeholder;
            }

            const original =
                input.dataset.originalPlaceholder;

            if (dictionary[original]) {
                input.placeholder = dictionary[original];
            } else {
                input.placeholder = original;
            }

        });
    }


    // ==========================================
    // SELECT
    // ==========================================

    const languageSelect =
        document.getElementById("languageSelect");


    function changeLanguage(language) {

        translateTextNodes(language);
        translateInputs(language);

        document.documentElement.lang = language;

        localStorage.setItem(
            "selectedLanguage",
            language
        );
    }


    // ==========================================
    // SELECT EVENT
    // ==========================================

    if (languageSelect) {

        languageSelect.addEventListener(
            "change",
            function () {

                changeLanguage(this.value);

            }
        );

    }


    // ==========================================
    // SAQLANGAN TILNI YUKLASH
    // ==========================================

    const savedLanguage =
        localStorage.getItem("selectedLanguage") || "en";


    if (languageSelect) {
        languageSelect.value = savedLanguage;
    }


    changeLanguage(savedLanguage);

});