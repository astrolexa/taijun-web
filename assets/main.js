// 共用：手機選單、進場動畫、產品卡片、彈窗
document.querySelector('.menu-btn')?.addEventListener('click', () => {
  document.querySelector('.nav ul').classList.toggle('open');
});

const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.12 });
const observe = () => document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el));

const cardHTML = (p) => `
  <article class="card card-p" data-id="${p.id}">
    <div class="pic"><img src="${img(p.id)}" alt="${p.name}" loading="lazy"></div>
    <div class="info">
      <div class="tag">${p.tag}</div>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
    </div>
  </article>`;

const modal = document.getElementById('modal');
function openProduct(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p || !modal) return;
  modal.querySelector('img').src = img(p.id);
  modal.querySelector('img').alt = p.name;
  modal.querySelector('.eyebrow').textContent = catName(p.cat);
  modal.querySelector('h2').textContent = p.name;
  modal.querySelector('p').textContent = p.desc;
  modal.classList.add('open');
}
modal?.addEventListener('click', (e) => {
  if (e.target === modal || e.target.classList.contains('close')) modal.classList.remove('open');
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') modal?.classList.remove('open'); });
document.addEventListener('click', (e) => {
  const c = e.target.closest('.card-p');
  if (c) openProduct(c.dataset.id);
});

document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
