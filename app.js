/* ==========================================================================
   DAVI LANCHES HAMBURGUERIA - MAIN APPLICATION LOGIC
   ========================================================================== */

// Store Phone Number for WhatsApp Orders
const STORE_WHATSAPP = "5521973112436";

// Taxa fixa de entrega (Frete Fixo R$ 5,00 para qualquer pedido)
const DELIVERY_FEE = 5.00;

// Complete Products Database
const PRODUCTS_DATA = [
  // --- COMBOS PROMOCIONAIS ---
  {
    id: "c1",
    name: "Combo 01",
    price: 36.99,
    category: "combos",
    description: "4 X-Burguer + Batata Frita G + Refrigerante 2L",
    image: "assets/images/combo_01.jpg",
    badge: "Economia",
    badgeType: "promo",
    comboBurgers: ["1º X-Burguer", "2º X-Burguer", "3º X-Burguer", "4º X-Burguer"]
  },
  {
    id: "c2",
    name: "Combo 02",
    price: 29.99,
    category: "combos",
    description: "2 X-Tudo + 2 Batatas Fritas P",
    image: "assets/images/combo_02.jpg",
    badge: "Top Vendas",
    badgeType: "promo",
    comboBurgers: ["1º X-Tudo", "2º X-Tudo"]
  },
  {
    id: "c3",
    name: "Combo 03",
    price: 19.99,
    category: "combos",
    description: "1 X-Tudo + 1 Batata Frita P + 1 Guaravita",
    image: "assets/images/combo_03.jpg",
    badge: "Individual",
    badgeType: "promo",
    comboBurgers: ["X-Tudo"]
  },
  {
    id: "c4",
    name: "Combo 04",
    price: 59.99,
    category: "combos",
    description: "4 X-Tudo + Batata Frita G + Coca-Cola 2L",
    image: "assets/images/combo_04.jpg",
    badge: "Família",
    badgeType: "promo",
    comboBurgers: ["1º X-Tudo", "2º X-Tudo", "3º X-Tudo", "4º X-Tudo"]
  },
  {
    id: "c5",
    name: "Combo 05 - Combo Montanha",
    price: 40.00,
    category: "combos",
    description: "3 X-Montanha (O Mais Pedido da Galera!)",
    image: "assets/images/combo_montanha.jpg",
    badge: "Mais Pedido",
    badgeType: "mais-pedido",
    comboBurgers: ["1º X-Montanha", "2º X-Montanha", "3º X-Montanha"]
  },
  {
    id: "c6",
    name: "Combo 06",
    price: 42.00,
    category: "combos",
    description: "3 X-Tudo + Batata M + Refri 2L",
    image: "assets/images/combo_06.jpg",
    badge: "Promoção",
    badgeType: "promo",
    comboBurgers: ["1º X-Tudo", "2º X-Tudo", "3º X-Tudo"]
  },
  {
    id: "c7",
    name: "Combo 07",
    price: 45.00,
    category: "combos",
    description: "5 X-Duplo",
    image: "assets/images/x_duplo.jpg",
    badge: "Super Fome",
    badgeType: "promo",
    comboBurgers: ["1º X-Duplo", "2º X-Duplo", "3º X-Duplo", "4º X-Duplo", "5º X-Duplo"]
  },
  {
    id: "c8",
    name: "Combo 08",
    price: 22.00,
    category: "combos",
    description: "X-Montanha + Batata P + Guaracamp",
    image: "assets/images/combo_montanha.jpg",
    badge: "Combo Individual",
    badgeType: "promo",
    comboBurgers: ["X-Montanha"]
  },
  {
    id: "c9",
    name: "Combo 09",
    price: 18.00,
    category: "combos",
    description: "X-Calabresa + Batata P + Guaracamp",
    image: "assets/images/x_tudo.jpg",
    badge: "Especial",
    badgeType: "promo",
    comboBurgers: ["X-Calabresa"]
  },
  {
    id: "c10",
    name: "Combo 10",
    price: 40.00,
    category: "combos",
    description: "2 X-Montanha + 2 Batatas P",
    image: "assets/images/combo_montanha.jpg",
    badge: "Dupla",
    badgeType: "promo",
    comboBurgers: ["1º X-Montanha", "2º X-Montanha"]
  },

  // --- SANDUÍCHES ---
  {
    id: "s1",
    name: "X-Burguer",
    price: 8.00,
    category: "sanduiches",
    description: "Pão, carne, queijo cheddar, salada e molho especial.",
    image: "assets/images/x_tudo.jpg"
  },
  {
    id: "s2",
    name: "Egg-Burguer",
    price: 10.00,
    category: "sanduiches",
    description: "Pão, carne, queijo cheddar, ovo frito na chapa, salada e molho especial.",
    image: "assets/images/egg_burguer.jpg"
  },
  {
    id: "s3",
    name: "X-Bacon",
    price: 12.00,
    category: "sanduiches",
    description: "Pão, carne, queijo cheddar, bacon crocante, salada e molho especial.",
    image: "assets/images/x_bacon_novo.jpg"
  },
  {
    id: "s4",
    name: "X-Calabresa",
    price: 13.00,
    category: "sanduiches",
    description: "Pão, carne, queijo cheddar, calabresa fatiada na chapa, salada e molho especial.",
    image: "assets/images/x_tudo.jpg"
  },
  {
    id: "s5",
    name: "X-Tudo",
    price: 13.00,
    category: "sanduiches",
    description: "Pão, carne, queijo cheddar, presunto, ovo, bacon, calabresa, salada e molho especial.",
    image: "assets/images/x_tudo.jpg"
  },
  {
    id: "s6",
    name: "X-Duplo",
    price: 13.00,
    category: "sanduiches",
    description: "Pão, 2 carnes, 2 queijos cheddar, salada e molho especial.",
    image: "assets/images/x_duplo.jpg"
  },
  {
    id: "s7",
    name: "Duplo Cheddar",
    price: 13.00,
    category: "sanduiches",
    description: "Pão, 2 carnes, 2 queijos, 2 cheddar cremoso, salada e molho especial.",
    image: "assets/images/x_duplo.jpg"
  },
  {
    id: "s8",
    name: "Duplo Bacon",
    price: 14.00,
    category: "sanduiches",
    description: "Pão, 2 carnes, 2 queijos cheddar, bacon crocante, salada e molho especial.",
    image: "assets/images/x_bacon_novo.jpg"
  },
  {
    id: "s9",
    name: "X-Montanha",
    price: 15.00,
    category: "sanduiches",
    description: "Pão, 2 carnes, 2 queijos, cheddar, ovo, bacon, salada e molho especial.",
    image: "assets/images/combo_montanha.jpg",
    badge: "Mais Pedido",
    badgeType: "mais-pedido"
  },
  {
    id: "s10",
    name: "Sandubão",
    price: 18.00,
    category: "sanduiches",
    description: "Pão, 2 carnes, 2 queijos, 2 cheddar, 2 ovos, 2 presuntos, bacon, salada e molho especial.",
    image: "assets/images/x_delirio.jpg"
  },
  {
    id: "s11",
    name: "X-Delírio",
    price: 19.00,
    category: "sanduiches",
    description: "Pão, 3 carnes, 3 queijos, 2 ovos, bacon crocante, salada e molho especial.",
    image: "assets/images/x_delirio.jpg"
  },

  // --- BATATAS FRITAS ---
  {
    id: "b1",
    name: "Batata Frita P",
    price: 7.00,
    category: "batatas",
    description: "Porção de batatas fritas crocantes tamanho pequeno.",
    image: "assets/images/batata_frita.jpg"
  },
  {
    id: "b2",
    name: "Batata Frita M",
    price: 10.00,
    category: "batatas",
    description: "Porção de batatas fritas crocantes tamanho médio.",
    image: "assets/images/batata_frita.jpg"
  },
  {
    id: "b3",
    name: "Batata Frita G",
    price: 18.00,
    category: "batatas",
    description: "Porção generosa de batatas fritas crocantes tamanho grande.",
    image: "assets/images/batata_frita.jpg"
  },

  // --- BEBIDAS ---
  {
    id: "d1",
    name: "Guaracamp Copo",
    price: 3.50,
    category: "bebidas",
    description: "Copo de Guaracamp 285ml bem gelado.",
    image: "assets/images/guaracamp.jpg"
  },
  {
    id: "d2",
    name: "Refrigerante Lata 350ml",
    price: 6.00,
    category: "bebidas",
    description: "Coca-Cola, Guaraná Antarctica, Fanta ou Sprite.",
    image: "assets/images/refrigerantes.jpg"
  },
  {
    id: "d3",
    name: "Coca-Cola 2L",
    price: 14.00,
    category: "bebidas",
    description: "Garrafa de Coca-Cola 2 Litros para compartilhar.",
    image: "assets/images/cocacola_2l.jpg"
  }
];

