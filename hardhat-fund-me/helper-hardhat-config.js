const networkConfig = {
    // chainId
    5: {
        name: "goerli",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e"
    },
    31337: {}
}

const developmentChains = ["hardhat", "localhost"]
const DECIMALS = 8
const INITIAL_ANSWER = 2000

module.exports = { networkConfig, developmentChains, DECIMALS, INITIAL_ANSWER }
