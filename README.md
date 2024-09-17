## Iniciar o projeto
```
npm init -y
```

No NODE o padrão de nomeclatura do arquivo principal é **server.js** por questões semânticas

O  Módulo http possui diversas funcionalidades para a criação de aplicações (APIs)
Rodar o comando abaixo para mostrar 
```
http localhost:3333
```

A nomeação do **"type": "module"** dento do qrauivo package.json, fará com que o node suporte o padrão de exportação ESModules> Por padrão o NODE suporta o **commonjs - const http = require('node:http')**

#### Response e Request
São responsáveis pela comunicação entre o cliente e o servidor. O Request faz a solicitação para o servidor

## Estrutura da aplicação
### Rotas HTTP
Rotas HTTP são caminhos URLs definidos em um servidor que correspondem as requisições específicas feitas pelo cliente. As rotas HTTP determinam qual função o servidor deve executar quando a requisição pe feita para determinada URL, usando algum metodo HTTP como GET, PUT, POST, DELETE, PATCH, etc.