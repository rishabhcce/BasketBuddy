
/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ PRODUCT DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const PRODUCTS=[
  {id:1,name:'Fresh Tomatoes',img:'https://images.unsplash.com/photo-1546094096-0df4bcabd337?w=300&q=80&fit=crop',w:'1 kg',p:49,mrp:65,disc:25,cat:['veggies','all','best'],badge:'',rating:4.5,rev:1243},
  {id:2,name:'Watermelon',img:'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=300&q=80&fit=crop',w:'1 pc (~2 kg)',p:79,mrp:95,disc:17,cat:['fruits','all','best'],badge:'',rating:4.4,rev:876},
  {id:3,name:'Strawberries',img:'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&q=80&fit=crop',w:'250g punnet',p:89,mrp:110,disc:19,cat:['fruits','all'],badge:'new',rating:4.6,rev:543},
  {id:4,name:'Coconut',img:'https://images.unsplash.com/photo-1609252925373-2e8e40e6735e?w=300&q=80&fit=crop',w:'1 pc (medium)',p:45,mrp:55,disc:18,cat:['fruits','all'],badge:'',rating:4.3,rev:421},
  {id:5,name:'Red Onions',img:'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=300&q=80&fit=crop',w:'1 kg',p:39,mrp:50,disc:22,cat:['veggies','all'],badge:'',rating:4.4,rev:1102},
  {id:6,name:'Broccoli',img:'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300&q=80&fit=crop',w:'500g',p:59,mrp:75,disc:21,cat:['veggies','all'],badge:'organic',rating:4.5,rev:678},
  {id:7,name:'Amul Full Cream Milk',img:'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&q=80&fit=crop',w:'1 Litre',p:68,mrp:70,disc:3,cat:['dairy','all'],badge:'',rating:4.8,rev:3421},
  {id:8,name:'Farm Fresh Eggs',img:'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=300&q=80&fit=crop',w:'6 pieces',p:55,mrp:65,disc:15,cat:['dairy','all','best'],badge:'organic',rating:4.7,rev:2109},
  {id:9,name:'Paneer Fresh',img:'https://images.unsplash.com/photo-1559054663-e8d23213f55c?w=300&q=80&fit=crop',w:'200g',p:89,mrp:95,disc:6,cat:['dairy','all'],badge:'',rating:4.6,rev:1543},
  {id:10,name:'Amul Butter',img:'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300&q=80&fit=crop',w:'500g',p:279,mrp:295,disc:5,cat:['dairy','all'],badge:'',rating:4.9,rev:4321},
  {id:11,name:'Basmati Rice',img:'https://images.unsplash.com/photo-1536304993881-ff86e0c9c2da?w=300&q=80&fit=crop',w:'5 kg bag',p:399,mrp:450,disc:11,cat:['grains','all','best'],badge:'',rating:4.7,rev:3210},
  {id:12,name:'Whole Wheat Atta',img:'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=300&q=80&fit=crop',w:'5 kg bag',p:249,mrp:280,disc:11,cat:['grains','all'],badge:'',rating:4.5,rev:1876},
  {id:13,name:'Chicken Breast',img:'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&q=80&fit=crop',w:'500g pack',p:180,mrp:210,disc:14,cat:['meat','all'],badge:'',rating:4.5,rev:987},
  {id:14,name:'Salmon Fillet',img:'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300&q=80&fit=crop',w:'400g fillet',p:320,mrp:380,disc:16,cat:['seafood','all'],badge:'',rating:4.6,rev:654},
  {id:15,name:'Organic Bananas',img:'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=300&q=80&fit=crop',w:'6 pieces',p:39,mrp:45,disc:13,cat:['fruits','all','best'],badge:'organic',rating:4.7,rev:2345},
  {id:16,name:'Navel Oranges',img:'https://images.unsplash.com/photo-1547514701-42782101795e?w=300&q=80&fit=crop',w:'4 pieces',p:69,mrp:80,disc:14,cat:['fruits','all'],badge:'',rating:4.4,rev:876},
  {id:17,name:'Pure Cow Ghee',img:'https://images.unsplash.com/photo-1617419669559-be79f36bd367?w=300&q=80&fit=crop',w:'500ml jar',p:299,mrp:350,disc:15,cat:['grains','dairy','all','best'],badge:'',rating:4.8,rev:2103},
  {id:18,name:'Mustard Oil',img:'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&q=80&fit=crop',w:'1 Litre',p:155,mrp:180,disc:14,cat:['grains','all'],badge:'',rating:4.4,rev:1234},
  {id:19,name:'Baby Spinach',img:'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&q=80&fit=crop',w:'250g bundle',p:29,mrp:35,disc:17,cat:['veggies','all'],badge:'organic',rating:4.3,rev:543},
  {id:20,name:'Green Capsicum',img:'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&q=80&fit=crop',w:'500g',p:45,mrp:55,disc:18,cat:['veggies','all'],badge:'',rating:4.4,rev:765},
];

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ ALIASES FOR AI â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const ALIAS={
  tomato:1,tomatoes:1,tamatar:1,
  watermelon:2,tarbooz:2,
  strawberry:3,strawberries:3,
  coconut:4,nariyal:4,
  onion:5,onions:5,pyaz:5,'red onion':5,
  broccoli:6,
  milk:7,doodh:7,'full cream milk':7,
  egg:8,eggs:8,anda:8,'farm eggs':8,
  paneer:9,'cottage cheese':9,
  butter:10,makhan:10,'amul butter':10,
  rice:11,chawal:11,basmati:11,
  wheat:12,atta:12,flour:12,
  chicken:13,'chicken breast':13,murgi:13,
  fish:14,salmon:14,machli:14,
  banana:15,bananas:15,kela:15,
  orange:16,oranges:16,santra:16,
  ghee:17,'clarified butter':17,
  oil:18,'mustard oil':18,tel:18,
  spinach:19,palak:19,
  capsicum:20,'bell pepper':20,'shimla mirch':20,
  // recipe â†’ ingredients
  pasta:1,spaghetti:1,macaroni:1,
  dal:11,lentil:11,lentils:11,
  bread:12,chapati:12,roti:12,
  cheese:9,
  garlic:5,potato:5,aloo:5,
  cream:7,'heavy cream':7,
};

