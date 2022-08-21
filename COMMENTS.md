##### Download de dependencies
```
yarn or npm install
```

##### Copiar o arquivo .envExample para .env
```
Criar a base de dados em mysql e configurar o arquivo de acordo com o servidor
```

##### Criar tabelas
```
yarn typeorm migration:run or npm run typeorm migration:run
```

##### Preencher tabelas
```
yarn seed:run or npm run seed:run
```

##### Rodar a aplicação
```
yarn dev:server or npm run dev:server
```

##### Rota para testar a aplicação (método POST)
```
http://localhost:3336/jogo/simular
```

##### Observações
```
Sempre que o jogo é reiniciado, os dados alterados são limpos. Não sendo preciso rodar as seeds.

Em alguns serviços, existem consoles.logs que não são necessários. Porém facilita a visualização do que aconteceu durante a partida. Caso queira visualizar, basta analisar o terminal em que a aplicação está rodando.
```


