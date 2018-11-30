import Mock from 'mockjs'

Mock.mock('/api/v1/users/logout',{
	'errorcode':4001
})
Mock.mock('/api/v1/users/login',{
	'errorcode':1001,
	'id':'001'
})
Mock.mock(RegExp('/api/v1/books' + "*"),{
	'total':5,
	books:[
		{
			'name':'bb',
			'author':'bb',
			'publishAt':'bb'
		},
		{
			'name':'bb',
			'author':'bb',
			'publishAt':'bb'
		}
	]
	
})

// Mock.mock(RegExp('/api/v1/users'+"*"),{
// 	'total':5,
// 	'users':[
// 		{
// 			'name':'bb',
// 			'nickname':'bb',
// 			'sex':1,
// 			'email':'bb',
// 			'addr':'bb'
// 		}
// 	]
// })
