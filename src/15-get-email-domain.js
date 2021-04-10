/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const rev = email.split('').reverse().join('');
  const index = rev.indexOf('@');
  const domain = rev.slice(0, index).split('').reverse().join('');
  return domain;
}

module.exports = getEmailDomain;
