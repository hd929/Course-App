import Course from '../models/Course.js'
import { mutipleMongooseToObject } from '../../util/mongoose.js'

class SiteController {
  // [GET] /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('home', { courses: mutipleMongooseToObject(courses) })
      })
      .catch((err) => {
        next(err)
      })
  }
}

export default new SiteController()
