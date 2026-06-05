// Navbar + rodapé compartilhados por todas as páginas do site GEPAEd
(function(){
  const BIB = "https://gabrielfortes-nees.github.io/biblioteca/";
  const links = [
    {h:"index.html", t:"Início"},
    {h:"quem-somos.html", t:"Quem somos"},
    {h:"equipe.html", t:"Equipe"},
    {h:"pesquisa.html", t:"Pesquisa"},
    {h:"conceitos-chave.html", t:"Conceitos-chave"},
    {h:"eventos.html", t:"Eventos"},
    {h:BIB, t:"Vitrine", cta:true, ext:true}
  ];
  const cur = location.pathname.split("/").pop() || "index.html";
  const nav = `<header class="topbar"><div class="wrap">
    <a class="brand" href="index.html"><img src="img/logo_simbolo.png" alt="GEPAEd">
      <span><b>GEPAEd</b><small>Argumentação na Educação</small></span></a>
    <button class="burger" id="gp-burger" aria-label="Abrir menu" aria-expanded="false">☰</button>
    <nav class="menu" id="gp-menu">${links.map(l=>`<a href="${l.h}" ${l.ext?'target="_blank" rel="noopener"':''} class="${l.cta?'cta':''}${(!l.ext&&l.h===cur)?' active':''}">${l.t}</a>`).join("")}</nav>
  </div></header>`;
  const foot = `<footer><div class="wrap">
    <img src="img/logo_full.png" alt="GEPAEd — Grupo de Estudo e Pesquisa em Argumentação na Educação">
    <div class="fr">Líder: <strong>Dra. Sylvia De Chiaro</strong> · UFPE<br>
      <a href="mailto:sylvia.chiaro@ufpe.br">sylvia.chiaro@ufpe.br</a> ·
      <a href="https://instagram.com/gepaed_" target="_blank" rel="noopener">@gepaed_</a> ·
      (81) 99954-3333</div>
  </div></footer>`;
  const n = document.getElementById("site-nav"); if(n) n.outerHTML = nav;
  const f = document.getElementById("site-footer"); if(f) f.outerHTML = foot;
  // menu mobile (hambúrguer)
  const b = document.getElementById("gp-burger"), m = document.getElementById("gp-menu");
  if(b && m){
    b.addEventListener("click", ()=>{
      const open = m.classList.toggle("open");
      b.setAttribute("aria-expanded", open);
    });
    m.addEventListener("click", e=>{ if(e.target.tagName==="A") m.classList.remove("open"); });
  }
})();
