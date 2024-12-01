"use client";
import Image from "next/image";

export function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-50 flex max-h-[90vh] w-full max-w-[1000px] flex-col md:flex-row overflow-y-auto rounded-xl bg-[#f1f1e9] p-4 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Left Section */}
        <div className="w-full md:w-1/2 p-6 rounded-lg bg-white">
          <div className="space-y-4">
            {[
              {
                src: "https://storage.googleapis.com/a1aa/image/PZRM6HLyfaz6XqwYsBoY4XiL208oogTW7Yf2bUKPsSV0uesnA.jpg",
                title: "Social Login",
              },
              {
                src: "https://storage.googleapis.com/a1aa/image/QPrHMxHJsULhG1CBywk9NfclP9nQnHj7rrHJOLYdhUrbXP7JA.jpg",
                title: "MetaMask",
                status: "Installed",
              },
              {
                src: "https://storage.googleapis.com/a1aa/image/W8vEg5ZldBZ6ElHI7TKKroaRUfZCrhsdc9p5XAvACNGgXP7JA.jpg",
                title: "Coinbase Wallet",
              },
              {
                src: "https://storage.googleapis.com/a1aa/image/Dz3051Hp2kaeIKzb3qutZCknQUinfE7ESMeC9uWeS0OR86ZPB.jpg",
                title: "Rabby",
              },
              {
                src: "https://storage.googleapis.com/a1aa/image/NpRMJuQHU7auFxSazeoetaShEb9qEwDSSxmeFcSnfrQ676ZPB.jpg",
                title: "Rainbow",
              },
              {
                src: "https://storage.googleapis.com/a1aa/image/ehGaT2Ke9Ti8U0o2d2FRhCslHAfXeKZOQ0q00cQwtlDr76ZPB.jpg",
                title: "Okto",
              },
              {
                src: "https://storage.googleapis.com/a1aa/image/D2xi6lRDGiJEN9X6lrMnJBf8IJmYdh1GsrItshgAH9AcXP7JA.jpg",
                title: "All Wallets",
                status: "350+",
              },
            ].map(({ src, title, status }, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 p-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg cursor-pointer"
              >
                <Image src={src} alt={`${title} Icon`} width={40} height={40} />
                <span className="font-medium">{title}</span>
                {status && (
                  <span className="text-gray-600 text-sm ml-auto">
                    {status}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-6 mt-4 md:mt-0 rounded-lg bg-white md:ml-4">
          <div className="flex justify-around mb-4">
            {[
              "https://storage.googleapis.com/a1aa/image/aqBqZe9og2WvS6oThfuRRxXkxplk3iSNYfXlSMc1bMv6d9snA.jpg",
              "https://storage.googleapis.com/a1aa/image/8r938Xv5Lf3CKq7fdJ0DeyTXgVPko8oiG80sfiTJqjxP86ZPB.jpg",
              "https://storage.googleapis.com/a1aa/image/qG7ES0i7FTZSGpcvhPUkSgin0m7sMgAMqQEVUkMUYOmsrn9E.jpg",
              "https://storage.googleapis.com/a1aa/image/0VywpGp48UblDtdZkoggJB1LepiSKgliJhkkfyyWM5A1uesnA.jpg",
            ].map((src, idx) => (
              <button
                key={idx}
                className="bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-lg"
              >
                <Image src={src} alt={`Icon ${idx}`} width={40} height={40} />
              </button>
            ))}
          </div>

          <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-200" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="flex-grow border-gray-200" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-lg">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent flex-grow outline-none text-black placeholder-gray-500"
              />
              <i className="fas fa-arrow-right text-gray-500"></i>
            </div>
            <div className="flex items-center bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-lg cursor-pointer">
              <i className="fas fa-phone-alt text-[#dbfb58]"></i>
              <span className="ml-2">Phone number</span>
            </div>
            <div className="flex items-center bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-lg cursor-pointer">
              <i className="fas fa-fingerprint text-[#dbfb58]"></i>
              <span className="ml-2">Passkey</span>
            </div>
          </div>

          <div className="mt-4 text-center text-gray-500 text-sm">
            By connecting, you agree to the{" "}
            <a href="#" className="text-[#dbfb58] hover:underline">
              Terms of Service
            </a>{" "}
            &amp;{" "}
            <a href="#" className="text-[#dbfb58] hover:underline">
              Privacy Policy
            </a>
          </div>
          <div className="mt-4 text-center text-gray-500 text-sm">
            Powered by{" "}
            <Image
              src="https://storage.googleapis.com/a1aa/image/7P66igzPpRb3FZAeFWDfnXiuD2OdVigiOWNTK6aC0oh8uesnA.jpg"
              alt="Thirdweb Logo"
              width={40}
              height={40}
              className="inline-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
