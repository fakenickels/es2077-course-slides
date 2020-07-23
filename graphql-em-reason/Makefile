# Esse arquivo faz parte do curso https://es77.fakenickels.dev

GRAPHQL_SERVER := "http://localhost:4000/graphql"

serve:
	# It's a trap
	trap 'kill %1' INT TERM
	# Rodando tudo junto em paralelo
	yarn webpack-dev-server & $(MAKE) graphql-server & $(MAKE) relay-watch & $(MAKE) bs-watch

relay-watch:
	# ReasonRelay em watch mode
	yarn reason-relay-compiler --watch

bs-watch:
	# BuckleScript em watch mode
	yarn bsb -make-world -w

graphql-server:
	# Delicia de graphql server demo
	npx graphql-client-example-server

update-schema:
	rm -rf schema.graphql
	rm -rf graphql_schema.json
	# Baixa o introspection schema em forma de schema.graphql
	npx get-graphql-schema $(GRAPHQL_SERVER) > schema.graphql 
	npx get-graphql-schema $(GRAPHQL_SERVER) -j > graphql_schema.json 

.PHONY: serve update-schema relay-watch graphql-server bs-watch