const { createFamily, editFamily, deleteFamily, getInfoFamilyById } = require("../controllers/family");
const { changeHumanInfoWithId } = require("../controllers/human");
const auth = require("../middleware/auth");
const checkRoleToDeclareInfo = require("../middleware/checkRoleToDeclareInfo");
const checkRoleToViewScopeInfo = require("../middleware/checkRoleToViewScopeInfo");
const router= require('express').Router()

//add a family(no members)
router.post('/',[auth,checkRoleToDeclareInfo],createFamily)
//edit info of a family(not member of that family)
router.put('/:id',[auth,checkRoleToDeclareInfo],editFamily)
//delete info of family by id
router.delete('/:id',[auth,checkRoleToDeclareInfo],deleteFamily)
//get family by id
router.get('/:id',[auth],getInfoFamilyById)

module.exports= router
