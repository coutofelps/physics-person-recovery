# Projeto Single-SPA

Este repositório contém um projeto de aplicação front-end modular utilizando o framework [single-spa](https://single-spa.js.org/). O single-spa permite a construção de micro frontends que podem ser desenvolvidos e implantados de forma independente, mas funcionam juntos como uma única aplicação.

## Visão Geral

Este projeto é composto por vários micro frontends:

- `root`: Configuração principal do single-spa que define como os diferentes micro frontends são carregados e integrados.
- `super-app`: Micro frontend utilizando Angular.
- `my-renegotiations`: Micro frontend utilizando Angular.
- `new-negotiations`: Micro frontend utilizando React.

## Vantagens e Desvantagens do single-spa

### Vantagens

1. **Modularidade**:
   - **Isolamento de Falhas**: Cada micro frontend funciona de forma independente, o que significa que um problema em um deles não necessariamente afetará os outros.
   - **Autonomia das Equipes**: As equipes de desenvolvimento podem trabalhar de maneira autônoma em diferentes partes da aplicação, permitindo maior produtividade e eficiência.

2. **Tecnologia Independente**:
   - **Flexibilidade de Tecnologias**: Permite o uso de diferentes frameworks (como React, Angular, Vue.js, etc.) em diferentes partes da aplicação. Isso facilita a integração de novas tecnologias sem a necessidade de reescrever toda a aplicação.

3. **Deploy Independente**:
   - **Deploy Individual**: Cada micro frontend pode ser implantado de forma independente, reduzindo o tempo de lançamento e facilitando a gestão de versões e atualizações.

4. **Manutenção e Escalabilidade**:
   - **Fácil Manutenção**: Como cada parte da aplicação é modular, a manutenção torna-se mais simples e focada.
   - **Escalabilidade**: Permite escalar partes da aplicação de acordo com a necessidade, seja em termos de desenvolvimento ou infraestrutura.

5. **Incremental Adoption**:
   - **Adoção Incremental**: É possível adotar single-spa de maneira incremental, começando por migrar partes específicas da aplicação sem precisar reescrever tudo de uma vez.

### Desvantagens

1. **Complexidade Inicial**:
   - **Curva de Aprendizado**: A configuração inicial pode ser complexa e a curva de aprendizado pode ser íngreme, especialmente para equipes não familiarizadas com o conceito de micro frontends.
   - **Configuração e Integração**: Integrar diferentes frameworks e configurar a aplicação para funcionar como um todo pode ser desafiador e exigir conhecimento especializado.

2. **Performance**:
   - **Sobrecarga de Recursos**: O carregamento de múltiplos frameworks pode levar a um aumento no tamanho do bundle e no tempo de carregamento inicial, impactando a performance.
   - **Gerenciamento de Estados e Comunicação**: A comunicação entre diferentes micro frontends pode ser complexa e, se não for bem gerida, pode levar a problemas de performance e sincronização de estados.

3. **Integração e Testes**:
   - **Integração Contínua**: Garantir que todas as partes da aplicação funcionem bem juntas pode ser desafiador, especialmente com atualizações contínuas e deploys independentes.
   - **Testes**: Testar uma aplicação composta por múltiplos micro frontends pode ser mais complexo e exigir uma estratégia de testes bem definida.

4. **Consistência Visual e de Usabilidade**:
   - **Design Consistente**: Manter uma consistência de design e experiência do usuário pode ser difícil, uma vez que diferentes partes da aplicação podem ser desenvolvidas por equipes diferentes usando tecnologias diversas.

5. **Sobrecarga Administrativa**:
   - **Gestão de Dependências**: Gerenciar dependências e versões de bibliotecas pode ser mais complicado em um ambiente de micro frontends.

## Requisitos

- Node.js (>= 14.x)
- npm (>= 6.x) ou yarn (>= 1.x)

## Instalação

### Passo 1: Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### Passo 2: Instale as dependências

Usando npm:

```bash
cd root
npm install

cd ../super-app
npm install

cd ../my-renegotiations
npm install

cd ../new-negotiations
npm install
```

Usando yarn:

```bash
cd root
yarn install

cd ../super-app
yarn install

cd ../my-renegotiations
yarn install

cd ../new-negotiations
yarn install
```

## Desenvolvimento

### Passo 1: Inicie o servidor de desenvolvimento do root

```bash
cd root
npm start
# ou
yarn start
```

### Passo 2: Inicie os servidores de desenvolvimento dos micro frontends

Em terminais separados, execute:

```bash
cd ../root
ng s --project root --disable-host-check --port 8081 --li
```

```bash
cd ../my-renegotiations
ng s --project my-renegotiations --disable-host-check --port 8081 --li
```

```bash
cd ../new-renegotiations
npm start
```

### Passo 3: Acesse a aplicação
Abra seu navegador e vá para http://localhost:9000. A aplicação estará rodando com os diferentes micro frontends integrados.

## Desenvolvimento
Se você deseja contribuir com este projeto, por favor siga as diretrizes de contribuição e sinta-se à vontade para abrir issues e pull requests.