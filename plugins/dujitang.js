const Bot = require('../modules/bot');
const axios = require('axios').default;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


class Plugin extends Bot {
  constructor () {
    super();
    this.API = 'https://api.qinor.cn/soup/';
    if (process.env.plug_disabled === 'true') this.exit();
  }
  run () {
    axios.get(this.API).then(res => {
      this.sendMarkdown(`> 🌺🐔来碗毒鸡汤\n\n${res.data}`);
    })
  }
}

new Plugin().run();
