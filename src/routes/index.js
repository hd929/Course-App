function route(app) {
  app.get('/', (req, res) => {
    res.render('home')
  })
}

export default route
