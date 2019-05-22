const express = require("express")
const {createApp} = require("../dist/main")

const renderer = require('vue-server-renderer').createRenderer()

const server = express();
server.use(express.json({limit: '50mb'}));

server.get("*", (req, res) => {
  // console.log(req.headers.referer)
  const { app, router } = createApp(req.url);
  // set router's location
  // const print = router.push(req.body.url);
  const print = router.push({name: 'Home', params: {body: req.body.url}});
  // console.log(print);

  // router.push(req.url);
  router.getMatchedComponents();
  // console.log(router.history.current.path);

  //App.asyncData(store, router).then(() => {
  renderer.renderToString(app).then(html => {
    // console.log(html)
    res.send(html)
  })
  //})
});

server.listen(8087, () => console.log("Started server"));
