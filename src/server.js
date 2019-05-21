const express = require("express")
const {createApp} = require("../dist/main")

const renderer = require('vue-server-renderer').createRenderer()

const server = express();

server.get("*", (req, res) => {
  // console.log(req.headers.referer)
  const { app, router } = createApp();
  // set router's location
  const print = router.push(req.url);
  console.log(print);

  router.push(req.url);
  router.getMatchedComponents();
  // console.log(router.history.current.path);

  //App.asyncData(store, router).then(() => {
  renderer.renderToString(app).then(html => {
    // console.log(html)
  res.end(html)
  })
  //})
});

server.listen(8087, () => console.log("Started server"));
