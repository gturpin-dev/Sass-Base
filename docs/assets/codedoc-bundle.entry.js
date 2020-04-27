import { getRenderer } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/home/guillaume/public_html/Sass-Base/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { reloadOnChange } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/serve/reload.js';reloadOnChange();
import { ToCPrevNext } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { GithubSearch } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { TabSelector } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/components/tabs/selector.js';
import { CollapseControl } from '/home/guillaume/public_html/Sass-Base/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';

const components = {
  'a5+vxDrvtLOyJkD/4tYTzg==': ToCPrevNext,
  'o9czcfztVQIKg4JwJg4JIw==': GithubSearch,
  'uNYl817/0zUcZq3pqSuTzQ==': ToCToggle,
  '7pOXsFsFyzuDTjT8tRN9fA==': DarkModeSwitch,
  'fO7eSbyAr7ut8Ng4msn1bw==': ConfigTransport,
  'ngKnvxQHTpwp9JalJWkimA==': TabSelector,
  'poRQkPIMF62imwhk0obfaQ==': CollapseControl
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
