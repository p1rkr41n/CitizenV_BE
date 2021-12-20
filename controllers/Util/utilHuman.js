const { formatAddress } = require("./utilAddress")

exports.formatHumanInfo = (human) => {
    const data ={
        // name:human.name,
        cardId:human.cardId,
        birth:human.birth,
        job:human.job,
        religion:human.religion,
        gender:human.gender,
        hometown:human.hometown,
        educationalLevel:human.educationalLevel,
        permanentAddress:formatAddress(human.idPermanentAddressRef),}
        if(human.idTemporaryResidenceAddressRef)
        data.idTemporaryResidenceAddressRef =formatAddress(human.idTemporaryResidenceAddressRef)
        return data
}
