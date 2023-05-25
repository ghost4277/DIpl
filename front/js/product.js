export default {
    template: `
        <div class="product">
            <img  class="product-img" :src="'../assets/images/' + product.img" alt="">
            <div>
                <span class="product-category">{{product.category}}</span>
                <span class="product-calories">{{product.calories}} (Ккал)</span>
            </div>
            <div>
                <span class="product-name">{{product.name}}</span>
                <button class="product-btn" @click="update">Заменить</button>
            </div>

        </div>
    `,
    props: [
        'product'
    ],
    methods: {
        update() {
            this.$emit('editprod', this.product)
        }
    }

}