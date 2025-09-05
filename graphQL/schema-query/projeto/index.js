const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    scalar Date

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
    }
`;

const resolvers = {
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
                email: "ana@test.com",
                age: 23,
                salary: 3000.05,
                vip: true

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