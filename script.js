const imageBase = 'https://images.unsplash.com/';
const dishes = [
  {id:1,name:'Koshari Yousvv',category:'Egyptian Classics',price:145,desc:'Lentils, rice, pasta, chickpeas and our bright tomato dukkah.',image:imageBase+'photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80',badge:'Signature'},
  {id:2,name:'Slow-Cooked Molokhia',category:'Egyptian Classics',price:185,desc:'Silky jute leaves, garlic, coriander and roast chicken jus.',image:imageBase+'photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80'},
  {id:3,name:'Egyptian Fatta',category:'Egyptian Classics',price:220,desc:'Golden bread, fragrant rice, tender beef and vinegar garlic.',image:imageBase+'photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80'},
  {id:4,name:'Noureen burger',category:'Egyptian Classics',price:175,desc:'Spiced beef baked inside crisp baladi bread with pickles.',image:imageBase+'photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80'},
  {id:5,name:'Yousvv Kofta',category:'Grills',price:245,desc:'Charcoal-grilled beef kofta, tahini and warm baladi bread.',image:imageBase+'photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80',badge:'Popular'},
  {id:6,name:'Lamb Kebab',category:'Grills',price:330,desc:'Tender marinated lamb, grilled vegetables and sumac onions.',image:imageBase+'photo-1558030006-450675393462?auto=format&fit=crop&w=700&q=80'},
  {id:7,name:'Mixed Grill for Two',category:'Grills',price:580,desc:'Kebab, kofta, shish tawook, fries and three house dips.',image:imageBase+'photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80',badge:'For sharing'},
  {id:8,name:'Shish Tawook',category:'Chicken',price:235,desc:'Yogurt-marinated chicken, toum, pickles and crispy potatoes.',image:imageBase+'photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80'},
  {id:9,name:'Charcoal Chicken',category:'Chicken',price:270,desc:'Half chicken, smoked lemon, herb rice and house salad.',image:imageBase+'photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=700&q=80'},
  {id:10,name:'Seafood Tagine',category:'Seafood',price:310,desc:'Shrimp, calamari and fish in a rich tomato harissa sauce.',image:imageBase+'photo-1559339352-11d035aa65de?auto=format&fit=crop&w=700&q=80',badge:'Chef pick'},
  {id:11,name:'Grilled Sea Bass',category:'Seafood',price:390,desc:'Whole sea bass, preserved lemon, herbs and charred greens.',image:imageBase+'photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=700&q=80'},
  {id:12,name:'Garlic Shrimp',category:'Seafood',price:295,desc:'Tiger shrimp, garlic butter, chili and toasted sourdough.',image:imageBase+'photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=700&q=80'},
  {id:13,name:'Ful Medames',category:'Breakfast',price:95,desc:'Slow-cooked fava beans, olive oil, cumin and fresh herbs.',image:imageBase+'photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80'},
  {id:14,name:'Cairo Taameya',category:'Breakfast',price:90,desc:'Crisp fava bean falafel, tahini, salad and warm bread.',image:imageBase+'photo-1593001874117-c99c800e3eb4?auto=format&fit=crop&w=700&q=80'},
  {id:15,name:'Shakshuka',category:'Breakfast',price:135,desc:'Eggs baked in spiced tomato, peppers and feta.',image:imageBase+'photo-1590412200988-a436970781fa?auto=format&fit=crop&w=700&q=80'},
  {id:16,name:'Warm Eggplant Fatteh',category:'Appetizers',price:150,desc:'Roasted eggplant, yogurt, chickpeas, bread and pine nuts.',image:imageBase+'photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=700&q=80'},
  {id:17,name:'Stuffed Vine Leaves',category:'Appetizers',price:130,desc:'Rice, herbs and tomato wrapped in tender vine leaves.',image:imageBase+'photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=700&q=80'},
  {id:18,name:'Baladi Salad',category:'Salads',price:105,desc:'Cucumber, tomato, herbs, feta and lemon dressing.',image:imageBase+'photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80'},
  {id:19,name:'Roasted Pumpkin Soup',category:'Soups',price:115,desc:'Silky pumpkin, dukkah, brown butter and toasted seeds.',image:imageBase+'photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80'},
  {id:20,name:'Kunafa Nabulsiya',category:'Desserts',price:145,desc:'Crisp kataifi, soft cheese, orange blossom and pistachio.',image:imageBase+'photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=700&q=80',badge:'Must try'},
  {id:21,name:'Warm Om Ali',category:'Desserts',price:125,desc:'Baked pastry, cream, raisins, coconut and roasted nuts.',image:imageBase+'photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80'},
  {id:22,name:'Mango & Mint',category:'Drinks',price:85,desc:'Fresh Egyptian mango blended with mint and lime.',image:imageBase+'photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=700&q=80'},
  {id:23,name:'Ruby Hibiscus',category:'Drinks',price:70,desc:'Iced karkadeh, hibiscus, rose and a squeeze of lime.',image:imageBase+'photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=80'},
  {id:24,name:'Mint Tea',category:'Drinks',price:55,desc:'Fresh spearmint leaves steeped to order.',image:imageBase+'photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80'},
  {id:25,name:'Beef Mahshi',category:'Egyptian Classics',price:210,desc:'Seasoned beef and rice stuffed into tender vegetables.',image:imageBase+'photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=700&q=80'},
  {id:26,name:'Sayadeya Rice',category:'Seafood',price:240,desc:'Caramelized onion rice with grilled fish and tahini.',image:imageBase+'photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=700&q=80'},
  {id:27,name:'Noureen Shawarma',category:'Chicken',price:190,desc:'Spiced chicken, garlic toum, pickles and saj bread.',image:imageBase+'photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=700&q=80'},
  {id:28,name:'Merguez Sausage',category:'Grills',price:260,desc:'Spiced lamb sausage, smoky peppers and herbed yogurt.',image:imageBase+'photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=700&q=80'},
  {id:29,name:'Feta Sambousek',category:'Appetizers',price:110,desc:'Crisp pastry filled with feta, mint and black seed.',image:imageBase+'photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80'},
  {id:30,name:'Tahini Beet Salad',category:'Salads',price:120,desc:'Roasted beetroot, tahini, orange, herbs and walnuts.',image:imageBase+'photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80'},
  {id:31,name:'Lentil Shorba',category:'Soups',price:100,desc:'Velvety red lentils, cumin, lemon and crispy onions.',image:imageBase+'photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80'},
  {id:32,name:'Basbousa with Cream',category:'Desserts',price:110,desc:'Semolina cake, orange blossom syrup and fresh cream.',image:imageBase+'photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80'},
  {id:33,name:'Arabic Coffee',category:'Drinks',price:60,desc:'Cardamom-scented coffee served in a traditional dallah.',image:imageBase+'photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80'}
];
const gallery = [
  ['https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80','Open-fire grills'],['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80','The dining room'],['https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80','From the sea'],['https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=80','Table for friends'],['https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=80','Sweet endings'],['https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80','In the kitchen'],['https://images.unsplash.com/photo-1498579397066-22750a3cb424?auto=format&fit=crop&w=1000&q=80','Egyptian mornings']
];
let activeCategory = 'All';
let cart = [];
const dishGrid = document.querySelector('#dish-grid');
const tabs = document.querySelector('.category-tabs');
const cartDrawer = document.querySelector('.cart-drawer');
const overlay = document.querySelector('.drawer-overlay');
const toast = document.querySelector('.toast');

