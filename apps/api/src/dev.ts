import { buildApp } from "./buildApp";

(async () => {
  const app = await buildApp();

  app.listen(8000, () => {
    console.log(`api started on 8000`);
  });
})();
