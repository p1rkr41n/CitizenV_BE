const { getInfoHumanWithId, removeHumanInfoById, getInfoHumen, createHuman, changeHumanInfoWithId } = require('../controllers/human')
const auth = require('../middleware/auth')
const checkRoleToAddUser = require('../middleware/checkRoleToAddUser')
const checkRoleToDeclareInfo = require('../middleware/checkRoleToDeclareInfo')
const checkRoleToViewScopeInfo = require('../middleware/checkRoleToViewScopeInfo')
const router = require('express').Router()

//get infomation of a human {_id}
router.get('/:id',[auth],getInfoHumanWithId)
//get humans that loggedInUser manage(idTemporaryResidenceAddressRef)
router.get('/',[auth],getInfoHumen)
//delete info human{id} of family has id= req.query.idFamily
router.delete('/:id',[auth,checkRoleToDeclareInfo],removeHumanInfoById)
//add mamber of family{idFamily(save in req.query)}
router.post('/',[auth,checkRoleToDeclareInfo],createHuman)
//edit info of human{id} of family{:idFamily(in req.query)}
router.put('/:id',[auth,checkRoleToDeclareInfo],changeHumanInfoWithId)





module.exports =router