const axios = require('axios');
const colors = require('colors');
const { internet } = require('faker');

const url = 'https://api.gh-polls.com/poll/01BZ5W4W0HFH6SR2ZQX3ES0APA/Atom/vote';
let ip = newIP();

function newIP() {
  return internet.ip();
}

(async function vote() {
  try {
    await axios.get(url, { headers: {'x-forwarded-for': ip } });
    console.log(colors.cyan(`ip: ${ip} status: success`));
  } catch (e) {
    console.log(colors.red(`ip: ${ip} status: fail`));
    console.log(colors.grey(`changing ip ...`));
    ip = newIP();
  }

  vote();
})();
