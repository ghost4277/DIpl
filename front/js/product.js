export default {
    template: `
        <div class="product">
            <div class="product-img">
                <img   :src="'../assets/images/' + product.img" alt="">
            </div>
            <div>
                <span class="product-category">{{category.name}}</span>
                <span class="product-calories">{{product.calories}} (Ккал)</span>
            </div>
                <span class="product-name">{{product.name}}</span>
                
                <button class="product-btn" @click="update">Заменить</button>
        </div>
    `,
    props: [
        'product',
        'array'
    ],
    methods: {
        update() {
            this.$emit('editprod', this.product)
        }
    },
    computed: {
        category() {
            return this.array.find(el => this.product.category_id === el.id)
        },
    }
}