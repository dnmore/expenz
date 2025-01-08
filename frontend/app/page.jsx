import Link from "next/link";
import Image from "next/image";
import Logo from "./_components/logo";

import * as motion from "motion/react-client";

import { HiArrowRight } from "react-icons/hi";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex h-16 p-4 justify-between items-center">
        <Logo />
        <Link
          href="/dashboard"
          className="flex items-center gap-2 rounded-sm text-primary text-sm  transition-colors hover:text-secondary"
        >
          <span>DASHBOARD</span> <HiArrowRight className="w-3 md:w-4" />
        </Link>
      </div>
      <div className="flex flex-col lg:items-center lg:justify-center gap-4 px-4 py-12 lg:flex-row lg:py-6 ">
        <div className="flex flex-col gap-6 px-8  md:px-10 lg:px-20">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 1 }}
            className="text-4xl lg:text-6xl font-extrabold antialiased"
          >
            <p className="block">Track Your Expenses</p>
            <p className=" text-primary">Achieve Your Goals</p>
            
              <Link
              href="/dashboard"
              className="flex items-center justify-center gap-5 max-w-40 mt-6 rounded-sm bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary md:text-base"
            >
              <span>Get Started</span>
            </Link>
            
            
          </motion.div>
        </div>
        <motion.div
          initial={{opacity:0,  x: 200 }}
          animate={{opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="flex items-center justify-center p-6"
        >
          <Image
            src="/hero.png"
            width={505}
            height={519}
            style={{ width: "auto" }}
            priority={true}
            alt="Screenshots of the dashboard project showing desktop and mobile version"
          />
        </motion.div>
      </div>
    </main>
  );
}
