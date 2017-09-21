var user = require('../user.js');

const getName = (req,res,next) => {
   res.json(user.name);
}

const getLocation = (req, res, next) => {
res.json(user.location)
}

const getOccupations = (req, res, next) => {
  if(req.query.order){
    if(req.query.order==="desc"){
      res.json(user.occupations.sort())
    }
    else {
      res.json(user.occupations.sort().reverse())
    }
}
  return res.json(user.occupations)
}

const getOneOccupation = (req, res, next) => {
  return res.json({"latestOccupation" : user.occupations.slice(1)});
}

const getHobbies = (req, res, next) => {
  res.json(user.hobbies)
}

const getOneHobbie = (req, res, next) => {

  res.json(user.hobbies.filter( hobbies => hobbies.type === req.params.type))
}

const getFamily = (req, res, next) => {
  if (req.query.relation) {
  res.json(user.family.filter(family => family.relation === req.query.relation));
}
else {
    res.json(user.family);
}
}

const getFamilyGender = (req, res, next) => {
  res.json(user.family.filter(family => family.gender === req.params.gender));
}

const getRestaurant = (req, res, next) => {
  if(req.query.rating){
  res.json(user.restaurants.filter(restaurants => restaurants.rating === req.query.rating))
 } else{
  res.json(user.restaurants);
 }
}

const getRestName = (req, res, next) => {
  res.json(user.restaurants.filter(restaurants => restaurants.name === req.params.name))
}

const putName = (req, res, next) => {
      res.json({name: user.name = req.params.id})
}

const putLocation = (req, res, next) => {
  res.json({location: user.location = req.params.id})
}

const postHobbies = (req, res, next) => {
  user.hobbies.push(req.body)
  res.json(user).hobbies;
}

const postOcc = (req, res, next) => {
  user.occupations.push(req.body)
  res.json(user).occupations;
}

const postFamily = (req, res, next) => {
  user.family.push(req.body)
  res.json(user).family;
}

const postRest = (req, res, next) => {
  user.restaurants.push(req.body)
  res.json(user).restaurants;
}

const getSkills = (req, res, next) => {
  if(req.query.experience){
    return res.json(skills.filter(skill => skill.experience === req.query.experience))
  }
  res.json(skills);
}

const postSkills = (req, res, next) => {
   let id = skills.length + 1;
   skills.push({id: id, name: req.body.name,experience: req.body.experience});
   res.json(skills);
}






module.exports = {
  getName,
  getLocation,
  getOccupations,
  getOneOccupation,
  getHobbies,
  getOneHobbie,
  getFamily,
  getFamilyGender,
  getRestaurant,
  getRestName,
  putName,
  putLocation,
  postHobbies,
  postOcc,
  postFamily,
  postRest,
  getSkills,
  postSkills

}
