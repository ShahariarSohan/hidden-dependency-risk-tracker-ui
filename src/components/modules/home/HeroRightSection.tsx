"use client";

import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export default function HeroRightSection() {
  return (
    <div className="relative flex items-center justify-center min-h-[400px]">
      {/* Background orbs */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      >
        <div className="h-80 w-80 rounded-full bg-primary/10 dark:bg-primary/20 blur-3xl" />
        <div className="h-60 w-60 rounded-full bg-primary/20 dark:bg-primary/30 blur-2xl absolute" />
      </motion.div>

      {/* Floating shields */}
      <motion.div
        className="absolute left-[10%] top-[20%] h-10 w-10"
        animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <ShieldAlert className="text-red-500 dark:text-red-400" />
      </motion.div>

      <motion.div
        className="absolute right-[15%] bottom-[25%] h-12 w-12"
        animate={{ y: [0, -25, 0], x: [0, -10, 0], rotate: [0, -20, 20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <ShieldAlert className="text-red-500 dark:text-red-400" />
      </motion.div>

      {/* MAIN BIG LOGO (CENTER) */}
      <motion.div
        className="z-20 h-44 w-44 p-4 bg-white/10 dark:bg-black/20 rounded-full flex items-center justify-center shadow-lg"
        animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1, 1.05] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <ShieldAlert className="text-red-600 dark:text-red-400 w-full h-full" />
      </motion.div>

      {/* Bottom text */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="max-w-sm mx-auto text-center text-lg font-medium text-[var(--hero-foreground)]">
          <span className="font-extrabold">Hidden Dependency Risk Tracker</span>{" "}
          helps organizations identify hidden dependency risks before they cause
          operational failures.
        </p>
      </motion.div>
    </div>
  );
}
