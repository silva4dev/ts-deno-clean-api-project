# Plant Catalog
Um aplicativo que permite aos usuários explorar um catálogo de plantas, exibindo informações sobre diferentes tipos de plantas.

## RF (Requisitos funcionais)

- [ ] Deve ser possível se autenticar na plataforma;
- [ ] Deve ser possível se cadastrar na plataforma;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível adicionar uma nova planta ao catálogo;
- [ ] Deve ser possível listar todas as plantas no catálogo;
- [ ] Deve ser possível pesquisar plantas por nome, tipo ou características;
- [ ] Deve ser possível exibir detalhes de uma planta selecionada;

## RN (Regras de negócio)
- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] A planta só pode ser cadastrada por administradores;

## RNF (Requisitos não funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco MongoDB;
- [ ] Todas listas de dados precisam estar paginadas com 50 itens por página;
- [ ] O usuário deve ser identificado por um JWT (Json Web Token);


