const FORTMATIC_KEY = process.env.NEXT_PUBLIC_FORMATIC_KEY
// Key from Alchemy
const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL

const onBoardOptions = {
  dappId: process.env.NEXT_PUBLIC_DAPP_ID,
  networkId: 4,
  walletSelect: {
    wallets: [
      { walletName: 'metamask', preferred: true },
      {
        walletName: 'walletLink',
        preferred: true,
        rpcUrl: RPC_URL,
        appName: 'BoredApe Dapp',
      },
      { walletName: 'coinbase', preferred: true },
      { walletName: 'trust', preferred: true, rpcUrl: RPC_URL },
      { walletName: 'gnosis', preferred: true },
      {
        walletName: 'fortmatic',
        apiKey: FORTMATIC_KEY,
        preferred: true,
      },
      { walletName: 'authereum' },
      {
        walletName: 'ledger',
        rpcUrl: RPC_URL,
      },
      {
        walletName: 'lattice',
        rpcUrl: RPC_URL,
        appName: "BoredApe Minting Dapp",
      },
      {
        walletName: 'keepkey',
        rpcUrl: RPC_URL,
      },
    ],
  },
  walletCheck: [
    { checkName: 'derivationPath' },
    { checkName: 'accounts' },
    { checkName: 'connect' },
    { checkName: 'network' },
  ],
}

export {onBoardOptions};

