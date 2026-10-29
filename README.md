# AURA Mobile — Landing page para loja de iPhones

Primeira versão conceitual para personalização posterior. Desenvolvida em **React + Vite + CSS**, sem necessidade de créditos do Lovable para editar o código no GitHub.

## Iniciar localmente
```bash
npm install
npm run dev
```

## Personalizar
- Nome da loja: alterar a marca `AURA` em `src/App.jsx`.
- WhatsApp: preencher a constante `WHATSAPP_NUMBER` no topo de `src/App.jsx` com DDI e DDD (ex.: 5517XXXXXXXXX). Sem número configurado, o formulário permite copiar a mensagem para contato.
- Produtos: itens ilustrativos, **sem preços nem disponibilidade confirmada**. Editar o array `products` em `src/App.jsx`.
- Animação: ilustração conceitual 3D feita em CSS, **não representa produto Apple anunciado**.
- Sem backend e sem publicação automática.

## Funcionalidades
Animação de abertura do dispositivo conceitual, navegação responsiva, coleção de modelos, cards interativos, perguntas frequentes, formulário de interesse com cópia de mensagem e botão para WhatsApp configurável, efeitos de entrada e suporte a movimento reduzido.
