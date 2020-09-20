MARVEL-API CHALLENGE
====================

Descrição:
----------
O desafio foi escrito em Typescript, com restify e mongoose, portanto, utilizando como apoio o MongoDB. 


Requisitos:
-----------
- NodeJS (Última versão estável)
- MongoDB (Última versão estável)

Instalação:
-----------
Demais dependências são resolvidas com o comando "npm install" na pasta raiz da api,
pois módulos adicionais e versões estão descritas nos arquivos package*.json

O MongoDB deve estar rodando em localhost porta default (27017)
No MongoDB é necessário a criação de um db chamado "marvel-universe" e uma collection chamada "characters".

**** Obs.: o mongooseSchema utilizado está com a opção AutoCreate: true, portanto ao executar a API pela primeira vez, tanto
o db quanto a coleção devem ser criados.  ****

Uma vez criados o db e a collection, é necessário importar o arquivo JSON "./characters/char.json" para que a API tenha massa
de dados para uso e teste. Utilizei o NoSQLBoost For MongoDB para esse processo, porém pode ser utilizado qualquer ferramenta 
que permita o import dos dados.

Para compilar a API é necessário utilizat o app 'tsc'.

Execução
--------

Uma vez com o MongoDB instalado e configurado, código fonte compilado na pasta "dist" para executar o servidor é necessário
utilizar o comando "node ./dist/main.js". Com isso o servidor subirá em localhost:3000.

Utilização
----------
Para uso e testes manuais utilizei o navegador chrome, com extensão API Tester.
Para testes automatizados foi criada uma suite com jest e supertest que pode ser executada com "npm test"



