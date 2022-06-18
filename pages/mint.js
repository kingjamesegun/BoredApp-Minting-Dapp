import React, { useState, useEffect } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'
import { initOnBoard } from '../utils/onBoard'

function Mint() {
  const [onboard, setOnboard] = useState(null)
  const [walletAddress, setWalletAddress] = useState('')

  useEffect(() => {
    const onboardData = initOnBoard({
      address: (address) => setWalletAddress(address ? address : ''),
      wallet: (wallet) => {
        if (wallet.provider) {
          window.localStorage.setItem('selectedWallet', wallet.name)
        } else {
          window.localStorage.removeItem('selectedWallet')
        }
      },
    })

    setOnboard(onboardData)
  }, [])

  const handleConnectHandler = async () => {
    const walletSelected = await onboard.walletSelect();
    if(walletSelected){
      await onboard.walletCheck();
      window.location.reload(true);
    }
  }

  return (
    <div className="min-h-screen h-full w-full overflow-hidden flex flex-col items-center justify-center bg-brand-background ">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <img
          src="/images/blur.jpeg"
          className="animate-pulse-slow absolute inset-auto block w-full min-h-screen object-cover"
          alt="Background Blur"
        />

        <div className="flex flex-col items-center justify-center h-full w-full px-2 md:px-10">
          <div className="z-1 md:max-w-3xl w-full bg-gray-900/90 filter backdrop-blur-sm py-4 rounded-md px-2 md:px-8  flex flex-col items-center">
            <h1 className="font-coiny uppercase font-bold text-3xl md:text-4xl bg-gradient-to-br  from-brand-green to-brand-blue bg-clip-text text-transparent mt-3">
              Pre Sale
            </h1>
            <p className="text-pink-200 text-center">{walletAddress ? walletAddress.slice(0,8) +  '...' + walletAddress.slice(-4) : "Connect your Wallet"}
            </p>

            {/* Add and connect wallet */}
            <div className="grid grid-cols-1 lg:gap-10 lg:grid-cols-2 mt-10 w-full">
              <div className="relative w-full">
                <p className="absolute top-2 rounded left-2 bg-gray-900/90 text-white text-coiny text-sm py-2 px-3 font-bold">
                  0/222
                </p>
                <img
                  src="/images/13.png"
                  className="object-cover w-full rounded-md"
                  alt="13"
                />
              </div>

              {/* Second section */}
              <div className="mt-10 lg:mt-0">
                <div className="flex justify-between items-center">
                  <div className="bg-white text-black py-1 px-2 rounded-sm">
                    <BsPlusLg />
                  </div>
                  <div className="text-brand-pink font-bold font-coiny text-xl">
                    1
                  </div>
                  <div className="bg-white text-black py-1 px-2 rounded-sm">
                    <BiMinus />
                  </div>
                </div>

                <p className="text-pink-200 text-center text-sm py-2">
                  Max Mint Amount: 5
                </p>
                <div className="flex justify-between border-b-2 border-t-2 border-white py-3 mt-10">
                  <h5 className="text-brand-yellow font-bold text-xl font-coiny">
                    Total
                  </h5>
                  <div className="font-coiny font-bold font-2xl text-white">
                    <span className="text-brand-yellow">0.01ETH</span> + GAS
                  </div>
                </div>

                <div
                  onClick={handleConnectHandler}
                  className="py-3 w-full bg-gradient-to-br uppercase font-bold text-white font-coiny from-brand-purple to-brand-pink rounded shadow-lg hover:shadow-pink-400/50 tracking-wide text-center mt-10"
                >
                  Connect wallet
                </div>
              </div>
            </div>

            {/* Error Message */}
            <div className="border text-white w-full rounded-sm py-3 text-center mt-5 text-sm font-sans font-medium">
              Something went wrong
            </div>

            {/* Contact address */}
            <h3 className="text-brand-pink mt-10 :mt-5 font-coiny uppercase font-bold">
              Contract Address
            </h3>
            <p className="text-sans text-pink-200 pb-3 text-center">
              54uu03-rvj03fk-c,-fk,kk09ir09i309ri3090485y7v83h7hfdbuyuqor
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mint
