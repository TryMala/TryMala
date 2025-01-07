module.exports = (ctx) => ({
    plugins: {
      '@fullhuman/postcss-purgecss': ctx.env === 'production' ? {
        content: ["./hugo_stats.json"],
        defaultExtractor: (content) => {
          const els = JSON.parse(content).htmlElements;
          return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])];
        },
        safelist: [
          /dark/,
          /^swiper-/,
          /collapsing/,
          /show/,
          /[aria-expanded=true]/,
          /[aria-expanded=false]/,
          /^lb-/,
          /^gl/,
          /^go/,
          /^gc/,
          /^gs/,
          /^gi/,
          /^desc/,
          /^zoom/,
          /dragging/,
          /fullscreen/,
          /loaded/,
          /visible/,
          /current/,
          /active/,
        ]
      } : false
    }
  });