// App State Management
let currentCategory = "todos";
let searchQuery = "";
let cart = JSON.parse(localStorage.getItem("davi_lanches_cart")) || [];
let activeModalProduct = null;
let modalQuantity = 1;
let deliveryType = "delivery"; // 'delivery' or 'pickup'

// DOM Elements
const productsContainer = document.getElementById("products-grid-container");
const categoryTabs = document.querySelectorAll(".category-tab");
const searchInput = document.getElementById("menu-search-input");
const searchClearBtn = document.getElementById("search-clear-btn");
const categoryTitle = document.getElementById("current-category-title");
const itemsCountBadge = document.getElementById("items-count-badge");

// Customization Modal Elements
const modalOverlay = document.getElementById("customization-modal-overlay");
const modalImg = document.getElementById("modal-item-img");
const modalTitle = document.getElementById("modal-item-title");
const modalDesc = document.getElementById("modal-item-desc");
const modalObs = document.getElementById("modal-obs-input");
const modalQtyVal = document.getElementById("modal-qty-val");
const modalTotalPrice = document.getElementById("modal-total-price");
const btnCloseModal = document.getElementById("btn-close-modal");
const btnQtyMinus = document.getElementById("modal-qty-minus");
const btnQtyPlus = document.getElementById("modal-qty-plus");
const btnAddToCartModal = document.getElementById("btn-add-to-cart-modal");

