"use client";

import React from "react";
import { MatrixFx } from "../ui/matrix";
import { GradientButton } from "../ui/gradient-button";

export const CtaSection = () => {
  return (
    <section className="relative z-0 mx-auto my-12 flex w-full max-w-3xl flex-col items-center justify-center overflow-hidden rounded-4xl border-2 border-emerald-300/25 dark:border-emerald-300/20 px-6 py-12 shadow-lg bg-white/80 dark:bg-black/60">
      <div className="pointer-events-none absolute inset-0 z-0">
        <MatrixFx
          className="h-full w-full"
          height={24}
          colors={["#10b981"]}
          bulge={{
            type: "ripple",
            duration: 3,
            intensity: 20,
            repeat: true,
          }}
        />
      </div>

      {/* CTA content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="mb-2 text-3xl font-serif font-bold text-black tracking-tight dark:text-white">
          Ready to up your game?
        </h2>
        <p className="mb-7 max-w-md text-base text-black/70 tracking-tighter font-medium leading-relaxed dark:text-white/70">
          Join the community and unlock next-level tools and collaboration.
        </p>
        <GradientButton href="https://discord.gg/C6EgkeEAed" className="px-8 py-2 text-lg">
          Join the discord
        </GradientButton>
      </div>
    </section>
  );
};
