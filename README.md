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

A nomeação do **"type": "module"** dento do arquivo package.json, fará com que o node suporte o padrão de exportação ESModules> Por padrão o NODE suporta o **commonjs - const http = require('node:http')**

#### Response e Request
São responsáveis pela comunicação entre o cliente e o servidor. O Request faz a solicitação para o servidor

## Estrutura da aplicação
### Rotas HTTP
Rotas HTTP são caminhos URLs definidos em um servidor que correspondem as requisições específicas feitas pelo cliente. As rotas HTTP determinam qual função o servidor deve executar quando a requisição pe feita para determinada URL, usando algum metodo HTTP como GET, PUT, POST, DELETE, PATCH, etc.

### Códigos de status de resposta HTTP
Os códigos HTTP são respostas padrão fornecidas pelo servidor web indicando o resultado da requisição HTTP feita pelo cliente e são divididas em 5 categórias principais:
  **1XX - Informacional**
  **2XX - Sucesso**
  **3XX - Redirecionamento** 
  **4XX - Erro do Cliente**
  **5XX - Erro do Servidor**

### Aplicação Stateful
É o tipo de aplicação que mantém informações em memória sobre o estado das interações com os usuários ou outros sistemas durante varias sessões ou transações. Isso significa que o servidor deve lembrar de dados como login, progressos de alguma atividade, preferências ou dados temporários do usuário.

### Aplicação Stateless
Por outro lado, as aplicações do tipo Stateless não armazena informações sobre o estado do cliente entre diferentes requisições, e cada nova solicitação não depende de interações anteriores.



## Conceito de Streams em Node
São canais de comunicação pelo qual os dados fluem de forma contínua. O Stream permite processar parte dos dados ou "chucks", conforme eles vão sendo lidos ou escritos, economizando memória e acelerando o processamento.

### Tipos de Streams 
* Readable Stream: ler dados, como arquivos , entrada de rede ou qualquer outra fonte de dado.

* Writable Stream: escreve dados em um destino, como arquivos ou serviço de rede.

* Transform Stream: os dados podem ser modificados ou transformados durante a leitura ou gravação.

* Duplex Stream: representa um canal bidirecional, onde ler e escreve dados da mesma stream, enviam e recebem dados simultaneamente.

**Chunks** são pequenos pedaços de dados carregados aos poucos.
**Buffers** são blocos de memórias alocados para armazenar dados binários brutos temporariamente. São usados em linguagens como JS/Node para lidar com fluxos de dados (streams) e manipular informações que vêm de arquivos, redes e outros tipos de dispositivos.

OBS: o JS é originalmente projetado para lidar com strings e não dados binários, nesse caso os Buffers fornecem uma maneira de lidar com fluxos de dados binários.

# Banco de Dados
Criar e popular os dados em um arquivo físico **database.js**