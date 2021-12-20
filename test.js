cities =[
    'An Giang',              'Bà rịa – Vũng tàu', 'Bắc Giang',
    'Bắc Kạn',               'Bạc Liêu',          'Bắc Ninh',
    'Bến Tre',               'Bình Định',         'Bình Dương',
    'Bình Phước',            'Bình Thuận',        'Cà Mau',
    'Cần Thơ',               'Cao Bằng ',         'Đà Nẵng',
    'Đắk Lắk',               'Đắk Nông',          'Điện Biên',
    'Đồng Nai',              'Đồng Tháp',         'Gia Lai',
    'Hà Giang',              'Hà Nam',            'Hà Nội ',
    'Hà Tĩnh',               'Hải Dương',         'Hải Phòng',
    'Hậu Giang',             'Hòa Bình',          'Hưng Yên',
    'Khánh Hòa',             'Kiên Giang',        'Kon Tum',
    'Lai Châu',              'Lâm Đồng',          'Lạng Sơn',
    'Lào Cai',               'Long An',           'Nam Định',
    'Nghệ An',               'Ninh Bình',         'Ninh Thuận',
    'Phú Thọ',               'Phú Yên',           'Quảng Bình',
    'Quảng Nam',             'Quảng Ngãi',        'Quảng Ninh',
    'Quảng Trị',             'Sóc Trăng',         'Sơn La',
    'Tây Ninh',              'Thái Bình',         'Thái Nguyên',
    'Thanh Hóa',             'Thừa Thiên Huế',    'Tiền Giang',
    'Thành phố Hồ Chí Minh', 'Trà Vinh',          'Tuyên Quang',
    'Vĩnh Long',             'Vĩnh Phúc',         'Yên Bái'
  ]
  
  
  // _id
  // :
  // 61ba16d85f6dc3ffd9d1d899
  // addedBy
  // :
  // 61b5e15fbf47d63c05ee12d4
  // name
  // :
  // "Nguyen Van f"
  // idManagedScopeRef
  // :
  // 61b5e0febf47d63c05ee12d2
  // idRoleRef
  // :
  // 61b5e393bf47d63c05ee12d8
  // username
  // :
  // "vietnam1"
  // password
  // :
  // "123456"
  // completed
  // :
  // false
  // declarable
  // :
  // true
  // __v
  // :
  // 0
  
  
//   User.findOne({username:'010102'}).populate('idManagedScopeRef')
// .then(
//     user=>{
//         console.log(user)
//         scopes =[]
//         users =[]
//         for(i=1;i<6;i++){
//             newScope = new Scope({
//                 name:'tổ dân phố/làng '+i+' '+ user.idManagedScopeRef.name,
//                 belongToIdScopeRef:user.idManagedScopeRef._id,
//                 areaCode: user.username +'0'+i,
//                 typeOfScope:'village',
//                 _id:new ObjectId()
//             })
//             scopes.push(newScope)
//             newUser = new User({
//                 name: 'cán bộ tổ dân phố/làng '+i+' '+ user.idManagedScopeRef.name,
//                 addedBy: user._id,
//                 idManagedScopeRef: newScope._id,
//                 idRoleRef:"61b5e3cabf47d63c05ee12dc",
//                 username:user.username +'0'+i,
//                 password: '123456',
//                 completed:false,
//                 declarable: true
//             })
//             users.push(newUser)
//         }
//         return Promise.all([User.insertMany(users),Scope.insertMany(scopes)])
//     }
// ).then(re=>{
//    console.log(re)
// })
