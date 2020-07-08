import { ApolloServer, gql } from 'apollo-server-express'
import { WebApp } from 'meteor/webapp'
import { getUser } from 'meteor/apollo'

const typeDefs = `
type Query {
  hi: String
}
`

const resolvers = {
	Query: {
		hi() {
			return 'Hello World!'
		},
	},
}

const server = new ApolloServer({
	typeDefs,
	resolvers,
})

server.applyMiddleware({
	app: WebApp.connectHandlers,
	path: '/graphql',
})
