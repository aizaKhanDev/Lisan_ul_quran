"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Video, Calendar, ExternalLink, BookOpen, Globe, Play, Shield } from "lucide-react"
import { useState } from "react"

export default function ClassesPage() {
  const [selectedTimeZone, setSelectedTimeZone] = useState<"UK" | "USA">("UK")

  const timeSlots = [
    {
      id: 1,
      time: "6:00 AM - 7:00 AM",
      ukTime: "6:00 AM",
      usaTime: "1:00 AM EST",
      courses: ["Fajr Quran Class", "Morning Arabic"],
      teacher: "Ustadh Ahmad Ibn Yusuf",
      students: 8,
      maxStudents: 12,
      available: true,
      level: "All Levels",
      zoomId: "123-456-789",
    },
    {
      id: 2,
      time: "8:00 AM - 9:00 AM",
      ukTime: "8:00 AM",
      usaTime: "3:00 AM EST",
      courses: ["Kids Quran Adventure", "Tajweed Basics"],
      teacher: "Ustadha Fatima Zahra",
      students: 12,
      maxStudents: 15,
      available: true,
      level: "Beginner",
      zoomId: "234-567-890",
    },
    {
      id: 3,
      time: "4:00 PM - 5:00 PM",
      ukTime: "4:00 PM",
      usaTime: "11:00 AM EST",
      courses: ["Quran Recitation", "Islamic Studies"],
      teacher: "Ustadh Muhammad Al-Qari",
      students: 15,
      maxStudents: 15,
      available: false,
      level: "Intermediate",
      zoomId: "345-678-901",
    },
    {
      id: 4,
      time: "6:00 PM - 7:00 PM",
      ukTime: "6:00 PM",
      usaTime: "1:00 PM EST",
      courses: ["Hifz Program", "Advanced Arabic"],
      teacher: "Ustadh Ahmad Ibn Yusuf",
      students: 10,
      maxStudents: 12,
      available: true,
      level: "Advanced",
      zoomId: "456-789-012",
    },
    {
      id: 5,
      time: "8:00 PM - 9:00 PM",
      ukTime: "8:00 PM",
      usaTime: "3:00 PM EST",
      courses: ["Evening Quran", "Family Classes"],
      teacher: "Ustadha Fatima Zahra",
      students: 18,
      maxStudents: 20,
      available: true,
      level: "All Levels",
      zoomId: "567-890-123",
    },
    {
      id: 6,
      time: "10:00 PM - 11:00 PM",
      ukTime: "10:00 PM",
      usaTime: "5:00 PM EST",
      courses: ["Adult Beginners", "Quran Translation"],
      teacher: "Ustadh Muhammad Al-Qari",
      students: 14,
      maxStudents: 16,
      available: true,
      level: "Beginner",
      zoomId: "678-901-234",
    },
  ]

  const upcomingClasses = [
    {
      title: "Quran Recitation - Beginner",
      time: "Today, 6:00 PM UK / 1:00 PM EST",
      teacher: "Ustadh Muhammad Al-Qari",
      students: 12,
      maxStudents: 15,
      zoomLink: "https://zoom.us/j/123456789",
      duration: "60 minutes",
      status: "Starting Soon",
      course: "Nazra",
    },
    {
      title: "Kids Quran Adventure",
      time: "Tomorrow, 4:00 PM UK / 11:00 AM EST",
      teacher: "Ustadha Fatima Zahra",
      students: 8,
      maxStudents: 12,
      zoomLink: "https://zoom.us/j/987654321",
      duration: "45 minutes",
      status: "Open",
      course: "Kids Program",
    },
    {
      title: "Arabic Language - Intermediate",
      time: "Tomorrow, 8:00 PM UK / 3:00 PM EST",
      teacher: "Ustadha Fatima Zahra",
      students: 10,
      maxStudents: 15,
      zoomLink: "https://zoom.us/j/456789123",
      duration: "90 minutes",
      status: "Open",
      course: "Arabic",
    },
  ]

  const getLevelColor = (level: string) => {
    const colors = {
      Beginner: "bg-green-100 text-green-800",
      Intermediate: "bg-amber-100 text-amber-800",
      Advanced: "bg-red-100 text-red-800",
      "All Levels": "bg-blue-100 text-blue-800",
    }
    return colors[level as keyof typeof colors] || colors["All Levels"]
  }

  const getStatusColor = (status: string) => {
    const colors = {
      "Starting Soon": "bg-red-100 text-red-800",
      Open: "bg-green-100 text-green-800",
      Full: "bg-gray-100 text-gray-800",
    }
    return colors[status as keyof typeof colors] || colors["Open"]
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-6">Live Classes</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 font-arabic">
            Class Schedule &<span className="text-blue-900 block">Zoom Links</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Join our interactive live classes from anywhere in the world. All sessions are conducted via Zoom with
            experienced Islamic scholars and qualified teachers.
          </p>
        </div>

        {/* Time Zone Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl border-2 border-slate-200 p-2 flex">
            <button
              onClick={() => setSelectedTimeZone("UK")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedTimeZone === "UK" ? "bg-blue-900 text-white shadow-lg" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              🇬🇧 UK Time
            </button>
            <button
              onClick={() => setSelectedTimeZone("USA")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedTimeZone === "USA" ? "bg-blue-900 text-white shadow-lg" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              🇺🇸 USA Time (EST)
            </button>
          </div>
        </div>

        {/* Upcoming Classes */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-800 font-arabic">Your Upcoming Classes</h2>
            <Badge className="bg-green-100 text-green-800 px-3 py-1">🔴 Live Now: 3 Classes</Badge>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {upcomingClasses.map((classItem, index) => (
              <Card
                key={index}
                className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={getStatusColor(classItem.status)}>{classItem.status}</Badge>
                    <Badge className="bg-slate-100 text-slate-700 text-xs">{classItem.course}</Badge>
                  </div>
                  <CardTitle className="text-lg text-slate-800 font-arabic">{classItem.title}</CardTitle>
                  <CardDescription className="text-slate-600 font-medium">{classItem.time}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <BookOpen className="h-4 w-4" />
                      <span>{classItem.teacher}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="h-4 w-4" />
                      <span>{classItem.duration}</span>
                    </div>
                  </div>

                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-600">Class Capacity</span>
                      <span className="text-sm font-medium text-slate-800">
                        {classItem.students}/{classItem.maxStudents}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(classItem.students / classItem.maxStudents) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white rounded-lg py-6"
                    onClick={() => window.open(classItem.zoomLink, "_blank")}
                  >
                    <Video className="mr-2 h-4 w-4" />
                    Join Zoom Class
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Weekly Schedule */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-800 font-arabic">Weekly Class Schedule</h2>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-slate-500" />
              <span className="text-slate-600">Showing {selectedTimeZone} Time Zone</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-50 to-amber-50 border-b-2 border-slate-200">
                  <tr>
                    <th className="text-left p-4 font-semibold text-slate-800 font-arabic">Time Slot</th>
                    <th className="text-left p-4 font-semibold text-slate-800 font-arabic">
                      {selectedTimeZone === "UK" ? "UK Time" : "USA Time (EST)"}
                    </th>
                    <th className="text-left p-4 font-semibold text-slate-800 font-arabic">Courses</th>
                    <th className="text-left p-4 font-semibold text-slate-800 font-arabic">Teacher</th>
                    <th className="text-left p-4 font-semibold text-slate-800 font-arabic">Level</th>
                    <th className="text-left p-4 font-semibold text-slate-800 font-arabic">Capacity</th>
                    <th className="text-left p-4 font-semibold text-slate-800 font-arabic">Status</th>
                    <th className="text-left p-4 font-semibold text-slate-800 font-arabic">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {timeSlots.map((slot, index) => (
                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-slate-500" />
                          <span className="font-medium text-slate-800">{slot.time}</span>
                        </div>
                      </td>
                      <td className="p-4 text-slate-600 font-medium">
                        {selectedTimeZone === "UK" ? slot.ukTime : slot.usaTime}
                      </td>
                      <td className="p-4">
                        <div className="space-y-1">
                          {slot.courses.map((course, courseIndex) => (
                            <div key={courseIndex} className="text-sm text-slate-700 font-medium">
                              {course}
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="p-4 text-slate-600">{slot.teacher}</td>
                      <td className="p-4">
                        <Badge className={getLevelColor(slot.level)} variant="secondary">
                          {slot.level}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-slate-500" />
                          <span className="text-slate-600">
                            {slot.students}/{slot.maxStudents}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge className={slot.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                          {slot.available ? "Available" : "Full"}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Button
                          size="sm"
                          className={`${
                            slot.available
                              ? "bg-blue-900 hover:bg-blue-800 text-white"
                              : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          } rounded-lg`}
                          disabled={!slot.available}
                          onClick={() => window.open(`https://zoom.us/j/${slot.zoomId}`, "_blank")}
                        >
                          <Play className="mr-1 h-3 w-3" />
                          {slot.available ? "Join" : "Full"}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Class Guidelines & Policies */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-slate-200 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
              <CardTitle className="text-xl text-slate-800 flex items-center gap-2 font-arabic">
                <Video className="h-5 w-5 text-blue-600" />
                Zoom Class Guidelines
              </CardTitle>
              <CardDescription className="text-slate-600">
                Follow these guidelines for the best learning experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-900">1</span>
                  </div>
                  <div className="text-sm text-slate-700">
                    <strong>Join Early:</strong> Enter the class 5 minutes before start time for technical checks
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-900">2</span>
                  </div>
                  <div className="text-sm text-slate-700">
                    <strong>Audio Etiquette:</strong> Keep microphone muted unless speaking or reciting
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-900">3</span>
                  </div>
                  <div className="text-sm text-slate-700">
                    <strong>Equipment:</strong> Use headphones for better audio quality and minimize echo
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-900">4</span>
                  </div>
                  <div className="text-sm text-slate-700">
                    <strong>Materials:</strong> Have your Quran, notebook, and pen ready before class
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-900">5</span>
                  </div>
                  <div className="text-sm text-slate-700">
                    <strong>Dress Code:</strong> Dress modestly and appropriately for Islamic learning
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-900">6</span>
                  </div>
                  <div className="text-sm text-slate-700">
                    <strong>Environment:</strong> Find a quiet, well-lit space free from distractions
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-white">
              <CardTitle className="text-xl text-slate-800 flex items-center gap-2 font-arabic">
                <Shield className="h-5 w-5 text-amber-600" />
                Class Policies
              </CardTitle>
              <CardDescription className="text-slate-600">
                Important policies for smooth class operations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Calendar className="h-3 w-3 text-amber-600" />
                  </div>
                  <div className="text-sm text-slate-700">
                    <strong>Schedule:</strong> Classes run Monday to Sunday with consistent timing
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="h-3 w-3 text-amber-600" />
                  </div>
                  <div className="text-sm text-slate-700">
                    <strong>Make-up Classes:</strong> Available for missed sessions with 24-hour notice
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ExternalLink className="h-3 w-3 text-amber-600" />
                  </div>
                  <div className="text-sm text-slate-700">
                    <strong>Cancellations:</strong> 24-hour notice required for class cancellations
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Video className="h-3 w-3 text-amber-600" />
                  </div>
                  <div className="text-sm text-slate-700">
                    <strong>Recordings:</strong> Class recordings available for enrolled students only
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BookOpen className="h-3 w-3 text-amber-600" />
                  </div>
                  <div className="text-sm text-slate-700">
                    <strong>Progress Reports:</strong> Monthly detailed progress reports sent to students/parents
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="h-3 w-3 text-amber-600" />
                  </div>
                  <div className="text-sm text-slate-700">
                    <strong>Support:</strong> 24/7 WhatsApp support available for technical issues
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Requirements */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2 mb-6">Technical Requirements</Badge>
            <h2 className="text-3xl font-bold text-slate-800 font-arabic mb-4">Ensure the Best Learning Experience</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Simple technical requirements to join our online classes seamlessly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="font-semibold text-slate-800">Internet Connection</h3>
              <p className="text-sm text-slate-600">Stable broadband connection (minimum 5 Mbps)</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <Video className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-800">Device</h3>
              <p className="text-sm text-slate-600">Computer, tablet, or smartphone with camera</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-slate-800">Zoom App</h3>
              <p className="text-sm text-slate-600">Latest version of Zoom installed and updated</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-800">Learning Materials</h3>
              <p className="text-sm text-slate-600">Quran, notebook, and digital resources provided</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
