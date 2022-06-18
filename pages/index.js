import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Avatar from '../public/Images/avatar.png'

export default function Home() {
  return (
    <div className="bg-brand-background h-screen ">
      <div className="flex py-5 px-20 items-center justify-between fixed w-full">
        <h1 className="text-white font-coiny text-3xl">
          <span className="bg-gradient-to-br from-brand-yellow to-brand-blue pr-2 bg-clip-text text-transparent">
            Bored
          </span>
          Ape
        </h1>

        <div className="flex gap-10">
          <Link href="/about">
            <a className="text-white font-sans font-semibold hover:bg-gradient-to-br from-brand-yellow to-brand-blue hover:bg-clip-text">
              About
            </a>
          </Link>
          <Link href="/mint ">
            <a className="text-white font-sans font-semibold">Minting </a>
          </Link>
        </div>
      </div>

      <div className="flex h-screen justify-center items-center w-full">
        <div className="flex flex-col text-center">
          <h1 className="font-coiny text-7xl uppercase text-white">
            They are <span className="bg-gradient-to-br from-brand-yellow to-brand-blue pr-2 bg-clip-text text-transparent">watching</span>
          </h1>
          <p className="font-sans text-lg text-gray-300 w-2/4 mx-auto ">
            Converting a digital file into a blockchain-based NFT.
            <br /> Before minting an NFT, users are first required to set up a
            crypto wallet. Currently, MetaMask is one of the most popular crypto
            wallets, which is compatible with Ethereum Blockchain.
          </p>
        </div>
      </div>
    </div>
  )
}
