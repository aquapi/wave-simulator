import { watch } from 'fs';
import { build } from './build.js';

const responseHtml = new Response(Bun.file('./build/index.html'));
const responseJs = new Response(Bun.file('./build/dist/index.js'));
const notFound = new Response(null, { status: 404 });

watch('src', build);

export default {
  fetch(req: Request) {
    const url = req.url,
      st = url.indexOf('/', 12) + 1,
      path = url.substring(st, url.indexOf('?', st) >>> 0);

    if (path === '')
      return responseHtml.clone();

    if (path === 'index.js')
      return responseJs.clone();

    return notFound;
  }
}
