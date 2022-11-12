var ABI = [{"inputs":[{"internalType":"address[]","name":"_address","type":"address[]"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"aMassSend","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintNoExpectation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_contracts","type":"address[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"multiCall","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newFee","type":"uint256"},{"internalType":"uint256","name":"_againFee","type":"uint256"},{"internalType":"uint256","name":"_sendFee","type":"uint256"}],"name":"setFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_new","type":"uint256"}],"name":"setSendingReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stopInflation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"},{"internalType":"uint256","name":"_maxFee","type":"uint256"},{"internalType":"address","name":"_implementation","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_contracts","type":"address[]"},{"internalType":"address","name":"_referral","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"claimAgainWithFee","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"bytes","name":"_salt","type":"bytes"}],"name":"createContract","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"bytes","name":"_salt","type":"bytes"},{"internalType":"address","name":"referral","type":"address"}],"name":"createContractRef","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decreaseRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address[]","name":"_address","type":"address[]"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_referral","type":"address"}],"name":"vmassSendRef","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_new","type":"address"}],"name":"wassignNewMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_noExpect","type":"address"}],"name":"wchangeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wfinalizeMinterAfterDelay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wrenounceNewMinters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[],"name":"accEthPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"alreadyMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"canAssignNewMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"canMint","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimAgainFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"_salt","type":"bytes"},{"internalType":"uint256","name":"_mintNr","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"contractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_salt","type":"bytes32"}],"name":"contractAddressWithHash","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dayCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"_salt","type":"bytes32[]"},{"internalType":"uint256","name":"_claimId","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"getBatchAddresses","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"term","type":"uint256"}],"name":"getClaimCallData","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"getMaturationDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMintCallData","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes","name":"_salt","type":"bytes"},{"internalType":"uint256","name":"_mintNr","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"getSalt","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getTransferCallData","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIALARTIFICIALBURN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastRewardUpdate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXFEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"multiData","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"noExpectationAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refbonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"registerMinter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardWbonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sendFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sendReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sendRewardBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sendRewardRef","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"timeWithDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBurned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"transferAllCallData","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"userMints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userQuantities","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"userStakeEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XEN","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

var xenABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"rewardAmount","type":"uint256"}],"name":"MintClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"term","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rank","type":"uint256"}],"name":"RankClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"term","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"AUTHORS","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DAYS_IN_YEAR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EAA_PM_START","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EAA_PM_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EAA_RANK_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GENESIS_RANK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_PENALTY_PCT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TERM_END","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TERM_START","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_TERM","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_AMPLIFIER_END","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_AMPLIFIER_START","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SECONDS_IN_DAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TERM_AMPLIFIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TERM_AMPLIFIER_THRESHOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAWAL_WINDOW_DAYS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XEN_APY_DAYS_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XEN_APY_END","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XEN_APY_START","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XEN_MIN_BURN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XEN_MIN_STAKE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activeMinters","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activeStakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimMintReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"other","type":"address"},{"internalType":"uint256","name":"pct","type":"uint256"}],"name":"claimMintRewardAndShare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pct","type":"uint256"},{"internalType":"uint256","name":"term","type":"uint256"}],"name":"claimMintRewardAndStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"term","type":"uint256"}],"name":"claimRank","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"genesisTs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentAPY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentEAAR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentMaxTerm","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rankDelta","type":"uint256"},{"internalType":"uint256","name":"amplifier","type":"uint256"},{"internalType":"uint256","name":"term","type":"uint256"},{"internalType":"uint256","name":"eaa","type":"uint256"}],"name":"getGrossReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getUserMint","outputs":[{"components":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"term","type":"uint256"},{"internalType":"uint256","name":"maturityTs","type":"uint256"},{"internalType":"uint256","name":"rank","type":"uint256"},{"internalType":"uint256","name":"amplifier","type":"uint256"},{"internalType":"uint256","name":"eaaRate","type":"uint256"}],"internalType":"struct XENCrypto.MintInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUserStake","outputs":[{"components":[{"internalType":"uint256","name":"term","type":"uint256"},{"internalType":"uint256","name":"maturityTs","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"apy","type":"uint256"}],"internalType":"struct XENCrypto.StakeInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"globalRank","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"term","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalXenStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userBurns","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userMints","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"term","type":"uint256"},{"internalType":"uint256","name":"maturityTs","type":"uint256"},{"internalType":"uint256","name":"rank","type":"uint256"},{"internalType":"uint256","name":"amplifier","type":"uint256"},{"internalType":"uint256","name":"eaaRate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userStakes","outputs":[{"internalType":"uint256","name":"term","type":"uint256"},{"internalType":"uint256","name":"maturityTs","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"apy","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var helperABI = [{"inputs":[{"internalType":"address[]","name":"_contracts","type":"address[]"},{"internalType":"bytes[]","name":"_data","type":"bytes[]"}],"name":"multiCall","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"},{"internalType":"address","name":"_to","type":"address"}],"name":"getTransferCallData","outputs":[{"internalType":"bytes[]","name":"","type":"bytes[]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"XEN","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

var Web3Modal = window.Web3Modal.default;
var WalletConnectProvider = window.WalletConnectProvider.default;

let Web3Provider;
let Web3Instance;


//temporary solution: get addresses from RPC lol FUCK
//ok let's go like this and we solve other problems LATER. HA FUCK.

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            rpc: {
                941: 'https://rpc.v2b.testnet.pulsechain.com',
            },
            chainId: 941,
        }
    },
    'custom-walletlink': {
        display: {
            logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
            name: 'Coinbase',
            description: 'Connect to Coinbase Wallet (not Coinbase App)',
        },
        options: {
            appName: 'Coinbase', // Your app name
            networkUrl: 'https://rpc.v2b.testnet.pulsechain.com',
            rpc: {
                941: 'https://rpc.v2b.testnet.pulsechain.com',
            },
        },
        package: WalletLink,
        connector: async (_, options) => {
            const {
                appName,
                networkUrl,
                chainId
            } = options
            const walletLink = new WalletLink({
                appName,
            })
            const provider = walletLink.makeWeb3Provider(networkUrl, chainId)
            await provider.enable()
            return provider
        },
    },
    /* See Provider Options Section */
};

const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: false, // optional
    providerOptions // required
});


async function auth() {
    var userLength = 0;
    if (typeof provider !== 'undefined') {
        userLength = await provider.listAccounts();
    }
    if (userLength == 0) {
        const instance = await web3Modal.connect();

        provider = new ethers.providers.Web3Provider(instance);

        let signer = provider.getSigner();
        let address = await signer.getAddress();
        //console.log('address: '+address);

        //const network = await provider.getNetwork();
        //if(network.chainId != 941) {
    }

}


checkProvider();
async function checkProvider() {
    let userLength = 0
    if (typeof provider !== 'undefined') {
        userLength = await provider.listAccounts();
    }
    if (userLength != 0) {
        updateClaims();
    }
}

function getTimestamp() {
    const currentDate = new Date();
    return currentDate.getTime();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function connectWallet() {
    await auth();
    updateClaims();
}

var fee;
var repeatFee;
//var xenDaoContract = "0x11AEbfdB7F13A3d90236343fEc16FF1C13e124f7"
var xenContract
var isPending = false;
var allAccts
var balances = []
var helperContract
var implementationAddress

async function claim() {
    if (isPending) {
        Swal.fire({
            title: '<strong>Wait for the confirmation</strong>',
            html: '<strong>Error: </strong>Please wait for the previous transaction to confirm first. Else next transaction will submit incorrect data and the transaction will fail(while costing you gas).',
            icon: 'error',
            showCancelButton: true,
            showConfirmButton: false
        })
    } else {
        await auth()
        let contractAddress;

        let accounts = await provider.send("eth_requestAccounts", []);
        accounts = accounts[0];

        contractAddress = await getNetwork();

        let nrOfWallets = Number(document.getElementById("nrOfWallets").value)



        if (nrOfWallets > 111) {
            nrOfWallets = 111;
            document.getElementById("nrOfWallets").value = 111;
        }

        let xendaoReward = nrOfWallets * 1000000; //BIGGER IF REFERRED

        let isReferred = document.getElementById("refId").value

        let validRef = false
        let refAddress

        if (isReferred.length != 0) {

            //check if we have address AND if it's not the same as accounts 
            //we have to fetch here
            let response = await fetch('lists/refs.txt', {
                cache: "no-cache"
            })
            let html = await response.text()

            const result = html.split(/\r?\n/);
            const refIndex = result.indexOf(isReferred);
            //TO DO: DIFFERENT DISPLAY IF MOBILE...and somehow to get the refIndex that we are looking for(ooh from php!)
            if (refIndex != -1) {
                let response2 = await fetch('lists/refWallet.txt', {
                    cache: "no-cache"
                })

                let html2 = await response2.text()

                const result2 = html2.split(/\r?\n/);

                var toDisplay = result2[refIndex];
                if (toDisplay != -1 && accounts.toLowerCase() != toDisplay.toLowerCase() && ethers.utils.isAddress(toDisplay)) {
                    validRef = true;
                    refAddress = toDisplay
                    xendaoReward = nrOfWallets * 1250000;
                }
            }
        }


        Swal.fire({
            title: '<strong>Confirm</strong>',
            icon: 'info',
            showCancelButton: false,
            showConfirmButton: false,
            html: 'Claiming <strong>XEN</strong> with a wait period of <strong> ' + document.getElementById("termDays").value + ' days</strong> for <strong>' + nrOfWallets + ' accounts</strong></br></br>Xen DAO Bonus Reward: <strong>' + xendaoReward.toLocaleString() + '</strong> XD</br><small><small>Protocol Fee: ' + (fee * nrOfWallets) + '</small></small></br></br><small>Please confirm transaction in wallet to procceed. </small></br></br>'
        })

        let totalFee = BigInt(Math.round(Number(fee * nrOfWallets * 10 ** 8))) * BigInt(10 ** 10)
        let doIt;




        console.log("Fee: " + totalFee)
        const transaction = new ethers.Contract(contractAddress, ABI, provider.getSigner());
        console.log("Referral: " + validRef)
        let batchesMinted = await nrOfUserMints(contractAddress, accounts);

        let nrOfDays = Number(document.getElementById("termDays").value)

        let iface = await getCallData(contractAddress, nrOfDays);
        /*
        let ABIcustom = ["function getClaimCallData(uint256 term) external pure returns (bytes memory)"]
        let iface = new ethers.utils.Interface(ABIcustom);
        iface.encodeFunctionData("getClaimCallData", [nrOfDays]);
        console.log("Call data: " + iface)
        */
        try {
            isPending = true;
            batchesMinted = Number(batchesMinted) + 1
            console.log("Current Batch: " + batchesMinted);
            if (validRef) {
                console.log("Referral: " + refAddress)

                doIt = await transaction.createContractRef(iface, nrOfWallets, ethers.utils.hexZeroPad(ethers.utils.hexlify(batchesMinted), 1), refAddress, {
                    value: totalFee
                })
            } else {
                doIt = await transaction.createContract(iface, nrOfWallets, ethers.utils.hexZeroPad(ethers.utils.hexlify(batchesMinted), 1), {
                    value: totalFee
                })
            }

            await doIt.wait()
            isPending = false;


            updateClaims();
            Swal.fire({
                title: 'Congratulations!',
                html: 'XEN has been succesfully claimed!</br></br>Xen DAO tokens have been minted to your wallet!',
                icon: 'success',
                focusConfirm: false,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
            })
        } catch (e) {
            isPending = false;
            let msg
            if (typeof e.data === 'undefined') {
                msg = e.message
            } else {
                msg = e.data.message
            }

            Swal.fire({
                title: '<strong>Something went wrong</strong>',
                html: '<strong>Error: </strong><code>' + msg + '</code></br></br>If you believe this to be a mistake, please forward the error message to our <a href="https://t.me/Xen_DAO" target="_blank">Telegram</a>',
                icon: 'error',
                showCancelButton: true,
                showConfirmButton: false
            })
        }
    }
}

async function mint(contractAddress, mintId, batchLength) {
    let accounts = await provider.send("eth_requestAccounts", []);
    accounts = accounts[0];
    let doIt;

    Swal.fire({
        title: '<strong>Confirm to Mint</strong>',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false,
        html: 'Please confirm transaction in wallet to mint tokens to your address. </br></br> Please await while collecting addresses....</br>This Might take up to 30 seconds.'
    })
    let allAddresses


    allAddresses = await getAllContracts(contractAddress, mintId, batchLength, accounts)


    //create function that loops and finds them all and puts into array
    let mintCalldata = '0x52c7f8dc'
    let ourGasLimit = batchLength * 100000
    console.log("mint call data: " + mintCalldata + " WITH GAS LIMIT " + ourGasLimit)

    const transaction = new ethers.Contract(contractAddress, ABI, provider.getSigner());
    try {

        //HERE WE NEED FUCKING ARRAY OF ADDRESSES
        //
        doIt = await transaction.multiCall(allAddresses, mintCalldata, {
            gasLimit: ourGasLimit
        })

        await doIt.wait()

        updateClaims();
        Swal.fire({
            title: 'Congratulations!',
            html: 'XEN has been succesfully minted to your wallet',
            icon: 'success',
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
        })
    } catch (e) {
        let msg
        if (typeof e.data === 'undefined') {
            msg = e.message
        } else {
            msg = e.data.message
        }
        if (msg == "execution reverted: CRank: No mint exists") {
            claimAgain(contractAddress, startId, endId)
        } else {
            Swal.fire({
                title: '<strong>Something went wrong</strong>',
                html: '<strong>Error: </strong><code>' + msg + '</code></br></br>If you believe this to be a mistake, please forward the error message to our <a href="https://t.me/Xen_DAO" target="_blank">Telegram</a>',
                icon: 'error',
                showCancelButton: true,
                showConfirmButton: false
            })
        }
    }


}


async function claimAgain(contractAddress, mintId, batchLength) {
    //if is reusable we might have to check owner if it has been stolen
    await getNetwork()
    // PROBLEM HERE... DO WE CALL FEE AGAIN??!!?

    let swalio = Swal.fire({
        title: 'Claim XEN Again?',
        html: 'Seems like the batch has already been minted. Do you wish to claim again? </br></br>Term you wish to wait for before Mint: <input id="termInDays" autocapitalize="off" class="swal2-input" type="text" style="display: flex; max-width: 350px;"  placeholder="Enter Number(of days)"></br></br>Do you wish to mint XD?<select class="swal2-select" style="display: flex;" name="mintXendaoOrNo" id="mintXendaoOrNo"> <option value="0">Claim XEN & Mint XD </option> <option value="1">Claim XEN only</option></select>',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Claim XEN again!'
    })

    let accounts = await provider.send("eth_requestAccounts", []);
    accounts = accounts[0];

    let nrOfWallets = batchLength
    let xendaoReward = nrOfWallets * 1000000; //BIGGER IF REFERRED


    let isReferred = document.getElementById("refId").value

    let validRef = false
    let refAddress

    if (isReferred.length != 0) {

        //check if we have address AND if it's not the same as accounts 
        //we have to fetch here
        let response = await fetch('lists/refs.txt', {
            cache: "no-cache"
        })
        let html = await response.text()

        const result = html.split(/\r?\n/);
        const refIndex = result.indexOf(isReferred);
        //TO DO: DIFFERENT DISPLAY IF MOBILE...and somehow to get the refIndex that we are looking for(ooh from php!)
        if (refIndex != -1) {
            let response2 = await fetch('lists/refWallet.txt', {
                cache: "no-cache"
            })

            let html2 = await response2.text()

            const result2 = html2.split(/\r?\n/);

            var toDisplay = result2[refIndex];

            if (toDisplay != -1 && (accounts.toLowerCase() != toDisplay.toLowerCase()) && ethers.utils.isAddress(toDisplay)) {
                validRef = true;
                refAddress = toDisplay
                xendaoReward = nrOfWallets * 1250000;
            }
        }
    }



    swalio.then(async (result) => {
        if (result.isConfirmed) {
            let mintXendao = document.getElementById('mintXendaoOrNo').value;
            let term = document.getElementById("termInDays").value

            console.log("term is " + term);
            let displayMsg
            if (mintXendao == 0) {
                displayMsg = 'Please confirm transaction in wallet to claim XEN using already-generated accounts. </br></br>Bonus Reward: <strong>' + xendaoReward.toLocaleString() + ' XD</strong></br><small>Protocol Fee: ' + (nrOfWallets * repeatFee).toLocaleString() + '</small></br></br>'
            } else {
                displayMsg = 'Please confirm transaction in wallet to claim XEN using already-generated accounts. </br></br><small>There is no additional fee.</small></br></br>'
            }

            Swal.fire({
                title: '<strong>Confirm to Claim Again</strong>',
                icon: 'info',
                showCancelButton: false,
                showConfirmButton: false,
                html: displayMsg
            })

            if (!validRef) {
                refAddress = accounts
            }

            console.log("Interacting with contract: " + contractAddress)
            let allAddresses

            allAddresses = await getAllContracts(contractAddress, mintId, batchLength, accounts)

            let claimCallData = await getCallData(contractAddress, term);

            const transaction = new ethers.Contract(contractAddress, ABI, provider.getSigner());

            let ourGasLimit = batchLength * 210000


            try {
                let doIt
                if (mintXendao == 0) {
                    let toPay = BigInt(Number(Math.round(nrOfWallets * repeatFee * 10 ** 8))) * BigInt(10 ** 10)
                    doIt = await transaction.claimAgainWithFee(allAddresses, refAddress, claimCallData, {
                        value: toPay,
                        gasLimit: ourGasLimit
                    })
                } else {
                    doIt = await transaction.multiCall(allAddresses, claimCallData, {
                        gasLimit: ourGasLimit
                    })
                }
                await doIt.wait()


                updateClaims();
                Swal.fire({
                    title: 'Congratulations!',
                    html: 'XEN has been succesfully claimed once again!',
                    icon: 'success',
                    focusConfirm: false,
                    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
                })
            } catch (e) {
                let msg
                if (typeof e.data === 'undefined') {
                    msg = e.message
                } else {
                    msg = e.data.message
                }

                Swal.fire({
                    title: '<strong>Something went wrong</strong>',
                    html: '<strong>Error: </strong><code>' + msg + '</code></br></br>If you believe this to be a mistake, please forward the error message to our <a href="https://t.me/Xen_DAO" target="_blank">Telegram</a>',
                    icon: 'error',
                    showCancelButton: true,
                    showConfirmButton: false
                })
            }


        }
    })
}

async function updateClaims() {
    //document.getElementById("txSend").innerHTML = '<div class="pixel-loader"></div>'
    let accounts = await provider.send("eth_requestAccounts", []);
    accounts = accounts[0];

    let contractNetwork = await getNetwork() // contract address for current network
    let result = await nrOfUserMints(contractNetwork, accounts)
    console.log("User mints: " + result)
    let nr = Number(result);

    let batchSize
    let daysLeft
    let timeString
    if (nr > 0) {
        document.getElementById("txSend").innerHTML = ""
        let data
        let timeLeft
        let fullHtml = `
									<table class="table table-striped" style="max-width: 100%">
                      <thead>
                        <tr>
                          <th>
                            Batch
                          </th>
                          <th>
                           Accounts#
                          </th>
            
                          <th>
                            Time Left Till Mint
                          </th>
                        </tr>
                      </thead>
                      <tbody>
					  `
        let savedI = 0;
        for (let i = 0; i < nr; i++) {
            savedI++;

            let userWallet = accounts
            let specificMintId = i

            let fromAddress = contractNetwork //MAIN CONTRACT
            let salt = ethers.utils.solidityKeccak256(["bytes", "uint256", "address"], [ethers.utils.hexZeroPad(ethers.utils.hexlify(i + 1), 1), 0, userWallet])
            console.log("our salt: " + salt);
            /*
            let initCode = "0x608060405234801561001057600080fd5b506102ef806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631249c58b1461003b578063379607f514610045575b600080fd5b610043610058565b005b61004361005336600461025e565b6101bb565b73ca41f293a32d25c2216bc4b30f5b0ab61b6ed2cb6001600160a01b03166352c7f8dc6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156100a757600080fd5b505af11580156100bb573d6000803e3d6000fd5b50506000546040516370a0823160e01b815230600482015273ca41f293a32d25c2216bc4b30f5b0ab61b6ed2cb935063a9059cbb92506001600160a01b039091169083906370a0823190602401602060405180830381865afa158015610125573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101499190610277565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015610194573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b89190610290565b50565b600154156101df576000546001600160a01b031632146101da57600080fd5b6101f6565b600080546001600160a01b03191632179055600180555b604051639ff054df60e01b81526004810182905273ca41f293a32d25c2216bc4b30f5b0ab61b6ed2cb90639ff054df90602401600060405180830381600087803b15801561024357600080fd5b505af1158015610257573d6000803e3d6000fd5b5050505050565b60006020828403121561027057600080fd5b5035919050565b60006020828403121561028957600080fd5b5051919050565b6000602082840312156102a257600080fd5b815180151581146102b257600080fd5b939250505056fea2646970667358221220e6a6dc0663ee8997bea923c145ddb0e6427f1f072a37dd6ce782eafe5db2d13a64736f6c634300080a0033"
            let initCodeHash = ethers.utils.keccak256(initCode); //initcode should be bytecode
            let hello = ethers.utils.getCreate2Address(fromAddress, salt, initCodeHash);
            let siteHash = "3ed37f4f6d3055c22dbfe94738c3fee460f886f13824b8294698b0976781371b"
            console.log("OUR CODE HASH: "+initCodeHash)
            console.log("SITE HASH: "+ siteHash)
            console.log("USING SITE HASH CONTRACT "+ethers.utils.getCreate2Address(fromAddress, salt, siteHash))
            console.log("USING BYTECODE"+ethers.utils.getCreate2Address(fromAddress, salt, "0x5882fc78d04ef8db2ffcf58233bfe343263fe3d4da91dd41757775b099100d2c"))
            console.log("FROM: "+fromAddress);
            console.log("OUR CONTRACT: "+hello)
            */
            let actualContract = await getContractAddress(contractNetwork, salt);
            //only difference will be we get contract from ethers instead of rpc
            console.log("ACTUAL FROM CONTRACT CONTRACT: " + actualContract);

            //difference will be to generate address HERE in js instead of caling contract 
            // FUCK THIS SHIT... Just call from contract and FUCK OFF (for now)..then we will do it without contract
            data = await multiData(contractNetwork, accounts, i, actualContract)
            //console.log("start id "+data[0]+"..end id: "+data[1])

	//console.log("account data: " + data)
            timeLeft = ((Number(data[1]) - (getTimestamp() / 1000)))
            batchSize = Number(data[0])

            //data[0] == quantity 
            //data[1] == expiration data

// let acct = await getUserData(xenContract, allAccts[i]);
			
			//console.log("Time left: " + timeLeft + " ... and here " + Number(data[1]))
            if (timeLeft > 0 && Number(data[1]) != 0) {
                dateObj = new Date(timeLeft * 1000);

                hours = dateObj.getUTCHours();
                minutes = dateObj.getUTCMinutes();
                seconds = dateObj.getSeconds();
                if (timeLeft / 86400 > 1) {
                    daysLeft = Math.floor(timeLeft / 86400) + ' <small>(Days)</small> : '
                } else {
                    daysLeft = ''
                }
                timeString = daysLeft + hours.toString().padStart(2, '0') + ' <small>(Hours)</small> : ' +
                    minutes.toString().padStart(2, '0') + ' <small>(Minutes)</small>'


            } else if (timeLeft <= 0 && Number(data[1]) != 0) {

                timeString = '<button type="button" class="btn btn-success btn-rounded btn-fw" onclick="mint(\'' + contractNetwork + '\', ' + i + ', ' + batchSize + ');">Mint Batch</button>'

            } else {
                //show button to mint
                // ++option to transfer
                timeString = '<button type="button" class="btn btn-success btn-rounded btn-fw" onclick="claimAgain(\'' + contractNetwork + '\', ' + i + ', ' + batchSize + ');">Claim Again</button> &nbsp&nbsp <button type="button" class="btn btn-success btn-rounded btn-fw" onclick="transferTokens(\'' + contractNetwork + '\', ' + i + ', ' + batchSize + ');">Transfer</button>'
            }
            fullHtml += `<tr>
                          <td class="py-1" onclick="showInfo(` + i + `, ` + batchSize + `, '` + contractNetwork + `', '` + accounts + `')" style="cursor: pointer;">#` + (i + 1) + ` </td>
						  <td>` + batchSize + `</td>
						  <td> ` + timeString + `</td>
						  </tr>
						  `

        }


        fullHtml += ' </tbody></table>'
        document.getElementById("txSend").innerHTML = fullHtml
    } else {
        document.getElementById("txSend").innerHTML = '<div class="alert alert-warning" role="alert">You have no active XEN Claims</div>'
    }
    await sleep(100000);
}

async function transferTokens(contractAddress, mintId, batchLength) {

    let accounts = await provider.send("eth_requestAccounts", []);
    accounts = accounts[0];

    let fromAddress = await getNetwork() //MAIN CONTRACT
    let salt = ethers.utils.solidityKeccak256(["bytes", "uint256", "address"], [ethers.utils.hexZeroPad(ethers.utils.hexlify(mintId + 1), 1), 0, accounts])

    let actualContract = await getContractAddress(fromAddress, salt);

    let tokenBalance = await balanceOf(xenContract, actualContract)
    console.log("Contract(" + actualContract + ") has: " + tokenBalance + " XEN")
    if (tokenBalance == 0) {
        Swal.fire({
            title: '<strong>Contract has no XEN balance</strong>',
            icon: 'error',
            showCancelButton: true,
            showConfirmButton: false,
            html: 'You can claim again using the same contract.'
        })
    } else {


        //check balance of first contract 
        //get all addresses 
        //call multi with transfer
        let displayMsg = 'Total Wallets: '+batchLength.toLocaleString()+'</br><div id="totalXENio">Total tokens: Loading....</div></br></br><div id="displayAfter">Please await while loading accounts....</br>This Might take up to 30 seconds.</div>'
        Swal.fire({
            title: '<strong>Transfer XEN to your wallet</strong>',
            icon: 'info',
            showCancelButton: false,
            showConfirmButton: false,
            html: displayMsg
        })

        //get salt

        //	let proxyContract = getContractAddress(contractAddress, salt)
        //let totalBalance = await balanceOf(proxyContract, userAddress)
        let addresses = await getAllContracts(contractAddress, mintId, batchLength, accounts);
		
		//let addressesTest = await getAllContractsMass(helperContract, mintId, batchLength, accounts, implementationAddress, fromAddress);
		
		
		
        console.log("all addresses")
        console.log(addresses)

		//console.log("all addresses from MAss")
		//console.log(addressesTest)
		
        document.getElementById("displayAfter").innerHTML = 'Confirm transaction in wallet to transfer XEN from all wallets into your own address'
        displayMsg = 'Confirm transaction in wallet to transfer XEN from all wallets into your own address'

        let ourGasLimit = batchLength * 80000
		
		let callData = await getCalldatas(helperContract, addresses, accounts)
		let totalAmount = callData[1]
		callData = callData[0]
		document.getElementById("totalXENio").innerHTML = 'Total Tokens: ' + Number(BigInt(totalAmount)/BigInt(10**18)).toLocaleString() + ' XEN'
		console.log("helper contract: " + helperContract)
		console.log(callData)

        const transaction = new ethers.Contract(helperContract, helperABI, provider.getSigner());
        try {

            //HERE WE NEED FUCKING ARRAY OF ADDRESSES
            //
            // GET CALLDATA
            //let callData = await getTransferCallData(fromAddress, accounts, tokenBalance)
            console.log("Sending all to wallet: " + accounts)
            console.log(callData)
            doIt = await transaction.multiCall(addresses, callData, {
                gasLimit: ourGasLimit
            })

            await doIt.wait()

            updateClaims();
            Swal.fire({
                title: 'Congratulations!',
                html: 'XEN has been transferred to your wallet!',
                icon: 'success',
                focusConfirm: false,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
            })
        } catch (e) {
            let msg
            if (typeof e.data === 'undefined') {
                msg = e.message
            } else {
                msg = e.data.message
            }
            Swal.fire({
                title: '<strong>Something went wrong</strong>',
                html: '<strong>Error: </strong><code>' + msg + '</code></br></br>If you believe this to be a mistake, please forward the error message to our <a href="https://t.me/Xen_DAO" target="_blank">Telegram</a>',
                icon: 'error',
                showCancelButton: true,
                showConfirmButton: false
            })

        }


    }
}

async function showInfo(batchId, batchSize, contract, wallet) {
    Swal.fire({
        title: '<div id="titleDiv">Loading Accounts...</div>',
        html: '<div id="toReplace">Please await while loading accounts...</br>This Might take up to 30 seconds.</div>',
        icon: 'info',
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
    })
    //pop a swal 
    //load accounts 
    //give option to Check claims
    allAccts = await getAllContracts(contract, batchId, batchSize, wallet)
    document.getElementById("titleDiv").innerHTML = `Choose Action`
    document.getElementById("toReplace").innerHTML = '<button onclick="checkClaims()">Check Claims</button></br></br><button onclick="checkBalances()">Check Balances</button></br></br><strong><font color="red">Notice: </font>If you manually intervene and trigger these actions, then the batch might get out of sync and automatic methods(claim, transfer, mint) might no longer work. If any account has been missed during transfer/mint, please let us know in telegram.</strong>'

}

async function checkClaims() {
    // loop through the array 
    // check expiry in xenContract for all
    //  document.getElementById("toReplace").innerHTML = "Please await while checking claims...</br></br>"
    document.getElementById("toReplace").innerHTML = ""
    for (i = 0; i < allAccts.length; i++) {
        let acct = await getUserData(xenContract, allAccts[i]);
        //here we have all the details
        let timeLeft = ((Number(acct[2]) - (getTimestamp() / 1000)))
        let timeString
        if (timeLeft > 0) {

            dateObj = new Date(timeLeft * 1000);

            hours = dateObj.getUTCHours();
            minutes = dateObj.getUTCMinutes();
            seconds = dateObj.getSeconds();
            if (timeLeft / 86400 > 1) {
                daysLeft = Math.floor(timeLeft / 86400) + ' <small>(Days)</small> : '
            } else {
                daysLeft = ''
            }
            timeString = daysLeft + hours.toString().padStart(2, '0') + ' <small>(Hours)</small> : ' +
                minutes.toString().padStart(2, '0') + ' <small>(Minutes)</small>'
        } else if (Number(acct[2]) == 0) {
            timeString = 'No Active Claim'
        } else {
            timeString = 'Eligible'
        }

        document.getElementById("toReplace").innerHTML += '<input type="checkbox" id="box' + i + '" name="box' + i + '" checked> Account ' + (i + 1) + ': (<small><small><small><small><small><small>' + allAccts[i] + '</small></small></small></small></small></small>)</br> <small><small>Term: </small></small>' + Number(acct[1]) + ' Day(s)<small><small>. Time left: </small></small>' + timeString + '</br></br>'
    }

    document.getElementById("toReplace").innerHTML += '<button onclick="mintSelected()">Mint Selected</button></br></br><button onclick="claimAgainSelected()">Claim again Selected</button> </br></br><strong><font color="red">Notice: </font> You can\'t cheat the XEN contract. If you take illegal action, you will lose money on gas fees(eg.  trying to mint when already minted or claiming again when the claim is still active)!</strong>'
}

async function checkBalances() {
    // loop through the array 
    // check all balance 
    //add tickbox
    balances = []
    document.getElementById("toReplace").innerHTML = ""
    for (i = 0; i < allAccts.length; i++) {
        let balance = await balanceOf(xenContract, allAccts[i])
        balances.push(balance)
        document.getElementById("toReplace").innerHTML += '<input type="checkbox" id="box' + i + '" name="box' + i + '" checked> Account ' + (i + 1) + ': (<small><small><small><small><small><small>' + allAccts[i] + '</small></small></small></small></small></small>)</br> <small><small>XEN balance: ' + Number(balance / 1e18).toLocaleString() + '</small></small></br></br>'
    }

    document.getElementById("toReplace").innerHTML += '<button onclick="transferSelected()">Transfer Selected</button></br></br><strong><font color="red">Notice: </font> You can\'t cheat the XEN contract. If you take illegal action, you will lose money on gas fees(eg.  trying to transfer balance when there is none)!</strong>'
}

async function mintSelected() {
    //mints selected accuonts
    //get selected
    let toMintAccs = []
    for (i = 0; i < allAccts.length; i++) {
        let curString = '#box' + i;
        let isChecked = document.querySelector(curString);
        if (isChecked.checked) {
            toMintAccs.push(allAccts[i])
        }
    }
    console.log(toMintAccs)

    let accounts = await provider.send("eth_requestAccounts", []);
    accounts = accounts[0];
    let doIt;

    Swal.fire({
        title: '<strong>Confirm to Mint</strong>',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false,
        html: 'Please confirm transaction in wallet to mint tokens to your address. </br></br> Please await while collecting addresses....</br>This Might take up to 30 seconds.'
    })
    let allAddresses


    allAddresses = toMintAccs


    //create function that loops and finds them all and puts into array
    let mintCalldata = '0x52c7f8dc'
    let ourGasLimit = toMintAccs.length * 100000
    console.log("mint call data: " + mintCalldata + " WITH GAS LIMIT " + ourGasLimit)
    let contractAddress = await getNetwork()
    const transaction = new ethers.Contract(contractAddress, ABI, provider.getSigner());
    try {

        //HERE WE NEED FUCKING ARRAY OF ADDRESSES
        //
        doIt = await transaction.multiCall(allAddresses, mintCalldata, {
            gasLimit: ourGasLimit
        })

        await doIt.wait()

        updateClaims();
        Swal.fire({
            title: 'Congratulations!',
            html: 'XEN has been succesfully minted to your wallet',
            icon: 'success',
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
        })
    } catch (e) {
        let msg
        if (typeof e.data === 'undefined') {
            msg = e.message
        } else {
            msg = e.data.message
        }
        if (msg == "execution reverted: CRank: No mint exists") {
            claimAgain(contractAddress, startId, endId)
        } else {
            Swal.fire({
                title: '<strong>Something went wrong</strong>',
                html: '<strong>Error: </strong><code>' + msg + '</code></br></br>If you believe this to be a mistake, please forward the error message to our <a href="https://t.me/Xen_DAO" target="_blank">Telegram</a>',
                icon: 'error',
                showCancelButton: true,
                showConfirmButton: false
            })
        }
    }
}

async function claimAgainSelected() {
    let toMintAccs = []
    for (i = 0; i < allAccts.length; i++) {
        let curString = '#box' + i;
        let isChecked = document.querySelector(curString);
        if (isChecked.checked) {
            toMintAccs.push(allAccts[i])
        }
    }
    console.log(toMintAccs)

    //if is reusable we might have to check owner if it has been stolen
    let contractAddress = await getNetwork()
    // PROBLEM HERE... DO WE CALL FEE AGAIN??!!?

    let swalio = Swal.fire({
        title: 'Claim XEN Again?',
        html: 'Do you wish to claim again using selected accounts? </br></br>Term you wish to wait for before Mint: <input id="termInDays" autocapitalize="off" class="swal2-input" type="text" style="display: flex; max-width: 350px;"  placeholder="Enter Number(of days)"></br></br>Do you wish to mint XD?<select class="swal2-select" style="display: flex;" name="mintXendaoOrNo" id="mintXendaoOrNo"> <option value="0">Claim XEN & Mint XD </option> <option value="1">Claim XEN only</option></select>',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Claim XEN again!'
    })

    let accounts = await provider.send("eth_requestAccounts", []);
    accounts = accounts[0];

    let nrOfWallets = toMintAccs.length
    let xendaoReward = nrOfWallets * 1000000; //BIGGER IF REFERRED


    let isReferred = document.getElementById("refId").value

    let validRef = false
    let refAddress

    if (isReferred.length != 0) {

        //check if we have address AND if it's not the same as accounts 
        //we have to fetch here
        let response = await fetch('lists/refs.txt', {
            cache: "no-cache"
        })
        let html = await response.text()

        const result = html.split(/\r?\n/);
        const refIndex = result.indexOf(isReferred);
        //TO DO: DIFFERENT DISPLAY IF MOBILE...and somehow to get the refIndex that we are looking for(ooh from php!)
        if (refIndex != -1) {
            let response2 = await fetch('lists/refWallet.txt', {
                cache: "no-cache"
            })

            let html2 = await response2.text()

            const result2 = html2.split(/\r?\n/);

            var toDisplay = result2[refIndex];

            if (toDisplay != -1 && (accounts.toLowerCase() != toDisplay.toLowerCase()) && ethers.utils.isAddress(toDisplay)) {
                validRef = true;
                refAddress = toDisplay
                xendaoReward = nrOfWallets * 1250000;
            }
        }
    }



    swalio.then(async (result) => {
        if (result.isConfirmed) {
            let mintXendao = document.getElementById('mintXendaoOrNo').value;
            let term = document.getElementById("termInDays").value

            console.log("term is " + term);
            let displayMsg
            if (mintXendao == 0) {
                displayMsg = 'Please confirm transaction in wallet to claim XEN using already-generated accounts. </br></br>Bonus Reward: <strong>' + xendaoReward.toLocaleString() + ' XD</strong></br><small>Protocol Fee: ' + (nrOfWallets * repeatFee).toLocaleString() + '</small></br></br>'
            } else {
                displayMsg = 'Please confirm transaction in wallet to claim XEN using already-generated accounts. </br></br><small>There is no additional fee.</small></br></br>'
            }

            Swal.fire({
                title: '<strong>Confirm to Claim Again</strong>',
                icon: 'info',
                showCancelButton: false,
                showConfirmButton: false,
                html: displayMsg
            })

            if (!validRef) {
                refAddress = accounts
            }

            console.log("Interacting with contract: " + contractAddress)
            let allAddresses

            allAddresses = toMintAccs

            let claimCallData = await getCallData(contractAddress, term);

            const transaction = new ethers.Contract(contractAddress, ABI, provider.getSigner());

            let ourGasLimit = toMintAccs.length * 210000


            try {
                let doIt
                if (mintXendao == 0) {
                    let toPay = BigInt(Number(Math.round(nrOfWallets * repeatFee * 10 ** 8))) * BigInt(10 ** 10)
                    doIt = await transaction.claimAgainWithFee(allAddresses, refAddress, claimCallData, {
                        value: toPay,
                        gasLimit: ourGasLimit
                    })
                } else {
                    doIt = await transaction.multiCall(allAddresses, claimCallData, {
                        gasLimit: ourGasLimit
                    })
                }
                await doIt.wait()


                updateClaims();
                Swal.fire({
                    title: 'Congratulations!',
                    html: 'XEN has been succesfully claimed once again!',
                    icon: 'success',
                    focusConfirm: false,
                    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
                })
            } catch (e) {
                let msg
                if (typeof e.data === 'undefined') {
                    msg = e.message
                } else {
                    msg = e.data.message
                }

                Swal.fire({
                    title: '<strong>Something went wrong</strong>',
                    html: '<strong>Error: </strong><code>' + msg + '</code></br></br>If you believe this to be a mistake, please forward the error message to our <a href="https://t.me/Xen_DAO" target="_blank">Telegram</a>',
                    icon: 'error',
                    showCancelButton: true,
                    showConfirmButton: false
                })
            }


        }
    })

}

async function transferSelected() {
    let contractAddress = await getNetwork()
    let toMintAccs = []
    let prevBalance
    for (i = 0; i < allAccts.length; i++) {
        let curString = '#box' + i;
        let isChecked = document.querySelector(curString);
        if (isChecked.checked) {

            toMintAccs.push(allAccts[i])
        }
    }
	

	//MISSING SHIT HERE

    if (true == false) {
        Swal.fire({
            title: '<strong>Something went wrong</strong>',
            html: 'To send simultanenously, you must choose wallets with exact same XEN balance.',
            icon: 'error',
            showCancelButton: true,
            showConfirmButton: false
        })
    } else {




        let fromAddress = await getNetwork() //MAIN CONTRACT
        //let salt = ethers.utils.solidityKeccak256(["bytes", "uint256", "address"], [ethers.utils.hexZeroPad(ethers.utils.hexlify(mintId + 1), 1), 0, accounts])


        let tokenBalance = prevBalance
        console.log(tokenBalance + " XEN")
        if (tokenBalance == 0) {
            Swal.fire({
                title: '<strong>Contract has no XEN balance</strong>',
                icon: 'error',
                showCancelButton: true,
                showConfirmButton: false,
                html: 'You can claim again using the same contract.'
            })
        } else {


            //check balance of first contract 
            //get all addresses 
            //call multi with transfer
            let displayMsg = 'Balance: <div id="loadingXens">loading...</div> XEN</br></br></br><div id="displayAfter">Please await while loading accounts....</br>This Might take up to 30 seconds.</div>'
            Swal.fire({
                title: '<strong>Transfer XEN to your wallet</strong>',
                icon: 'info',
                showCancelButton: false,
                showConfirmButton: false,
                html: displayMsg
            })

            //get salt
			
			        let accounts = await provider.send("eth_requestAccounts", []);
        accounts = accounts[0];

            //	let proxyContract = getContractAddress(contractAddress, salt)
            //let totalBalance = await balanceOf(proxyContract, userAddress)
            let addresses = toMintAccs
            console.log("all addresses")
            console.log(addresses)

            document.getElementById("displayAfter").innerHTML = 'Confirm transaction in wallet to transfer XEN from all wallets into your own address'
            displayMsg = 'Confirm transaction in wallet to transfer XEN from all wallets into your own address'

            let ourGasLimit = toMintAccs.length * 80000

			let callData = await getCalldatas(helperContract, addresses, accounts)
		let totalAmount = callData[1]
		callData = callData[0]
		document.getElementById("loadingXens").innerHTML = Number(BigInt(totalAmount)/BigInt(10**18)).toLocaleString()
		console.log("helper contract: " + helperContract)
		console.log(callData)
		console.log("Sending all to wallet: " + accounts)
            const transaction = new ethers.Contract(helperContract, helperABI, provider.getSigner());
            try {
                doIt = await transaction.multiCall(addresses, callData, {
                    gasLimit: ourGasLimit
                })

                await doIt.wait()

                updateClaims();
                Swal.fire({
                    title: 'Congratulations!',
                    html: 'XEN has been transferred to your wallet!',
                    icon: 'success',
                    focusConfirm: false,
                    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Close'
                })
            } catch (e) {
                let msg
                if (typeof e.data === 'undefined') {
                    msg = e.message
                } else {
                    msg = e.data.message
                }
                Swal.fire({
                    title: '<strong>Something went wrong</strong>',
                    html: '<strong>Error: </strong><code>' + msg + '</code></br></br>If you believe this to be a mistake, please forward the error message to our <a href="https://t.me/Xen_DAO" target="_blank">Telegram</a>',
                    icon: 'error',
                    showCancelButton: true,
                    showConfirmButton: false
                })

            }


        }


    }

}


async function multiData(contractAddress, userAddress, id, actualContract) {
    const contractAbi = [
        "function multiData(address _user, uint256 _id, address _contractAddress) external view returns (uint256, uint256)"
    ];
    const DTXContract = new ethers.Contract(contractAddress, contractAbi, provider);
    const balance = await DTXContract.multiData(userAddress, id, actualContract);
    return balance;
}

async function balanceOf(contractAddress, userAddress) {
    const contractAbi = [
        "function balanceOf(address account) external view returns (uint256)"
    ];
    const DTXContract = new ethers.Contract(xenContract, contractAbi, provider);
    const balance = await DTXContract.balanceOf(userAddress);
    return balance;
}

async function getUserData(contractAddress, wallet) {
    const contractAbi = [
        "function userMints(address) public view returns (address, uint256, uint256, uint256, uint256, uint256)"
    ];
    const DTXContract = new ethers.Contract(contractAddress, contractAbi, provider);
    const balance = await DTXContract.userMints(wallet);
    //MintTerm * log2(cRankDelta) * AMP * EAA(cRank)
    return balance;
}


async function getContractAddress(contractAddress, salt) {
    console.log("Salt: " + salt)
    const contractAbi = [
        "function contractAddressWithHash(bytes32 _salt) public view returns (address)"
    ];
    const DTXContract = new ethers.Contract(contractAddress, contractAbi, provider);
    const balance = await DTXContract.contractAddressWithHash(salt);
    return balance;
}

async function getContractAddressMass(contractAddress, salts, implementation, deployer) {
    const contractAbi = [
        "function getContracts(bytes32[] calldata salts, address implementation, address deployer) external pure returns(address[] memory)"
    ];
    const DTXContract = new ethers.Contract(contractAddress, contractAbi, provider);
    const balance = await DTXContract.getContracts(salts, implementation, deployer);
    return balance;
}




async function nrOfUserMints(contractAddress, _userAddress) {
    const contractAbi = [
        "function userMints(address _user) external view returns(uint256)"
    ];
    const DTXContract = new ethers.Contract(contractAddress, contractAbi, provider);
    return (await DTXContract.userMints(_userAddress));
}

async function getCallData(contractAddress, term) {
    const contractAbi = [
        "function getClaimCallData(uint256 term) external pure returns (bytes memory)"
    ];
    const DTXContract = new ethers.Contract(contractAddress, contractAbi, provider);
    return (await DTXContract.getClaimCallData(term));
}

async function getTransferCallData(contractAddress, to, amount) {
    const contractAbi = [
        "function getTransferCallData(address _to, uint256 _amount) external pure returns (bytes memory)"
    ];
    const DTXContract = new ethers.Contract(contractAddress, contractAbi, provider);
    return (await DTXContract.getTransferCallData(to, amount));
}

async function getCalldatas(contractAddress, allAccs, toWallet) {
    const contractAbi = [
        "function getTransferCallData(address[] calldata _addresses, address _to) external view returns (bytes[] memory, uint256)"
    ];
    const DTXContract = new ethers.Contract(contractAddress, contractAbi, provider);
	const datag = await DTXContract.getTransferCallData(allAccs, toWallet)
	console.log(datag)
    return (datag);
}


async function getAllContracts(contractAddress, mintId, batchLength, userAddress) {
    let thaAddresses = [];
    let tempAddress
    let salt
    //let allSalts = []
    for (i = 0; i < batchLength; i++) {
        salt = ethers.utils.solidityKeccak256(["bytes", "uint256", "address"], [ethers.utils.hexZeroPad(ethers.utils.hexlify(mintId + 1), 1), i, userAddress])
        //allSalts.push(salt)
        tempAddress = await getContractAddress(contractAddress, salt)
        thaAddresses.push(tempAddress)
    }
    //console.log(allSalts)
    //console.log(thaAddresses)
    return thaAddresses
}

async function getAllContractsMass(contractAddress, mintId, batchLength, userAddress, implementation, deployer) {
    let thaAddresses = [];
    let tempAddress
    let salt
    let allSalts = []
    for (i = 0; i < batchLength; i++) {
        salt = ethers.utils.solidityKeccak256(["bytes", "uint256", "address"], [ethers.utils.hexZeroPad(ethers.utils.hexlify(mintId + 1), 1), i, userAddress])
        allSalts.push(salt)
    }
	thaAddresses = await getContractAddressMass(contractAddress, allSalts, implementation, deployer)
    return thaAddresses
}