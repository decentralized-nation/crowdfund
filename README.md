# CrowdFund

An [Ethereum](https://www.ethereum.org/) based Crowd Funding Platform for the Entrepreneurs :fire:

## Getting Started

Getting started with the `CrowdFund` is easy.

First clone the project.

```sh
git clone https://github.com/decentralized-nation/crowdfund
```

Now head over to our [issue board](https://github.com/decentralized-nation/crowdfund/issues) and help solving :angel: 

### Prerequisites

`CrowdFund` uses [Solidity](https://solidity.readthedocs.io/en/v0.4.17/) to logic the smart contracts.

### Configurations

We use a Single Run Compilation script to compile the solc code.

```js
const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}
```

## Running the tests

[Mocha](https://mochajs.org/) is our friendly :blush: test framework used for testing.

To run the test use the following commant.

```sh
npm run test
```

## Deployment

Under documentation.

## Built With

* [Solidity](https://solidity.readthedocs.io/en/v0.4.17/) - The lang of smart contratcs.
* [React](https://infura.io/) - The Client side framework used.
* [Infura](https://reactjs.org/) - Used to deploy the contracts to networks.

## Contributing

Please read [CODE_OF_CONDUCT.md](https://github.com/decentralized-nation/crowdfund/blob/master/CODE_OF_CONDUCT.md) for details on our code of conduct, and the process for submitting pull requests to us.


## Authors

* **Devin Herath** - *Initial work* - [PurpleBooth](https://github.com/DevDHera)

See also the list of [contributors](https://github.com/decentralized-nation/crowdfund/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/decentralized-nation/crowdfund/blob/master/LICENSE) file for details.

## Acknowledgments

* [PurpleBooth](https://github.com/PurpleBooth) for this awesome README template :heart:
