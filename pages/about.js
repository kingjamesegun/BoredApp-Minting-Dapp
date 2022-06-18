import React from 'react';
import Image from "next/image"

function About() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center mt-20 w-full">
        {/* BoredApe Image */}
        <Image
          src="/images/9.png"
          className="w-64 h-64 rounded-md object-cover"
          width="200%"
          height="200%"
          alt="Nft"
        />

        <div className="flex flex-col  items-center justify-center text-center font-roboto w-3/4 text-white md:px-0 py-10 ">
          <h2 className="font-bold text-2xl md:text-4xl font-coiny uppercase text-center">
            About{' '}
            <span className="bg-gradient-to-br from-brand-yellow to-brand-blue pr-2 bg-clip-text text-transparent">
              Bored Ape
            </span>
          </h2>

          <p className="mt-3 text-lg">
            BoredApes are a collection of 5,555 burning hot NFTs living in the
            core of the blockchain. Each individual BoredApes is carefully
            curated from over 150 traits, along with some incredibly rare 1/1s
            that have traits that cant be found from any other BoredApes. Our
            vision is to create an amazing project that will shed light, joy,
            love, and creativity! Burn on, BoredApes!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
