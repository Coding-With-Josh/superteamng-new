"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GradientButton } from "../ui/gradient-button";

export const EarnSection = () => {
  const earnOpportunities = [
    {
      label: "Bounties",
      color: "emerald",
      title: "Bounties",
      description:
        "Bounties are opportunities for you to showcase your skills to earn and attract potential recruiters.",
      details:
        "Over the past year, more than 60 projects have been built and submitted to both local and global hackathons with some of the projects emerging as winners in Hyperdrive and cHack.",
      subDetails:
        "The team has 3 core sub-groups; Developers, Designers and Writers groups open to anyone who is willing to join.",
      link: "https://earn.superteam.fun",
      linkText: "View Bounties",
    },
    {
      label: "Hackathons",
      color: "blue",
      title: "Hackathons",
      description:
        "The Solana Network is capturing worldwide attention as a leading platform for Web3 innovation.",
      details:
        "Solana Hackathons highlight the incredible potential of decentralized technologies. These events showcase cutting-edge innovations across various tracks, including DeFi, DePIN, RWAs, gaming, consumer apps, and DAOs.",
      subDetails:
        "Participate and discover how decentralized apps are solving real-world challenges.",
      links: [
        {
          text: "View Past Hackathons Winners",
          href: "https://arena.colosseum.org",
        },
        { text: "View Current Hackathon", href: "https://colosseum.org" },
      ],
    },
    {
      label: "Instagrants",
      color: "purple",
      title: "Instagrants",
      description:
        "Superteam Nigeria now supports Solana Foundation Grants. These are grants for projects working on promoting decentralization and censorship resistance on the Solana network.",
      details:
        "Even though the primary focus of the grants is to fund dApps and technical contribution, the Foundation may also support content and community grants that fit within the stated goals of the Grant program.",
      subDetails:
        "Anyone with an idea or proof of work is welcome to apply and receive funding decision for a $1 - $10,000 grant. The Solana Foundation hands out these grants typically once a month.",
      link: "https://earn.superteam.fun/instagrants",
      linkText: "Go to Instagrants",
    },
  ];

  const additionalResources = [
    {
      title: "Superteam Earn",
      description:
        "Join Superteam Earn and dive into exciting global opportunities, from bounties to awesome projects! Getting started is easy—just follow these three steps:",
      steps: [
        "Create your account and get personalized notifications.",
        "Complete your profile to showcase your skills.",
        "Participate in bounties and projects to start winning today!",
      ],
      cta: "Ready to jump in and start earning?",
      link: "https://earn.superteam.fun",
      linkText: "Go to Superteam Earn",
    },
    {
      title: "Superteam Build",
      description:
        "Superteam Build is your Go-To Source for Web3 Project Inspiration with over 200 innovative ideas curated specifically for your hackathon projects.",
      details:
        "Whether you're just starting out or an experienced builder, Superteam Build offers a wealth of inspiration to kickstart your next Web3 venture. Discover the perfect idea for your next big breakthrough!",
      link: "https://build.superteam.fun",
      linkText: "Go to Superteam Build",
    },
  ];

  return (
    <section
      className="relative mx-2 mb-4 overflow-hidden rounded-xl bg-white py-20 sm:mx-4 sm:py-32 dark:bg-black"
      id="earn"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-black dark:bg-white"></div>
            <div className="h-px w-4 bg-black dark:bg-white"></div>
            <div className="flex gap-1">
              <div className="h-2 w-2 rounded-full bg-black dark:bg-white"></div>
              <div className="h-2 w-2 rounded-full bg-black dark:bg-white"></div>
            </div>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h2 className="mb-4 font-medium text-4xl font-serif text-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
            <span className="text-emerald-500">Earn</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-black/70 tracking-tight sm:text-lg dark:text-white/70">
            Discover Multiple Opportunities to Earn within Our Community:
            Bounties, Hackathons, and Instagrants Await You!
          </p>
        </div>

        {/* Main Earn Opportunities */}
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {earnOpportunities.map((opportunity, index) => {
            const colorClasses = {
              emerald: "text-emerald-400",
              blue: "text-blue-400",
              purple: "text-purple-400",
            };

            return (
              <div key={opportunity.label} className="flex flex-col">
                <div className="mb-2">
                  <span
                    className={`${
                      colorClasses[
                        opportunity.color as keyof typeof colorClasses
                      ]
                    } text-xs tracking-wide`}
                  >
                    {opportunity.label}
                  </span>
                </div>
                <h3 className="mb-6 font-medium text-2xl font-serif text-black tracking-tight sm:text-3xl dark:text-white">
                  {opportunity.title}
                </h3>
                <div className="flex-1 rounded-lg border border-black/10 bg-black/5 p-6 dark:border-white/5 dark:bg-zinc-900/50">
                  <div className="space-y-4">
                    <p className="text-black/80 text-sm leading-relaxed dark:text-white/80">
                      {opportunity.description}
                    </p>
                    <p className="text-black/70 text-sm leading-relaxed dark:text-white/70">
                      {opportunity.details}
                    </p>
                    {opportunity.subDetails && (
                      <p className="text-black/60 text-sm leading-relaxed dark:text-white/60">
                        {opportunity.subDetails}
                      </p>
                    )}
                    <div className="pt-4">
                      {opportunity.link ? (
                        <Link
                          href={opportunity.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium tracking-tight text-emerald-500 transition-colors hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-300"
                        >
                          {opportunity.linkText}
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      ) : (
                        <div className="flex flex-col gap-2">
                          {opportunity.links?.map((linkItem, i) => (
                            <Link
                              key={i}
                              href={linkItem.href}
                              className="inline-flex items-center gap-1 text-sm font-medium tracking-tight text-emerald-500 transition-colors hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-300"
                            >
                              {linkItem.text}
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Resources */}
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {additionalResources.map((resource, index) => (
            <div
              key={resource.title}
              className="rounded-xl border border-black/10 bg-white/80 p-8 dark:border-white/10 dark:bg-black/60"
            >
              <h3 className="mb-4 font-medium text-2xl font-serif text-black tracking-tight sm:text-3xl dark:text-white">
                {resource.title}
              </h3>
              <p className="mb-4 text-base text-black/70 leading-relaxed tracking-tight dark:text-white/70">
                {resource.description}
              </p>
              {resource.steps && (
                <ol className="mb-4 ml-5 list-decimal space-y-2 text-sm text-black/70 dark:text-white/70">
                  {resource.steps.map((step, i) => (
                    <li key={i} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ol>
              )}
              {resource.details && (
                <p className="mb-4 text-sm text-black/70 leading-relaxed dark:text-white/70">
                  {resource.details}
                </p>
              )}
              {resource.cta && (
                <p className="mb-4 text-sm font-medium text-black/80 dark:text-white/80">
                  {resource.cta}
                </p>
              )}
              <Link
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <GradientButton
                  label={resource.linkText}
                  href={resource.link}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
