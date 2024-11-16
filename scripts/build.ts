import { relative } from 'path/posix';

export const build = async () => {
  console.log(`${(Math.random() * 100).toFixed(1)}: Building files...`);

  console.log(
    (await Bun.build({
      entrypoints: ['src/index.js'],
      outdir: 'build/dist',
      minify: true
    })).outputs[0].path
  );
}

build();
