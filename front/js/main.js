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
                { id: 0, categoryId: 1, question: 'Какой-то вопрос', answer: 'Ответ' },
                { id: 1, categoryId: 0, question: 'Какой-то вопрос', answer: 'Ответ' },
                { id: 2, categoryId: 0, question: 'Какой-то вопрос', answer: 'Ответ' },
                { id: 3, categoryId: 2, question: 'Какой-то вопрос', answer: 'Ответ' },
                { id: 4, categoryId: 3, question: 'Какой-то вопрос', answer: 'Ответ' },
                { id: 5, categoryId: 3, question: 'Какой-то вопрос', answer: 'Ответ' },
                { id: 6, categoryId: 2, question: 'Какой-то вопрос', answer: 'Ответ' },
                { id: 7, categoryId: 1, question: 'Какой-то вопрос', answer: 'Ответ' },
                { id: 8, categoryId: 1, question: 'Какой-то вопрос', answer: 'Ответ' },
                { id: 9, categoryId: 2, question: 'Какой-то вопрос', answer: 'Ответ' },
                { id: 10, categoryId: 2, question: 'Какой-то вопрос', answer: 'Ответ' },
                { id: 11, categoryId: 3, question: 'Какой-то вопрос', answer: 'Ответ' },
                { id: 12, categoryId: 3, question: 'Какой-то вопрос', answer: 'Ответ' },
                { id: 13, categoryId: 4, question: 'Какой-то вопрос', answer: 'Ответ' },
            ],
            currentQestion: null,
            currentFaq: 1,
            currentSlide: 0,
            currentArr: [],
            updateArr: [],
            currentUpdateProduct: 0,
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

        }

    },
    components: {
        product
    },
    created() {
        this.menu
    },
    mounted() {

    }
}

Vue.createApp(App).mount('#app')
