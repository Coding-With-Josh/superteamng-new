"use client";

import React from "react";

export const AboutSection = () => {
  const guilds = [
    "Developers",
    "Designers",
    "Writers",
    "Content Creation",
    "AI/DePIN",
  ];

  const hackathons = ["Renaissance", "Hyperdrive", "cHack", "Radar"];

  return (
    <section
      id="about"
      className="relative mx-2 mb-4 overflow-hidden rounded-xl bg-white py-16 sm:mx-4 sm:py-24 dark:bg-black"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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

        <div className="space-y-8 text-center">
          <div>
            <h2 className="mb-4 font-medium text-4xl text-black font-serif tracking-tight sm:text-5xl md:text-6xl dark:text-white">
              About <span className="text-emerald-500">SuperteamNG</span>
            </h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-6 text-left">
            <p className="text-base text-black/70 leading-relaxed tracking-tight sm:text-lg dark:text-white/70">
              Founded in June 2023, SuperteamNG has grown in both numbers and
              strength. Formed by{" "}
              <span className="font-medium text-black dark:text-white">
                Nzube Ezudo
              </span>{" "}
              and{" "}
              <span className="font-medium text-black dark:text-white">
                Harrison Obiefule
              </span>
              , the core team has grown into{" "}
              <span className="font-medium text-black dark:text-white">12</span>
              .
            </p>

            <div className="rounded-xl border border-black/10 bg-black/5 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-base text-black/70 leading-relaxed tracking-tight sm:text-lg dark:text-white/70">
                Over the past year, more than{" "}
                <span className="font-medium text-black dark:text-white">
                  80+ projects
                </span>{" "}
                have been built and submitted to both local and global
                hackathons with some of the projects emerging as winners in{" "}
                {hackathons.map((hackathon, i) => (
                  <React.Fragment key={hackathon}>
                    <span className="font-medium text-black dark:text-white">
                      {hackathon}
                    </span>
                    {i < hackathons.length - 1 && ", "}
                    {i === hackathons.length - 2 && " and "}
                  </React.Fragment>
                ))}{" "}
                Hackathons.
              </p>
            </div>

            <div>
              <p className="mb-4 text-base text-black/70 leading-relaxed tracking-tight sm:text-lg dark:text-white/70">
                Our team is comprised of five core guilds:{" "}
                {guilds.map((guild, i) => (
                  <React.Fragment key={guild}>
                    <span className="font-medium text-black dark:text-white">
                      {guild}
                    </span>
                    {i < guilds.length - 1 && ", "}
                    {i === guilds.length - 2 && " and "}
                  </React.Fragment>
                ))}
                . Open to all who are eager to join, these groups provide unique
                opportunities for collaboration and growth.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-5 sm:gap-4">
            {guilds.map((guild, index) => {
              const colorClasses = [
                {
                  dot: "bg-emerald-400",
                  gradient: "from-emerald-500/10 to-transparent",
                  border: "border-emerald-400/20",
                },
                {
                  dot: "bg-blue-400",
                  gradient: "from-blue-500/10 to-transparent",
                  border: "border-blue-400/20",
                },
                {
                  dot: "bg-purple-400",
                  gradient: "from-purple-500/10 to-transparent",
                  border: "border-purple-400/20",
                },
                {
                  dot: "bg-orange-400",
                  gradient: "from-orange-500/10 to-transparent",
                  border: "border-orange-400/20",
                },
                {
                  dot: "bg-pink-400",
                  gradient: "from-pink-500/10 to-transparent",
                  border: "border-pink-400/20",
                },
              ];
              const colors = colorClasses[index % colorClasses.length];

              return (
                <div
                  key={guild}
                  className="group relative flex min-w-0 flex-col items-center justify-center rounded-xl border border-black/10 bg-white/80 px-4 py-4 text-center transition-all hover:border-black/20 hover:shadow-lg dark:border-white/10 dark:bg-black/60 dark:hover:border-white/20 sm:px-5 sm:py-5"
                >
                  <div className="mb-3 flex justify-center">
                    <div className="relative">
                      <div
                        className={`h-3 w-3 rounded-full ${colors.dot} transition-all group-hover:scale-125 group-hover:shadow-lg`}
                      />
                      <div
                        className={`absolute inset-0 rounded-full ${colors.dot} opacity-20 blur-md transition-all group-hover:scale-150`}
                      />
                    </div>
                  </div>
                  <span className="relative z-10 whitespace-nowrap text-xs font-medium tracking-tight text-black dark:text-white sm:text-sm">
                    {guild}
                  </span>
                  <div
                    className={`absolute inset-0 rounded-xl bg-linear-to-br ${colors.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
                  />
                  <div
                    className={`absolute inset-0 rounded-xl border-2 ${colors.border} opacity-0 transition-opacity group-hover:opacity-100`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
