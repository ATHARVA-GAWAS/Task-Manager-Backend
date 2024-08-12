const crypto = require('crypto');

// Generate a random 256-bit (32-byte) string
const secret = crypto.randomBytes(32).toString('hex');

console.log('JWT Secret:', secret);
