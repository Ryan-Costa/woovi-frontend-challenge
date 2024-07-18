# Woovi Frontend Challenge

Este projeto foi desenvolvido como parte do Woovi Frontend Challenge, utilizando React, TypeScript e Vite.

## Link do Desafio

https://woovi-frontend-ryan-dev.vercel.app/

## Instalação e uso

```bash
git clone https://github.com/Ryan-Costa/woovi-frontend-challenge.git
cd woovi-frontend-challenge
npm install
npm run dev
```

## Funcionalidades

Funcionalidades inseridas no projeto além do escopo inicial

- Modal de confirmação
- Tela para inserir valor
- Temporizador de pagamento
- Troca de idioma entre "pt" e "en"

## Tecnologias utilizadas

As seguintes tecnologias foram utilizadas no projeto:

- React
- Typescript
- Material UI
- React Router
- React Hook Form
- Zod
- Context API
- Eslint

## Tomada de Decisão

Durante o desenvolvimento do projeto, várias decisões de design e arquitetura foram tomadas ara garantir uma melhor experiência do usuário e uma manutenção mais fácil do código. Algumas dessas decisões estão detalhadas assim:

### Início com Valor Fornecido pelo Usuário

Optei por iniciar o fluxo do aplicativo solicitando que o usuário insira um valor. Esta decisão foi baseada na necessidade de capturar o dado vindo do usuário logo no início do processo, garantindo que todas as interações subsequentes sejam baseadas nesse valor inicial. Isso simplifica o fluxo de interação e torna a experiência do usuário mais intuitiva.

### Uso da Context API

Para gerenciar o estado global do aplicativo, decidi utilizar a Context API do React. Esta abordagem foi escolhida por ser leve e nativa do React, facilitando a gestão dos dados. Para este teste não achei necessário o uso de uma biblioteca externa de gerenciamento de estados, tendo em vista que a Context API supriria minha necessidade. 

Com ela eu salvo no estado global o valor digitado pelo usuário e faço o cálculo em cima de uma taxa fixa de 3% por parcela, também aplicando condicionais para aplicar juros e descontos escolhidos durante o desenvolvimento e seguindo o que foi entendido do design. 

Seguindo o fluxo, utilizo funções para atualização do estado do valor total, quantidade de parcelas, valor da parcela pix e o valor restante pago no cartão. Caso o usuário tenha selecionado pagamento único, ao copiar o QR Code abrirá um modal simulando o pagamento e finalizando o fluxo, caso tenha escolhido algum parcelamento, será debitado do valor total o pagamento via feito com Pix e o usuário será direcionado para o pagamento no cartão de crédito, onde será destinado o pagamento do restante do valor em uma vez ou em demais parcelas se preferir. Ao finalizar o preenchimento dos dados (sem validação para veracidade dos dados) ao selecionar as parcelas desejadas e clicar em pagar abrirá um modal informando a realização do pagamento no cartão.

### Armazenamento no Local Storage

Para persistir os dados e garantir que as informações do usuário não sejam perdidas ao recarregar a página, decidi armazenar valores no Local Storage. Isso permite que os dados persistam entre as sessões, proporcionando uma experiência mais contínua.

Valores salvos no Local Storage: 

- valor total (totalAmount)
- parcela selecionada (selectedInstallment)
- valor selecionado (selectedAmount)
- novo valor total (newTotalDebits)
- parcela do cartão de crédito (newInstallmentCardPayment)
- idioma selecionado (currentLanguage)

## Instruções de navegação

### Digite um valor -> Escolha uma parcela -> Confirme o valor -> Clique para copiar o QRCode -> Se houver valor restante (preencha o formulãrio e clique em pagar)

![image](https://github.com/user-attachments/assets/4ec821da-1e6b-4ed8-a426-5c9c88edec79) ![image](https://github.com/user-attachments/assets/e250d61c-da96-42f5-bb92-43792663f175) ![image](https://github.com/user-attachments/assets/d905e161-8268-4896-8eb7-ec4081c00a6d) ![image](https://github.com/user-attachments/assets/1835a223-1156-42bc-ac27-fda63fd347a5)


