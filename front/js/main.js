import product from "./product.js";
import { post } from "./helper.js";
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
            categoriesProducts: [],
            adminCategories: [
                { id: 0, name: 'Завтрак', },
                { id: 1, name: '2-ой завтрак', },
                { id: 2, name: 'Обед', },
                { id: 3, name: 'Полдник', },
                { id: 4, name: 'Ужин', },
                { id: 5, name: 'Напитки', },
            ],
            currentCategory: 'Основное',
            breakfasts: [],
            secondBreakfasts: [],
            lunchs: [],
            snacks: [],
            dinners: [],
            waters: [],
            clients: [
                { id: 0, name: 'Сослан', howOld: 60, img: "client(1).jpg", programmName: " 'Полное' ", programmCount: 22, comment: "«Похудел на 15 кг без спорта всего за  месяц. Физических нагрузок хватало в огороде»", result: 15, },
                { id: 1, name: 'Маир', howOld: 40, img: "client(2).jpg", programmName: "'Полное'", programmCount: 21, comment: "«Работа сидячая, по городу в основном на такси. В сентябре решил приводить себя в форму. Решил начать с питания. Заказывал линейку mFit, 1600 калорий в день. За первые две недели ушло 2  килограмма. Начал заниматься фитнесом. Сейчас мой вес 73, так же заказываю Baskay Time.   »", result: 26, },
                { id: 2, name: 'Анжела', howOld: 37, img: "client(3).jpg", programmName: "'Основное'", programmCount: 30, comment: "«Мне очень нравится ваша еда! У меня никогда не было каких-либо очень привередливых вкусов в еде, плюс когда я решила встать на «путь истинный» = похудения, я понимала, что, мне не так важно, насколько это будет вкусно, как насколько это будет эффективно! Чтобы я не была голодной и при этом худела»", result: 18, },
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
            maraphons: [
                { id: '0', current: true, vrewiew: 'firstPrewiev.jpg', video: 'firstVideo.mp4', condition: 'Стоимость 7 тыс.руб ,Питание для марафонцев 450 р,3.Продолжительность - 31 день', gift: '1 место - абонемент на год в Фитнес Центр К (всё включено) + питание от Баскай Тайм на месяц., 2 место 20 000 р, 3 место 10 000 р ' },
                { id: '1', current: false, vrewiew: 'secondPrewiev.jpg', video: 'winner(1).mp4', winner: 'Самвел. Приз - 50 тыс рублей!', secondPlace: ' Омар. Приз - питание из нашего меню', thirdPlace: 'Дзукаев Зантемир. Приз - питание из наешго меню', },
                { id: '2', current: false, vrewiew: 'thirdPrewiev.jpg', video: 'winner(2).mp4', winner: 'Фатима. Приз - 96 тыс рублей', secondPlace: 'Анджела.Приз 30 000 р ', thirdPlace: 'Тимур. Приз - 20 000 р', },
            ],
            resultVideos: [
                { id: 0, name: 'result(1).mp4' },
                { id: 1, name: 'result(2).mp4' },
                { id: 2, name: 'result(3).mp4' },
                { id: 3, name: 'result(4).mp4' },
                { id: 4, name: 'result(5).mp4' },
                { id: 5, name: 'result(6).mp4' },
            ],
            orders: [],
            currentOrder: {},
            ditailMaraphon: 'dsa',
            currentMaraphon: null,
            currentPage: 'home',
            currentQestion: null,
            currentFaq: 1,
            currentSlide: 0,
            currentArr: [],
            updateArr: [],
            currentUpdateProduct: 0,
            currentPopUp: 0,
            currentVideo: 0,
            currentUser: null,
            adminPage: 'menu',
            currentAdminCategory: 'Завтрак',
            editingProduct: null,
            burgerMenu: false,
            creatingProduct: null,
            formLog: {
                email: null,
                password: null,
            },
            formReg: {
                email: null,
                password: null,
                login: null,
                dbPassword: null,
            },
            user: null,
            errors: [],
            emptyError: false,
            currentMar: {},
            adminMaraphons: [],
            adminNumbers: [],
            number: {},
        }
    },
    methods: {
        addToAdminMar() {
            this.adminMaraphons.push({ ...this.currentMar })
            this.currentPopUp = 5
            console.log(this.adminMaraphons, this.currentMar);
            this.currentMar.client = '';
            this.currentMar.address = '';
            this.currentMar.phone = '';
        },
        async render() {
            this.breakfasts = await post('http://pup/public/api/products/get', { id: 1 })
            this.secondBreakfasts = await post('http://pup/public/api/products/get', { id: 2 })
            this.lunchs = await post('http://pup/public/api/products/get', { id: 3 })
            this.snacks = await post('http://pup/public/api/products/get', { id: 4 })
            this.dinners = await post('http://pup/public/api/products/get', { id: 5 })
            this.waters = await post('http://pup/public/api/products/get', { id: 6 })
        },
        addToOrders() {
            this.orders.push({ ...this.currentOrder, product: [...this.currentArr] })
            this.currentOrder.phone = '';
            this.currentOrder.address = '';
            this.currentOrder.client = '';
            this.currentPopUp = 6;
        },
        postProduct() {
            post('http://pup/public/api/products/create', this.creatingProduct)
            this.creatingProduct = null;
            this.render();
            this.currentPopUp = 7;
        },
        createProduct() {
            this.creatingProduct = {};
        },
        confid() {
            this.currentPage = 'confid';
            this.currentPopUp = 0;
        },
        editProduct(product) {
            this.editingProduct = product;
        },
        postChanges() {
            post('http://pup/public/api/products/update', this.editingProduct);
            this.editingProduct = null;
            this.render()
            this.currentPopUp = 8;
        },
        removeProduct(product) {
            post('http://pup/public/api/products/delete', product);
            this.render()
            this.currentPopUp = 9;
        },
        goDetail(el) {
            this.currentPage = 'detail'
            this.ditailMaraphon = el
            console.log(this.ditailMaraphon);
        },
        changeProduct(product) {
            this.updateArr = [];
            if (product.category_id == '1') {
                this.breakfasts.forEach(element => {
                    this.updateArr.push(element)
                });
            }
            if (product.category_id == '2') {
                this.secondBreakfasts.forEach(element => {
                    this.updateArr.push(element)
                });
            }
            if (product.category_id == '3') {
                this.lunchs.forEach(element => {
                    this.updateArr.push(element)
                });
            }
            if (product.category_id == '4') {
                this.snacks.forEach(element => {
                    this.updateArr.push(element)
                });
            }
            if (product.category_id == '5') {
                this.dinners.forEach(element => {
                    this.updateArr.push(element)
                });
            }
            if (product.category_id == '6') {
                this.waters.forEach(element => {
                    this.updateArr.push(element)
                });
            }
        },
        updateProduct(product) {
            this.updateArr = [];
            let index = this.currentArr.findIndex(el => el.category_id === product.category_id);
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
        prevVideo() {
            if (this.currentVideo == 0) this.currentVideo = 0;
            else this.currentVideo--;
        },
        nextVideo() {
            if (this.resultVideos.length - 1 <= this.currentVideo) this.currentVideo = this.currentVideo;
            else this.currentVideo++;
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
            this.adminNumbers.push(this.number)
            this.number = '';
            this.currentPopUp = 5;
            console.log(this.adminNumbers);
        },
        async logIn() {
            const user = await post('http://pup/public/api/login', this.formLog)
            if (user.message) {
                this.errors = user.message;
                return
            }
            this.user = user
            this.currentPopUp = 0;
            this.formLog.email = ''
            this.formLog.password = ''
            this.errors = []
        },
        async registration() {
            if (this.formReg.password !== this.formReg.dbPassword) {
                this.errors['password'] = ['Пароли не совпадают']
                console.log(this.errors);
                return
            }
            const user = await post('http://pup/public/api/registration', this.formReg)
            if (user.message) {
                this.errors = user.message;
                return
            }
            this.user = user
            this.currentPopUp = 0;
            this.errors = []
            this.formReg.email = '';
            this.formReg.password = '';
            this.formReg.login = '';
            this.formReg.dbPassword = '';
        },
    },
    computed: {
        isAuth() {
            return this.user
        },
        isAdmin() {
            return this.user?.role === 'admin'
        },
        adminMenu() {
            let adminMenu = [];
            if (this.currentAdminCategory === 'Завтрак') {
                this.breakfasts.forEach(el => {
                    adminMenu.push(el)
                })
            }
            if (this.currentAdminCategory === '2-ой завтрак') {
                this.secondBreakfasts.forEach(el => {
                    adminMenu.push(el)
                })
            }
            if (this.currentAdminCategory === 'Обед') {
                this.lunchs.forEach(el => {
                    adminMenu.push(el)
                })
            }
            if (this.currentAdminCategory === 'Полдник') {
                this.snacks.forEach(el => {
                    adminMenu.push(el)
                })
            }
            if (this.currentAdminCategory === 'Ужин') {
                this.dinners.forEach(el => {
                    adminMenu.push(el)
                })
            }
            if (this.currentAdminCategory === 'Напитки') {
                this.waters.forEach(el => {
                    adminMenu.push(el)
                })
            }
            return adminMenu;
        },
        otherMaraphons() {
            return this.maraphons.filter(el => !el.current)
        },
        splitCondition() {
            return this.currentMaraphon.condition.split(',')
        },
        splitGift() {
            return this.currentMaraphon.gift.split(',')
        },
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
            if (this.currentArr.length) {
                this.currentArr.forEach(el => {
                    proteins += el.proteins;
                    calories = calories + el.calories;
                    fats += el.fats;
                    carbohdrate += el.carbohdrate;
                })
                totalCalories.push({ 'calories': calories, 'proteins': proteins, 'fats': fats, 'carbohdrate': carbohdrate })
                return totalCalories
            }
            return []
        },
        totalSum() {
            let totalSum = 0;
            this.currentArr.forEach(el => {
                totalSum = totalSum + el.price
            })
            console.log(totalSum);
            return totalSum;
        },
    },
    components: {
        product
    },
    async created() {
        this.categoriesProducts = await post('http://pup/public/api/categories/all', {})

        this.breakfasts = await post('http://pup/public/api/products/get', { id: 1 })
        this.secondBreakfasts = await post('http://pup/public/api/products/get', { id: 2 })
        this.lunchs = await post('http://pup/public/api/products/get', { id: 3 })
        this.snacks = await post('http://pup/public/api/products/get', { id: 4 })
        this.dinners = await post('http://pup/public/api/products/get', { id: 5 })
        this.waters = await post('http://pup/public/api/products/get', { id: 6 })

        this.menu
        this.totalCalories
        this.currentMaraphon = this.maraphons.find(el => el.current)
        this.adminMenu;
    },
}
Vue.createApp(App).mount('#app')
