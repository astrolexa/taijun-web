// 產品資料：新增產品只要在這裡加一筆，首頁與產品頁會自動顯示
const CATEGORIES = [
  { id: 'ball',    name: '沐浴球',   en: 'Bath Sponge', img: 'p-double' },
  { id: 'towel',   name: '沐浴巾',   en: 'Bath Towel',  img: 'p-jacquard' },
  { id: 'glove',   name: '沐浴手套', en: 'Bath Glove',  img: 'p-cglove' },
  { id: 'soapbag', name: '香皂袋',   en: 'Soap Bag',    img: 'p-soapbag' },
  { id: 'net',     name: '濾水網',   en: 'Filter Net',  img: 'p-cnet' },
];

const PRODUCTS = [
  { id: 'double',   cat: 'ball',    name: '雙層沐浴球',     tag: '熱銷', desc: '雙層網面設計，搓揉即起綿密泡沫，柔軟不刺激。' },
  { id: 'edge',     cat: 'ball',    name: '車邊沐浴球',     tag: '',     desc: '精緻車邊收尾，耐用不易散開，莫蘭迪配色。' },
  { id: 'geo',      cat: 'ball',    name: '幾何沐浴球',     tag: '新品', desc: '幾何印花網布，清透色系，讓沐浴更有質感。' },
  { id: 'spring',   cat: 'ball',    name: '春雨沐浴球',     tag: '四季', desc: '四季系列・春。清新水藍，如春雨般溫柔潔淨。' },
  { id: 'summer',   cat: 'ball',    name: '初夏沐浴球',     tag: '四季', desc: '四季系列・夏。暖橘色調，活力滿點。' },
  { id: 'maple',    cat: 'ball',    name: '楓紅沐浴球',     tag: '四季', desc: '四季系列・秋。浪漫楓紅，細緻起泡。' },
  { id: 'winter',   cat: 'ball',    name: '冬雪沐浴球',     tag: '四季', desc: '四季系列・冬。冬雪藍白，純淨舒適。' },
  { id: 'fruit',    cat: 'ball',    name: '水果沐浴球',     tag: '',     desc: '繽紛水果印花，大人小孩都喜歡。' },
  { id: 'orange',   cat: 'ball',    name: '柳橙沐浴球',     tag: '水果', desc: '水果系列。柳橙印花，香甜好心情。' },
  { id: 'grape',    cat: 'ball',    name: '葡萄沐浴球',     tag: '水果', desc: '水果系列。葡萄印花，清爽可愛。' },
  { id: 'melon',    cat: 'ball',    name: '西瓜沐浴球',     tag: '水果', desc: '水果系列。西瓜印花，夏日必備。' },
  { id: 'jacquard', cat: 'towel',   name: '緹花沐浴巾',     tag: '',     desc: '立體緹花織紋，溫和去角質，觸感細緻。' },
  { id: 'ctowel',   cat: 'towel',   name: '竹炭沐浴巾',     tag: '竹炭', desc: '添加竹炭纖維，經典黑白條紋與格紋。' },
  { id: 'nordic',   cat: 'towel',   name: '北歐森林洗澡巾', tag: '新品', desc: '北歐配色，加長設計，掛起來也是風景。' },
  { id: 'baby',     cat: 'towel',   name: '嬰兒肌拉背巾',   tag: '',     desc: '雙把手設計，輕鬆清潔背部，柔軟如嬰兒肌。' },
  { id: 'twist',    cat: 'towel',   name: '麻花捲拉背巾',   tag: '',     desc: '麻花捲造型，加強摩擦力，背部潔淨更徹底。' },
  { id: 'cglove',   cat: 'glove',   name: '竹炭沐浴手套',   tag: '竹炭', desc: '五指設計貼合手型，竹炭纖維，好搓好洗。' },
  { id: 'pglove',   cat: 'glove',   name: '印花沐浴手套',   tag: '',     desc: '繽紛印花，細緻網面，溫和去角質。' },
  { id: 'soapbag',  cat: 'soapbag', name: '竹炭香皂袋',     tag: '竹炭', desc: '束口設計，香皂放入輕鬆搓出細緻泡沫，延長香皂壽命。' },
  { id: 'cnet',     cat: 'net',     name: '竹炭濾水網 120入', tag: '竹炭', desc: '潔の秘笈系列。180度極細孔洞，乾淨到連魚都游得過。' },
  { id: 'net',      cat: 'net',     name: '極細目濾水網 120入', tag: '',  desc: '潔の秘笈系列。流理台、排水孔專用，廚餘清理好輕鬆。' },
];

const img = (id) => `assets/img/p-${id}.jpg`;
const catName = (id) => (CATEGORIES.find((c) => c.id === id) || {}).name || '';
