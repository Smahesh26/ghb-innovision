"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DroneTrainingPage() {
  const features = [
    {
      title: "Top-Notch Instructors",
      description: "Learn from highly qualified trained and experienced instructors.",
    },
    {
      title: "Cutting-Edge Technology",
      description: "Train with the latest drones and simulation software for a hands-on experience.",
    },
    {
      title: "Industry-Recognized Certification",
      description: "Get certified with credentials that open doors to job opportunities in multiple industries.",
    },
    {
      title: "Comprehensive Training",
      description: "Our course covers everything from the basics of drone operation to advanced flight techniques and safety protocols.",
    },
  ];

  const benefits = [
    {
      title: "In-demand Skills",
      description: "Industries are shifting toward drone-powered solutions.",
    },
    {
      title: "Career Growth",
      description: "Certified drone pilots are highly sought after across sectors.",
    },
    {
      title: "Be Future-Ready",
      description: "Equip yourself with cutting-edge skills that businesses need now and in the future.",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d]">
        <div className="absolute inset-0 bg-[url('/images/banner2.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70"
          >
            <span className="h-px w-12 bg-[#EF2B2D]" />
            <span>Home / Drone Flying Training</span>
            <span className="h-px w-12 bg-[#EF2B2D]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-5xl font-light sm:text-6xl lg:text-7xl"
          >
            {/* Master the Skies with */}
            <span className="mt-2 block font-semibold text-[#EF2B2D]">Professional Drone Flying Training</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 max-w-3xl text-base leading-relaxed text-white/80"
          >
            Aerodrone Robotics is India's premium Remote Pilot Training Organisation (RPTO). We provide DGCA approved 
            basic to advanced level of drone flying training. Our mission is to equip aspiring drone enthusiasts and 
            professionals with the skills, knowledge, and certifications (Remote Pilot Certificate) necessary to excel 
            in this rapidly evolving industry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <a href="#content" className="group inline-flex flex-col items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-8 w-px bg-gradient-to-b from-[#EF2B2D] to-transparent"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { number: "DGCA", label: "Approved Training" },
              { number: "100%", label: "Certification Rate" },
              { number: "1000+", label: "Certified Pilots" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-light text-[#EF2B2D]">{stat.number}</div>
                <div className="text-xs uppercase tracking-wider text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="content" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="lg:col-span-2"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Aerodrone Robotics</p>
              <h2 className="mt-6 text-4xl font-light leading-tight text-gray-900">
                India's Premium
                <span className="mt-2 block font-semibold text-[#EF2B2D]">Remote Pilot Training Organisation</span>
              </h2>
              <div className="mt-8 h-px w-16 bg-[#EF2B2D]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="lg:col-span-3 space-y-6"
            >
              <p className="text-base leading-relaxed text-gray-600">
                Aerodrone Robotics is India's premium Remote Pilot Training Organisation (RPTO). We provide 
                <span className="font-semibold text-gray-900"> DGCA approved basic to advanced level</span> of drone flying training.
              </p>
              <p className="text-base leading-relaxed text-gray-600">
                Our mission is to equip aspiring drone enthusiasts and professionals with the skills, knowledge, 
                and certifications (<span className="font-semibold text-gray-900">Remote Pilot Certificate</span>) necessary 
                to excel in this rapidly evolving industry.
              </p>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-light text-[#EF2B2D]">DGCA</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">Certified</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-[#EF2B2D]">100%</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">Practical</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-[#EF2B2D]">Expert</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">Guidance</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get To Know Us Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Get To Know Us</p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="text-4xl font-light text-gray-900">
                Why Drones are the
                <span className="mt-2 block font-semibold text-[#EF2B2D]">Future of Technology</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-gray-600">
                Drones aren't just a trend—they're revolutionizing entire industries. From agriculture to logistics, 
                filmmaking to security, the demand for skilled drone pilots is soaring.
              </p>

              <div className="mt-8 space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#EF2B2D]" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/services-home/droneservices1.jpeg"
                  alt="Drone Technology"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Why Choose Us</p>
            <h2 className="mt-6 text-4xl font-light text-gray-900">
              Why Choose <span className="font-semibold text-[#EF2B2D]">Aerodrone Robotics?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-600">
              At Aerodrone Robotics, we don't just teach you how to fly drones – we give you the skills to excel 
              in the industry. Here's why we're the best choice:
            </p>
            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="group space-y-4"
              >
                <div className="text-6xl font-light text-gray-200 transition-colors duration-300 group-hover:text-[#EF2B2D]">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Courses Section */}
      <section className="bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Aerodrone Robotics</p>
            <h2 className="mt-6 text-4xl font-light text-white">
              Our <span className="font-semibold text-[#EF2B2D]">Courses</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/60">
              Choose the right training program designed for your skill level and career goals
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition-all duration-300 hover:border-[#EF2B2D]"
            >
              <div className="absolute right-4 top-4 text-7xl font-light text-white/5 transition-all duration-300 group-hover:text-[#EF2B2D]/10">01</div>
              <div className="relative">
                <div className="mb-6 inline-block rounded bg-[#EF2B2D]/10 px-4 py-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#EF2B2D]">Beginner Level</span>
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-white">Basic Drone Training</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-300">
                  Designed for beginners, this course covers drone basics, safety protocols, and fundamental flight maneuvers.
                </p>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-[#EF2B2D]" />
                    <span>Drone fundamentals & regulations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-[#EF2B2D]" />
                    <span>Safety protocols & best practices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-[#EF2B2D]" />
                    <span>Basic flight maneuvers & controls</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition-all duration-300 hover:border-[#EF2B2D]"
            >
              <div className="absolute right-4 top-4 text-7xl font-light text-white/5 transition-all duration-300 group-hover:text-[#EF2B2D]/10">02</div>
              <div className="relative">
                <div className="mb-6 inline-block rounded bg-[#EF2B2D]/10 px-4 py-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#EF2B2D]">Advanced Level</span>
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-white">Advanced Drone Training</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-300">
                  Delve deeper into drone technology, understanding advanced features, flight planning, and regulations 
                  for more complex operations.
                </p>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-[#EF2B2D]" />
                    <span>Advanced flight techniques & planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-[#EF2B2D]" />
                    <span>Complex operations & regulations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-[#EF2B2D]" />
                    <span>Commercial applications & use cases</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Registration Section */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-12 text-center"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-[#EF2B2D]" />
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Get Started Today</p>
            <h2 className="mt-6 text-4xl font-light text-gray-900">
              Register Now and
              <span className="mt-2 block font-semibold text-[#EF2B2D]">Begin Your Journey!</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600">
              Secure your spot today and start your journey towards becoming a certified drone pilot.
            </p>
            <div className="mt-10 flex justify-center gap-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded border border-[#EF2B2D] bg-[#EF2B2D] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-transparent hover:text-[#EF2B2D]"
              >
                Register Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Fee Details Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Pricing</p>
            <h2 className="mt-6 text-4xl font-light text-gray-900">
              Course <span className="font-semibold text-[#EF2B2D]">Fee Details</span>
            </h2>
            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </motion.div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="lg:col-span-2"
            >
              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <div className="mb-6 flex items-end gap-2">
                  <div className="text-5xl font-light text-[#EF2B2D]">₹29,990</div>
                  <div className="mb-2 text-sm text-gray-500">Total Fee</div>
                </div>
                
                <div className="mb-6 inline-block rounded bg-[#EF2B2D]/10 px-4 py-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#EF2B2D]">Small Class Size</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-gray-700">
                    <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#EF2B2D]" />
                    <div>
                      <span className="font-semibold text-gray-900">2 Days Online Training</span>
                      <p className="mt-1 text-xs text-gray-500">Comprehensive theory and concepts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#EF2B2D]" />
                    <div>
                      <span className="font-semibold text-gray-900">1 Day Simulation Training</span>
                      <p className="mt-1 text-xs text-gray-500">Virtual flight practice</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#EF2B2D]" />
                    <div>
                      <span className="font-semibold text-gray-900">2 Days Actual Flying Training</span>
                      <p className="mt-1 text-xs text-gray-500">Real-world hands-on experience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#EF2B2D]" />
                    <div>
                      <span className="font-semibold text-gray-900">Food + Accommodation Provided</span>
                      <p className="mt-1 text-xs text-gray-500">All meals and stay included</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-4">
                <div className="rounded-lg border border-[#EF2B2D] bg-gradient-to-br from-[#EF2B2D]/5 to-white p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#EF2B2D]">Special Offer</p>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Pay only <span className="text-2xl font-semibold text-[#EF2B2D]">₹5,000</span> to book your slot
                  </p>
                  <p className="mt-4 text-xs text-gray-600">
                    Make the remaining payment after completing online classes
                  </p>
                  <div className="mt-6 border-t border-[#EF2B2D]/20 pt-5 text-center">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-gray-500">Scan to Pay</p>
                    <div className="mx-auto w-fit overflow-hidden rounded-md border border-gray-200 bg-white p-2">
                      <Image
                        src="/images/services-home/qr.jpg"
                        alt="QR code for course fee payment"
                        width={210}
                        height={210}
                        className="h-[190px] w-[190px] object-cover sm:h-[210px] sm:w-[210px]"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg border border-gray-200 bg-white p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-900">Student Discount</p>
                  <p className="text-xs text-gray-600">
                    Additional discount available for students. Contact us for details.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Gallery Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Our Work</p>
            <h2 className="mt-6 text-4xl font-light text-gray-900">
              Training <span className="font-semibold text-[#EF2B2D]">Gallery</span>
            </h2>
            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </motion.div>

          {/* Large Video/Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-8"
          >
            <div className="relative aspect-video overflow-hidden rounded-lg border border-gray-200 bg-gray-200">
              <Image
                src="/images/banner2.png"
                alt="Training Video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="h-16 w-16 rounded-full border-2 border-white/80 flex items-center justify-center">
                  <div className="h-0 w-0 border-l-8 border-t-4 border-b-4 border-l-white border-t-transparent border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-8 grid grid-cols-3 gap-4"
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative aspect-video overflow-hidden rounded-lg border border-gray-200 bg-gray-200">
                <Image
                  src="/images/banner2.png"
                  alt={`Training Video ${i}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="h-12 w-12 rounded-full border-2 border-white/80 flex items-center justify-center">
                    <div className="h-0 w-0 border-l-6 border-t-3 border-b-3 border-l-white border-t-transparent border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-gray-200">
                <Image
                  src="/images/banner2.png"
                  alt={`Training Image ${i}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#EF2B2D]">Success Stories</p>
            <h2 className="mt-6 text-4xl font-light text-gray-900">
              What They're Talking About
              <span className="mt-2 block font-semibold text-[#EF2B2D]">Our Aerodrone Services</span>
            </h2>
            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute right-4 top-4 text-6xl font-light text-[#EF2B2D]/5">"</div>
                <div className="relative">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <div key={index} className="h-3 w-3 text-[#EF2B2D]">
                        <svg viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Excellent training program! The instructors were knowledgeable and the hands-on experience 
                    was invaluable. I'm now a certified drone pilot ready to take on new opportunities.
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#EF2B2D] to-[#d62426]" />
                    <div>
                      <p className="font-semibold text-gray-900">Student Name</p>
                      <p className="text-xs text-gray-500">Certified Drone Pilot</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <motion.div
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Contact />
      </motion.div>

      <Footer />
    </>
  );
}
