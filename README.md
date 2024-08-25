# Consultor de CPF e Status de Pagamentos

Este projeto consiste em uma solução completa para a consulta e automação de verificação de status de pagamentos. Ele é dividido em duas partes principais: uma interface web para consulta de CPF e um script em Python para automação dessas consultas.

## Estrutura do Projeto

/consultor-de-cpf-e-status-de-pagamentos/
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── backend/
│   ├── consulta_pagamentos.py
│   └── dados_clientes.xlsx
└── README.md


### Frontend

O frontend é um site desenvolvido com HTML, CSS e JavaScript que permite a consulta instantânea do status de pagamentos. Basta inserir o CPF, e o sistema mostra se o pagamento está em dia, indicando a data de pagamento realizada, ou se está atrasado, exibindo o método de pagamento utilizado.

#### Funcionalidades

- Consulta de status de pagamentos
- Exibição da data de pagamento realizada se o pagamento estiver em dia
- Exibição do método de pagamento utilizado se o pagamento estiver atrasado

#### Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

#### Uso

1. Abra o arquivo `index.html` em seu navegador.
2. Insira o CPF no campo de consulta e clique no botão para verificar o status do pagamento.

### Backend

O backend consiste em um script em Python que utiliza as bibliotecas openpyxl e selenium para automatizar a consulta de status de pagamentos no site do Consultor de Pagamentos.

#### Funcionalidades

- Inserção automática de CPFs dos clientes a partir de uma planilha de dados.
- Consulta de status de pagamentos.
- Atualização das informações de pagamento na planilha de fechamento.

#### Requisitos

- Python 3.x
- Bibliotecas openpyxl e selenium

#### Instalação

1. Clone este repositório:

    ```bash
    git clone https://github.com/seu-usuario/consultor-de-cpf-e-status-de-pagamentos.git
    ```

2. Instale as dependências:

    ```bash
    pip install -r backend/requirements.txt
    ```

#### Uso

1. Prepare a planilha de dados `dados_clientes.xlsx` com os CPFs dos clientes.
2. Navegue até o diretório `backend` e execute o script de automação:

    ```bash
    python consulta_pagamentos.py
    ```

O script abrirá o navegador, realizará as consultas de pagamento e atualizará a planilha de fechamento automaticamente.

### Integração

O frontend e o backend podem ser utilizados em conjunto para uma solução completa de verificação e monitoramento de pagamentos.
