const express = require("express")
const {createApp} = require("../dist/main")

const renderer = require('vue-server-renderer').createRenderer()

const server = express();
server.use(express.json({limit: '50mb'}));

server.post("*", (req, res) => {
  const { app, router } = createApp(req.url);

  // set router's location
  router.push({name: req.body.template, params: {body: req.body}});

  router.getMatchedComponents();

  renderer.renderToString(app).then(html => {
    res.send(html)
  })
});

server.listen(8025, () => console.log("Started server"));
