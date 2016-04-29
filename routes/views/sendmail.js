var keystone = require('keystone');
var nodemailer = require("nodemailer");

exports = module.exports = function(req, res) {
	
	console.log(req.body);

	
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
