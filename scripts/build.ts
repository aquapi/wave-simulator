export const build = () => {
  console.log(`${(Math.random() * 100).toFixed(1)}: Building files...`);

  Bun.build({
    entrypoints: ['src/index.js'],
    outdir: 'build/dist',
  });
}

build();
