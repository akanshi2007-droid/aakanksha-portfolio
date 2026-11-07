import { esc } from '../utils/dom.js';
import { Icon } from './ui/Icon.js';

/** Photo window + pixel stickers + pop-up dialog on the right of the hero. */
export function HeroPhoto({ photo, dialog }) {
  return `
    <div class="photo-win">
      <div class="photo-frame">
        <div class="titlebar"><span>${esc(photo.windowTitle)}</span><span class="ctrl"><i></i><i></i></span></div>
        <div class="photo-stage">
          <div class="pdots"></div><div class="arc"></div>
          <div class="pcloud pc1"></div><div class="pcloud pc2"></div>
          <img class="me" src="${esc(photo.src)}" alt="${esc(photo.alt)}" width="${photo.width}" height="${photo.height}" />
          <p class="speech">${esc(photo.speech)}</p>
        </div>
      </div>
      ${Icon('cursor', 'pix pix-cur1')}
      ${Icon('cursor', 'pix pix-cur2')}
      ${Icon('gamepad', 'pix pix-pad')}
      ${Icon('folder', 'pix pix-folder')}
      ${Icon('heart', 'pix pix-heart')}
      ${Icon('daisy', 'pix pix-daisy')}
      <div class="dialog" id="dialog" role="group" aria-label="Pop-up question">
        <div class="dt"><span>${esc(dialog.title)}</span><i aria-hidden="true">x</i></div>
        <p id="dialogText" data-reply="${esc(dialog.noReply)}">${esc(dialog.question)}</p>
        <div class="dbtns"><a href="${esc(dialog.href)}" data-sfx>${esc(dialog.yes)}</a><button type="button" id="noBtn">${esc(dialog.no)}</button></div>
      </div>
    </div>`;
}
