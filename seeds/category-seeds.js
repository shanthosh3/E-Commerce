const { Category } = require('../models');

const categoryData = [
    { 
        category_name: 'Shirts',
    },
    { 
        category_name: 'Shorts',
    },
    { 
        category_name: 'Music',
    },
    { 
        category_name: 'Hats',
    },
    { 
        category_name: 'Shoes',
    },
];

const seedsCategories = () => Category.bulkCreate(categoryData);

module.exports = seedsCategories;