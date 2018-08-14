const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
  type Todo {
    id: ID!
    text: String!
    complete: Boolean!
  }
  type Mutation {
    createTodo(text: String!): Todo 
  }
`

mongoose.connect('mongodb://localhost/todos');

// ToDo Model
mongoose.connection.once('open', function() {
  const Todo = mongoose.model('Todo', {
    text: String,
    complete: Boolean
  })
});

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))