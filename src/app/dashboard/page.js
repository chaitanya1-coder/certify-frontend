"use client";
import { useState } from "react";

export default function Dashboard() {
  return (
    <div className="flex bg-[#f1f1e9] min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6">
        <div className="text-2xl font-bold mb-12 text-black">Certify</div>
        <nav className="space-y-6">
          {[
            { icon: "fa-home", text: "Home" },
            { icon: "fa-building", text: "Organisations" },
            { icon: "fa-calendar-alt", text: "Events" },
            { icon: "fa-file-alt", text: "Templates" },
            { icon: "fa-certificate", text: "Certificates" },
            { icon: "fa-sign-out-alt", text: "Logout" },
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors"
            >
              <i className={`fas ${item.icon} w-5`}></i>
              <span className="font-medium">{item.text}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 bg-white rounded-lg p-4 shadow-sm">
          <h1 className="text-2xl font-bold text-black">gm frenz...</h1>
          <div className="flex items-center space-x-4">
            <i className="fas fa-cog text-gray-600 hover:text-black transition-colors"></i>
            <img
              src="https://storage.googleapis.com/a1aa/image/4RMQUqmwlYZZJ9XRNL1fjYlHveb7h7aGnrpQj5x3lWepYZsnA.jpg"
              alt="User avatar"
              className="rounded-full w-10 h-10"
            />
          </div>
        </div>

        {/* Task Input */}
        <input
          type="text"
          placeholder="name your task"
          className="w-full p-4 bg-white border border-gray-200 rounded-lg mb-8 outline-none focus:ring-2 focus:ring-[#dbfb58] text-black"
        />

        {/* Event Details Section */}
        <h2 className="text-2xl font-bold mb-4 text-black">
          Choose Event details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {["Organization", "Event", "Template", "Certificate Type"].map(
            (label, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <label className="block mb-2 text-gray-600 font-medium">
                  {label}
                </label>
                <select className="w-full p-2 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#dbfb58] text-black">
                  <option>{label} Select...</option>
                </select>
              </div>
            )
          )}
        </div>

        {/* Data Section */}
        <h2 className="text-2xl font-bold mb-4 text-black">Provide Data</h2>
        <p className="mb-4 text-gray-600">(You only need to provide one)</p>

        <div className="grid grid-cols-1 md:grid-cols-4 block mb-4 gap-4">
          <button className="mt-4 p-3 bg-[#dbfb58] text-black font-bold rounded-full hover:bg-[#dbfb58]/90 transition-colors">
            Download Sample CSV
            <i className="fas fa-download ml-2"></i>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upload CSV Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <label className="block mb-2 text-gray-600 font-medium">
              Upload CSV
            </label>
            <input
              type="file"
              className="w-full p-2 bg-white border border-gray-200 rounded-lg mb-4"
            />
            <div className="text-center mb-4 text-gray-600">Or</div>
            <label className="block mb-2 text-gray-600 font-medium">
              Fetch from an URL
            </label>
            <input
              type="text"
              className="w-full p-2 bg-white border border-gray-200 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-[#dbfb58]"
            />
            <button className="w-full p-3 bg-[#dbfb58] text-black font-bold rounded-full hover:bg-[#dbfb58]/90 transition-colors">
              Fetch Data
            </button>
          </div>

          {/* CSV String Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <label className="block mb-2 text-gray-600 font-medium">
              Enter CSV String
            </label>
            <textarea
              className="w-full p-2 bg-white border border-gray-200 rounded-lg h-32 mb-4 outline-none focus:ring-2 focus:ring-[#dbfb58]"
              placeholder="Here is a sample placeholder"
            ></textarea>
            <button className="w-full p-3 bg-[#dbfb58] text-black font-bold rounded-full hover:bg-[#dbfb58]/90 transition-colors">
              Decode Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