// Cart Elements
const floatingCartBar = document.getElementById("floating-cart-bar");
const floatingCartCount = document.getElementById("floating-cart-count");
const floatingCartPrice = document.getElementById("floating-cart-price");
const cartBadgeHeader = document.getElementById("cart-badge-header");
const cartDrawerOverlay = document.getElementById("cart-drawer-overlay");
const cartDrawerItems = document.getElementById("cart-drawer-items-container");
const cartSubtotalVal = document.getElementById("cart-subtotal-val");
const cartShippingVal = document.getElementById("cart-shipping-val");
const cartTotalVal = document.getElementById("cart-total-val");
const drawerBtnDelivery = document.getElementById("drawer-btn-delivery");
const drawerBtnPickup = document.getElementById("drawer-btn-pickup");

const btnOpenCartHeader = document.getElementById("btn-open-cart-header");
const btnOpenCartFloating = document.getElementById("btn-open-cart-floating");
const btnCloseDrawer = document.getElementById("btn-close-drawer");
const btnOpenCheckoutModal = document.getElementById("btn-open-checkout-modal");

// Checkout Modal Elements
const checkoutModalOverlay = document.getElementById("checkout-modal-overlay");
const btnCloseCheckout = document.getElementById("btn-close-checkout");
const checkoutForm = document.getElementById("checkout-form");
const deliveryToggleDelivery = document.getElementById("type-delivery");
const deliveryTogglePickup = document.getElementById("type-pickup");
const addressWrapper = document.getElementById("address-fields-wrapper");
const cashChangeWrapper = document.getElementById("cash-change-wrapper");
const paymentRadios = document.querySelectorAll('input[name="payment-method"]');
const checkoutSummarySubtotal = document.getElementById("checkout-summary-subtotal");
const checkoutSummaryFrete = document.getElementById("checkout-summary-frete");
const checkoutSummaryTotal = document.getElementById("checkout-summary-total");
const btnCheckoutTotal = document.getElementById("btn-checkout-total");
const customerPhoneInput = document.getElementById("customer-phone");

// Poster Lightbox Elements
const posterLightboxOverlay = document.getElementById("poster-lightbox-overlay");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const btnCloseLightbox = document.getElementById("btn-close-lightbox");

// Toast Container
const toastContainer = document.getElementById("toast-container");

// Format Currency Utility
function formatBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Initialise App
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartUI();
  attachEventListeners();
});

