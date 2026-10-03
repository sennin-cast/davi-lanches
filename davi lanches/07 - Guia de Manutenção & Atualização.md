---
title: Guia de Manutenção & Atualização - Davi Lanches
aliases:
  - Manual de Manutenção
  - Como Atualizar o Cardápio
  - Guia Prático de Alterações
tags:
  - projeto/davi-lanches
  - manutencao
  - guia
  - operacao
date: 2026-10-03
version: 1.0.0
---

# 🛠️ Guia de Manutenção & Atualização — Davi Lanches

> [!TIP] **Manutenção Simplificada**  
> Como o projeto não depende de banco de dados nem de servidores backend compilados, qualquer alteração pode ser realizada diretamente nos arquivos `.js` ou `.html` e entra em vigor imediatamente após salvar.

---

## 📞 1. Como Alterar o Número de WhatsApp de Atendimento

Se a hamburgueria mudar de chip ou contratar um número dedicado de WhatsApp Business:

1. Abra o arquivo [app.js](file:///c:/Users/evang/Documents/PROJETOS/DAVI%20LANCHES/app.js) na **linha 6**:
   ```javascript
   // Altere de 5521973112436 para o novo número (com 55 + DDD + 9 dígitos)
   const STORE_WHATSAPP = "5521973112436";
   ```
2. Abra o arquivo [index.html](file:///c:/Users/evang/Documents/PROJETOS/DAVI%20LANCHES/index.html) e atualize os links visíveis:
   - **Linha 37** (Top Bar): `<span><i class="fa-brands fa-whatsapp"></i> (21) 97311-2436</span>`
   - **Linha 54** (Header): `href="https://wa.me/5521973112436"`
   - **Linha 492 e 500** (Footer): Atualize o link e o texto visível.

---

## 🛵 2. Como Alterar o Valor do Frete Fixo

Caso haja reajuste na taxa de entrega do motoboy:

1. Em [app.js](file:///c:/Users/evang/Documents/PROJETOS/DAVI%20LANCHES/app.js) na **linha 9**:
   ```javascript
   // Exemplo: de R$ 5,00 para R$ 6,00
   const DELIVERY_FEE = 6.00;
   ```
2. No [index.html](file:///c:/Users/evang/Documents/PROJETOS/DAVI%20LANCHES/index.html), atualize os textos informativos:
   - Procure por `R$ 5,00` no topo, no hero e nas legendas do carrinho e substitua pelo novo valor.

---

## 🍔 3. Como Adicionar ou Alterar Produtos e Preços

Todos os itens do cardápio estão centralizados no array `PRODUCTS_DATA` em [app.js](file:///c:/Users/evang/Documents/PROJETOS/DAVI%20LANCHES/app.js).

### Para Alterar o Preço de um Item Existente:
Localize o produto pelo `id` ou pelo `name` e altere a propriedade `price`:
```javascript
{
  id: "s9",
  name: "X-Montanha",
  price: 16.00, // Preço atualizado
  category: "sanduiches",
  description: "Pão, 2 carnes, 2 queijos, cheddar, ovo, bacon, salada e molho especial.",
  image: "assets/images/x_montanha.jpg",
  badge: "Mais Pedido",
  badgeType: "mais-pedido"
}
```

### Para Cadastrar um Novo Sanduíche:
Basta adicionar um novo objeto ao array respeitando a estrutura:
```javascript
{
  id: "s12",                                    // Novo ID sequencial
  name: "X-Costela BBQ",                         // Nome do novo lanche
  price: 21.00,                                 // Preço em Reais
  category: "sanduiches",                       // Categoria: combos, sanduiches, batatas, bebidas
  description: "Pão brioche, hambúrguer de costela 160g, queijo prato, cebola caramelizada e molho barbecue.",
  image: "assets/images/x_costela.jpg",         // Foto salva em assets/images/
  badge: "Novidade",                            // Selo (opcional)
  badgeType: "promo"
}
```

---

## 🥓 4. Como Adicionar ou Modificar Adicionais Pagos

Os adicionais disponíveis no modal de customização ficam declarados em [index.html](file:///c:/Users/evang/Documents/PROJETOS/DAVI%20LANCHES/index.html) na seção `#customization-modal-overlay`:

```html
<label class="checkbox-item">
  <div class="checkbox-left">
    <!-- O valor em data-price é lido dinamicamente pelo JavaScript -->
    <input type="checkbox" name="addon" value="Catupiry Original" data-price="3.00">
    <span>Catupiry Original Cremoso</span>
  </div>
  <span class="addon-price">+ R$ 3,00</span>
</label>
```

> [!IMPORTANT]
> O atributo `data-price="3.00"` define o cálculo exato que o JavaScript realiza. Certifique-se de que o texto exibido no `<span>` coincida com o número no `data-price`.

---

## 📸 5. Como Adicionar Novas Fotos de Produtos

1. Otimize a imagem para formato `.jpg` ou `.webp` (resolução recomendada: `800x800` pixels, peso abaixo de 200KB).
2. Salve o arquivo na pasta `assets/images/`.
3. Aponte o caminho relativo na propriedade `image` em `PRODUCTS_DATA` (ex: `"assets/images/nome_da_foto.jpg"`).

---

## 🌐 6. Como Publicar o Site na Internet (Hospedagem Gratuita)

Por ser uma aplicação 100% cliente estática, ela pode ser hospedada com custo zero e certificado SSL HTTPS gratuito em minutos:

| Provedor | Método de Deploy | Vantagem |
|---|---|---|
| **Vercel** | Arraste a pasta ou conecte ao repositório GitHub | CDN ultrarrápida no Brasil e deploy contínuo |
| **Netlify** | *Drag & Drop* da pasta `DAVI LANCHES` no painel | Fácil configuração de domínio próprio |
| **GitHub Pages** | Ative nas configurações do repositório (`Settings > Pages`) | Totalmente integrado com controle de versão |
| **Cloudflare Pages** | Conecte ao GitHub | Proteção DDoS e latência mínima |

---

## 🔗 Navegação Entre Notas
- Anterior: [[06 - Estrutura de Código & Componentes]]
- Próxima Nota: [[08 - Regras de Negócio & Políticas]]
- Mapa Geral: [[00 - MOC (Map of Content) - Davi Lanches]]
- Catálogo: [[04 - Catálogo de Produtos & Precificação]]
