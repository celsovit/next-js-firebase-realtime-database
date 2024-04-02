# CRUD com Next.js 14 e Firebase 10

Projeto criado com base no tutorial do canal The Amazing Codeverse (Youtube):

[Create, Read, Update, Delete (CRUD) | Firebase 10 | React 18 (Next.js)](https://youtu.be/ZgXPqzU4F7M)

## Criação do projeto

```bash
$ npx create-next-app firebase_using_hooks
```

### Questions:

- ✔ Would you like to use TypeScript? … `No`
- ✔ Would you like to use ESLint? … `No`
- ✔ Would you like to use Tailwind CSS? … `No`
- ✔ Would you like to use `src/` directory? … `Yes`
- ✔ Would you like to use App Router? (recommended) … `Yes`
- ✔ Would you like to customize the default import alias (@/*)? … `No`

## Instalação da biblioteca Firebase

```bash
$ npm install firebase
```

## Inicializar servidor desenvolvimento

```bash
$ npm run dev
```

## Criação do projeto no Firebase

- [Acesse Google Firebase](https://firebase.google.com)

- Nome do projeto: `firebasewithhooks`

- Google Analytics: `desativado`

- Crie o projeto, e após, clique em continuar

- No menu lateral, expanda Criação

    - selecione `Realtime Database`
    - Crie um banco de dados
    - Local Realtime Database: `EUA (us-central1)`
    - Selecione: `iniciar no modo teste`
    - Clique para Ativar

- No menu lateral, selecione Visão geral do projeto

    - Clique no ícone "</>" de Aplicativo Web
    - Apelido do app: `firebasehooks`
    - Clique no botão `Continuar no console`

- No menu lateral, clique no ícone (⚙️) da Visão geral do projeto

    - Selecione `Configurações do projeto`
    - Com base no código apresentado no navegador, crie os arquivos `.env.local` e `FirebaseConfig.js` no VS Code conforme segue:
        - [FirebaseConfig.js](./src/app/components/FirebaseConfig/FirebaseConfig.js)
        - [.env.local](./env.local.model)

E então, prossiga com a codificação das demais funcionalidades da aplicação, conforme explicado no vídeo tutorial.
- [Instante do vídeo tutorial em que as demais configurações são definidas](https://youtu.be/ZgXPqzU4F7M?t=382)
