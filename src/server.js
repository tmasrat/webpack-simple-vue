const express = require("express")
const {createApp} = require("../dist/main")

const renderer = require('vue-server-renderer').createRenderer()

const server = express();

server.get("*", (req, res) => {
  // console.log(req.headers.referer)
  const { app, store, App, router } = createApp();
  // console.log(store)
  // console.log(router.history.current.path);

  App.asyncData(store, router).then(() => {
    renderer.renderToString(app).then(html => {
      // console.log(html)
      res.end(html)
    })
  })
});

server.listen(8087, () => console.log("Started server"))
