import product from "./product.js";
const App = {
    data() {
        return {
            categories: [
                { id: 0, name: 'Завтрак', dishes: 2 },
                { id: 1, name: 'Основное', dishes: 3 },
                { id: 2, name: 'Доплнительное', dishes: 4 },
                { id: 3, name: 'Полное', dishes: 5 },
                { id: 4, name: 'Расширенное', dishes: 6 },
            ],
            currentCategory: 'Основное',
            // products: [
            //     { id: 0, name: "Лосось", img: "image(1).jpg", category: "Обед", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
            //     { id: 1, name: "Лосось", img: "image(1).jpg", category: "Завтрак", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
            //     { id: 2, name: "Лосось", img: "image(1).jpg", category: "Ужин", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
            //     { id: 3, name: "Лосось", img: "image(1).jpg", category: "Обед", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
            //     { id: 4, name: "Лосось", img: "image(1).jpg", category: "2-ой завтрак", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
            //     { id: 5, name: "Лосось", img: "image(1).jpg", category: "Полдник", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
            //     { id: 6, name: "Лосось", img: "image(1).jpg", category: "Ужин", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
            //     { id: 7, name: "Лосось", img: "image(1).jpg", category: "Обед", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
            //     { id: 8, name: "Лосось", img: "image(1).jpg", category: "Завтрак", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
            // ],
            breakfasts: [
                { id: 0, name: "Лосось", img: "image(1).jpg", category: "Завтрак", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 1, name: "фасоль", img: "image(1).jpg", category: "Завтрак", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 2, name: "Гречка", img: "image(1).jpg", category: "Завтрак", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 3, name: "Кукуруза", img: "image(1).jpg", category: "Завтрак", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 4, name: "Лосось", img: "image(1).jpg", category: "Завтрак", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 5, name: "Лосось", img: "image(1).jpg", category: "Завтрак", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
            ],
            secondBreakfasts: [
                { id: 0, name: "Лосось", img: "image(1).jpg", category: "2-ой завтрак", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 1, name: "das", img: "image(1).jpg", category: "2-ой завтрак", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 2, name: "dsadas", img: "image(1).jpg", category: "2-ой завтрак", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 3, name: "dasd", img: "image(1).jpg", category: "2-ой завтрак", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
            ],
            lunchs: [
                { id: 0, name: "Лосось", img: "image(1).jpg", category: "Обед", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 1, name: "dsa", img: "image(1).jpg", category: "Обед", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 2, name: "dsa", img: "image(1).jpg", category: "Обед", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 3, name: "312", img: "image(1).jpg", category: "Обед", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 4, name: "6", img: "image(1).jpg", category: "Обед", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 5, name: "Лосось", img: "image(1).jpg", category: "Обед", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 6, name: "Лосось", img: "image(1).jpg", category: "Обед", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
            ],
            snacks: [
                { id: 0, name: "Лосось", img: "image(1).jpg", category: "Полдник", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 1, name: "Лосось", img: "image(1).jpg", category: "Полдник", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 2, name: "Лосось", img: "image(1).jpg", category: "Полдник", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 3, name: "Лосось", img: "image(1).jpg", category: "Полдник", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 4, name: "Лосось", img: "image(1).jpg", category: "Полдник", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 5, name: "Лосось", img: "image(1).jpg", category: "Полдник", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 6, name: "Лосось", img: "image(1).jpg", category: "Полдник", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
            ],
            dinners: [
                { id: 0, name: "Лосось", img: "image(1).jpg", category: "Ужин", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 1, name: "Лосось", img: "image(1).jpg", category: "Ужин", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 2, name: "Лосось", img: "image(1).jpg", category: "Ужин", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 3, name: "Лосось", img: "image(1).jpg", category: "Ужин", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 4, name: "Лосось", img: "image(1).jpg", category: "Ужин", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 5, name: "Лосось", img: "image(1).jpg", category: "Ужин", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
            ],
            waters: [
                { id: 0, name: "Лосось", img: "image(1).jpg", category: "Вода", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 1, name: "Лосось", img: "image(1).jpg", category: "Вода", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 2, name: "Лосось", img: "image(1).jpg", category: "Вода", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 3, name: "Лосось", img: "image(1).jpg", category: "Вода", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 4, name: "Лосось", img: "image(1).jpg", category: "Вода", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },
                { id: 5, name: "Лосось", img: "image(1).jpg", category: "Вода", price: "600", calories: 200, proteins: 23, carbohdrate: 12, fats: 12 },

            ],
            clients: [
                { id: 0, name: 'Сослан', howOld: 60, img: "client(1).jpg", programmName: " 'Полное' ", programmCount: 30, comment: "ффффаааааафа", result: 30, },
                { id: 1, name: 'Сослан', howOld: 60, img: "client(1).jpg", programmName: "'Полное'", programmCount: 30, comment: "ффффаааааафа", result: 30, },
                { id: 2, name: 'Сослан', howOld: 60, img: "client(1).jpg", programmName: "'Полное'", programmCount: 30, comment: "ффффаааааафа", result: 30, },
            ],
            tems: [
                { id: 0, img: 'tomato.svg', img1: 'tomato-white.svg', title: 'Продукты' },
                { id: 1, img: 'card.svg', img1: 'card-white.svg', title: 'Оплата и доставка' },
                { id: 2, img: 'body.svg', img1: 'body-white.svg', title: 'Похудение' },
                { id: 3, img: 'sneg.svg', img1: 'sneg-white.svg', title: 'Хранение' },
            ],
            faq: [
                { id: 0, categoryId: 1, question: 'Как я могу оплатить свой заказ?', answer: 'Оплатить заказ можно несколькими способами: банковской картой или наличными курьеру в день первой доставки питания.Если вы меняете блюда, воспользуйтесь безналичной оплатой. Оплата подписки происходит до 19:00 дня списания, иначе автоматически включается заморозка.' },
                { id: 1, categoryId: 0, question: 'Используете ли вы сахар или сахарозаменитель. Если да, то какой?', answer: 'В меню  сахар заменен на натуральный сахарозаменитель Fitparad 7. Подробный состав вы всегда можете уточнить у наших специалистов call-центра.' },
                { id: 2, categoryId: 0, question: 'Какие продукты вы используете для готовки?', answer: 'Мы используем диетические сорта мяса, например куриное филе, филе индейки и говядину. Молочная продукция оптимальна по жирности — до 5%    ' },
                { id: 3, categoryId: 2, question: 'Сколько калорий в день нужно потреблять, чтобы похудеть?', answer: 'Чаще всего наши клиенты выбирают рационы на 800 ккал, 1000 ккал или 1200 ккал. Но все индивидуально. В интернете вы найдете множество методов, с помощью которых легко определить энергетическую ценность вашего меню. Самые популярные формулы: Харриса — Бенедикта и Миффлина — Сан Жеора. Вам нужно больше 1200 ккал для комфортного похудения? Присмотритесь к линейке Основное на 1400 ккал. Хорошие новости: о кухонных весах можно забыть навсегда. Мы все посчитали, чтобы вы ели и худели, не занимая голову лишней информацией.' },
                { id: 4, categoryId: 3, question: 'Какой срок хранения вашей продукции?', answer: 'Контейнеры с едой необходимо хранить в холодильнике, соблюдая температурный режим. Мы используем новейшую технологию газомодифицированной среды с герметичной запайкой и температурным контролем, которая позволяет сохранять свежесть блюд несколько дней, при условии хранения в холодильнике.На контейнерах указана дата производства.Мы рекомендуем соблюдать последовательность приемов пищи и не хранить наши блюда дольше определенного срока во избежание их порчи.' },
                { id: 5, categoryId: 3, question: 'Можно ли разогревать еду в микроволновке?', answer: 'Контейнеры предназначены для разогрева в микроволновой печи. Просто снимите защитную пленку и поместите контейнер на пару минут в микроволновку.' },
                { id: 6, categoryId: 2, question: 'Когда будет результат???', answer: 'Сразу. За неделю наши клиенты теряют от 500 г до 2,5 кг. Сколько сбросите вы? Зависит от множества факторов: точки старта, состояния здоровья, физической формы, привычек и цели.' },
                { id: 7, categoryId: 1, question: 'Как осуществляется доставка?', answer: 'Мы привозим еду каждые два дня, в любые 2-х часовые интервалы: утром — с 6:00 до 13:00, вечером — с 18:00 до 23:59. Выбирайте, когда вам удобнее! Наши курьеры звонят, чтобы подтвердить доставку:  — с 12:00 до 16:00, если вы ждете вечернюю доставку' },
                { id: 8, categoryId: 1, question: 'Как получить доставку день в день?', answer: 'Если вы закажете еду до 15:00, то мы привезем ваш заказ уже вечером. Как правило, количество коробок с едой ограничено.' },
                { id: 9, categoryId: 2, question: 'Как похудеть в определенной зоне, например, в талии/лице/ногах?', answer: 'Не существует рецепта локального похудения в отдельной проблемной зоне. Но вы можете направить организм в нужную сторону, если грамотно подобрать питание и физические упражнения.' },
                { id: 10, categoryId: 2, question: 'Можно ли раз в неделю есть вредную еду?', answer: 'По словам врача, даже во время диеты раз в неделю нужно устраивать читмил — то есть выделять день, когда есть можно все, даже самую калорийную пищу. С помощью читмила можно поддержать основной обмен веществ, который снижается у тех, кто вводит в свою жизнь дефицит калорий или другие ограничения.' },
                { id: 11, categoryId: 3, question: 'Нужно ли готовить BaskayTime после получения?', answer: 'Все, что вам нужно будет сделать - это поставить коробочку с едой на пару минут в микроволновую печь и обед будет готов.' },
                { id: 12, categoryId: 3, question: 'Смогу ли я питаться BaskayTime в разъездах или носить обеды с собой на работу?', answer: 'Наши контейнеры герметично упакованы и компактны. Обед от BaskayTime легко брать с собой и удобно есть даже сидя в пробке. Важно помнить, что в случае длительной поездки еду лучше перевозить в холодильной сумке.' },
                { id: 13, categoryId: 4, question: 'Можно ли есть BaskayTime, не разогревая?', answer: 'Все зависит от ваших вкусовых предпочтений. Вы можете съесть томатный суп и десерты без разогрева. Горячие блюда все же будут вкуснее и полезнее, если их предварительно разогреть.' },
            ],
            currentQestion: null,
            currentFaq: 1,
            currentSlide: 0,
            currentArr: [],
            updateArr: [],
            currentUpdateProduct: 0,
            currentPopUp: 0,
        }
    },
    methods: {
        editProduct(product) {
            this.updateArr = [];
            if (product.category === 'Завтрак') {
                this.breakfasts.forEach(element => {
                    this.updateArr.push(element)
                });
            }
            if (product.category === '2-ой завтрак') {
                this.secondBreakfasts.forEach(element => {
                    this.updateArr.push(element)
                });
            }
            if (product.category === 'Обед') {
                this.lunchs.forEach(element => {
                    this.updateArr.push(element)
                });
            }
            if (product.category === 'Полдник') {
                this.snacks.forEach(element => {
                    this.updateArr.push(element)
                });
            }
            if (product.category === 'Ужин') {
                this.dinners.forEach(element => {
                    this.updateArr.push(element)
                });
            }
            if (product.category === 'Вода') {
                this.waters.forEach(element => {
                    this.updateArr.push(element)
                });
            }


        },
        updateProduct(product) {
            this.updateArr = [];
            let index = this.currentArr.findIndex(el => el.category === product.category);
            this.currentArr.splice(index, 1, product);
            this.currentUpdateProduct = 0;
        },
        prevSlide() {
            if (this.currentSlide == 0) this.currentSlide = 0;
            else this.currentSlide--;

        },
        nextSlide() {
            if (this.clients.length - 1 <= this.currentSlide) this.currentSlide = this.currentSlide;
            else this.currentSlide++;

        },
        prevProduct() {
            if (this.currentUpdateProduct == 0) this.currentUpdateProduct = 0;
            else this.currentUpdateProduct--;
        },
        nextProduct() {

            if (Math.ceil(this.updateArr.length / 3) === this.currentUpdateProduct + 1) this.currentUpdateProduct = this.currentUpdateProduct;
            else this.currentUpdateProduct++;

            console.log(Math.floor(this.updateArr.length / 3));
            console.log(this.currentUpdateProduct);
        },
        randomIndex(array) {
            const index = Math.floor(Math.random() * (array.length - 1))
            return index
        },

        sendNumber() {
            this.currentPopUp = 0;
        },

    },
    computed: {
        filtredFaq() {
            let filtredFaq = this.faq.filter(item => item.categoryId == this.currentFaq);
            return filtredFaq;
        },
        menu() {
            if (this.currentCategory === 'Завтрак') {
                this.currentArr = [
                    this.breakfasts[this.randomIndex(this.breakfasts)],
                    this.secondBreakfasts[this.randomIndex(this.secondBreakfasts)]
                ]
            }

            if (this.currentCategory === 'Основное') {
                this.currentArr = [
                    this.breakfasts[this.randomIndex(this.breakfasts)],
                    this.lunchs[this.randomIndex(this.lunchs)],
                    this.dinners[this.randomIndex(this.dinners)]
                ]
            }

            if (this.currentCategory === 'Доплнительное') {
                this.currentArr = [
                    this.breakfasts[this.randomIndex(this.breakfasts)],
                    this.secondBreakfasts[this.randomIndex(this.secondBreakfasts)],
                    this.lunchs[this.randomIndex(this.lunchs)],
                    this.dinners[this.randomIndex(this.dinners)]
                ]
            }

            if (this.currentCategory === 'Полное') {
                this.currentArr = [
                    this.breakfasts[this.randomIndex(this.breakfasts)],
                    this.secondBreakfasts[this.randomIndex(this.secondBreakfasts)],
                    this.lunchs[this.randomIndex(this.lunchs)],
                    this.snacks[this.randomIndex(this.snacks)],
                    this.dinners[this.randomIndex(this.dinners)]
                ]
            }

            if (this.currentCategory === 'Расширенное') {
                this.currentArr = [
                    this.breakfasts[this.randomIndex(this.breakfasts)],
                    this.secondBreakfasts[this.randomIndex(this.secondBreakfasts)],
                    this.lunchs[this.randomIndex(this.lunchs)],
                    this.dinners[this.randomIndex(this.dinners)],
                    this.snacks[this.randomIndex(this.snacks)],
                    this.waters[this.randomIndex(this.waters)]
                ]
            }

        },
        totalCalories() {
            let calories = 0;
            let proteins = 0;
            let fats = 0;
            let carbohdrate = 0;
            let totalCalories = [];
            this.currentArr.forEach(el => {
                calories = calories + el.calories;
                proteins += el.proteins;
                fats += el.fats;
                carbohdrate += el.carbohdrate;
                console.log(calories);

            })
            totalCalories.push({ 'calories': calories, 'proteins': proteins, 'fats': fats, 'carbohdrate': carbohdrate })
            return totalCalories

        }

    },
    components: {
        product
    },
    created() {
        this.menu
        this.totalCalories
    },
    mounted() {

    }
}

Vue.createApp(App).mount('#app')
