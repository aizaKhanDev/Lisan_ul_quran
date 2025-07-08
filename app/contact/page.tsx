"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, Globe, Users, Star, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      description: "Get instant help through WhatsApp",
      details: [
        { label: "UK Students", value: "", link: "https://wa.me/447123456789?text=Hi, I need help with Lisan ul Quran Academy" },
        { label: "USA Students", value: "", link: "https://wa.me/15551234567?text=Hi, I need help with Lisan ul Quran Academy" }
      ],
      color: "bg-green-50 border-green-200",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us detailed inquiries",
      details: [
        { label: "General Inquiries", value: "info@lisanulquran.com", link: "mailto:info@lisanulquran.com" },
        { label: "Admissions", value: "admissions@lisanulquran.com", link: "mailto:admissions@lisanulquran.com" }
      ],
      color: "bg-blue-50 border-blue-200",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    }
  ]

  const faqItems = [
    {
      question: "How do I join a class?",
      answer: "Visit our Classes page for Zoom links and schedule. All registered students receive direct access."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept PayPal, bank transfers, credit/debit cards, and offer flexible payment plans."
    },
    {
      question: "Can I get a refund?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our services."
    },
    {
      question: "Do you provide certificates?",
      answer: "Yes, we provide certificates upon successful completion of each course program."
    },
    {
      question: "What if I miss a class?",
      answer: "We provide class recordings and offer make-up sessions for missed classes with prior notice."
    },
    {
      question: "Are classes suitable for beginners?",
      answer: "We have programs designed specifically for beginners with no prior knowledge."
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-6">Get in Touch</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 font-arabic">
            Contact Our 
            <span className="text-blue-900 block">Support Team</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Have questions about our courses, need technical support, or want to learn more about Islamic education? 
            We're here to help you on your learning journey. Reach out through any of the methods below.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className={`border-2 ${method.color} hover:shadow-xl transition-all duration-300`}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <method.icon className="h-8 w-8 text-slate-700" />
                </div>
                <CardTitle className="text-xl text-slate-800 font-arabic">{method.title}</CardTitle>
                <CardDescription className="text-slate-600">{method.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {method.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="space-y-2">
                    <div className="font-medium text-slate-800 text-sm">{detail.label}:</div>
                    <a
                      href={detail.link}
                      target={detail.link.startsWith('http') ? '_blank' : undefined}
                      rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-slate-600 hover:text-slate-800 transition-colors block"
                    >
                      {detail.value}
                    </a>
                  </div>
                ))}
                <Button 
                  className={`w-full ${method.buttonColor} text-white rounded-lg mt-4`}
                  onClick={() => window.open(method.details[0].link, method.details[0].link.startsWith('http') ? '_blank' : '_self')}
                >
                  <method.icon className="mr-2 h-4 w-4" />
                  Contact Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-slate-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-amber-50">
                <CardTitle className="text-2xl text-slate-800 font-arabic">Send us a Message</CardTitle>
                <CardDescription className="text-slate-600">
                  Fill out the form below and we'll respond within 24 hours during business days
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-slate-700">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        className="border-slate-300 focus:border-blue-500 rounded-lg"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-slate-700">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                        className="border-slate-300 focus:border-blue-500 rounded-lg"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="border-slate-300 focus:border-blue-500 rounded-lg"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      className="border-slate-300 focus:border-blue-500 rounded-lg"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your inquiry in detail..."
                      rows={6}
                      className="border-slate-300 focus:border-blue-500 rounded-lg"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white py-6 rounded-lg"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="border-2 border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800 font-arabic">Contact Information</CardTitle>
                <CardDescription className="text-slate-600">
                  Multiple ways to reach our support team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-800">Main Office</div>
                    <div className="text-slate-600 text-sm">
                      123 Islamic Center Street<br />
                      London, UK SW1A 1AA
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-800">Support Hours</div>
                    <div className="text-slate-600 text-sm">
                      Monday - Sunday<br />
                      9:00 AM - 9:00 PM (UK Time)<br />
                      4:00 AM - 4:00 PM (EST)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-800">Languages</div>
                    <div className="text-slate-600 text-sm">
                      English, Arabic, Urdu
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800 font-arabic">Response Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-slate-700">Average Response</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800">{"<2 hours"}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-amber-500" />
                    <span className="text-sm text-slate-700">Support Rating</span>
                  </div>
                  <Badge className="bg-amber-100 text-amber-800">4.9★</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Satisfied Customers</span>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">98%</Badge>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800 font-arabic">Quick Help</CardTitle>
                <CardDescription className="text-slate-600">
                  Common questions and instant solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {faqItems.slice(0, 4).map((faq, index) => (
                  <div key={index} className="text-sm">
                    <div className="font-medium text-slate-800 mb-1">{faq.question}</div>
                    <div className="text-slate-600 text-xs leading-relaxed">{faq.answer}</div>
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-amber-600 text-amber-700 hover:bg-amber-50 bg-white rounded-lg"
                >
                  View All FAQs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2 mb-6">Frequently Asked Questions</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 font-arabic mb-4">
              Common Questions Answered
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Find quick answers to the most common questions about our courses and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((faq, index) => (
              <Card key={index} className="border border-slate-200 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-slate-800 flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
