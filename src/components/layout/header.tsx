"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#how-it-works", label: "HOW IT WORKS" },
  { href: "#why-ark", label: "WHY ARK" },
  { href: "#mission", label: "MISSION" },
  { href: "#contact", label: "CONTACT" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-[9999] w-full border-b backdrop-blur-lg shadow-lg transition-all duration-300`}
      style={{
        background: isScrolled
          ? "linear-gradient(90deg, rgba(27,60,138,0.95), rgba(15,39,90,0.95))"
          : "linear-gradient(90deg, rgba(27,60,138,0.98), rgba(15,39,90,0.98))",
        borderColor: isScrolled ? "rgba(200,155,60,0.3)" : "rgba(200,155,60,0.4)",
      }}
    >
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2 group">
            {/* Logo uses Poppins (font-headline) - WHITE */}
            <span className="font-headline text-2xl font-extrabold tracking-tight text-white group-hover:text-[#F27A2C] transition-colors duration-300">
              ARK
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-2 text-sm">
            <span className="text-[#C89B3C]">|</span>
            <Image
              src="/images/t-hub-logo-1-1.png"
              alt="T-Hub Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            {/* T-Hub text uses Inter (font-body) - WHITE */}
            <span className="text-white font-medium font-body">Incubated with T-Hub</span>
          </div>
        </div>

        {/* Nav links use Inter (font-body) - WHITE */}
        <nav className="hidden md:flex md:gap-8 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white transition-colors hover:text-[#F27A2C] hover:scale-105 duration-300 tracking-wider uppercase font-body"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            asChild
            className="shadow-xl hover:shadow-2xl backdrop-blur-md border-2 transition-all duration-300 hover:scale-105 font-semibold font-body"
            style={{
              background: "linear-gradient(135deg, #F27A2C 0%, #C89B3C 100%)",
              borderColor: "#F27A2C",
              color: "#FFFFFF",
            }}
          >
            <Link href="https://forms.gle/BW2q6X93evCi51Ga9" target="_blank" rel="noopener noreferrer">
              Get Started
            </Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-white/10">
              <Menu className="h-5 w-5 text-white" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] backdrop-blur-lg border-l transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(27,60,138,0.98), rgba(15,39,90,0.98))",
              borderColor: "rgba(200,155,60,0.4)",
            }}
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: "rgba(200,155,60,0.4)" }}>
                <Link href="#" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  {/* Mobile logo uses Poppins - WHITE */}
                  <span className="font-headline text-2xl font-extrabold tracking-tight text-white">ARK</span>
                </Link>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close Menu</span>
                  </Button>
                </SheetTrigger>
              </div>
              <div className="flex items-center gap-2 text-sm mt-4 px-2">
                <Image
                  src="/images/t-hub-logo-1-1.png"
                  alt="T-Hub Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                {/* T-Hub text uses Inter - WHITE */}
                <span className="text-white font-medium font-body">Incubated with T-Hub</span>
              </div>
              {/* Mobile nav links use Inter - WHITE */}
              <nav className="flex flex-1 flex-col gap-6 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-semibold text-white transition-colors hover:text-[#F27A2C] hover:translate-x-2 duration-300 tracking-wide uppercase font-body"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2">
                <Button
                  size="lg"
                  className="shadow-xl hover:shadow-2xl backdrop-blur-md border-2 transition-all duration-300 font-semibold font-body"
                  style={{
                    background: "linear-gradient(135deg, #F27A2C 0%, #C89B3C 100%)",
                    borderColor: "#F27A2C",
                    color: "#FFFFFF",
                  }}
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="https://forms.gle/BW2q6X93evCi51Ga9" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
