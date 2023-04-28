# Trakto_edu

Desafio de código Trakto front-end.
Trata-se de uma aplicação para gestão de designs da plataforma Trakto, focada no uso por instrutores da plataforma.
<br>
<br>

### Tecnologias utilizadas:
O projeto é desenvolvido em:
<br>
- [Angular12](https://angular.io/)

- [Material Design12](https://material.angular.io/)
<br>
<br>


## **Pré-requisitos:**

1. VsCode (ou qualquer outro editor de código)

2. NodeJs
[Instalar nodeJs](https://nodejs.org/en)
ou
`node --version` (verifica a versão instalada)


- VsCode (ou qualquer outro editor de código)

- Angular CLI
``
npm install -g @angular/cli@14.0.0
``
<br>

### Instalação

1. Clone o repositório

```bash
  git clone git@github.com:GiovannaBeathryce/trakto_edu.git
```

2. Instale as dependências

 `npm install` ou `yarn`

3. Abra o código em seu editor e verifique com o comando ` ls `   verifique se está dentro da pasta ` trakto_edu ` 
, caso não eteja, digite o comando ` cd trakto_edu ` para move-lo até a raiz do projeto.

4. ja dentro do projeto, com os requisitos instalados, rode o comando
```bash
  ng serve --o
```
 Isso fará com que sua aplicação seja iniciada, e abra automaticamente em uma janela do seu navehador.

<br>
<br>

## **Navegação**
- /login : O login é obrigatório para navegação entre as paginas principais.
- /home : O acesso à essa rota é livre para qualquer usuário, *porém sem login registrado* apenas o ícone do YouTube possui funcionalidade.
- /material_didatico : É uma página protegida e requer autenticação por intermédio do login
- /ver_todos : É responsável pela listagem de todos os designs editados. Também e uma rota privada.

<br>
<br>

> Cóigo em desenvolvimento

