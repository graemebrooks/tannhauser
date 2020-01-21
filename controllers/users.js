const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
	signup,
	login,
	search
};

async function login(req, res) {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) return res.status(401).json({ err: 'bad credentials' });
		user.comparePassword(req.body.pw, (err, isMatch) => {
			if (isMatch) {
				const token = createJWT(user);
				res.json({ token });
			} else {
				return res.status(401).json({ err: 'bad credentials' });
			}
		});
	} catch (err) {
		return res.status(401).json(err);
	}
}

async function signup(req, res) {
	const user = new User(req.body);
	try {
		await user.save();
		console.log(`User Signed up: ${user}`);
		const token = createJWT(user);
		res.json({ token });
	} catch (err) {
		// Probably a duplicate email
		res.status(400).json(err);
	}
}

async function search(req, res) {
	try {
		users = await User.find({ name: { $regex: req.body.name, $options: 'i' } }, function(err, docs) {});
		res.status(200).json(users);
	} catch (err) {
		res.status(400).json(err);
	}
}

/*--- helper functions ---*/

function createJWT(user) {
	return jwt.sign({ user }, SECRET, { expiresIn: '24h' });
}