// Filter & Render Products
function renderProducts() {
  const filtered = PRODUCTS_DATA.filter(item => {
    const matchesCategory = currentCategory === "todos" || item.category === currentCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  itemsCountBadge.textContent = `${filtered.length} itens`;

  if (filtered.length === 0) {
    productsContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <i class="fa-solid fa-burger" style="font-size: 3rem; margin-bottom: 1rem; color: #333;"></i>
        <h3>Nenhum item encontrado</h3>
        <p style="font-size: 0.9rem;">Tente pesquisar por outro termo ou selecione outra categoria.</p>
      </div>
    `;
    return;
  }

  productsContainer.innerHTML = filtered.map(item => `
    <article class="product-card" onclick="openItemModal('${item.id}')">
      <div class="product-image-wrap">
        ${item.badge ? `<span class="badge-tag ${item.badgeType || 'promo'}">${item.badge}</span>` : ''}
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div class="product-details">
        <h3 class="product-name">${item.name}</h3>
        <p class="product-ingredients">${item.description}</p>
        <div class="product-footer">
          <span class="product-price">${formatBRL(item.price)}</span>
          <button class="btn-add-item" onclick="event.stopPropagation(); openItemModal('${item.id}')">
            <i class="fa-solid fa-plus"></i> Pedir
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// Open Item Customization Modal
function openItemModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  activeModalProduct = product;
  modalQuantity = 1;

  modalImg.src = product.image;
  modalTitle.textContent = product.name;
  modalDesc.textContent = product.description;
  modalObs.value = "";
  modalQtyVal.textContent = modalQuantity;

  // Uncheck all removals and addons
  document.querySelectorAll('#customization-modal-overlay input[type="checkbox"]').forEach(cb => cb.checked = false);

  // Handle Combo specific addon burger target selectors
  const isCombo = product.category === "combos";
  const comboNotice = document.getElementById("combo-addon-notice");
  if (comboNotice) comboNotice.style.display = isCombo ? "flex" : "none";

  const addonCards = document.querySelectorAll('#customization-modal-overlay .addon-card');
  addonCards.forEach(card => {
    const targetBox = card.querySelector('.combo-target-box');
    const select = card.querySelector('.combo-burger-select');
    if (targetBox) targetBox.style.display = "none";

    if (select && isCombo) {
      const burgers = product.comboBurgers && product.comboBurgers.length > 0 
        ? product.comboBurgers 
        : ["1º Hambúrguer", "2º Hambúrguer"];
      
      const cb = card.querySelector('input[name="addon"]');
      const basePrice = cb ? parseFloat(cb.getAttribute("data-price") || 0) : 0;
      
      let optionsHtml = burgers.map(b => `<option value="${b}">🍔 ${b}</option>`).join('');
      if (burgers.length > 1) {
        optionsHtml += `<option value="all">🔥 Em todos os ${burgers.length} burgueres (+ ${formatBRL(basePrice * burgers.length)})</option>`;
      }
      select.innerHTML = optionsHtml;
      select.selectedIndex = 0;
    }
  });

  updateModalTotal();
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

function updateModalTotal() {
  if (!activeModalProduct) return;
  
  let basePrice = activeModalProduct.price;
  const isCombo = activeModalProduct.category === "combos";
  
  // Calculate active paid addons with combo multiplier if applicable
  const activeAddonCards = document.querySelectorAll('#customization-modal-overlay .addon-card');
  activeAddonCards.forEach(card => {
    const cb = card.querySelector('input[name="addon"]');
    if (cb && cb.checked) {
      const addonPrice = parseFloat(cb.getAttribute("data-price") || 0);
      let multiplier = 1;
      if (isCombo) {
        const select = card.querySelector('.combo-burger-select');
        if (select && select.value === "all" && activeModalProduct.comboBurgers) {
          multiplier = activeModalProduct.comboBurgers.length;
        }
      }
      basePrice += (addonPrice * multiplier);
    }
  });

  const total = basePrice * modalQuantity;
  modalTotalPrice.textContent = formatBRL(total);
}

// Add Item from Modal to Cart
function addModalItemToCart() {
  if (!activeModalProduct) return;

  const removals = Array.from(document.querySelectorAll('#customization-modal-overlay input[name="removal"]:checked'))
                        .map(cb => cb.value);

  const isCombo = activeModalProduct.category === "combos";
  const addons = [];
  const activeAddonCards = document.querySelectorAll('#customization-modal-overlay .addon-card');
  
  activeAddonCards.forEach(card => {
    const cb = card.querySelector('input[name="addon"]');
    if (cb && cb.checked) {
      const addonBasePrice = parseFloat(cb.getAttribute("data-price") || 0);
      let targetDesc = "";
      let addonFinalPrice = addonBasePrice;

      if (isCombo) {
        const select = card.querySelector('.combo-burger-select');
        if (select) {
          if (select.value === "all" && activeModalProduct.comboBurgers) {
            targetDesc = `em todos os ${activeModalProduct.comboBurgers.length} burgueres`;
            addonFinalPrice = addonBasePrice * activeModalProduct.comboBurgers.length;
          } else {
            targetDesc = select.value;
          }
        }
      }

      addons.push({
        name: cb.value,
        price: addonFinalPrice,
        target: targetDesc
      });
    }
  });

  const obs = modalObs.value.trim();

  // Unit price with all addons calculated
  let unitPrice = activeModalProduct.price;
  addons.forEach(a => unitPrice += a.price);

  const cartItem = {
    cartItemId: Date.now() + Math.random().toString(36).substr(2, 4),
    productId: activeModalProduct.id,
    name: activeModalProduct.name,
    basePrice: activeModalProduct.price,
    unitPrice: unitPrice,
    quantity: modalQuantity,
    removals: removals,
    addons: addons,
    obs: obs
  };

  cart.push(cartItem);
  saveCart();
  updateCartUI();
  closeModal();

  showToast(`${cartItem.quantity}x ${cartItem.name} adicionado ao carrinho!`);
}

// Save & Sync Cart UI
function saveCart() {
  localStorage.setItem("davi_lanches_cart", JSON.stringify(cart));
}

function updateCartUI() {
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
  const currentShipping = (deliveryType === "delivery" && cart.length > 0) ? DELIVERY_FEE : 0.00;
  const cartTotal = cartSubtotal + currentShipping;

  // Update Counters & Header
  if (cartBadgeHeader) cartBadgeHeader.textContent = totalItemsCount;
  if (floatingCartCount) floatingCartCount.textContent = totalItemsCount;
  if (floatingCartPrice) floatingCartPrice.textContent = formatBRL(cartTotal);

  // Cart Drawer Values
  if (cartSubtotalVal) cartSubtotalVal.textContent = formatBRL(cartSubtotal);
  if (cartShippingVal) {
    if (deliveryType === "delivery") {
      cartShippingVal.textContent = formatBRL(DELIVERY_FEE);
      cartShippingVal.style.color = "var(--brand-amber)";
    } else {
      cartShippingVal.textContent = "Grátis (Retirada)";
      cartShippingVal.style.color = "var(--whatsapp-green)";
    }
  }
  if (cartTotalVal) cartTotalVal.textContent = formatBRL(cartTotal);

  // Checkout Modal Summary Values
  if (checkoutSummarySubtotal) checkoutSummarySubtotal.textContent = formatBRL(cartSubtotal);
  if (checkoutSummaryFrete) {
    if (deliveryType === "delivery") {
      checkoutSummaryFrete.textContent = formatBRL(DELIVERY_FEE);
      checkoutSummaryFrete.style.color = "var(--brand-amber)";
    } else {
      checkoutSummaryFrete.textContent = "Grátis (Retirada)";
      checkoutSummaryFrete.style.color = "var(--whatsapp-green)";
    }
  }
  if (checkoutSummaryTotal) checkoutSummaryTotal.textContent = formatBRL(cartTotal);
  if (btnCheckoutTotal) btnCheckoutTotal.textContent = formatBRL(cartTotal);

  // Floating Bar Toggle
  if (floatingCartBar) {
    if (totalItemsCount > 0) {
      floatingCartBar.classList.add("active");
    } else {
      floatingCartBar.classList.remove("active");
    }
  }

  // Render Drawer Items
  if (cart.length === 0) {
    cartDrawerItems.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-basket-shopping"></i>
        <h3>Seu carrinho está vazio</h3>
        <p>Escolha seus lanches favoritos e adicione ao pedido!</p>
      </div>
    `;
  } else {
    cartDrawerItems.innerHTML = cart.map(item => {
      const itemTotal = item.unitPrice * item.quantity;
      return `
        <div class="cart-item-card">
          <div class="cart-item-header">
            <span class="cart-item-name">${item.quantity}x ${item.name}</span>
            <span class="cart-item-price">${formatBRL(itemTotal)}</span>
          </div>

          <div class="cart-item-meta">
            ${item.addons.length > 0 ? `<span class="meta-tag meta-add">+ ${item.addons.map(a => `${a.name}${a.target ? ` [no ${a.target}]` : ''}`).join(', ')}</span>` : ''}
            ${item.removals.length > 0 ? `<span class="meta-tag meta-rem">- ${item.removals.join(', ')}</span>` : ''}
            ${item.obs ? `<span class="meta-tag">Obs: "${item.obs}"</span>` : ''}
          </div>

          <div class="cart-item-actions">
            <div class="quantity-control" style="transform: scale(0.85); transform-origin: left center;">
              <button class="qty-btn" onclick="updateCartItemQty('${item.cartItemId}', -1)" aria-label="Diminuir"><i class="fa-solid fa-minus"></i></button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartItemQty('${item.cartItemId}', 1)" aria-label="Aumentar"><i class="fa-solid fa-plus"></i></button>
            </div>
            <button class="btn-remove-item" onclick="removeCartItem('${item.cartItemId}')">
              <i class="fa-solid fa-trash"></i> Remover
            </button>
          </div>
        </div>
      `;
    }).join('');
  }
}

// Modify Cart Quantity
function updateCartItemQty(cartItemId, delta) {
  const item = cart.find(i => i.cartItemId === cartItemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.cartItemId !== cartItemId);
  }
  saveCart();
  updateCartUI();
}

function removeCartItem(cartItemId) {
  cart = cart.filter(i => i.cartItemId !== cartItemId);
  saveCart();
  updateCartUI();
  showToast("Item removido do carrinho");
}

// Delivery Type Synchronizer
function setDeliveryType(type) {
  deliveryType = type;

  if (deliveryType === "delivery") {
    if (deliveryToggleDelivery) deliveryToggleDelivery.classList.add("active");
    if (deliveryTogglePickup) deliveryTogglePickup.classList.remove("active");
    if (drawerBtnDelivery) drawerBtnDelivery.classList.add("active");
    if (drawerBtnPickup) drawerBtnPickup.classList.remove("active");
    if (addressWrapper) addressWrapper.style.display = "block";
  } else {
    if (deliveryTogglePickup) deliveryTogglePickup.classList.add("active");
    if (deliveryToggleDelivery) deliveryToggleDelivery.classList.remove("active");
    if (drawerBtnPickup) drawerBtnPickup.classList.add("active");
    if (drawerBtnDelivery) drawerBtnDelivery.classList.remove("active");
    if (addressWrapper) addressWrapper.style.display = "none";
  }

  updateCartUI();
}

// Lightbox for Official Menu Posters
function openPosterLightbox(src, caption) {
  if (!posterLightboxOverlay || !lightboxImage) return;
  lightboxImage.src = src;
  if (lightboxCaption) lightboxCaption.textContent = caption || "Cardápio Oficial Davi Lanches";
  posterLightboxOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePosterLightbox() {
  if (!posterLightboxOverlay) return;
  posterLightboxOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

window.openPosterLightbox = openPosterLightbox;

// Toast Notifications
function showToast(msg) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${msg}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideInRight 0.3s reverse forwards";
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

// Event Listeners Registration
function attachEventListeners() {
  // Category Tabs
  categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      categoryTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.getAttribute("data-category");
      
      const categoryNames = {
        todos: "Cardápio Completo",
        combos: "Combos Promocionais",
        sanduiches: "Sanduíches Especiais",
        batatas: "Batatas Fritas",
        bebidas: "Bebidas Geladas"
      };
      categoryTitle.innerHTML = `<i class="fa-solid fa-burger"></i> ${categoryNames[currentCategory] || "Cardápio"}`;
      renderProducts();
    });
  });

  // Search Input & Clear Button
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    if (searchClearBtn) {
      searchClearBtn.style.display = searchQuery ? "flex" : "none";
    }
    renderProducts();
  });

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      searchClearBtn.style.display = "none";
      renderProducts();
      searchInput.focus();
    });
  }

  // Modal Quantity Controls
  btnQtyMinus.addEventListener("click", () => {
    if (modalQuantity > 1) {
      modalQuantity--;
      modalQtyVal.textContent = modalQuantity;
      updateModalTotal();
    }
  });

  btnQtyPlus.addEventListener("click", () => {
    modalQuantity++;
    modalQtyVal.textContent = modalQuantity;
    updateModalTotal();
  });

  // Modal Checkbox Change recalculate & Combo Target Box Toggle
  document.querySelectorAll('#customization-modal-overlay .addon-card').forEach(card => {
    const cb = card.querySelector('input[name="addon"]');
    const targetBox = card.querySelector('.combo-target-box');
    const select = card.querySelector('.combo-burger-select');

    if (cb) {
      cb.addEventListener("change", () => {
        if (activeModalProduct && activeModalProduct.category === "combos" && cb.checked) {
          if (targetBox) targetBox.style.display = "flex";
        } else {
          if (targetBox) targetBox.style.display = "none";
        }
        updateModalTotal();
      });
    }

    if (select) {
      select.addEventListener("change", updateModalTotal);
    }
  });

  // Removals checkboxes
  document.querySelectorAll('#customization-modal-overlay input[name="removal"]').forEach(cb => {
    cb.addEventListener("change", updateModalTotal);
  });

  // Close Modal
  btnCloseModal.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Confirm Add to Cart
  btnAddToCartModal.addEventListener("click", addModalItemToCart);

  // Cart Drawer Toggles
  btnOpenCartHeader.addEventListener("click", () => cartDrawerOverlay.classList.add("active"));
  btnOpenCartFloating.addEventListener("click", () => cartDrawerOverlay.classList.add("active"));
  btnCloseDrawer.addEventListener("click", () => cartDrawerOverlay.classList.remove("active"));
  cartDrawerOverlay.addEventListener("click", (e) => {
    if (e.target === cartDrawerOverlay) cartDrawerOverlay.classList.remove("active");
  });

  // Drawer Delivery Mode Buttons
  if (drawerBtnDelivery) drawerBtnDelivery.addEventListener("click", () => setDeliveryType("delivery"));
  if (drawerBtnPickup) drawerBtnPickup.addEventListener("click", () => setDeliveryType("pickup"));

  // Open Checkout Modal
  btnOpenCheckoutModal.addEventListener("click", () => {
    if (cart.length === 0) {
      showToast("Adicione pelo menos 1 item ao carrinho!");
      return;
    }
    cartDrawerOverlay.classList.remove("active");
    checkoutModalOverlay.classList.add("active");
    updateCartUI();
  });

  btnCloseCheckout.addEventListener("click", () => checkoutModalOverlay.classList.remove("active"));
  checkoutModalOverlay.addEventListener("click", (e) => {
    if (e.target === checkoutModalOverlay) checkoutModalOverlay.classList.remove("active");
  });

  // Checkout Delivery Type Toggle
  if (deliveryToggleDelivery) deliveryToggleDelivery.addEventListener("click", () => setDeliveryType("delivery"));
  if (deliveryTogglePickup) deliveryTogglePickup.addEventListener("click", () => setDeliveryType("pickup"));

  // Phone input formatting (BR WhatsApp Mask)
  if (customerPhoneInput) {
    customerPhoneInput.addEventListener("input", (e) => {
      let v = e.target.value.replace(/\D/g, "");
      if (v.length > 11) v = v.slice(0, 11);
      if (v.length > 6) {
        e.target.value = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
      } else if (v.length > 2) {
        e.target.value = `(${v.slice(0, 2)}) ${v.slice(2)}`;
      } else if (v.length > 0) {
        e.target.value = `(${v}`;
      } else {
        e.target.value = "";
      }
    });
  }

  // Poster Lightbox Event Listeners
  if (btnCloseLightbox) btnCloseLightbox.addEventListener("click", closePosterLightbox);
  if (posterLightboxOverlay) {
    posterLightboxOverlay.addEventListener("click", (e) => {
      if (e.target === posterLightboxOverlay) closePosterLightbox();
    });
  }

  // Keyboard Shortcuts (Esc closes all open modals/lightboxes)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closePosterLightbox();
      if (cartDrawerOverlay) cartDrawerOverlay.classList.remove("active");
      if (checkoutModalOverlay) checkoutModalOverlay.classList.remove("active");
    }
  });

  // Payment Option selection for Cash Change
  paymentRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
      document.querySelectorAll(".payment-card").forEach(card => card.classList.remove("active"));
      radio.closest(".payment-card").classList.add("active");

      if (e.target.value === "Dinheiro") {
        cashChangeWrapper.style.display = "block";
      } else {
        cashChangeWrapper.style.display = "none";
      }
    });
  });

  // Submit Order via WhatsApp
  checkoutForm.addEventListener("submit", handleOrderSubmit);
}

// Generate & Format WhatsApp Message
function handleOrderSubmit(e) {
  e.preventDefault();

  if (cart.length === 0) {
    showToast("Seu carrinho está vazio!");
    return;
  }

  const customerName = document.getElementById("customer-name").value.trim();
  const customerPhone = document.getElementById("customer-phone").value.trim();
  const selectedPayment = document.querySelector('input[name="payment-method"]:checked').value;
  const cashChange = document.getElementById("cash-change-val").value.trim();

  let addressInfo = "";
  if (deliveryType === "delivery") {
    const street = document.getElementById("address-street").value.trim();
    const number = document.getElementById("address-number").value.trim();
    const neighborhood = document.getElementById("address-neighborhood").value.trim();
    const comp = document.getElementById("address-comp").value.trim();

    if (!street || !number || !neighborhood) {
      alert("Por favor, preencha a Rua, o Número e o Bairro para entrega!");
      return;
    }

    addressInfo = `${street}, Nº ${number} - ${neighborhood}${comp ? ` (${comp})` : ''}`;
  } else {
    addressInfo = "Retirada no Local (Hamburgueria)";
  }

  const cartSubtotal = cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
  const currentFee = (deliveryType === "delivery") ? DELIVERY_FEE : 0.00;
  const finalTotal = cartSubtotal + currentFee;

  // Construct Standard Message Format
  let message = `🍔 *NOVO PEDIDO - DAVI LANCHES* 🍔\n`;
  message += `------------------------------------\n`;
  message += `👤 *Cliente:* ${customerName}\n`;
  message += `📞 *Telefone:* ${customerPhone}\n`;
  message += `🛵 *Tipo:* ${deliveryType === 'delivery' ? 'Entrega (Delivery)' : 'Retirada no Balcão'}\n`;
  if (deliveryType === 'delivery') {
    message += `📍 *Endereço:* ${addressInfo}\n`;
  }
  message += `\n🛒 *ITENS DO PEDIDO:*\n`;

  cart.forEach((item, index) => {
    const itemTotal = item.unitPrice * item.quantity;
    message += `${index + 1}. *${item.quantity}x ${item.name}* - ${formatBRL(itemTotal)}\n`;
    
    if (item.addons.length > 0) {
      message += `   └ *Adicionais:* ${item.addons.map(a => `${a.name}${a.target ? ` [no ${a.target}]` : ''}`).join(', ')}\n`;
    }
    if (item.removals.length > 0) {
      message += `   └ *Remover:* ${item.removals.join(', ')}\n`;
    }
    if (item.obs) {
      message += `   └ *Obs:* ${item.obs}\n`;
    }
  });

  message += `\n------------------------------------\n`;
  message += `💵 *Subtotal dos Itens:* ${formatBRL(cartSubtotal)}\n`;
  if (deliveryType === "delivery") {
    message += `🛵 *Taxa de Entrega (Frete Fixo):* ${formatBRL(DELIVERY_FEE)}\n`;
  } else {
    message += `🛵 *Taxa de Entrega:* Grátis (Retirada no Balcão)\n`;
  }
  message += `💰 *VALOR TOTAL A PAGAR:* ${formatBRL(finalTotal)}\n`;
  message += `------------------------------------\n`;
  message += `💳 *Forma de Pagamento:* ${selectedPayment}\n`;
  if (selectedPayment === "Dinheiro" && cashChange) {
    message += `💵 *Troco para:* ${cashChange}\n`;
  }
  message += `------------------------------------\n`;
  message += `Davi Lanches - Sabor em cada mordida! 🍔🔥`;

  // Encode URL and redirect
  const encodedMsg = encodeURIComponent(message);
  const waUrl = `https://wa.me/${STORE_WHATSAPP}?text=${encodedMsg}`;

  // Clear Cart after successful submit order
  cart = [];
  saveCart();
  updateCartUI();
  checkoutModalOverlay.classList.remove("active");

  // Open WhatsApp in new tab
  window.open(waUrl, "_blank");
}
