const { ApolloServer, gql } = require('apollo-server');
const { Product } = require("./model/Product");
const { MegaSena } = require("./model/MegaSena");
const { ProductList } = require("./model/ProductList");

const product = new Product("Shampoo", 39.99, 15);
const product2 = new Product("Shampoo", 39.99, 15);
const product3 = new Product("Shampoo", 39.99, 15);

const productList = new ProductList("Prduct List");

productList.addProduct(product);
productList.addProduct(product2);
productList.addProduct(product3);

const megaSena = new MegaSena();

const typeDefs = gql`
    scalar Date

    type ProductList {
        list: [Product]
    }
    
    type MegaSena {
        numbers: [Int]
    }

    type Product {
        name: String
        price: Float
        discount: Float
        offer: Boolean
        priceWithDiscount: Float
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        salary: Float
        vip: Boolean
    }

    type Query {
        ola: String!
        data: Date!
        userLogin: User
        productFind: Product
        megaSena: MegaSena
        productList: ProductList
    }
`;

const resolvers = {

    User: {
        salary(user) {
            return user.salary_real;
        },
        email(user) {
            return user.email_user;
        }
    },

    Product: {
        name(product) {
            return product.getName();
        },
        price(product) {
            return product.getPrice();
        },
        priceWithDiscount(product) {
            return product.getPriceWithDiscount();
        },
        offer(product) {
            return product.getOffer();
        }
    },

    Query: {
        ola() {
            return "Bom dia";
        },

        data() {
            return `${ new Date }`;
        },

        userLogin() {
            return {
                id: 1,
                name: "Ana da Silva!",
                email_user: "ana@test.com",
                age: 23,
                salary_real: 3000.05,
                vip: true

            }
        },

        productFind() {
            return {
                name: product.getName(),
                price: product.getPrice(),
                priceWithDiscount: product.getPriceWithDiscount()
            }
        },

        megaSena() {
            return {
                numbers: megaSena.getNumbers()
            }
        },

        productList() {
            return { 
                list: productList.getProducts()
            }
        }
    }
};

const server = new ApolloServer({
    typeDefs, resolvers
})

server.listen().then(({ url }) => {
    console.log(`executando em ${url}`);
})