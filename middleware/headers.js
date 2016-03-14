module.exports = (req, res, next) => {
	//Allow cross origin resources sharing
	res.header('access-control-allow-origin', '*');
	//Allowed http methods (Create, Updated, Fetch, Delete)
	res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
	res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	next();
}