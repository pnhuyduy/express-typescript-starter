import moduleAlias from 'module-alias';
moduleAlias.addAliases({
  '@': `${__dirname}`,
});
import { App } from '@/app';

async function main() {
  const app = new App();
  app.listen();
}

main();
