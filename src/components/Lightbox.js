/** Full-screen image viewer used by the project screenshots. */
export const Lightbox = () => `
  <div id="lightbox" class="lightbox" hidden>
    <button id="lbClose" class="btn btn-pink" aria-label="Close image">✕ CLOSE</button>
    <img id="lbImg" alt="" />
  </div>`;
