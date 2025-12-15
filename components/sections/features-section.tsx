"use client";

export const FeaturesSection = () => {
  return (
    <section
      className="relative mx-2 mb-4 overflow-hidden rounded-xl bg-white py-20 sm:mx-4 sm:py-32 dark:bg-black"
      id="features"
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

        <div className="mb-4 text-center">
          <h2 className="mb-4 font-medium text-4xl text-black font-serif tracking-tight sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
            <span className="text-emerald-500">Everyone</span> belongs in the ecosystem
          </h2>
          <p className="mx-auto max-w-2xl text-base text-black/60 sm:text-lg dark:text-white/60">
            One ecosystem for every web3-er need.
            {/* <br /> */}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-emerald-400 text-xs tracking-wide">
                Community
              </span>
            </div>
            <h3 className="mb-8 font-medium text-2xl text-black tracking-tight sm:text-3xl dark:text-white">
              Connect with peers.
            </h3>
            <div className="flex-1 rounded-lg border border-black/10 bg-black/5 p-6 dark:border-white/5 dark:bg-zinc-900/50">
              <div className="space-y-4">
                <p className="text-black/80 text-sm leading-relaxed dark:text-white/80">
                  Join a vibrant community of developers, designers, and
                  creators. Share knowledge, collaborate on projects, and grow
                  together.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-blue-400 text-xs tracking-wide">
                Projects
              </span>
            </div>
            <h3 className="mb-8 font-medium text-2xl text-black tracking-tight sm:text-3xl dark:text-white">
              Build your ideas.
            </h3>
            <div className="flex-1 rounded-lg border border-black/10 bg-black/5 p-6 dark:border-white/5 dark:bg-zinc-900/50">
              <div className="space-y-4">
                <p className="text-black/80 text-sm leading-relaxed dark:text-white/80">
                  Create powerful projects that showcase your skills. Our
                  platform helps you collaborate, get feedback, and bring your
                  ideas to life.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-purple-400 text-xs tracking-wide">
                Events
              </span>
            </div>
            <h3 className="mb-8 font-medium text-2xl text-black tracking-tight sm:text-3xl dark:text-white">
              Learn and grow.
            </h3>
            <div className="flex-1 rounded-lg border border-black/10 bg-black/5 p-6 dark:border-white/5 dark:bg-zinc-900/50">
              <div className="space-y-4">
                <p className="text-black/80 text-sm leading-relaxed dark:text-white/80">
                  Attend workshops, hackathons, and networking events. Learn
                  from industry experts and connect with like-minded developers.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-xs text-zinc-400 tracking-wide dark:text-zinc-500">
                Earn
              </span>
            </div>
            <h3 className="mb-8 font-medium text-2xl text-black tracking-tight sm:text-3xl dark:text-white">
              Monetize your skills.
            </h3>
            <div className="relative flex-1 overflow-hidden rounded-lg border border-black/10 bg-white p-6 dark:border-white/5 dark:bg-zinc-950">
              <div className="relative flex h-full min-h-[200px] flex-col space-y-6">
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-3xl text-black dark:text-white">
                      38K
                    </span>
                    <span className="font-medium text-black text-sm dark:text-white">
                      +30%
                    </span>
                  </div>
                  <p className="text-black/60 text-xs dark:text-white/60">
                    Monthly earnings
                  </p>
                </div>
                <div className="flex h-32 items-end justify-between gap-3">
                  {["Dec", "Jan", "Feb", "Mar", "Apr", "May"].map(
                    (month, i) => (
                      <div
                        key={month}
                        className="flex h-full flex-1 flex-col items-center justify-end"
                      >
                        <div
                          className="relative w-full rounded-t-md bg-black/5 dark:bg-white/5"
                          style={{ height: `${25 + i * 10}%` }}
                        >
                          <div className="-top-5 absolute right-0 left-0 text-center">
                            <div className="font-medium text-[10px] text-black/40 dark:text-white/40">
                              +{1 + i * 0.5}k
                            </div>
                          </div>
                        </div>
                        <span className="mt-2 text-[10px] text-black/30 dark:text-white/30">
                          {month}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
