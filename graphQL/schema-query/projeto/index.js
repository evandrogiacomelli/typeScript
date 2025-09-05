const { ApolloServer, gql } = require('apollo-server');
const { Product } = require("./model/Produto")

const product = new Product("Shampoo", 39.99, 15);

const typeDefs = gql`
    scalar Date
    

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
            return product.name;
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
        }
    }
};

const server = new ApolloServer({
    typeDefs, resolvers
})

server.listen().then(({ url }) => {
    console.log(`executando em ${url}`);
})