import { ApolloServer, gql } from 'apollo-server';
import { Product } from "./domain/Product/impl/Product";
import { MegaSena } from "./domain/User/MegaSena";
import { ProductList } from "./domain/Product/ProductList";
import { UserType } from "./domain/User/interfaces/UserType";

const product = new Product("Shampoo", 39.99, 15);
const product2 = new Product("sabonete", 4.99, 15);
const product3 = new Product("desodorante", 12.99, 15);

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
        salary(user: UserType) {
            return user.salary;
        },
        email(user: UserType) {
            return user.email;
        }
    },

    Product: {
        name(product: Product) {
            return product.getName();
        },
        price(product: Product) {
            return product.getPrice();
        },
        priceWithDiscount(product: Product) {
            return product.getPriceWithDiscount();
        },
        offer(product: Product) {
            return product.getOffer();
        }
    },

    Query: {
        ola(): string {
            return "Bom dia";
        },

        data(): string {
            return `${ new Date }`;
        },

        userLogin(): UserType {
            return {
                id: 1,
                name: "Ana da Silva!",
                email: "ana@test.com",
                age: 23,
                salary: 3000.05,
                vip: true
            }
        },

        productFind(): Product {
            return product
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