function money(value){ return `EGP ${value.toLocaleString('en-US')}`; }
function fallbackImage(event){ event.target.src = 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=700&q=70'; }
function renderTabs(){
  const categories = ['All','Egyptian Classics','Grills','Chicken','Seafood','Breakfast','Appetizers','Salads','Soups','Desserts','Drinks'];
  tabs.innerHTML = categories.map(category => `<button class="${category === activeCategory ? 'active' : ''}" data-category="${category}">${category}</button>`).join('');
  tabs.querySelectorAll('button').forEach(button => button.addEventListener('click', () => { activeCategory = button.dataset.category; renderTabs(); renderDishes(); }));
}
function renderDishes(){
  const visible = activeCategory === 'All' ? dishes.slice(0,8) : dishes.filter(dish => dish.category === activeCategory);
  dishGrid.innerHTML = visible.length ? visible.map(dish => `<article class="dish-card"><div class="dish-image"><img loading="lazy" src="${dish.image}" alt="${dish.name}" onerror="fallbackImage(event)">${dish.badge ? `<span class="badge">${dish.badge}</span>` : ''}</div><div class="dish-info"><h3>${dish.name}</h3><p>${dish.desc}</p><div class="dish-bottom"><span class="price">${money(dish.price)}</span><button class="add-dish" aria-label="Add ${dish.name} to order" data-add="${dish.id}">+</button></div></div></article>`).join('') : '<p>No dishes in this category yet.</p>';
  dishGrid.querySelectorAll('[data-add]').forEach(button => button.addEventListener('click', () => addToCart(Number(button.dataset.add))));
}
function addToCart(id){ const dish = dishes.find(item => item.id === id); const existing = cart.find(item => item.id === id); existing ? existing.quantity++ : cart.push({...dish,quantity:1}); renderCart(); showToast(`${dish.name} added to your order`); }
function renderCart(){
  const count = cart.reduce((sum,item) => sum + item.quantity,0); document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
  const items = document.querySelector('.cart-items'); document.querySelector('.cart-empty').style.display = cart.length ? 'none' : 'block';
  items.innerHTML = cart.map(item => `<div class="cart-row"><img src="${item.image}" alt="${item.name}" onerror="fallbackImage(event)"><div><strong>${item.name}</strong><small>${money(item.price)}</small><div class="quantity"><button data-minus="${item.id}" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button data-plus="${item.id}" aria-label="Increase quantity">+</button></div></div><button class="remove" data-remove="${item.id}">Remove</button></div>`).join('');
  const subtotal = cart.reduce((sum,item) => sum + item.price * item.quantity,0); document.querySelector('.cart-subtotal').textContent = money(subtotal); document.querySelector('.cart-total-value').textContent = money(subtotal ? subtotal + 50 : 0);
  items.querySelectorAll('[data-plus]').forEach(button => button.addEventListener('click', () => changeQuantity(Number(button.dataset.plus),1))); items.querySelectorAll('[data-minus]').forEach(button => button.addEventListener('click', () => changeQuantity(Number(button.dataset.minus),-1))); items.querySelectorAll('[data-remove]').forEach(button => button.addEventListener('click', () => { cart = cart.filter(item => item.id !== Number(button.dataset.remove)); renderCart(); }));
}
function changeQuantity(id, delta){ const item = cart.find(entry => entry.id === id); if(item){ item.quantity += delta; if(item.quantity < 1) cart = cart.filter(entry => entry.id !== id); renderCart(); } }
function openCart(){ cartDrawer.classList.add('open'); overlay.classList.add('open'); cartDrawer.setAttribute('aria-hidden','false'); }
function closeCart(){ cartDrawer.classList.remove('open'); overlay.classList.remove('open'); cartDrawer.setAttribute('aria-hidden','true'); }
function showToast(message){ toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'),2500); }

document.querySelectorAll('[data-open-cart]').forEach(button => button.addEventListener('click', openCart));
document.querySelector('.close-cart').addEventListener('click', closeCart); overlay.addEventListener('click', closeCart);
document.querySelector('.checkout-button').addEventListener('click', () => { if(!cart.length){ showToast('Add a dish before checking out'); return; } showToast('Demo checkout ready — our host will call to confirm'); });
document.querySelector('#reservation-form-el').addEventListener('submit', event => { event.preventDefault(); const name = new FormData(event.currentTarget).get('name'); event.currentTarget.reset(); showToast(`Thank you, ${name}. Your reservation request is received.`); });
const menuToggle = document.querySelector('.menu-toggle'); const nav = document.querySelector('.nav-links'); menuToggle.addEventListener('click', () => { const isOpen = nav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', isOpen); }); nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false'); }));
document.querySelector('#gallery-grid').innerHTML = gallery.map(([src,title]) => `<figure><img loading="lazy" src="${src}" alt="${title} at Yousvv Restaurant" onerror="fallbackImage(event)"><figcaption>${title}</figcaption></figure>`).join('');
renderTabs(); renderDishes(); renderCart();
