"use client"
import { useEffect, useState } from "react";
import Counter from "@/components/ui/counter";
import { motion } from "framer-motion";

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const TypingText = ({ text, speed = 80, className = "", style }: TypingTextProps) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!text) {
      setDisplayed("");
      return;
    }
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className} style={style} dir="rtl">{displayed}</span>
  );
};

import { Button, MotionButton } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Clock, Globe, Star, MessageCircle, Play, CheckCircle, Quote, Circle, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimateSection } from "@/components/ui/animate-section"
import { HeroCursorBg } from "@/components/ui/hero-cursor-bg"

export default function HomePage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "London, UK",
      flag: "🇬🇧",
      text: "My daughter has learned so much in just 3 months. The teachers are patient and the online format works perfectly for our busy schedule.",
      rating: 5,
      course: "Kids Quran Program",
    },
    
    {
      name: "Ahmed Hassan",
      location: "New York, USA",
      flag: "🇺🇸",
      text: "The Tajweed course has transformed my recitation. Alhamdulillah, I can now read with proper pronunciation and beautiful melody.",
      rating: 5,
      course: "Tajweed Mastery",
    },
    {
      name: "Fatima Ali",
      location: "Manchester, UK",
      flag: "🇬🇧",
      text: "As a working mother, the flexible timing and quality teaching have made it possible for me to finally learn Arabic properly.",
      rating: 5,
      course: "Arabic Grammar",
    },
  ]

  const courseHighlights = [
    {
      title: "Quran Reading (Nazra)",
      description: "Master the art of Quranic recitation with proper pronunciation",
      icon: BookOpen,
      duration: "6-12 months",
      students: "200+ enrolled",
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Tajweed Excellence",
      description: "Perfect your recitation with advanced Tajweed rules",
      icon: Star,
      duration: "8-10 months",
      students: "150+ enrolled",
      color: "bg-amber-50 border-amber-200",
    },
    {
      title: "Arabic Language",
      description: "Comprehensive Arabic grammar and conversation skills",
      icon: Globe,
      duration: "12-18 months",
      students: "180+ enrolled",
      color: "bg-green-50 border-green-200",
    },
  ]
 

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-amber-50/20 py-12 lg:py-16 px-4 overflow-hidden">
        {/* Light background image */}
        <img src="/book-quran.jpg" alt="Quran background" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none z-0" />
        {/* Bismillah - always at the very top, full width, centered, responsive size */}
        <AnimateSection delay={0} className="w-full flex justify-center pb-2">
          <span className="font-arabic text-xl sm:text-2xl md:text-3xl lg:text-4xl" style={{fontFamily: 'Amiri, serif', color: '#1E3A8A'}}>
            بسم الله الرحمن الرحيم
          </span>
        </AnimateSection>
        <HeroCursorBg />
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-900 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-amber-600 rounded-lg rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-900 rounded-full"></div>
        </div>
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <AnimateSection className="space-y-7">
              <Badge className="bg-blue-900/10 text-blue-900 border-blue-900/20 px-3 py-1 text-sm font-medium hover:text-white transition-colors mb-6">
                ✨ Trusted by 500+ Students Worldwide
              </Badge>
              <AnimateSection delay={0.1}>
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-tight font-arabic">
                  <span className="whitespace-nowrap">Learn the Language of the</span>
                  <span className="text-blue-900 block">Quran</span>
                  <span className="text-amber-600 block text-xl lg:text-2xl xl:text-3xl">
                    from Anywhere in the World
                  </span>
                </h1>
              </AnimateSection>
              <AnimateSection delay={0.2}>
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl">
                  Master Quranic recitation, Arabic language, and Islamic studies with qualified teachers through
                  interactive online classes designed for students in the UK, USA, and beyond.
                </p>
              </AnimateSection>
              <AnimateSection delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/register">
                    <MotionButton
                      size="lg"
                      className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <BookOpen className="mr-2 h-5 w-5" />
                      Register Now
                    </MotionButton>
                  </Link>
                  <Link href="/classes">
                    <MotionButton
                      variant="outline"
                      size="lg"
                      className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 px-6 py-3 text-lg rounded-xl bg-white/80 backdrop-blur-sm"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Join a Trial Class
                    </MotionButton>
                  </Link>
                </div>
              </AnimateSection>
              <div className="flex items-center gap-8 pt-5">
                {[0,1,2].map((i) => (
                  <AnimateSection key={i} delay={0.4 + i*0.1} className="text-center">
                    {i === 0 && <><div className="text-2xl font-bold text-blue-900"><Counter to={200} duration={1200} suffix="+" /></div><div className="text-sm text-slate-600 font-medium">Active Students</div></>}
                    {i === 1 && <><div className="text-2xl font-bold text-amber-600"><Counter to={10} duration={1200} suffix="+" /></div><div className="text-sm text-slate-600 font-medium">Expert Teachers</div></>}
                    {i === 2 && <><div className="text-2xl font-bold text-green-600 flex items-center justify-center"><Counter to={4.9} decimals={1} duration={1200} /><span className="ml-1">★</span></div><div className="text-sm text-slate-600 font-medium">Student Rating</div></>}
                  </AnimateSection>
                ))}
              </div>
            </AnimateSection>
            <AnimateSection className="relative" delay={0.2}>
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 border border-slate-200/50 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <video
                    src="/family.mp4"
                    className="rounded-2xl object-cover w-full h-full"
                    autoPlay
                    muted
                    loop
                    controls
                    playsInline
                    poster="/family.png"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 rounded-2xl"></div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    🔴 LIVE
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800 font-arabic">Interactive Quran Class</h3>
                  <p className="text-sm text-slate-600">Join our live sessions with qualified Qaris and experienced teachers</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Users className="h-4 w-4" />
                      <span>15 students online</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="h-4 w-4" />
                      <span>Next class: 6:00 PM UK</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Free Trial Available
              </div>
              <div className="absolute -bottom-6 -left-6 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                UK & USA Timings
              </div>
            </AnimateSection>
          </div>
        </div>
      </section>

      {/* Courses Section - Blue with animation */}
      <section className="py-24 px-4 bg-blue-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fadeInDown">
            <Badge className="bg-white/10 text-white px-4 py-2 mb-6 shadow font-semibold tracking-wide animate-pulse">Our Programs</Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-serif">Explore Our Courses</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">Choose from our carefully designed courses for all ages and levels. More categories coming soon!</p>
          </div>
          <div className="flex justify-center gap-4 mb-10 animate-fadeInUp">
            <button className="px-6 py-2 rounded-full bg-white text-blue-900 font-semibold shadow hover:bg-blue-900 hover:text-white transition">Quran</button>
            <button className="px-6 py-2 rounded-full bg-blue-900 text-white font-semibold shadow border border-white/20 hover:bg-white hover:text-blue-900 transition">Arabic</button>
            <button className="px-6 py-2 rounded-full bg-blue-900 text-white font-semibold shadow border border-white/20 hover:bg-white hover:text-blue-900 transition">Kids</button>
            <button className="px-6 py-2 rounded-full bg-blue-900 text-white font-semibold shadow border border-white/20 hover:bg-white hover:text-blue-900 transition">Adults</button>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {courseHighlights.map((course, idx) => (
              <motion.div
                key={idx}
                initial={
                  idx === 0
                    ? "hiddenLeft"
                    : idx === 2
                    ? "hiddenRight"
                    : "hiddenPop"
                }
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hiddenLeft: { opacity: 0, x: -100 },
                  hiddenRight: { opacity: 0, x: 100 },
                  hiddenPop: { opacity: 0, scale: 0.8 },
                  visible:
                    idx === 0
                      ? { opacity: 1, x: 0, transition: { duration: 0.7, type: "spring" } }
                      : idx === 2
                      ? { opacity: 1, x: 0, transition: { duration: 0.7, type: "spring" } }
                      : { opacity: 1, scale: 1, transition: { duration: 0.7, type: "spring", bounce: 0.4 } }
                }}
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-900 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-blue-900/40 group"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {idx === 0 && <span className="absolute top-4 right-4 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow animate-bounce">Most Popular</span>}
                <div className="w-16 h-16 mx-auto mt-10 bg-blue-900 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-fadeInDown">
                  <course.icon className="h-8 w-8 text-white group-hover:text-amber-400 transition-colors duration-300 animate-pulse" />
                </div>
                <div className="px-8 py-6 text-center">
                  <h3 className="text-2xl font-bold font-serif mb-2 text-blue-900 animate-fadeInUp">{course.title}</h3>
                  <p className="text-blue-900/80 mb-4 font-light animate-fadeInUp">{course.description}</p>
                  <div className="flex justify-center gap-4 mb-4 animate-fadeInUp">
                    <span className="bg-blue-900/10 text-blue-900 px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow"><Clock className="h-4 w-4 animate-spin" /> {course.duration}</span>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow"><Users className="h-4 w-4 animate-pulse" /> {course.students}</span>
                  </div>
                  <Link href="/courses">
                    <Button className="w-full rounded-full px-8 py-4 font-semibold text-lg bg-blue-900 text-white shadow-xl shadow-blue-900/30 transition-all duration-300 hover:scale-105 hover:bg-white hover:text-blue-900 hover:shadow-2xl hover:shadow-blue-900/40 focus:outline-none focus:ring-4 focus:ring-blue-900/40 backdrop-blur-md bg-opacity-90 border-none animate-fadeInUp"><span className="flex items-center justify-center gap-2 relative z-10 group"><BookOpen className="h-5 w-5 group-hover:animate-bounce group-hover:text-blue-900 transition-colors duration-300" />Learn More</span></Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16 animate-fadeInUp">
            <Link href="/courses">
              <button className="relative rounded-full px-7 py-3 text-lg font-bold bg-white text-blue-900 shadow-lg border-none transition-all duration-300 hover:scale-105 hover:shadow-blue-400/30 focus:outline-none focus:ring-2 focus:ring-blue-900/30 flex items-center gap-3">
                <span className="relative z-10">View All Courses</span>
                <svg className="w-5 h-5 text-blue-900 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Stylish Islamic Redesign */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <AnimateSection from="right" className="mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 drop-shadow-lg font-serif inline-block">
              How It Works
            </h2>
            <span className="block h-1 w-32 mx-auto mt-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-blue-900 opacity-90 shadow-md"></span>
          </AnimateSection>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch mt-14">
            <AnimateSection className="flex-1" delay={0.05} from="bottom">
              <div className="relative group bg-white/30 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-2xl p-10 flex flex-col items-center hover:-translate-y-2 hover:shadow-blue-400/30 transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Islamic geometric SVG accent */}
                <svg className="absolute -top-6 -left-6 w-20 h-20 text-blue-100 opacity-40 pointer-events-none" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6" /><path d="M50 10 L58 50 L50 90 L42 50 Z" fill="currentColor" opacity=".15" /></svg>
                <div className="flex items-center justify-center mb-6 z-10">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2 tracking-wide z-10">Register Online</h3>
                <p className="text-blue-900/80 font-light z-10">Fill out our simple registration form to get started.</p>
              </div>
            </AnimateSection>
            <AnimateSection className="flex-1" delay={0.15} from="bottom">
              <div className="relative group bg-white/30 backdrop-blur-xl border border-amber-100 rounded-2xl shadow-2xl p-10 flex flex-col items-center hover:-translate-y-2 hover:shadow-amber-400/30 transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Islamic geometric SVG accent */}
                <svg className="absolute -top-6 -left-6 w-20 h-20 text-amber-100 opacity-40 pointer-events-none" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6" /><path d="M50 10 L58 50 L50 90 L42 50 Z" fill="currentColor" opacity=".15" /></svg>
                <div className="flex items-center justify-center mb-6 z-10">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16"/></svg>
                </div>
                <h3 className="text-xl font-bold text-amber-700 mb-2 tracking-wide z-10">Free Trial Class</h3>
                <p className="text-amber-900/80 font-light z-10">Experience our teaching style with a free, no-obligation class.</p>
              </div>
            </AnimateSection>
            <AnimateSection className="flex-1" delay={0.25} from="bottom">
              <div className="relative group bg-white/30 backdrop-blur-xl border border-green-100 rounded-2xl shadow-2xl p-10 flex flex-col items-center hover:-translate-y-2 hover:shadow-green-400/30 transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Islamic geometric SVG accent */}
                <svg className="absolute -top-6 -left-6 w-20 h-20 text-green-100 opacity-40 pointer-events-none" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6" /><path d="M50 10 L58 50 L50 90 L42 50 Z" fill="currentColor" opacity=".15" /></svg>
                <div className="flex items-center justify-center mb-6 z-10">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 10l-4 4-2-2"/></svg>
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-2 tracking-wide z-10">Start Learning</h3>
                <p className="text-green-900/80 font-light z-10">Choose your course and begin your journey with expert teachers.</p>
              </div>
            </AnimateSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Modern, Elegant, Animated, Grey Glassmorphism */}
      <section className="py-20 px-4 bg-blue-900">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif inline-block relative">
            Why Choose Us?
            <span className="block h-1 w-24 mx-auto mt-3 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 opacity-80"></span>
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mt-12">
            <AnimateSection className="flex-1" delay={0.05} from="bottom">
              <div className="group bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl p-10 flex flex-col items-center hover:-translate-y-2 hover:shadow-amber-400/30 transition-all duration-300 cursor-pointer relative overflow-hidden">
                <div className="flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award"><circle cx="12" cy="12" r="10"/><path d="M17 17l-5-5-5 5"/><path d="M12 12V7"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Top Rated</h3>
                <p className="text-white/80 font-light">Consistently rated 5 stars by students and parents worldwide.</p>
              </div>
            </AnimateSection>
            <AnimateSection className="flex-1" delay={0.15} from="bottom">
              <div className="group bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl p-10 flex flex-col items-center hover:-translate-y-2 hover:shadow-blue-400/30 transition-all duration-300 cursor-pointer relative overflow-hidden">
                <div className="flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Community</h3>
                <p className="text-white/80 font-light">Join a global community of learners and scholars.</p>
            </div>
            </AnimateSection>
            <AnimateSection className="flex-1" delay={0.25} from="bottom">
              <div className="group bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl p-10 flex flex-col items-center hover:-translate-y-2 hover:shadow-green-400/30 transition-all duration-300 cursor-pointer relative overflow-hidden">
                <div className="flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4 8.5 8.5 0 0 1-6.6 3.1 8.38 8.38 0 0 1-5.4-1.9L3 21l2.9-3.1A8.38 8.38 0 0 1 3 11.5a8.5 8.5 0 0 1 3.1-6.6A8.38 8.38 0 0 1 11.5 3a8.5 8.5 0 0 1 6.6 3.1A8.38 8.38 0 0 1 21 11.5z"/></svg>
            </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Support</h3>
                <p className="text-white/80 font-light">24/7 support via WhatsApp, email, and live chat.</p>
            </div>
            </AnimateSection>
          </div>
        </div>
      </section>

      {/* Animated Stats Section - MIDDLE DUPLICATE */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 transition-transform hover:-translate-y-2 hover:shadow-2xl">
              <Users className="mx-auto h-10 w-10 text-blue-700 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-blue-900 mt-2"><Counter to={100} duration={1500} suffix="+" /></div>
              <div className="text-sm text-slate-600 font-medium mt-1">Students</div>
            </div>
            <div className="group bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl shadow-lg p-8 transition-transform hover:-translate-y-2 hover:shadow-2xl">
              <Star className="mx-auto h-10 w-10 text-amber-500 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-amber-600 mt-2"><Counter to={5} duration={1200} suffix="+" /></div>
              <div className="text-sm text-slate-600 font-medium mt-1">Expert Teachers</div>
            </div>
            <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg p-8 transition-transform hover:-translate-y-2 hover:shadow-2xl">
              <BookOpen className="mx-auto h-10 w-10 text-green-700 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-green-700 mt-2"><Counter to={3} duration={1200} suffix="+" /></div>
              <div className="text-sm text-slate-600 font-medium mt-1">Courses</div>
            </div>
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg p-8 transition-transform hover:-translate-y-2 hover:shadow-2xl">
              <Globe className="mx-auto h-10 w-10 text-purple-700 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-purple-700 mt-2"><Counter to={2} duration={1200} suffix="+" /></div>
              <div className="text-sm text-slate-600 font-medium mt-1">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - White with animation */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl animate-fadeInUp">
          <div className="text-center mb-20 animate-fadeInDown">
            <Badge className="bg-blue-100 text-blue-900 px-4 py-2 mb-6 shadow animate-pulse">Student Success Stories</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 font-serif">What Our Students Say</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">Real experiences from real students around the world.</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={
                  index === 0
                    ? "hiddenLeft"
                    : index === 2
                    ? "hiddenRight"
                    : "hiddenPop"
                }
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hiddenLeft: { opacity: 0, x: -100 },
                  hiddenRight: { opacity: 0, x: 100 },
                  hiddenPop: { opacity: 0, scale: 0.8 },
                  visible:
                    index === 0
                      ? { opacity: 1, x: 0, transition: { duration: 0.7, type: "spring" } }
                      : index === 2
                      ? { opacity: 1, x: 0, transition: { duration: 0.7, type: "spring" } }
                      : { opacity: 1, scale: 1, transition: { duration: 0.7, type: "spring", bounce: 0.4 } }
                }}
                className="relative w-full max-w-md mx-auto z-10 group bg-blue-50 rounded-3xl shadow-2xl p-8 flex flex-col items-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-400 via-blue-200 to-white p-[3px] shadow-2xl flex items-center justify-center mb-4 border-2 border-white relative overflow-visible">
                  <div className="w-full h-full rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-lg">
                    {testimonial.name === "Sarah Johnson" ? (
                      <img
                        src="/testinomial_img.jpg"
                        alt="Sarah Johnson"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    ) : testimonial.name === "Fatima Ali" ? (
                      <img
                        src="/testinomial_img1.jpg"
                        alt="Fatima Ali"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    ) : testimonial.name === "Ahmed Hassan" ? (
                      <img
                        src="/testinomial_img2.jpg"
                        alt="Ahmed Hassan"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    ) : (
                      <img
                        src={`/flags/${testimonial.flag === "🇬🇧" ? "gb" : testimonial.flag === "🇺🇸" ? "us" : "default"}.png`}
                        alt="Country Flag"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  {/* Optional: Glassy overlay */}
                  <div className="absolute inset-0 rounded-xl pointer-events-none" style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 100%)"
                  }} />
                </div>
                <div className="font-semibold text-slate-800 text-lg mb-1">{testimonial.name}</div>
                <div className="text-sm text-slate-500 mb-2">{testimonial.location}</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400 animate-pulse" />
                  ))}
                </div>
                <Badge className="bg-blue-100 text-blue-900 text-xs mb-2 animate-fadeInUp">{testimonial.course}</Badge>
                <p className="text-slate-700 text-base leading-relaxed italic font-serif text-center animate-fadeInUp">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Blue with animation */}
      <section className="py-20 px-4 bg-blue-900">
        <div className="container mx-auto max-w-5xl text-center animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-serif">Our Achievements</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <AnimateSection className="flex-1" delay={0.05} from="bottom">
              <div className="bg-white/10 rounded-2xl p-8 shadow flex flex-col items-center">
              <Users className="h-10 w-10 text-white mb-2 animate-pulse" />
              <span className="text-4xl font-bold text-white animate-fadeInUp">1000+</span>
                <span className="text-lg text-white/80">Students Taught</span>
            </div>
            </AnimateSection>
            <AnimateSection className="flex-1" delay={0.15} from="bottom">
              <div className="bg-white/10 rounded-2xl p-8 shadow flex flex-col items-center">
              <Globe className="h-10 w-10 text-amber-200 mb-2 animate-pulse" />
              <span className="text-4xl font-bold text-amber-200 animate-fadeInUp">30+</span>
                <span className="text-lg text-white/80">Countries Reached</span>
            </div>
            </AnimateSection>
            <AnimateSection className="flex-1" delay={0.25} from="bottom">
              <div className="bg-white/10 rounded-2xl p-8 shadow flex flex-col items-center">
              <CheckCircle className="h-10 w-10 text-green-200 mb-2 animate-pulse" />
              <span className="text-4xl font-bold text-green-200 animate-fadeInUp">10+</span>
                <span className="text-lg text-white/80">Years Experience</span>
            </div>
            </AnimateSection>
          </div>
        </div>
      </section>

      {/* Sample Class Video - Unique, eye-catching, premium Islamic accent */}
      <section className="py-28 px-4 bg-white relative overflow-hidden">
        {/* Soft diagonal gradient background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-amber-100/10 to-blue-900/5 pointer-events-none select-none z-0" />
        {/* Islamic accent SVG deleted */}
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-16 relative z-10 animate-fadeInUp">
          {/* Video Card with animated gradient glow and floating crescent */}
          <AnimateSection className="flex-1 flex items-center justify-center relative" from="left">
            {/* Animated gradient glow */}
            <div className="absolute -inset-8 z-0 pointer-events-none">
              <div className="w-full h-full rounded-3xl bg-gradient-to-tr from-blue-900/30 via-amber-200/30 to-blue-900/10 blur-2xl animate-pulse-slow" />
            </div>
            {/* Floating crescent (Islamic accent) removed as per user request */}
            <div className="relative rounded-3xl shadow-2xl border-2 border-blue-900/10 backdrop-blur-xl bg-white/80 overflow-hidden group z-10">
              <video src="/video.mp4" className="rounded-3xl object-cover w-full h-full relative z-10" autoPlay muted loop playsInline poster="/family.png" />
              {/* Subtle, lighter blur overlay to hide watermark */}
              <div className="absolute right-2 bottom-2 w-56 h-12 rounded-xl backdrop-blur-sm bg-white/10 z-20 pointer-events-none" />
          </div>
          </AnimateSection>
          {/* Info Side */}
          <AnimateSection className="flex-1 flex flex-col items-center md:items-start text-center md:text-left" from="right">
            {/* English heading updated to Lisan-ul-Quran style */}
            <AnimateSection className="mb-2" delay={0.1} from="bottom">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif drop-shadow-lg" style={{ color: '#fbbf24' }}>Lisan-ul-Quran Academy</h2>
            </AnimateSection>
            {/* Quranic Ayat */}
            <span className="font-arabic text-3xl md:text-4xl text-blue-900 drop-shadow-lg mb-2" style={{fontFamily: 'Amiri, serif', letterSpacing: '1px'}}>اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ</span>
            <span className="text-blue-900 text-lg font-light mb-4 block drop-shadow-sm" style={{letterSpacing: '0.5px'}}>“Recite in the name of your Lord who created” <span className="text-blue-900/70">(Qur’an 96:1)</span></span>
            <p className="text-lg text-blue-900/80 max-w-xl mb-6 animate-fadeInUp">Experience our teaching style, interactive lessons, and warm Islamic environment. Every class is designed to inspire and engage students of all ages.</p>
            <AnimateSection className="flex gap-4 mt-2" delay={0.2} from="bottom">
              <span className="bg-blue-900/10 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold shadow">Live Demo</span>
              <span className="bg-blue-900/10 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold shadow">Interactive</span>
              <span className="bg-blue-900/10 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold shadow">Family Friendly</span>
            </AnimateSection>
          </AnimateSection>
        </div>
      </section>

      {/* FAQ - Modern Elegant Blue Card with Scroll Animation */}
      <section className="py-20 px-4 flex justify-center items-center bg-white">
        <AnimateSection className="w-full max-w-2xl mx-auto" from="left">
          <div className="bg-blue-900 rounded-3xl shadow-2xl p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 font-serif text-white drop-shadow-lg">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What courses do you offer?",
                  a: "We offer Quran reading, Tajweed, Arabic language, Islamic studies, and more for all ages and levels."
                },
                {
                  q: "How do I register?",
                  a: "Simply fill out our online registration form and we'll contact you to schedule your free trial class."
                },
                {
                  q: "Are classes one-on-one or group?",
                  a: "We offer both one-on-one and small group classes, depending on your preference."
                },
                {
                  q: "What if I miss a class?",
                  a: "We offer flexible rescheduling and makeup classes to fit your needs."
                }
              ].map((item, idx) => (
                <details key={idx} className="group rounded-xl shadow transition-all duration-300 border border-blue-700 bg-transparent">
                  <summary className="font-semibold text-black flex items-center justify-between cursor-pointer text-lg group-open:text-amber-400 transition-colors bg-white rounded-lg px-4 py-3">
                    {item.q}
                    <span className="ml-2 text-amber-400 transition-transform duration-300 group-open:rotate-90">&#9654;</span>
                  </summary>
                  <div className="mt-3 text-blue-100 text-base leading-relaxed border-t border-blue-700 pt-3 animate-fadeInUp">
                    {item.a}
                  </div>
            </details>
              ))}
            </div>
          </div>
        </AnimateSection>
      </section>

      {/* Islamic Inspiration Section - Unique Modern Style */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-blue-50 via-amber-50 to-white overflow-hidden">
        {/* Decorative geometric SVG accent */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 z-0 opacity-30 pointer-events-none">
          <svg width="320" height="80" viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40 Q80 0 160 40 Q240 80 320 40" stroke="#fbbf24" strokeWidth="6" fill="none" />
            <circle cx="160" cy="40" r="36" stroke="#060957" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="container mx-auto max-w-2xl relative z-10 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, type: 'spring', bounce: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-900/10 p-12 flex flex-col items-center text-center"
            style={{ boxShadow: '0 8px 40px 0 rgba(6,9,87,0.10)' }}
          >
            <span className="text-4xl md:text-5xl font-arabic text-blue-900 mb-6 drop-shadow-lg" style={{ fontFamily: 'Amiri, serif', letterSpacing: '1px' }}>
              اقْرَأْ وَرَبُّكَ الْأَكْرَمُ
            </span>
            <span className="block h-1 w-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-blue-900 opacity-80 shadow-md"></span>
            <span className="text-xl md:text-2xl font-serif text-amber-500 font-semibold mb-2">“Read, and your Lord is the Most Generous.”</span>
            <span className="text-blue-900/80 text-lg font-light">(Qur’an 96:3)</span>
          </motion.div>
        </div>
      </section>

      {/* CTA - White with animation */}
      <section className="relative py-24 px-4 bg-white text-center overflow-hidden">
        {/* Soft radial background accent */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-radial from-amber-100/60 via-white/80 to-transparent rounded-full blur-2xl" />
        </div>
        <div className="container mx-auto max-w-3xl relative z-10">
          {/* Decorative Islamic geometric accent */}
          <div className="flex justify-center mb-6">
            <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12 Q20 0 40 12 Q60 24 80 12" stroke="#fbbf24" strokeWidth="3" fill="none" />
            </svg>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold mb-8 font-[Amiri] text-amber-500 drop-shadow-lg tracking-wide"
            style={{ letterSpacing: '2px' }}
          >
            Begin Your Sacred Journey Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl mb-10 text-blue-900/80 leading-relaxed max-w-2xl mx-auto font-sans tracking-wider"
          >
            Join thousands of students worldwide who have transformed their relationship with the Quran. Start with a free trial class and experience the difference of authentic Islamic education.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, type: 'spring', bounce: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/register">
              <button className="rounded-full px-14 py-6 text-2xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-white shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-200/60 animate-pulse drop-shadow-lg">
                Start Free Trial
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact - Blue with animation */}
      <section className="py-20 px-4 bg-blue-900 text-white text-center animate-fadeInUp">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Contact Us</h2>
          <p className="text-xl mb-8 text-white/80 leading-relaxed max-w-2xl mx-auto">Have questions or need support? Our team is here to help you 24/7. Reach out via email, WhatsApp, or the contact form below.</p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a href="mailto:info@lisanulquran.com" className="bg-white/10 rounded-xl px-8 py-6 shadow hover:bg-white/20 transition text-white flex flex-col items-center">
              <Mail className="h-8 w-8 mb-2" />
              <span className="font-bold">Email</span>
              <span className="text-white/80">info@lisanulquran.com</span>
            </a>
            <a href="https://wa.me/447123456789" className="bg-white/10 rounded-xl px-8 py-6 shadow hover:bg-white/20 transition text-white flex flex-col items-center">
              <MessageCircle className="h-8 w-8 mb-2" />
              <span className="font-bold">WhatsApp</span>
              <span className="text-white/80">+44 7123 456789</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - White with animation */}
      <footer className="py-8 bg-white text-[#1E3A8A] text-center animate-fadeInUp">
        <div className="container mx-auto max-w-4xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-lg font-bold animate-fadeInLeft">Lisan-ul-Quran Academy</div>
          <div className="flex gap-6 animate-fadeInUp">
            <a href="#" className="hover:underline text-[#1E3A8A] hover:text-blue-700">Home</a>
            <a href="#" className="hover:underline text-[#1E3A8A] hover:text-blue-700">Courses</a>
            <a href="#" className="hover:underline text-[#1E3A8A] hover:text-blue-700">About</a>
            <a href="#" className="hover:underline text-[#1E3A8A] hover:text-blue-700">Contact</a>
          </div>
          <div className="flex gap-4 animate-fadeInRight">
            <a href="#" className="text-[#1E3A8A] hover:text-blue-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 11-12.728 0M12 3v9" /></svg></a>
            <a href="#" className="text-[#1E3A8A] hover:text-blue-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2M12 15v2m0 0v-2m0 0a2 2 0 100-4 2 2 0 000 4z" /></svg></a>
            <a href="#" className="text-[#1E3A8A] hover:text-blue-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 01-12 0" /></svg></a>
          </div>
          <div className="text-sm animate-fadeInUp">&copy; {new Date().getFullYear()} Lisan-ul-Quran Academy. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

