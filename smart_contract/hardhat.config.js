// https://eth-ropsten.alchemyapi.io/v2/XYZGOhz-DAaLXAtg7vc50zexXOwFQJ1N
// ff635a163762d9988445bc9bfa3664acfcf2809d9faaf7d0684007009a3f26a9
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/XYZGOhz-DAaLXAtg7vc50zexXOwFQJ1N',
      accounts: [
        'ff635a163762d9988445bc9bfa3664acfcf2809d9faaf7d0684007009a3f26a9'
      ]
    }
  }
};
