# Diário de Bordo

PWA simples para registro individual de uso de veículo no celular. Não usa login, backend, servidor, Supabase, Firebase, banco online, OCR ou fotos. Os dados ficam no `localStorage` do navegador do aparelho.

## Funcionalidades

- Definições do motorista, unidade, gestor e veículo padrão
- Cadastro simples de veículos
- Registro de saída e chegada
- Validação de viagem aberta e quilometragem
- Registro de abastecimento
- Lista de viagens e abastecimentos por mês
- Resumo mensal
- Copiar resumo para WhatsApp
- Exportar CSV
- Exportar PDF no formato de diário de bordo mensal
- Exportar e importar backup JSON
- Aba Sobre com orientações de uso, instalação e cuidado com os dados locais

## Arquivos

- `index.html`: estrutura da aplicação
- `style.css`: layout responsivo e visual mobile
- `app.js`: regras, validações, armazenamento local e exportações
- `manifest.json`: configuração PWA
- `service-worker.js`: cache offline
- `icons/`: ícones básicos de instalação

## Como abrir no computador

Você pode abrir o arquivo `index.html` diretamente no navegador. O arquivo também contém CSS, JavaScript e logo embutidos para evitar tela quebrada quando for aberto como arquivo local.

Para testar melhor o PWA e o service worker, use um servidor local simples dentro desta pasta:

```bash
python -m http.server 8080
```

Depois acesse:

```text
http://localhost:8080
```

Observação: service workers funcionam em `localhost` ou em sites HTTPS. Abrir apenas com `file://` ou `content://`, como acontece ao abrir pelo WhatsApp, permite usar a tela, mas não testa corretamente instalação PWA/offline.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie estes arquivos para o repositório.
3. No GitHub, entre em `Settings > Pages`.
4. Em `Build and deployment`, selecione `Deploy from a branch`.
5. Escolha a branch principal e a pasta raiz do projeto.
6. Salve e aguarde o link público ser gerado.

## Como publicar no Netlify

1. Acesse o Netlify.
2. Crie um novo site.
3. Arraste a pasta do projeto para o deploy manual ou conecte o repositório GitHub.
4. Não é necessário comando de build.
5. Configure a pasta de publicação como a raiz do projeto.

## Como instalar no celular como PWA

1. Publique a aplicação em um endereço HTTPS, como GitHub Pages ou Netlify.
2. Acesse o link pelo navegador do celular.
3. No Android/Chrome, toque em `Adicionar à tela inicial` ou use o botão `Instalar`, quando aparecer.
4. No iPhone/Safari, toque em compartilhar e depois em `Adicionar à Tela de Início`.
5. Abra pelo ícone criado na tela inicial.

Após o primeiro acesso online, os arquivos principais ficam em cache para uso offline. Os registros continuam salvos apenas no navegador do aparelho, então use `Exportar backup` periodicamente.

