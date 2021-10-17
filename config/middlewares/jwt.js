const jwt = require('jsonwebtoken');

module.exports.create_token = (userId)=> {
	console.log('process',process.env.SECRET_KEY)
	try {		
		return jwt.sign({
      		userId: userId,
    	}, 'akhil@123');
	}catch(err){
		console.log(err);
		return  err.message;
	}	
};


module.exports.isValidUser = async function (req,res,next){
	const userService = require("../../services/UserService");
	try {
		let token = req.query.token || req.body.token || req.headers['x-access-token'] || req.headers['authorization']  || req.headers['Authorization'];
		//console.log(token,"token");
		const data = await verify_token(token)		
		if(data){
			const isUserExisted = await userService.getUser(data.userId);
			if(isUserExisted){
				req.user = data;
				next();
			}else{
				return res.json({status:false,statusCode:401, message:"Not Authorized"});
			}
		}else{
			return res.json({status:false,statusCode:401, message:"Not Authorized"});
		}		
	}catch(err){
		console.log(err);
		return  err.message;
	}
};

