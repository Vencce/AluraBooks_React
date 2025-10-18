# 📚 AluraBooks (Versão React)

Uma recriação moderna e componentizada da vitrine de livros AluraBooks, desenvolvida inteiramente com React. Este projeto consome uma API para exibir, filtrar e pesquisar livros de programação, aplicando conceitos modernos do ecossistema React para criar uma experiência de usuário fluida e reativa.

## ✨ Funcionalidades

-   **Componentização com React:** A interface foi dividida em componentes reutilizáveis (`Header`, `Pesquisa`, `UltimosLancamentos`), facilitando a manutenção e a escalabilidade.
-   **Busca de Livros:** Campo de pesquisa interativo que filtra os livros dinamicamente conforme o usuário digita.
-   **Estilização com Styled Components:** O CSS foi escrito de forma "escopada" para cada componente, evitando conflitos de estilo e tornando o código mais organizado.
-   **Consumo de API:** Utiliza o `axios` para fazer requisições assíncronas a um endpoint JSON e buscar os dados dos livros.

## 🛠️ Tecnologias e Conceitos Aplicados

Este projeto foi uma oportunidade para praticar e demonstrar habilidades no ecossistema React, incluindo:

-   **React:** Biblioteca principal para a construção da interface de usuário.
-   **Styled Components:** Utilizado para a estilização CSS-in-JS, permitindo criar componentes com seus próprios estilos de forma isolada.
-   **Hooks do React:** Uso de `useState` para gerenciar o estado dos componentes, como a lista de livros e o termo de busca.
-   **Requisições HTTP:** Biblioteca `axios` para consumir a API externa de livros de forma assíncrona.
-   **Estrutura de Projeto:** Organização do código em pastas lógicas (`components`, `routes`, `services`) para uma melhor manutenibilidade.

## 🚀 Como Executar o Projeto Localmente

Para rodar este projeto na sua máquina, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Vencce/AluraBooks_React.git](https://github.com/Vencce/AluraBooks_React.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd AluraBooks_React
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```
    *(ou `yarn install` se preferir)*

4.  **Inicie a aplicação:**
    ```bash
    npm start
    ```
    *(ou `yarn start`)*

5.  **Acesse no navegador:**
    Abra seu navegador e acesse `http://localhost:3000`.

---

Este projeto é uma evolução do [AluraBooks em JavaScript puro](link-para-o-outro-repositorio-se-quiser), agora aplicando as melhores práticas do desenvolvimento com React. Desenvolvido por [Vitor Ferreira](https://github.com/Vencce).
