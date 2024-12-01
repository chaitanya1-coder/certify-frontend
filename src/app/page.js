"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [url, setUrl] = useState("");

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle document verification logic here
  //   console.log("Verifying document:", url);
  // };

  return (
    <div className="min-h-screen bg-[#f1f1e9]">
      {/* Navigation */}
      <nav className="border-b border-[#e4ebf3] bg-[#f1f1e9]">
        <div className="mx-auto max-w-7xl px-4 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo_main.svg"
                alt="Certify Logo"
                width={156}
                height={40}
                className="h-10"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center md:flex">
              <Link href="#" className="mx-2 px-3 py-2 text-sm font-bold">
                Product
              </Link>
              <Link href="#" className="mx-2 px-3 py-2 text-sm font-bold">
                Resources
              </Link>
              <Link href="#" className="mx-2 px-3 py-2 text-sm font-bold">
                Docs
              </Link>
              <Link href="#" className="mx-2 px-3 py-2 text-sm font-bold">
                Contact Us
              </Link>
              <Link
                href="#"
                className="ml-4 rounded-full bg-[#dbfb58] px-6 py-3 text-sm font-bold uppercase tracking-wider outline outline-2 outline-black transition-colors hover:bg-[#32343a] hover:text-white"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              // onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {/* {isMenuOpen && (
            <div className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <Link href="#" className="block px-3 py-2 text-sm font-bold">
                  Product
                </Link>
                <Link href="#" className="block px-3 py-2 text-sm font-bold">
                  Resources
                </Link>
                <Link href="#" className="block px-3 py-2 text-sm font-bold">
                  Docs
                </Link>
                <Link href="#" className="block px-3 py-2 text-sm font-bold">
                  Contact Us
                </Link>
              </div>
            </div>
          )} */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-[#e4ebf3] px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="max-w-xl">
              <h1 className="mb-4 font-georgia text-5xl">Certify ;</h1>
              <p className="mb-8 text-lg tracking-wider">
                secured, blockchain-powered,
                <br />
                document validation platform
              </p>
              <form
                // onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row"
              >
                <input
                  type="url"
                  placeholder="Verify Your Document"
                  className="mb-4 w-full rounded border border-[#d1d6db] bg-[#1a1b1f] px-4 py-3 text-white placeholder-[#d1d6db] transition-colors hover:border-[#76879d] focus:border-[#76879d] focus:outline-none sm:mb-0 sm:mr-4 sm:w-64"
                  // value={url}
                  // onChange={(e) => setUrl(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="rounded bg-[#dbfb58] px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#38abf3] hover:text-white"
                >
                  Verify
                </button>
              </form>
            </div>
            <div className="mt-10 md:mt-0">
              <Image
                src="/images/ethereum-eth.svg"
                alt="Ethereum Logo"
                width={193}
                height={193}
                className="shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-[#e4ebf3] px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-semibold">30%</div>
              <div className="mt-2">Faster</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-semibold">50%</div>
              <div className="mt-2">Efficient</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-semibold">$5000</div>
              <div className="mt-2">Save Annually</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-semibold">27%</div>
              <div className="mt-2">Cost Optimised</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f1f1e9] px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between md:flex-row">
            <div className="mb-8 md:mb-0">
              <Image
                src="/images/logo_main.svg"
                alt="Certify Logo"
                width={156}
                height={40}
                className="h-10"
              />
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-16">
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
                  CERTIFY
                </h3>
                <div className="flex flex-col space-y-3">
                  <Link href="#" className="text-sm hover:text-gray-600">
                    How we works
                  </Link>
                  <Link href="#" className="text-sm hover:text-gray-600">
                    Product
                  </Link>
                  <Link href="#" className="text-sm hover:text-gray-600">
                    Docs
                  </Link>
                  <Link href="#" className="text-sm hover:text-gray-600">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
                  Resources
                </h3>
                <div className="flex flex-col space-y-3">
                  <Link href="#" className="text-sm hover:text-gray-600">
                    Blog post name list goes here
                  </Link>
                  <Link href="#" className="text-sm hover:text-gray-600">
                    Blog post name list goes here
                  </Link>
                  <Link href="#" className="text-sm hover:text-gray-600">
                    See all resources &gt;
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
                  About
                </h3>
                <div className="flex flex-col space-y-3">
                  <Link href="#" className="text-sm hover:text-gray-600">
                    Terms & Conditions
                  </Link>
                  <Link href="#" className="text-sm hover:text-gray-600">
                    Privacy policy
                  </Link>
                </div>
                <div className="mt-4 flex space-x-4">
                  <Link href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[#e4ebf3] pt-8">
            <p className="text-center text-sm">
              Copyright © {new Date().getFullYear()} Certify
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
