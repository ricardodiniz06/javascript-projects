# Gerenciador de Tarefas com React, Redux e Autenticação

Este é um **Gerenciador de Tarefas** desenvolvido com **React**, utilizando **Redux** para gerenciamento de estado, persistência de dados com **Local Storage**, e autenticação básica com **Context API**. A aplicação implementa **filtros** para visualizar tarefas concluídas e não concluídas, além de otimizações de performance com **lazy loading** e **code-splitting**.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Instalação e Execução](#instalação-e-execução)
- [Uso](#uso)
- [Otimizações de Performance](#otimizações-de-performance)
- [Melhorias Futuras](#melhorias-futuras)

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Material-UI](https://mui.com/)
- [React Router](https://reactrouter.com/) (opcional para rotas futuras)
- [Context API](https://reactjs.org/docs/context.html)
- [React Lazy e Suspense](https://reactjs.org/docs/code-splitting.html)
- [Local Storage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)

## Funcionalidades

- **Gerenciamento de Tarefas**: Adicionar, marcar como concluída, remover e listar tarefas.
- **Filtros**: Exibir todas as tarefas, somente as concluídas ou as não concluídas.
- **Autenticação Simples**: Login com credenciais pré-definidas (usuário: `admin`, senha: `password`).
- **Persistência de Dados**: As tarefas são salvas no Local Storage, para que não sejam perdidas ao recarregar a página.
- **Otimizações de Performance**: Lazy loading e code-splitting para carregar componentes dinamicamente, melhorando o tempo de carregamento.

## Instalação e Execução

Siga as etapas abaixo para instalar e executar a aplicação localmente.

### Pré-requisitos

- Node.js e npm instalados. (Baixe em: https://nodejs.org/)

### 1. Utilização
- Ao iniciar a aplicação, você será solicitado a fazer login. Use as seguintes credenciais:

- Usuário: **admin**
- Senha: **password**

### 2. Gerenciamento de Tarefas
Após o login, você pode:

- Adicionar uma nova tarefa no campo de texto.
- Marcar uma tarefa como concluída clicando no checkbox ao lado da tarefa.
- Remover uma tarefa clicando no ícone de lixeira ao lado da tarefa.
- Filtrar tarefas usando os botões de filtro (Todas, Concluídas, Não Concluídas).

### 3. Persistência de Dados
- As tarefas adicionadas serão armazenadas no Local Storage, então mesmo após recarregar a página, as tarefas estarão lá.

### Otimizações de Performance
- Esta aplicação utiliza React.lazy e Suspense para implementar code-splitting, carregando componentes de forma dinâmica conforme o usuário interage com a aplicação. Isso resulta em uma experiência mais rápida e eficiente, especialmente em dispositivos com recursos limitados.

### Melhorias Futuras
- **Autenticação Completa:** Integrar a autenticação com um backend, usando tokens JWT para maior segurança.
- **Rotas Protegidas:** Implementar o React Router para gerenciar rotas de forma mais robusta e proteger áreas da aplicação.
- **Testes:** Adicionar testes unitários e de integração com Jest e React Testing Library.
- **Notificações:** Implementar notificações para confirmação de ações, como quando uma tarefa for removida ou concluída.
