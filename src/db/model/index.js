import Product from "./products.js"
import Review from "./reviews.js"
import Category from './category.js'
import User from './users.js'
import ProductCategory from './productCategory.js'

User.hasMany(Product, { onDelete: 'CASCADE' })
Product.belongsTo(User, { onDelete: 'CASCADE' })

Product.hasMany(Review, { onDelete: 'CASCADE' })
Review.belongsTo(Product, { onDelete: 'CASCADE' })

User.hasMany(Review, { onDelete: 'CASCADE' })
Review.belongsTo(User, { onDelete: 'CASCADE' })

Product.belongsToMany(Category, { through: ProductCategory })
Category.belongsToMany(Product, { through: ProductCategory })

export { Product, Review, Category, User, ProductCategory }