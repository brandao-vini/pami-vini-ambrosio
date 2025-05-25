# 📚 Aulas de Programação de Aplicativo Móvel I com o Professor João Siles

  

---

  

## 🚀 Configurando o Git no Seu Computador

  

1.  **Acesse o Site do Git**: [https://git-scm.com/](https://git-scm.com/).

2.  **Instale o Software**: Marque as opções de 'Git Desktop Icon' ou 'Add on Windows Terminal'.

  

3.  **Abra o Git Bash**:

- Clique com o botão direito em qualquer pasta e escolha 'Mostrar mais opções' > 'Git Bash Here'.

- Verifique se o nome da pasta está destacado em amarelo no terminal 📁.

  

4.  **Configure o Git**:

- Use os comandos abaixo para cadastrar suas credenciais:

```bash

git config --global user.name "Vinicius Brandão"



depois


git config --global user.email vnbrandaoambrosio@gmail.com

```

-  **Importante**: Substitua "seu-nome" e "seu-email@example.com" pelos seus dados 📝.

- Verifique a configuração com:

```bash

git config --list

```

  

5.  **Clone o Repositório**:

- No seu repositório, clique no botão verde 'Code' e copie o endereço HTTP 📝.

- No terminal, use:

```bash

git clone https://github.com/kleberbrilhante/pami-kleber-brilhante.git

```

  

6.  **Verifique o Clone**:

- Use `ls` para listar as pastas e verificar se o repositório foi baixado 📁.

  

7.  **Acesse a Pasta**:

- Use `cd nome-da-pasta` para entrar na pasta do repositório (pressione TAB para auto-completar) 📂.

  

---

  

## 🗂️ Comandos Úteis para Navegar nas Pastas

  

-  **Acessar Pasta**: `cd nome-da-pasta`

-  **Voltar uma Pasta**: `cd ..`

-  **Listar Pastas**: `ls`, `dir`, ou `ll`

-  **Limpar o Terminal**: `clear` (como o Cristiano Ronaldo 🏆)

  

---

  

## 📊 Abrindo com o VSCode

  

1.  **Instale o VSCode**: [https://code.visualstudio.com/download](https://code.visualstudio.com/download).

2.  **Abra com VSCode**: Use o comando `code .` no terminal.

3.  **Personalize o VSCode**: Instale extensões para melhorar sua experiência 🎨.

4.  **Dicas do VSCode**:

-  `Ctrl + S` para salvar (uma bolinha na aba quando não está salvo, e um M quando está) 💾.

  

---

  

## 🚀 Enviando Alterações para o GitHub

  

1.  **Verifique o Status**: Use `git status` para monitorar as atividades 📊.

2.  **Adicione Arquivos**:

-  `git add nome-do-arquivo` para adicionar um arquivo específico.

-  `git add .` para adicionar todos os arquivos 📁.

3.  **Retire Arquivos**:

-  `git restore --staged nome-do-arquivo` para remover um arquivo.

-  `git restore --staged .` para remover todos os arquivos 🚫.

4.  **Faça um Commit**:

- Use `git commit -m "mensagem"` para comentar suas alterações.

- Exemplo: "Cria um botão na página inicial" (na terceira pessoa) 📝.

5.  **Envie para o GitHub**:

- Use `git push` e siga as instruções.

- Clique no botão azul 'sign in' e autorize as permissões 🔒.

- Atualize o navegador para verificar se as alterações foram enviadas 🔄.
