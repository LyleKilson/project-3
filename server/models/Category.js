const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
   {
      name: {
         type: String,
         required: true,
         unique: true,
         trim: true
      },
      products: [
         {
            type: Schema.Types.ObjectId,
            ref: 'Product'
         }
      ],

   },
   {
      toJSON: {
         getters: true
      }
   }
);

categorySchema.virtual('productCount').get(function() { 
   return this.products.length;
});

const Category = model('Cateogry', categorySchema);

module.exports = Category;