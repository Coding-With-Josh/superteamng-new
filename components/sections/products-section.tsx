"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "FundusAI",
      description:
        "An artificial intelligence diagnostic device for Diabetic Retinopathy, to diagnose more patients accurately and efficiently across Africa.",
      badge: "CHack Top Project",
      logo: "/community/1.png", // You can replace with actual project logos
      link: "#",
    },
    {
      id: 2,
      name: "Clusttr",
      description:
        "Democratising real estate investment through fractional ownership and easy access to liquidity. Making property investment accessible to everyone.",
      badge: "Hyperdrive Winner",
      logo: "/community/2.png",
      link: "#",
    },
    {
      id: 3,
      name: "BlockRide",
      description:
        "Blockride transforms fractional bus fleets ownership into real and reliable crypto assets, democratizing access to vehicle ownership.",
      badge: "Hyperdrive Mention",
      logo: "/community/3.png",
      link: "#",
    },
    {
      id: 4,
      name: "Mynt",
      description:
        "Mynt allows businesses to mint NFTs with custom conditions and smart contract integration, simplifying digital asset creation.",
      badge: "Renaissance Winner",
      logo: "/community/4.png",
      link: "#",
    },
  ];

  return (
    <section
      className="relative mx-2 mb-4 overflow-hidden rounded-xl bg-black py-16 sm:mx-4 sm:py-24"
      id="products"
    >
      <div className="absolute inset-0 bg-linear-to-b from-white/2 to-transparent"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-white"></div>
            <div className="h-px w-4 bg-white"></div>
            <div className="flex gap-1">
              <div className="h-2 w-2 rounded-full bg-white"></div>
              <div className="h-2 w-2 rounded-full bg-white"></div>
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <h2 className="mb-4 font-medium text-4xl font-serif tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Our members are{" "}
              <span className="text-emerald-500">building...</span>
            </h2>
          </div>
          <div className="flex-1 lg:max-w-xl">
            <p className="text-base text-white/70 leading-relaxed tracking-tight sm:text-lg">
              Since our launch in June 2023, our community members have built
              over 80+ projects on the Solana network pushing its expansion
              beyond limits. Check out what we have.
            </p>
          </div>
        </div>

        <div className="custom-horizontal-scrollbar overflow-x-auto pb-4">
          <div className="flex gap-4 sm:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group flex min-w-[320px] flex-col rounded-xl border border-white/10 bg-black/60 transition-all hover:border-white/20 hover:shadow-lg sm:min-w-[360px]"
              >
                {/* Logo/Image Area */}
                <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-zinc-900">
                  <div className="flex h-full w-full items-center justify-center p-6">
                    <div className="relative h-24 w-24 overflow-hidden rounded-lg">
                      <Image
                        src={product.logo}
                        alt={`${product.name} logo`}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="font-medium text-xl font-serif tracking-tight text-white sm:text-2xl">
                      {product.name}
                    </h3>
                    {product.badge && (
                      <span className="whitespace-nowrap rounded-full bg-purple-500 px-3 py-1 text-xs font-medium tracking-tight text-white">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <p className="mb-4 flex-1 text-sm text-white/70 leading-relaxed tracking-tight sm:text-base">
                    {product.description}
                  </p>

                  <Link
                    href={product.link}
                    className="inline-flex items-center gap-1 text-sm font-medium tracking-tight text-emerald-400 transition-colors hover:text-emerald-300"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
