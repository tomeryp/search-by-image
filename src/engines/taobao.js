import {findNode} from 'utils/common';
import {setFileInputData, initSearch, sendReceipt} from 'utils/engines';

const engine = 'taobao';

async function search({task, search, image, storageKeys}) {
  const button = await findNode('div.drop-wrapper', {timeout: 120000});

  const inputSelector = 'input#J_IMGSeachUploadBtn';
  const input = await findNode(inputSelector);
  input.addEventListener('click', ev => ev.preventDefault(), {
    capture: true,
    once: true
  });

  button.click();

  await setFileInputData(inputSelector, input, image);

  await sendReceipt(storageKeys);

  input.dispatchEvent(new Event('change'));
}

function init() {
  initSearch(search, engine, sessionKey);
}

init();
