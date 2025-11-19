# ANIMALEC - Gestão de Especialistas e Patrocinadores

Este projeto (Tarefa 31b) consiste numa aplicação web para a gestão de especialistas e patrocinadores no contexto da "ANIMALEC". Permite visualizar, adicionar, editar e remover registos através de uma interface responsiva.

🔗 **Link do Repositório:** [https://github.com/FilRamos/Tarefa31b](https://github.com/FilRamos/Tarefa31b)

## 📂 Design e Prototipagem

Os wireframes e o protótipo visual do projeto encontram-se localizados na seguinte diretoria:

`HTML5\wireframe_mockup`

## 🛠️ Tecnologias Utilizadas

* **HTML5 / CSS3**
* **Bootstrap 4.5** (Layout e Responsividade)
* **FontAwesome 5** (Ícones)
* **JavaScript / jQuery** (Lógica de interação e manipulação do DOM)

## ⚙️ Detalhes de Implementação

### Reutilização de Código (Adicionar vs. Editar)
Foi implementada uma lógica para reutilizar o mesmo ficheiro HTML para duas funções distintas: **Criar** e **Editar** registos.

A distinção é feita através da análise dos parâmetros do URL (Query Strings):

1.  **Modo Editar:** Se a URL contiver parâmetros (ex: `?id=1&nome=...`), a página preenche automaticamente os campos do formulário e o botão de ação indica "Editar/Guardar".
2.  **Modo Adicionar:** Caso **não** existam parâmetros na URL, a página assume que é um novo registo. O formulário aparece vazio e o botão de ação indica "Adicionar".

As mensagens de feedback ao utilizador (alertas e títulos) são personalizadas dinamicamente tendo esta condição em conta.

---
*Última atualização: 19 de novembro de 2025*
