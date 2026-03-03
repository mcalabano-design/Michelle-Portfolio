"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-200 via-pink-100 to-purple-200 p-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold italic text-violet-700">
            Michelle Calabano
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Virtual Assistant | Supply Chain Specialist | Team Leader
          </p>
          <div className="flex justify-center gap-4">
            <a
  href="https://drive.google.com/file/d/18PkVdcqdKeQgujt-qn2SBLc0nJ_sjnJR/view"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="px-6 py-3 rounded-2xl font-semibold shadow-lg bg-violet-600 text-white hover:bg-violet-700 transition">
    View Resume
  </button>
</a>

            <a href="#contact">
              <button className="px-6 py-3 rounded-2xl font-semibold shadow-lg border border-violet-700 text-violet-700 hover:bg-violet-100 transition">
                Contact Me
              </button>
            </a>
          </div>
        </motion.section>

        {/* About / Resume */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl shadow-xl bg-white/80 backdrop-blur-sm p-6">
            <h2 className="text-2xl font-semibold text-violet-600">
              Professional Summary
            </h2>
            <p className="text-gray-700 mt-2">
              With over 10 years of experience in the BPO industry, 4 years in
              supply chain operations for an Australian company, and more than 2
              years as a Virtual Assistant, I bring strong attention to detail,
              leadership, and operational excellence to every task.
            </p>
          </div>

          <div className="rounded-2xl shadow-xl bg-white/80 backdrop-blur-sm p-6">
            <h2 className="text-2xl font-semibold text-pink-600">Key Skills</h2>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Customer Service & Team Leadership</li>
              <li>Supply Chain & Logistics Coordination</li>
              <li>Order Processing & Inventory Management</li>
              <li>Email & Calendar Management</li>
              <li>Data Entry & Administrative Support</li>
            </ul>
          </div>
        </section>

        {/* Services */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-violet-700 italic">
            Services Offered
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Virtual Assistance",
              "Supply Chain Support",
              "Order & Inventory Management",
              "Customer Support",
              "Email & Calendar Management",
              "Admin & Data Entry",
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm p-6 text-center"
              >
                <p className="text-lg font-medium text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-pink-700 italic">
            Portfolio Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Australian Beverage Supply Chain Support",
                description:
                  "Managed daily order processing for liquor and non-liquor beverages, coordinated keg return requests, handled credits and debits, and communicated with sales representatives and business owners while strictly following state cut-off times.",
              },
              {
                title: "Virtual Executive Assistance",
                description:
                  "Provided calendar management, inbox management, client communication, travel coordination, and administrative support for international clients, ensuring smooth day-to-day operations.",
              },
              {
                title: "BPO Team Leadership",
                description:
                  "Led customer service teams for 7 years, monitored KPIs, conducted coaching sessions, improved performance metrics, and ensured high customer satisfaction ratings.",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/40 backdrop-blur-sm bg-white/80 p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-pink-700 italic">
            Client Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Australian Operations Manager",
                feedback:
                  "Michelle consistently delivered accurate orders within strict cut-off times and maintained excellent communication with stakeholders.",
              },
              {
                name: "International Business Owner",
                feedback:
                  "Her reliability, attention to detail, and proactive support made a significant difference in our daily operations.",
              },
              {
                name: "BPO Director",
                feedback:
                  "An exceptional leader who improved team KPIs and maintained high client satisfaction ratings.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl shadow-xl bg-white/80 backdrop-blur-sm border border-white/40 p-6 space-y-4"
              >
                <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
                <p className="font-semibold text-violet-700">– {testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-violet-700 italic">Contact Me</h2>

          <form
            action="https://formspree.io/f/xwvndalo"
            method="POST"
            className="max-w-2xl mx-auto grid gap-4 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/40"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-2xl border shadow-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-2xl border shadow-sm"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="p-3 rounded-2xl border shadow-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl font-semibold shadow-lg bg-violet-600 text-white hover:bg-violet-700 transition"
            >
              Send Message
            </button>
          </form>

          <p className="text-sm text-gray-500">
            Or email directly at michelle.calabano@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
}