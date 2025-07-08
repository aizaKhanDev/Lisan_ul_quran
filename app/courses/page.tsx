import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Users, Star, CheckCircle, Globe, Award, Heart } from "lucide-react"
import Link from "next/link"

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Quran Reading (Nazra)",
      subtitle: "Master the Art of Quranic Recitation",
      description:
        "Learn proper Quran recitation with correct pronunciation, basic Tajweed rules, and spiritual connection",
      duration: "6-12 months",
      level: "Beginner",
      students: 200,
      rating: 4.9,
      price: "£40/month",
      originalPrice: "£50/month",
      features: [
        "Arabic alphabet recognition and pronunciation",
        "Basic Tajweed rules and application",
        "Proper Makharij (articulation points)",
        "Reading fluency development",
        "Weekly progress assessments",
        "Individual feedback sessions",
        "Digital Quran with audio support",
        "Certificate upon completion",
      ],
      highlights: ["Most Popular", "Beginner Friendly"],
      color: "border-blue-200 bg-gradient-to-br from-blue-50 to-white",
      icon: BookOpen,
      ukTime: "6:00 PM - 7:00 PM",
      usaTime: "1:00 PM - 2:00 PM EST",
      teacher: "Ustadh Muhammad Al-Qari",
    },
    {
      id: 2,
      title: "Quran Memorization (Hifz)",
      subtitle: "Sacred Journey of Memorizing the Holy Quran",
      description:
        "Systematic Quran memorization program with proven techniques, revision methods, and spiritual guidance",
      duration: "2-4 years",
      level: "Intermediate",
      students: 120,
      rating: 4.8,
      price: "£60/month",
      originalPrice: "£75/month",
      features: [
        "Structured memorization methodology",
        "Daily revision schedule planning",
        "Memory retention techniques",
        "Spiritual counseling and motivation",
        "Progress tracking and milestones",
        "Peer support groups",
        "Monthly family progress reports",
        "Ijazah pathway preparation",
      ],
      highlights: ["Premium Program", "Spiritual Growth"],
      color: "border-amber-200 bg-gradient-to-br from-amber-50 to-white",
      icon: Heart,
      ukTime: "7:00 PM - 8:30 PM",
      usaTime: "2:00 PM - 3:30 PM EST",
      teacher: "Ustadh Ahmad Ibn Yusuf",
    },
    {
      id: 3,
      title: "Tajweed Excellence",
      subtitle: "Perfect Your Quranic Recitation",
      description:
        "Advanced Tajweed course focusing on perfect pronunciation, beautiful recitation, and spiritual connection",
      duration: "8-12 months",
      level: "Advanced",
      students: 80,
      rating: 4.9,
      price: "£50/month",
      originalPrice: "£65/month",
      features: [
        "Advanced Tajweed rules mastery",
        "Makharij perfection training",
        "Sifaat (characteristics) application",
        "Beautiful recitation styles (Qira'at)",
        "Individual voice coaching",
        "Recording and feedback sessions",
        "Competition preparation",
        "Advanced certification",
      ],
      highlights: ["Expert Level", "Voice Training"],
      color: "border-green-200 bg-gradient-to-br from-green-50 to-white",
      icon: Star,
      ukTime: "8:00 PM - 9:00 PM",
      usaTime: "3:00 PM - 4:00 PM EST",
      teacher: "Ustadh Muhammad Al-Qari",
    },
    {
      id: 4,
      title: "Arabic Language Mastery",
      subtitle: "Unlock the Language of the Quran",
      description:
        "Comprehensive Arabic language course from basics to advanced conversation and Quranic understanding",
      duration: "12-18 months",
      level: "All Levels",
      students: 150,
      rating: 4.7,
      price: "£45/month",
      originalPrice: "£55/month",
      features: [
        "Arabic grammar (Nahw) fundamentals",
        "Vocabulary building (3000+ words)",
        "Conversation practice sessions",
        "Reading comprehension skills",
        "Writing and composition",
        "Quranic Arabic focus",
        "Cultural context understanding",
        "Fluency development program",
      ],
      highlights: ["Comprehensive", "Quranic Focus"],
      color: "border-purple-200 bg-gradient-to-br from-purple-50 to-white",
      icon: Globe,
      ukTime: "5:00 PM - 6:30 PM",
      usaTime: "12:00 PM - 1:30 PM EST",
      teacher: "Ustadha Fatima Zahra",
    },
    {
      id: 5,
      title: "Islamic Studies Foundation",
      subtitle: "Comprehensive Islamic Education",
      description: "Complete Islamic education covering Aqeedah, Fiqh, Seerah, and contemporary Islamic issues",
      duration: "10-15 months",
      level: "All Levels",
      students: 100,
      rating: 4.8,
      price: "£35/month",
      originalPrice: "£45/month",
      features: [
        "Islamic beliefs (Aqeedah) fundamentals",
        "Islamic jurisprudence (Fiqh) basics",
        "Prophet's biography (Seerah) study",
        "Islamic history and civilization",
        "Contemporary Islamic issues",
        "Hadith studies introduction",
        "Islamic ethics and character",
        "Practical Islamic living",
      ],
      highlights: ["Foundation Course", "Practical Islam"],
      color: "border-red-200 bg-gradient-to-br from-red-50 to-white",
      icon: Award,
      ukTime: "4:00 PM - 5:00 PM",
      usaTime: "11:00 AM - 12:00 PM EST",
      teacher: "Ustadh Ahmad Ibn Yusuf",
    },
    {
      id: 6,
      title: "Kids Quran Adventure",
      subtitle: "Fun Islamic Learning for Children",
      description:
        "Special program designed for children aged 5-12 with interactive games, stories, and engaging activities",
      duration: "Ongoing",
      level: "Kids (5-12 years)",
      students: 250,
      rating: 4.9,
      price: "£30/month",
      originalPrice: "£40/month",
      features: [
        "Interactive learning games",
        "Colorful digital materials",
        "Short focused sessions (30 min)",
        "Reward and achievement system",
        "Parent progress reports",
        "Islamic stories and values",
        "Fun competitions and activities",
        "Age-appropriate curriculum",
      ],
      highlights: ["Kids Special", "Interactive Fun"],
      color: "border-pink-200 bg-gradient-to-br from-pink-50 to-white",
      icon: Heart,
      ukTime: "4:00 PM - 4:30 PM",
      usaTime: "11:00 AM - 11:30 AM EST",
      teacher: "Ustadha Fatima Zahra",
    },
  ]

  const getBadgeColor = (level: string) => {
    const colors = {
      Beginner: "bg-green-100 text-green-800",
      Intermediate: "bg-amber-100 text-amber-800",
      Advanced: "bg-red-100 text-red-800",
      "All Levels": "bg-blue-100 text-blue-800",
      "Kids (5-12 years)": "bg-pink-100 text-pink-800",
    }
    return colors[level as keyof typeof colors] || colors["All Levels"]
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-6">Our Programs</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 font-arabic">
            Comprehensive Islamic
            <span className="text-blue-900 block">Education Programs</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Choose from our carefully designed courses that cater to students of all levels and ages. Each program
            combines traditional Islamic teaching methods with modern educational technology to provide an exceptional
            learning experience.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => (
            <Card
              key={course.id}
              className={`border-2 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${course.color} relative overflow-hidden`}
            >
              {/* Highlights */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {course.highlights.map((highlight, index) => (
                  <Badge key={index} className="bg-blue-900 text-white text-xs px-2 py-1">
                    {highlight}
                  </Badge>
                ))}
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <course.icon className="h-6 w-6 text-blue-900" />
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                </div>

                <Badge className={getBadgeColor(course.level)} variant="secondary">
                  {course.level}
                </Badge>

                <CardTitle className="text-xl text-slate-800 font-arabic mt-2">{course.title}</CardTitle>
                <CardDescription className="text-blue-600 font-medium text-sm">{course.subtitle}</CardDescription>
                <CardDescription className="text-slate-600 leading-relaxed mt-2">{course.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Course Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Users className="h-4 w-4" />
                    <span>{course.students} students</span>
                  </div>
                </div>

                {/* Schedule */}
                <div className="bg-white/50 rounded-lg p-3 space-y-2">
                  <div className="text-sm font-medium text-slate-800">Class Schedule:</div>
                  <div className="text-sm text-slate-600">
                    <div>🇬🇧 UK: {course.ukTime}</div>
                    <div>🇺🇸 USA: {course.usaTime}</div>
                  </div>
                  <div className="text-sm text-blue-600 font-medium">Teacher: {course.teacher}</div>
                </div>

                {/* Features Preview */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-800 text-sm">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {course.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {course.features.length > 4 && (
                      <li className="text-sm text-slate-500 ml-5">+{course.features.length - 4} more features</li>
                    )}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-slate-800">{course.price}</span>
                        <span className="text-lg text-slate-400 line-through">{course.originalPrice}</span>
                      </div>
                      <div className="text-sm text-green-600 font-medium">Save 20% - Limited Time</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Link href="/register" className="block">
                      <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white rounded-lg py-6">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Enroll Now
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 bg-white/80 rounded-lg"
                    >
                      Free Trial Class
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-6">Why Choose Our Courses</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 font-arabic mb-4">
              Excellence in Every Aspect
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                <BookOpen className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="font-semibold text-slate-800">Authentic Curriculum</h3>
              <p className="text-sm text-slate-600">Based on traditional Islamic scholarship</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-slate-800">Expert Teachers</h3>
              <p className="text-sm text-slate-600">Qualified Islamic scholars and educators</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-800">Flexible Schedule</h3>
              <p className="text-sm text-slate-600">UK & USA friendly timings</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-800">Certification</h3>
              <p className="text-sm text-slate-600">Recognized Islamic education certificates</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border border-amber-400 rounded-lg rotate-45"></div>
          </div>

          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-arabic">Not Sure Which Course to Choose?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our educational consultants are here to help you find the perfect course based on your current level,
              learning goals, and schedule preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 rounded-xl">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
