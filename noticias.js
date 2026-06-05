// ==========================================================================
// Notícias do GEPAEd — fonte única (home, página de notícias, página
// individual e eventos leem daqui). Para adicionar uma notícia, copie um
// bloco { ... } e edite. "evento:true" faz aparecer também em Eventos.
// ==========================================================================
window.GEPAED_NOTICIAS = [

  {
    id: "sediar-2027",
    dataLabel: "Junho de 2026",
    categoria: "Anúncio",
    evento: false,
    titulo: "Recife sediará o SEDiAr 2027",
    capa: "img/sediar_2027.jpg",
    capaPos: "center 52%",
    resumo: "A Dra. Sylvia De Chiaro anunciou que Recife receberá, em 2027, a 7ª edição do SEDiAr.",
    corpo: [
      "No encerramento do V Seminário Argumentação na Escola, a Dra. Sylvia De Chiaro anunciou que Recife receberá, em 2027, a 7ª edição do SEDiAr — Seminário Internacional de Estudos sobre Discurso e Argumentação.",
      "O SEDiAr é o principal evento acadêmico bienal do Brasil voltado a pesquisadores de linguagem, discurso e argumentação, reunindo a comunidade da área em torno dos estudos do discurso e da argumentação.",
      "Mais informações sobre inscrições, programação e local serão divulgadas em breve."
    ],
    links: []
  },

  {
    id: "v-seminario-2026",
    dataLabel: "Junho de 2026",
    categoria: "Evento",
    evento: true,
    titulo: "GEPAEd no V Seminário Argumentação na Escola",
    local: "Universidade Federal Fluminense (UFF)",
    capa: "img/vseminario_sae.jpg",
    resumo: "Encerramos com alegria a nossa participação no V Seminário Argumentação na Escola, no Rio de Janeiro.",
    corpo: [
      "Hoje, finalizamos nossa participação no V Seminário Argumentação na Escola. Podemos dizer que foi um prazer desfrutar desse espaço para diferentes discussões sobre um assunto que tanto nos interessa: a argumentação! Com mesas-redondas, oficinas, sessões de comunicação oral e painéis interativos, fechamos esse ciclo de apresentações com muita alegria. E, para fechar com chave de ouro, a sorte estava do nosso lado e nossos participantes foram protagonistas nos sorteios dos livros!",
      "Agradecemos imensamente à organização do @arg.na.escola e nos despedimos do Rio de Janeiro com muito carinho!"
    ],
    embedInstagram: "https://www.instagram.com/p/DZI8TUXD3C9/",
    links: [
      { t: "Ver no Instagram", u: "https://www.instagram.com/p/DZI8TUXD3C9/" },
      { t: "Mais fotos", u: "https://www.instagram.com/p/DZGjZOkERLI/" }
    ]
  }

];

// agenda de PRÓXIMOS eventos (futuros) — aparece só na página Eventos
window.GEPAED_AGENDA = [
  {
    dataLabel: "2027 · Recife",
    titulo: "SEDiAr 2027 — 7ª edição",
    descricao: "Seminário Internacional de Estudos sobre Discurso e Argumentação.",
    link: "noticia.html?id=sediar-2027"
  }
];

// cor de fundo por categoria (capa de fallback quando não há foto)
window.GEPAED_CAT_COR = {
  "Evento": "linear-gradient(135deg,#22406B,#15263F)",
  "Anúncio": "linear-gradient(135deg,#BE8F2C,#8a6a17)",
  "Publicação": "linear-gradient(135deg,#2E5A4F,#15263F)",
  "Prêmio": "linear-gradient(135deg,#4A3B6B,#15263F)",
  "default": "linear-gradient(135deg,#22406B,#15263F)"
};
