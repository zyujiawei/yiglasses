var keystone = require('keystone');
var nodemailer = require("nodemailer");

exports = module.exports = function(req, res) {
	
	console.log(req.body);
	
	// create reusable transporter object using the default SMTP transport
	// var transporter = nodemailer.createTransport("SMTP",{
	//   host: "smtp.mxhichina.com", // 主机
	//   secure: true, // 使用 SSL
	//   port: 465, // SMTP 端口
	//   auth: {
	//     user: "customerservice@yiglasses.com", // 账号
	//     pass: "Tianyi2015" // 密码
	//   }
	// });
	
	var transporter = nodemailer.createTransport('smtps://customerservice%40yiglasses.com:Kefu2015@smtp.mxhichina.com');
	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: '<customerservice@yiglasses.com>', // sender address
	    to: 'customerservice@yiglasses.com', // list of receivers
	    subject: req.body.subject, // Subject line
	    text: '来自 '+req.body.email+' 的客户 '+req.body.name+' 说：\n' + req.body.message // plaintext body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);
	});
	res.end();
};
