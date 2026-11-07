/** Click a project screenshot to view it full-size. Esc, backdrop click or CLOSE button closes it. */
import { $, $$ } from '../utils/dom.js';

export function initLightbox() {
  const box = $('#lightbox');
  const img = $('#lbImg');
  const closeBtn = $('#lbClose');

  const close = () => { box.hidden = true; img.src = ''; };

  $$('[data-gallery] .shot').forEach(fig => {
    fig.tabIndex = 0;
    fig.setAttribute('role', 'button');
    const open = () => {
      const pic = $('img', fig);
      if (!pic || pic.style.display === 'none' || !pic.complete || !pic.naturalWidth) return;
      img.src = pic.src;
      img.alt = pic.alt;
      box.hidden = false;
      closeBtn.focus();
    };
    fig.addEventListener('click', open);
    fig.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });

  closeBtn.addEventListener('click', close);
  box.addEventListener('click', e => { if (e.target === box) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !box.hidden) close(); });
}
