const userResolvers = require('./users');
const postResolvers = require('./post');
const commentResolvers = require('./comment');

module.exports = [userResolvers, postResolvers, commentResolvers];
