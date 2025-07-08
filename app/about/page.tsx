import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Heart, Star, Shield, Clock } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const teachers = [
    {
      name: "Ustadh Muhammad Al-Qari",
      title: "Lead Quran Teacher & Tajweed Expert",
      qualification: "Ijazah in Quranic Recitation, Al-Azhar University",
      experience: "15+ years",
      specialization: "Tajweed, Qira'at, Quran Memorization",
      image: "/placeholder.svg?height=300&width=300",
      languages: ["Arabic", "English", "Urdu"],
    },
    {
      name: "Ustadha Fatima Zahra",
      title: "Arabic Language & Islamic Studies",
      qualification: "MA in Arabic Literature, Islamic University of Madinah",
      experience: "12+ years",
      specialization: "Arabic Grammar, Islamic History, Women's Classes",
      image: "/placeholder.svg?height=300&width=300",
      languages: ["Arabic", "English"],
    },
    {
      name: "Ustadh Ahmad Ibn Yusuf",
      title: "Islamic Studies & Fiqh Scholar",
      qualification: "PhD in Islamic Jurisprudence, University of Damascus",
      experience: "18+ years",
      specialization: "Fiqh, Aqeedah, Hadith Studies",
      image: "/placeholder.svg?height=300&width=300",
      languages: ["Arabic", "English", "French"],
    },
  ]

  const values = [
    {
      icon: BookOpen,
      title: "Authentic Knowledge",
      description: "We adhere to traditional Islamic scholarship while embracing modern teaching methodologies",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Heart,
      title: "Spiritual Excellence",
      description: "Fostering not just academic learning but spiritual connection with the Quran",
      color: "bg-red-50 text-red-600",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Creating a global community of learners united in their love for Islamic knowledge",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Maintaining the highest standards of Islamic ethics in all our interactions",
      color: "bg-purple-50 text-purple-600",
    },
  ]

  return (
    <div className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50 overflow-hidden min-h-screen px-4">
      {/* Decorative Islamic pattern or SVG (optional, can add your own pattern in public/your-pattern.svg) */}
      {/* <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: "url('/your-pattern.svg')", backgroundRepeat: 'repeat'}} /> */}

      {/* Badge */}
      <div className="flex justify-center mb-4">
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-yellow-900 px-6 py-2 rounded-full shadow-lg font-semibold text-sm tracking-wide border border-yellow-300">
          About Lisan ul Quran Academy
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-center text-blue-900 drop-shadow-lg mb-4">
        Spreading the Light of Quranic Knowledge
      </h2>
      {/* Divider */}
      <div className="flex justify-center mb-8">
        <div className="h-1 w-32 rounded-full bg-gradient-to-r from-blue-500 via-yellow-400 to-blue-500 shadow-md"></div>
      </div>
      {/* Subheading */}
      <p className="text-center text-lg md:text-xl text-blue-700/80 max-w-3xl mx-auto mb-12">
        Founded with the noble mission to make authentic Islamic education accessible worldwide, we combine traditional teaching methods with modern technology to create an unparalleled learning experience.
      </p>

      {/* Cards */}
      <div className="relative flex flex-col md:flex-row gap-8 justify-center items-stretch z-10">
        {/* Card 1 */}
        <div className="flex-1 bg-white/60 backdrop-blur-lg border-2 border-blue-200 rounded-3xl shadow-xl p-8 transition-transform hover:-translate-y-2 hover:shadow-2xl hover:border-yellow-400/80 duration-300 group">
          <div className="flex justify-center mb-4">
            <span className="bg-blue-100 p-4 rounded-full shadow group-hover:scale-110 transition-transform">
              {/* Book Icon */}
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"></path><path d="M4 4.5A2.5 2.5 0 016.5 7H20v13"></path></svg>
            </span>
          </div>
          <h3 className="text-xl font-serif font-bold text-blue-900 mb-2 text-center">Authentic Teaching</h3>
          <p className="text-blue-800/80 text-center">Our curriculum follows traditional Islamic methodology while incorporating modern pedagogical approaches for effective online learning.</p>
        </div>
        {/* Card 2 */}
        <div className="flex-1 bg-white/60 backdrop-blur-lg border-2 border-yellow-200 rounded-3xl shadow-xl p-8 transition-transform hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400/80 duration-300 group md:-mt-8">
          <div className="flex justify-center mb-4">
            <span className="bg-yellow-100 p-4 rounded-full shadow group-hover:scale-110 transition-transform">
              {/* Teacher Icon */}
              <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"></circle><path d="M5.5 21a7.5 7.5 0 0113 0"></path></svg>
            </span>
          </div>
          <h3 className="text-xl font-serif font-bold text-yellow-900 mb-2 text-center">Expert Teachers</h3>
          <p className="text-yellow-800/80 text-center">Learn from certified Qaris, Arabic scholars, and Islamic studies experts with years of teaching experience and deep spiritual understanding.</p>
        </div>
        {/* Card 3 */}
        <div className="flex-1 bg-white/60 backdrop-blur-lg border-2 border-green-200 rounded-3xl shadow-xl p-8 transition-transform hover:-translate-y-2 hover:shadow-2xl hover:border-yellow-400/80 duration-300 group">
          <div className="flex justify-center mb-4">
            <span className="bg-green-100 p-4 rounded-full shadow group-hover:scale-110 transition-transform">
              {/* Globe Icon */}
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"></path></svg>
            </span>
          </div>
          <h3 className="text-xl font-serif font-bold text-green-900 mb-2 text-center">Global Community</h3>
          <p className="text-green-800/80 text-center">Join a diverse community of learners from around the world, fostering cultural exchange and shared spiritual growth in Islamic knowledge.</p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-blue-900" />
              </div>
              <CardTitle className="text-2xl text-slate-800 font-arabic">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600 text-lg leading-relaxed">
                "To spread the understanding of the Quran with clarity, sincerity, and excellence, creating a global
                community of learners who embody the beautiful teachings of Islam in their daily lives and become
                beacons of light for humanity."
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2 border-amber-100 bg-gradient-to-br from-amber-50 to-white">
            <CardHeader>
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-amber-600" />
              </div>
              <CardTitle className="text-2xl text-slate-800 font-arabic">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600 text-lg leading-relaxed">
                "To provide authentic, accessible, and transformative Islamic education through innovative online
                platforms, preserving traditional teaching methods while embracing modern technology to serve students
                worldwide with excellence and spiritual guidance."
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-green-100 text-green-800 px-4 py-2">Our Journey</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 font-arabic">
                A Story of Faith and Innovation
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  In 2020, during a time when the world was seeking connection and spiritual guidance, a group of
                  passionate Islamic scholars and educators came together with a shared vision: to bridge the gap
                  between traditional Islamic education and the modern world's needs.
                </p>
                <p>
                  Recognizing the challenges faced by Muslim families in the UK, USA, and beyond in accessing authentic
                  Quranic education, we developed a comprehensive online platform that maintains the sanctity and
                  authenticity of traditional Islamic teaching methods while leveraging the power of modern technology.
                </p>
                <p>
                  Today, Alhamdulillah, we proudly serve over 500 students across different continents and time zones,
                  with a dedicated team of 50+ qualified teachers who are not just educators but spiritual mentors
                  guiding students on their journey of Islamic learning.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 via-white to-amber-50 rounded-3xl p-8 shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Islamic Education Heritage"
                  width={500}
                  height={400}
                  className="rounded-2xl w-full"
                />
                <div className="absolute -top-4 -right-4 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Since 2020
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2 mb-6">Our Foundation</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 font-arabic mb-4">Built on Islamic Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every aspect of our academy is grounded in the timeless principles of Islamic education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border border-slate-200 hover:shadow-lg transition-all duration-300 text-center"
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg text-slate-800 font-arabic">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed text-sm">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Teacher Profiles */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-6">Meet Our Scholars</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 font-arabic mb-4">
              Learn from Qualified Islamic Scholars
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our teachers combine deep Islamic knowledge with modern pedagogical expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card
                key={index}
                className="border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-amber-50 flex items-center justify-center">
                  <Image
                    src={teacher.image || "/placeholder.svg"}
                    alt={teacher.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-slate-800 font-arabic">{teacher.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{teacher.title}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{teacher.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-slate-600">{teacher.experience} teaching experience</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{teacher.specialization}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {teacher.languages.map((lang, langIndex) => (
                      <Badge key={langIndex} className="bg-slate-100 text-slate-700 text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-6">Our Impact</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 font-arabic mb-4">
              Transforming Lives Worldwide
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Alhamdulillah, by Allah's grace, we have achieved remarkable milestones in our mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-blue-900">500+</div>
              <div className="text-slate-600 font-medium">Students Enrolled</div>
              <div className="text-sm text-slate-500">Across 25+ Countries</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-amber-600">50+</div>
              <div className="text-slate-600 font-medium">Qualified Teachers</div>
              <div className="text-sm text-slate-500">Certified Islamic Scholars</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-green-600">300+</div>
              <div className="text-slate-600 font-medium">Quran Completions</div>
              <div className="text-sm text-slate-500">Students who finished Quran</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-purple-600">4.9★</div>
              <div className="text-slate-600 font-medium">Student Rating</div>
              <div className="text-sm text-slate-500">Based on 1000+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