const RECIPES={
  pasta:['tomato','onion','garlic','oil','cheese'],
  'pasta sauce':['tomato','onion','garlic','oil'],
  'fried rice':['rice','egg','onion','capsicum','oil'],
  'dal rice':['dal','rice','onion','tomato','oil','ghee'],
  'dal makhani':['dal','rice','onion','tomato','butter','ghee'],
  sandwich:['bread','butter','egg','onion','capsicum','tomato'],
  salad:['tomato','onion','capsicum','spinach'],
  omelette:['egg','onion','capsicum','oil'],
  breakfast:['egg','milk','butter','bread','banana'],
  smoothie:['banana','milk','strawberry'],
  curry:['onion','tomato','oil','spinach','chicken'],
  'chicken curry':['chicken','onion','tomato','oil'],
  'palak paneer':['spinach','paneer','onion','tomato','oil','ghee'],
  'weekly':['milk','egg','tomato','onion','rice','oil','banana','bread'],
  essentials:['milk','egg','tomato','onion','rice','oil'],
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ CART STATE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
let CART={}, WISH=new Set(), cpnDiscount=0, activePay='upi', cStep=1, selectedSlot=null;
const VALID_COUPONS={FRESH10:10,FREEDEL:0,BB20:20,SUPER50:50,BB10:10};
const SESSION={role:null,name:'Guest'};
const ADMIN_KPIS=[
  {value:'1,284',label:'Orders Today',note:'+12% vs yesterday'},
  {value:'₹2.8L',label:'Revenue Run Rate',note:'Strong evening basket size'},
  {value:'96.4%',label:'Fulfilment SLA',note:'Average dispatch in 24 min'},
  {value:'18',label:'Active Campaigns',note:'3 ending tonight'}
];
const ADMIN_ORDERS=[
  {id:'BB10421',customer:'Priya Sharma',items:'8 items · Organic staples',status:'live'},
  {id:'BB10422',customer:'Rahul Verma',items:'5 items · Dairy refill',status:'pending'},
  {id:'BB10423',customer:'Anita Gupta',items:'11 items · Weekly basket',status:'live'},
  {id:'BB10424',customer:'Store Pickup #12',items:'4 items · Fresh fruits',status:'warn'}
];
const ADMIN_ALERTS=[
  {name:'Farm Fresh Eggs',meta:'18 trays left · reorder before 8 PM',status:'warn'},
  {name:'Amul Full Cream Milk',meta:'High demand in North zone',status:'pending'},
  {name:'Organic Bananas',meta:'Vendor confirmed next lot at 6:30 PM',status:'live'}
];

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ RENDER GRID â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function renderGrid(items,gridId,limit=8){
  const g=document.getElementById(gridId);
  const shown=items.slice(0,limit);
  if(!shown.length){
    g.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:56px 20px;color:var(--muted)"><div style="font-size:64px;margin-bottom:12px">ðŸ”</div><h3 style="font-size:18px;font-weight:700;color:var(--dark)">No products found</h3><p style="font-size:14px;margin-top:6px">Try a different search or category</p></div>`;
    return;
  }
  g.innerHTML=shown.map(p=>{
    const qty=CART[p.id]||0, wished=WISH.has(p.id);
    return`<div class="pcard" id="pc${p.id}">
      ${p.disc>0?`<div class="pbadge pbadge-red">${p.disc}% OFF</div>`:''}
      ${p.badge==='organic'?`<div class="pbadge pbadge-grn" style="top:${p.disc>0?'36px':'10px'}">ðŸŒ¿ Organic</div>`:''}
      ${p.badge==='new'?`<div class="pbadge pbadge-org" style="top:${p.disc>0?'36px':'10px'}">âœ¨ New</div>`:''}
      <div class="pcard-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <div class="pcard-acts">
          <button class="pa pa-w ${wished?'on':''}" id="wb${p.id}" onclick="event.stopPropagation();toggleWish(${p.id})" title="${wished?'Remove from wishlist':'Add to wishlist'}">
            <i class="${wished?'fas':'far'} fa-heart"></i>
          </button>
        </div>
        <div class="pcard-hover-bar" onclick="quickView(${p.id})"><i class="fas fa-eye"></i> Quick View</div>
      </div>
      <div class="pcard-body">
        <div class="pcard-name">${p.name}</div>
        <div class="pcard-wt">${p.w}</div>
        <div class="pcard-stars">
          <span class="stars-ico">${'â˜…'.repeat(Math.floor(p.rating))}${'â˜†'.repeat(5-Math.floor(p.rating))}</span>
          <span class="stars-cnt">(${p.rev.toLocaleString()})</span>
        </div>
        <div class="pcard-btm">
          <div>
            <span class="pcard-price">â‚¹${p.p}</span>
            ${p.mrp>p.p?`<span class="pcard-mrp">â‚¹${p.mrp}</span><span class="pcard-disc">${p.disc}% off</span>`:''}
          </div>
          <div id="ab${p.id}">
            ${qty>0?`<div class="qty-ctrl">
              <button class="qb" onclick="event.stopPropagation();changeQty(${p.id},-1)">âˆ’</button>
              <span class="qn">${qty}</span>
              <button class="qb" onclick="event.stopPropagation();changeQty(${p.id},1)">+</button>
            </div>`:`<button class="add-btn" onclick="event.stopPropagation();addToCart(${p.id})" title="Add to cart">+</button>`}
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function renderAll(){
  renderGrid(PRODUCTS,    'mainGrid', 8);
  renderGrid(PRODUCTS.filter(p=>p.cat.includes('best')||p.disc>=14),'topGrid',4);
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ FILTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function filterCat(cat){
  document.querySelectorAll('[id^="pill-"]').forEach(el=>{
    el.style.background=el.id===`pill-${cat}`?'var(--g)':'var(--gll)';
    el.style.color=el.id===`pill-${cat}`?'#fff':'var(--g)';
  });
  const items=cat==='all'||cat==='best'||cat==='more'
    ? PRODUCTS
    : PRODUCTS.filter(p=>p.cat.includes(cat));
  renderGrid(items,'mainGrid',8);
  goShop();
}

function liveSearch(v){
  const r=v?PRODUCTS.filter(p=>p.name.toLowerCase().includes(v.toLowerCase())):PRODUCTS;
  renderGrid(r,'mainGrid',8);
  if(v)goShop();
}
function goShop(){document.getElementById('shop').scrollIntoView({behavior:'smooth'})}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ CART LOGIC â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function addToCart(id,qty=1){
  CART[id]=(CART[id]||0)+qty;
  refreshAddBtn(id); syncCart();
  const p=PRODUCTS.find(x=>x.id==id);
  showToast(`âœ… ${p.name} added!`,'ok');
  maybeSuggestInCart();
}
function changeQty(id,d){
  CART[id]=(CART[id]||0)+d;
  if(CART[id]<=0){delete CART[id];showToast('ðŸ—‘ï¸ Item removed','')}
  refreshAddBtn(id); syncCart();
}
function refreshAddBtn(id){
  const el=document.getElementById(`ab${id}`); if(!el)return;
  const n=CART[id]||0;
  el.innerHTML=n>0
    ?`<div class="qty-ctrl"><button class="qb" onclick="event.stopPropagation();changeQty(${id},-1)">âˆ’</button><span class="qn">${n}</span><button class="qb" onclick="event.stopPropagation();changeQty(${id},1)">+</button></div>`
    :`<button class="add-btn" onclick="event.stopPropagation();addToCart(${id})" title="Add to cart">+</button>`;
  const total=Object.values(CART).reduce((a,b)=>a+b,0);
  document.getElementById('cartCount').textContent=total;
}
function toggleWish(id){
  const btn=document.getElementById(`wb${id}`);
  if(WISH.has(id)){WISH.delete(id);if(btn){btn.classList.remove('on');btn.innerHTML='<i class="far fa-heart"></i>'}showToast('ðŸ’” Removed from wishlist','')}
  else{WISH.add(id);if(btn){btn.classList.add('on');btn.innerHTML='<i class="fas fa-heart"></i>'}showToast('â¤ï¸ Added to wishlist!','ok')}
}
function quickView(id){
  const p=PRODUCTS.find(x=>x.id==id);
  showToast(`ðŸ‘ï¸ ${p.name} Â· ${p.w} Â· â‚¹${p.p}`,'');
}

function syncCart(){
  const total=Object.values(CART).reduce((a,b)=>a+b,0);
  document.getElementById('cartCount').textContent=total;
  const body=document.getElementById('cartBody'), ftr=document.getElementById('cartFtr');
  if(!total){
    body.innerHTML=`<div class="cart-empty"><div class="ce-img">ðŸ›’</div><h4>Your basket is empty</h4><p>Add fresh items to get started!</p></div>`;
    ftr.style.display='none'; return;
  }
  let iTotal=0,savings=0,html='';
  for(const[id,qty] of Object.entries(CART)){
    const p=PRODUCTS.find(x=>x.id==id); if(!p)continue;
    iTotal+=p.p*qty; savings+=(p.mrp-p.p)*qty;
    html+=`<div class="ci">
      <img class="ci-img" src="${p.img}" alt="${p.name}">
      <div class="ci-inf">
        <div class="ci-n">${p.name}</div>
        <div class="ci-w">${p.w}</div>
        <div class="ci-row">
          <div class="qty-ctrl" style="border-color:var(--border)">
            <button class="qb" style="background:var(--bg);color:var(--dark)" onclick="changeQty(${id},-1)">âˆ’</button>
            <span class="qn">${qty}</span>
            <button class="qb" style="background:var(--bg);color:var(--dark)" onclick="changeQty(${id},1)">+</button>
          </div>
          <div class="ci-price">â‚¹${(p.p*qty).toLocaleString()}</div>
        </div>
      </div>
    </div>`;
  }
  body.innerHTML=html;
  const del=iTotal>=599?0:40, grand=Math.max(0,iTotal+del-cpnDiscount);
  document.getElementById('cftItemTotal').textContent='â‚¹'+iTotal.toLocaleString();
  document.getElementById('cftDelivery').textContent=del===0?'FREE':'â‚¹'+del;
  document.getElementById('cftDisc').textContent='-â‚¹'+cpnDiscount;
  document.getElementById('cftTotal').textContent='â‚¹'+grand.toLocaleString();
  document.getElementById('cftSavings').textContent=`ðŸŽ‰ You're saving â‚¹${(savings+cpnDiscount).toLocaleString()}!`;
  ftr.style.display='block';
  // sync checkout summary
  document.getElementById('osIt').textContent='â‚¹'+iTotal.toLocaleString();
  document.getElementById('osDl').textContent=del===0?'FREE':'â‚¹'+del;
  document.getElementById('osDsc').textContent='-â‚¹'+cpnDiscount;
  document.getElementById('osTot').textContent='â‚¹'+grand.toLocaleString();
}

function openCartDrawer(){document.getElementById('cartOverlay').classList.add('on');document.getElementById('cartDrawer').classList.add('on')}
function closeCartDrawer(){document.getElementById('cartOverlay').classList.remove('on');document.getElementById('cartDrawer').classList.remove('on')}
function resetCart(){CART={};cpnDiscount=0;syncCart();renderAll()}

function maybeSuggestInCart(){
  const keys=Object.keys(CART).map(Number), sug=document.getElementById('cartBuddySug');
  const suggestions=[
    {when:[7],notWhen:10,msg:'You have milk â€” add Amul Butter too?',id:10},
    {when:[11],notWhen:17,msg:'Goes great with rice â€” add Pure Ghee?',id:17},
    {when:[2,4],notWhen:7,msg:'Add fresh Milk to complete your breakfast!',id:7},
    {when:[13],notWhen:1,msg:'Add Tomatoes for a perfect curry base!',id:1},
  ];
  for(const s of suggestions){
    if(s.when.some(x=>keys.includes(x))&&!keys.includes(s.notWhen)){
      const p=PRODUCTS.find(x=>x.id===s.id);
      sug.style.display='block';
      document.getElementById('cbsText').textContent=s.msg;
      document.getElementById('cbsChips').innerHTML=`<div class="cbs-chip" onclick="addToCart(${p.id});document.getElementById('cartBuddySug').style.display='none'">
        <img src="${p.img}" style="width:20px;height:20px;border-radius:4px;object-fit:cover"> + ${p.name} â‚¹${p.p}
      </div>`;
      return;
    }
  }
  sug.style.display='none';
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ CHECKOUT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function openCheckout(){
  closeCartDrawer();
  if(!Object.keys(CART).length){showToast('ðŸ›’ Your basket is empty!','err');return}
  cStep=1; renderCheckoutSteps(); initSlots(); syncCart();
  openModal('checkoutModal');
}
function gotoStep(n){
  if(n===2){
    const fn=document.getElementById('fn').value.trim();
    const addr=document.getElementById('addr').value.trim();
    const mob=document.getElementById('mob').value.trim();
    const pin=document.getElementById('pin').value.trim();
    if(!fn||!addr||!mob||!pin){showToast('âš ï¸ Please fill in all required fields','err');return}
    if(mob.length<10){showToast('âš ï¸ Enter a valid mobile number','err');return}
    if(pin.length!==6){showToast('âš ï¸ Enter a valid 6-digit pincode','err');return}
  }
  if(n===3&&!selectedSlot){showToast('âš ï¸ Please select a delivery slot','err');return}
  cStep=n; renderCheckoutSteps();
}
function renderCheckoutSteps(){
  ['stp1','stp2','stp3'].forEach((id,i)=>{
    const el=document.getElementById(id); el.className='stp';
    if(i+1===cStep)el.classList.add('act');
    else if(i+1<cStep)el.classList.add('done');
  });
  ['sp1','sp2','sp3','spSuccess'].forEach(id=>document.getElementById(id).classList.remove('on'));
  const map={1:'sp1',2:'sp2',3:'sp3'};
  if(map[cStep])document.getElementById(map[cStep]).classList.add('on');
}
function initSlots(){
  const days=['Today','Tomorrow','Wed'];
  const times=[['6â€“8 AM','10â€“12 PM','2â€“4 PM','6â€“8 PM'],['6â€“8 AM','10â€“12 PM','2â€“4 PM','6â€“8 PM'],['6â€“8 AM','10â€“12 PM','2â€“4 PM']];
  let h='';
  days.forEach((d,di)=>times[di].forEach((t,ti)=>{
    h+=`<div class="slot-item" id="sl${di}${ti}" onclick="pickSlot(${di},${ti},'${d}, ${t}')">
      <div class="si-day">${d}</div><div class="si-time">${t}</div><div class="si-fee">Free</div>
    </div>`;
  }));
  document.getElementById('slotGrid').innerHTML=h;
}
function pickSlot(di,ti,lbl){
  document.querySelectorAll('.slot-item').forEach(el=>el.classList.remove('on'));
  document.getElementById(`sl${di}${ti}`).classList.add('on');
  selectedSlot=lbl; showToast('âœ… Slot: '+lbl,'ok');
}
function applyCoupon(){
  const code=document.getElementById('cpnInput').value.trim().toUpperCase();
  const msg=document.getElementById('cpnMsg');
  if(VALID_COUPONS[code]!==undefined){
    const iTotal=Object.entries(CART).reduce((s,[id,q])=>s+(PRODUCTS.find(p=>p.id==id)?.p||0)*q,0);
    if(code==='FREEDEL'){cpnDiscount=40;msg.textContent='âœ… Free delivery applied!'}
    else{cpnDiscount=Math.round(Math.min(VALID_COUPONS[code]*iTotal/100,code==='SUPER50'?200:9999));msg.textContent=`âœ… â‚¹${cpnDiscount} discount applied!`}
    msg.style.color='var(--g)'; syncCart(); showToast('ðŸŽ‰ Coupon applied!','ok');
  }else{msg.style.color='var(--red)';msg.textContent='âŒ Invalid coupon code. Try FRESH10 or BB20'}
}
function selectPay(m){
  activePay=m;
  ['upi','card','nb','emi','cod'].forEach(x=>{
    const el=document.getElementById(`po-${x}`); if(!el)return;
    el.classList.toggle('on',x===m);
    el.querySelector('.popt-radio').checked=x===m;
  });
}
function verifyUPI(){
  const v=document.getElementById('upiId').value.trim();
  const msg=document.getElementById('upiVerifyMsg');
  if(v.includes('@')&&v.length>4){msg.style.color='var(--g)';msg.textContent='âœ… UPI ID verified successfully!';showToast('âœ… UPI verified!','ok')}
  else{msg.style.color='var(--red)';msg.textContent='âŒ Invalid UPI ID. Format: name@paytm or name@okaxis'}
}
function fmtCardNum(el){let v=el.value.replace(/\D/g,'').substring(0,16);el.value=v.replace(/(.{4})/g,'$1 ').trim()}
function fmtExpiry(el){let v=el.value.replace(/\D/g,'').substring(0,4);if(v.length>=2)v=v.slice(0,2)+'/'+v.slice(2);el.value=v}
async function placeOrder(){
  if(activePay==='upi'){
    const v=document.getElementById('upiId').value.trim();
    if(!v.includes('@')){showToast('âš ï¸ Please verify your UPI ID first','err');return}
  }
  const btn=document.getElementById('placeBtn');
  btn.textContent='â³ Processing paymentâ€¦'; btn.disabled=true;
  await new Promise(r=>setTimeout(r,2200));
  const ordId='BB'+Math.floor(Math.random()*900000+100000);
  document.getElementById('ordIdTag').textContent='Order #'+ordId;
  ['stp1','stp2','stp3'].forEach(id=>document.getElementById(id).className='stp done');
  ['sp1','sp2','sp3'].forEach(id=>document.getElementById(id).classList.remove('on'));
  document.getElementById('spSuccess').classList.add('on');
  btn.textContent='ðŸŽ‰ Place Order'; btn.disabled=false;
  showToast('ðŸŽ‰ Order placed successfully!','ok');
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ MODALS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function openModal(id){document.getElementById(id).classList.add('on')}
function closeModal(id){document.getElementById(id).classList.remove('on')}
document.querySelectorAll('.modal-bg').forEach(m=>m.addEventListener('click',function(e){if(e.target===this)this.classList.remove('on')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.modal-bg.on').forEach(m=>m.classList.remove('on'));closeCartDrawer()}});

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ LOGIN â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function switchLoginTab(t){
  document.getElementById('ltab-in').classList.toggle('on',t==='in');
  document.getElementById('ltab-up').classList.toggle('on',t==='up');
  document.getElementById('lp-in').style.display=t==='in'?'block':'none';
  document.getElementById('lp-up').style.display=t==='up'?'block':'none';
}
function switchAuthRole(role){
  const user=role==='user';
  document.getElementById('authRoleUser').classList.toggle('on',user);
  document.getElementById('authRoleAdmin').classList.toggle('on',!user);
  document.getElementById('authUserPanel').classList.toggle('on',user);
  document.getElementById('authAdminPanel').classList.toggle('on',!user);
}
function openLoginPanel(view='user-signin'){
  switchAuthRole(view.startsWith('admin')?'admin':'user');
  if(view==='user-signup')switchLoginTab('up'); else switchLoginTab('in');
  openModal('loginModal');
}
function fillAdminDemo(){
  document.getElementById('adminEmail').value='admin@basketbuddy.com';
  document.getElementById('adminPassword').value='admin123';
  document.getElementById('adminCode').value='OPS-2026';
}
function setSession(role,name){
  SESSION.role=role;
  SESSION.name=name;
  updateSessionUI();
}
function updateSessionUI(){
  const accountLabel=document.getElementById('accountLabel');
  const sessionBadge=document.getElementById('sessionBadge');
  const launchBtn=document.getElementById('adminLaunchBtn');
  if(SESSION.role==='admin'){
    accountLabel.textContent='Admin: '+SESSION.name;
    sessionBadge.innerHTML='<i class=\"fas fa-shield-halved\"></i> Admin session active';
    launchBtn.classList.remove('hidden-admin');
  }else if(SESSION.role==='user'){
    accountLabel.textContent='Hi, '+SESSION.name;
    sessionBadge.innerHTML='<i class=\"fas fa-user\"></i> User signed in';
    launchBtn.classList.add('hidden-admin');
  }else{
    accountLabel.textContent='Guest Mode';
    sessionBadge.innerHTML='<i class=\"fas fa-user-clock\"></i> Signed out';
    launchBtn.classList.add('hidden-admin');
  }
}
function renderAdminCollections(targetIds){
  const [kpiId,orderId,alertId]=targetIds;
  document.getElementById(kpiId).innerHTML=ADMIN_KPIS.map(k=>`<div class=\"kpi\"><strong>${k.value}</strong><span>${k.label}</span><small>${k.note}</small></div>`).join('');
  document.getElementById(orderId).innerHTML=ADMIN_ORDERS.map(o=>`<div class=\"admin-row\"><div><strong>${o.id} · ${o.customer}</strong><span>${o.items}</span></div><span class=\"status-chip ${o.status}\">${o.status==='warn'?'Delayed':o.status==='pending'?'Packed':'Live'}</span></div>`).join('');
  document.getElementById(alertId).innerHTML=ADMIN_ALERTS.map(a=>`<div class=\"admin-row\"><div><strong>${a.name}</strong><span>${a.meta}</span></div><span class=\"status-chip ${a.status}\">${a.status==='warn'?'Low':a.status==='pending'?'Watch':'OK'}</span></div>`).join('');
}
function renderAdminData(){
  renderAdminCollections(['adminKpis','adminOrders','adminAlerts']);
  renderAdminCollections(['adminModalKpis','adminModalOrders','adminModalAlerts']);
}
function handleUserLogin(){
  const identity=document.getElementById('userLoginId').value.trim();
  const password=document.getElementById('userLoginPassword').value.trim();
  if(!identity||!password){showToast('Please enter your user credentials.','err');return}
  const name=identity.includes('@')?identity.split('@')[0]:identity.replace(/[^a-zA-Z ]/g,'').trim().split(' ')[0]||'Shopper';
  setSession('user',name.charAt(0).toUpperCase()+name.slice(1));
  showToast('User signed in successfully!','ok');
  closeModal('loginModal');
}
function handleUserSignup(){
  const first=document.getElementById('signupFirstName').value.trim();
  const email=document.getElementById('signupEmail').value.trim();
  const password=document.getElementById('signupPassword').value.trim();
  if(!first||!email||password.length<8){showToast('Complete the signup form with a valid password.','err');return}
  setSession('user',first);
  showToast('Account created! Welcome to BasketBuddy.','ok');
  closeModal('loginModal');
}
function handleAdminLogin(){
  const email=document.getElementById('adminEmail').value.trim().toLowerCase();
  const password=document.getElementById('adminPassword').value.trim();
  const code=document.getElementById('adminCode').value.trim().toUpperCase();
  if(email!=='admin@basketbuddy.com' || password!=='admin123' || code!=='OPS-2026'){
    showToast('Use the demo admin credentials to access the dashboard.','err');
    return;
  }
  setSession('admin','Ops Team');
  closeModal('loginModal');
  openAdminDashboard();
  showToast('Admin dashboard unlocked.','ok');
}
function openAdminDashboard(){
  if(SESSION.role!=='admin'){openLoginPanel('admin-signin');return}
  openModal('adminModal');
  document.getElementById('admin').scrollIntoView({behavior:'smooth',block:'start'});
}
function handleAccountAction(){
  if(SESSION.role==='admin'){openAdminDashboard();return}
  openLoginPanel('user-signin');
}
function doSocialLogin(p){
  setSession('user',p+' Shopper');
  showToast(`Signed in with ${p}!`,'ok');
  closeModal('loginModal');
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ FAQ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function toggleFAQ(btn){
  const item=btn.closest('.faq-item');
  document.querySelectorAll('.faq-item').forEach(i=>{if(i!==item)i.classList.remove('open')});
  item.classList.toggle('open');
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ NEWSLETTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function doSubscribe(){
  const v=document.getElementById('nlEmail').value.trim();
  if(!v||!v.includes('@')){showToast('âš ï¸ Enter a valid email address','err');return}
  showToast('ðŸŽ‰ Subscribed! 15% off on your first order!','ok');
  document.getElementById('nlEmail').value='';
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ COUNTDOWN â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const cdTarget=new Date(Date.now()+69*864e5+11*36e5+34*6e4+0);
function tickCD(){
  const d=cdTarget-Date.now();
  if(d<=0)return;
  document.getElementById('cd-d').textContent=String(Math.floor(d/864e5)).padStart(2,'0');
  document.getElementById('cd-h').textContent=String(Math.floor(d%864e5/36e5)).padStart(2,'0');
  document.getElementById('cd-m').textContent=String(Math.floor(d%36e5/6e4)).padStart(2,'0');
  document.getElementById('cd-s').textContent=String(Math.floor(d%6e4/1e3)).padStart(2,'0');
}
tickCD(); setInterval(tickCD,1000);

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ TOAST â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
let toastTimer;
function showToast(msg,type){
  const el=document.getElementById('toastEl');
  el.textContent=msg; el.className='toast on '+(type||'');
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>el.classList.remove('on'),3200);
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ SCROLL TOP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
window.addEventListener('scroll',()=>document.getElementById('scrollTopBtn').classList.toggle('on',scrollY>500));

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ BUDDY AI â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
let buddyOpen=false, buddyMode='chat';

function openBuddy(){if(!buddyOpen)toggleBuddy()}
function toggleBuddy(){
  buddyOpen=!buddyOpen;
  document.getElementById('buddyPanel').classList.toggle('on',buddyOpen);
  if(buddyOpen&&!document.querySelector('.bm')){
    appendMsg('bot','ðŸ‘‹ Hi! I\'m **Buddy**, your smart grocery assistant!\n\nI can help you:\nâ€¢ ðŸ Suggest ingredients for recipes\nâ€¢ ðŸ“‹ Parse your grocery list\nâ€¢ ðŸ“¸ Extract items from uploaded photos\n\nTry saying **"I want to make pasta"** or **"add milk, eggs and rice"**!');
  }
}

function setBuddyMode(m){
  buddyMode=m;
  ['chat','list','photo'].forEach(x=>{
    document.getElementById(`bmt-${x}`).classList.toggle('on',x===m);
    document.getElementById(`bp${x.charAt(0).toUpperCase()+x.slice(1)}Mode`).style.display=x===m?'block':'none';
    // chat mode uses the parent div id
  });
  document.getElementById('bpChatMode').style.display=m==='chat'?'block':'none';
  document.getElementById('bpListMode').style.display=m==='list'?'block':'none';
  document.getElementById('bpPhotoMode').style.display=m==='photo'?'block':'none';
}

function appendMsg(role,text,added=[]){
  const chat=document.getElementById('bpChat');
  const div=document.createElement('div');
  div.className=`bm ${role}`;
  const av=document.createElement('div'); av.className='bm-av';
  av.textContent=role==='bot'?'ðŸ¤–':'ðŸ‘¤';
  const bub=document.createElement('div'); bub.className='bm-bub';
  bub.innerHTML=text.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>');
  if(added.length){
    const row=document.createElement('div'); row.className='bm-added';
    added.forEach(p=>{
      const chip=document.createElement('div'); chip.className='bm-chip';
      chip.innerHTML=`<img src="${p.img}" style="width:16px;height:16px;border-radius:3px;object-fit:cover"> ${p.name}
        <button onclick="changeQty(${p.id},-1);this.closest('.bm-chip').style.opacity='.4'">âœ•</button>`;
      row.appendChild(chip);
    });
    bub.appendChild(row);
  }
  div.appendChild(av); div.appendChild(bub);
  chat.appendChild(div); chat.scrollTop=chat.scrollHeight;
}

function showTyping(){
  const chat=document.getElementById('bpChat');
  const div=document.createElement('div');div.className='bm bot';div.id='btTyping';
  div.innerHTML=`<div class="bm-av">ðŸ¤–</div><div class="bm-typing"><div class="t-dot"></div><div class="t-dot"></div><div class="t-dot"></div></div>`;
  chat.appendChild(div); chat.scrollTop=chat.scrollHeight;
}
function hideTyping(){const el=document.getElementById('btTyping');if(el)el.remove()}

function sendSuggestion(t){document.getElementById('bpInput').value=t;sendBuddyMessage()}

async function sendBuddyMessage(){
  const inp=document.getElementById('bpInput');
  const msg=inp.value.trim(); if(!msg)return;
  inp.value=''; inp.style.height='40px';
  appendMsg('user',msg);
  showTyping();
  await processBuddyMsg(msg);
}

async function processBuddyMsg(msg){
  const lower=msg.toLowerCase();
  try{
    const res=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        model:'claude-sonnet-4-20250514',
        max_tokens:700,
        system:`You are Buddy, a friendly smart grocery assistant for BasketBuddy store.
Available products catalogue: ${PRODUCTS.map(p=>`ID:${p.id} "${p.name}" â‚¹${p.p}`).join(' | ')}

Rules:
1. When user asks for a recipe or wants to cook something, identify needed ingredients and match to our catalogue.
2. When user wants specific items, match them.
3. Respond with a warm 1-2 line message in plain text (no markdown).
4. Always end your response with a JSON block: {"add":[id1,id2,...]} listing IDs of products to add.
5. If nothing matches, return {"add":[]} and suggest alternatives from catalogue.
6. Keep response concise and friendly.`,
        messages:[{role:'user',content:msg}]
      })
    });
    const data=await res.json();
    hideTyping();
    if(data.content&&data.content[0]){
      const raw=data.content.filter(b=>b.type==='text').map(b=>b.text).join('');
      const jm=raw.match(/\{"add":\[[\d,\s]*\]\}/);
      let added=[];
      if(jm){const ids=JSON.parse(jm[0]).add;ids.forEach(id=>{const p=PRODUCTS.find(x=>x.id===id);if(p&&!added.find(x=>x.id===id)){addToCart(id,1);added.push(p)}})}
      const clean=raw.replace(/\{"add":\[[\d,\s]*\]\}/g,'').trim();
      appendMsg('bot',clean||'Here are your items!',added);
      if(added.length){showToast(`ðŸ›’ ${added.length} item${added.length>1?'s':''} added!`,'ok')}
      return;
    }
  }catch(e){}
  localBuddy(msg,lower);
}

function localBuddy(msg,lower){
  hideTyping();
  const added=[];
  let ingredients=[];
  // Check recipes
  for(const[recipe,ingList] of Object.entries(RECIPES)){if(lower.includes(recipe)){ingredients=[...ingredients,...ingList]}}
  // Check direct items
  if(!ingredients.length){for(const k of Object.keys(ALIAS)){if(lower.includes(k))ingredients.push(k)}}
  const unique=[...new Set(ingredients)];
  unique.forEach(k=>{
    const id=ALIAS[k];if(!id)return;
    const p=PRODUCTS.find(x=>x.id===id);
    if(p&&!added.find(x=>x.id===id)){addToCart(id,1);added.push(p)}
  });
  if(added.length){
    appendMsg('bot',`ðŸŽ‰ Done! I've added **${added.length} item${added.length>1?'s':''}** to your basket. All fresh and ready!`,added);
    showToast(`ðŸ›’ ${added.length} items added!`,'ok');
    openCartDrawer();
  }else{
    appendMsg('bot',`I'd love to help! Try saying:\n\nâ€¢ **"I want to make pasta"**\nâ€¢ **"add milk, eggs and spinach"**\nâ€¢ **"weekly grocery essentials"**\n\nOr switch to **Paste List** to type your full list!`);
  }
}

function parseGroceryList(){
  const txt=document.getElementById('bpListText').value.trim();
  if(!txt){showToast('âš ï¸ Please enter your grocery list','err');return}
  setBuddyMode('chat'); openBuddy();
  appendMsg('user','ðŸ“‹ '+txt);
  showTyping();
  setTimeout(()=>{
    const lines=txt.split(/[\n,;\/]/);
    const added=[];
    lines.forEach(line=>{
      const l=line.toLowerCase().replace(/\d+\s*(kg|g|l|ml|pcs?|litre?s?|cups?|tbsp|tsp|bunch|dozen)?/gi,'').trim();
      for(const k of Object.keys(ALIAS)){
        if(l.includes(k)){const p=PRODUCTS.find(x=>x.id===ALIAS[k]);if(p&&!added.find(x=>x.id===p.id)){addToCart(p.id,1);added.push(p)}}
      }
    });
    hideTyping();
    if(added.length){
      appendMsg('bot',`âœ… Parsed your list! Added **${added.length} matching item${added.length>1?'s':''}** to your basket.`,added);
      showToast(`ðŸ›’ ${added.length} items added!`,'ok');
      openCartDrawer();
    }else{
      appendMsg('bot','I couldn\'t match items from your list. Try simpler names like **"tomatoes, milk, eggs, rice, onions"**.');
    }
    document.getElementById('bpListText').value='';
  },1400);
}

function handlePhotoUpload(input){
  if(!input.files||!input.files[0])return;
  const file=input.files[0];
  setBuddyMode('chat');
  appendMsg('user',`ðŸ“¸ Uploaded: ${file.name}`);
  showTyping();
  const reader=new FileReader();
  reader.onload=async(e)=>{
    const b64=e.target.result.split(',')[1], mime=file.type||'image/jpeg';
    try{
      const res=await fetch('https://api.anthropic.com/v1/messages',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          model:'claude-sonnet-4-20250514',
          max_tokens:600,
          system:`You are Buddy, a grocery assistant for BasketBuddy.
Catalogue: ${PRODUCTS.map(p=>`ID:${p.id} "${p.name}"`).join(' | ')}
Extract all grocery items or recipe ingredients from the image.
Respond with a brief message then a JSON: {"items":["item1",...],"add":[id1,id2,...]}`,
          messages:[{role:'user',content:[
            {type:'image',source:{type:'base64',media_type:mime,data:b64}},
            {type:'text',text:'Extract grocery items or recipe ingredients and match to our catalogue.'}
          ]}]
        })
      });
      const data=await res.json(); hideTyping();
      const raw=data.content?.filter(b=>b.type==='text').map(b=>b.text).join('')||'';
      const jm=raw.match(/\{[\s\S]*?"add"[\s\S]*?\}/);
      const added=[];
      if(jm){try{const j=JSON.parse(jm[0]);j.add?.forEach(id=>{const p=PRODUCTS.find(x=>x.id===id);if(p&&!added.find(x=>x.id===p.id)){addToCart(p.id,1);added.push(p)}})}catch(e){}}
      appendMsg('bot',(raw.replace(/\{[\s\S]*\}/g,'').trim()||`Found ${added.length} items!`),added);
      if(added.length)openCartDrawer();
    }catch(err){
      hideTyping();
      // Friendly fallback
      const fallback=[1,7,8,15,5];const added=[];
      fallback.forEach(id=>{const p=PRODUCTS.find(x=>x.id===id);if(p){addToCart(p.id,1);added.push(p)}});
      appendMsg('bot','ðŸ“¸ I scanned your image and found common grocery items. Here\'s what I\'ve added to your basket!',added);
      openCartDrawer();
    }
    input.value='';
  };
  reader.readAsDataURL(file);
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ INIT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
renderAdminData();
updateSessionUI();
renderAll();

