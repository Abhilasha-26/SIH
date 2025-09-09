import React, { useState } from 'react';
import { User, Mail, Phone, Github, Linkedin, Award, BookOpen, Users, Calendar, MapPin, Star, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('academic');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-900">Smart Student Hub</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600">Dashboard</a>
              <a href="#" className="text-blue-600 font-medium">Profile</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Courses</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Activities</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            {/* Profile Photo */}
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            </div>

            {/* Basic Info */}
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-1">Arjun Sharma</h1>
                  <p className="text-lg text-gray-600 mb-2">Roll No: CSE2021045</p>
                  <p className="text-gray-600">B.Tech Computer Science Engineering • Final Year</p>
                  <p className="text-gray-600">Indian Institute of Technology, Delhi</p>
                </div>
                
                {/* Contact Info */}
                <div className="mt-4 lg:mt-0 lg:text-right">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>arjun.sharma@iitd.ac.in</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <Linkedin className="w-5 h-5 text-blue-600 cursor-pointer hover:text-blue-700" />
                      <Github className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">8.7</div>
              <div className="text-sm text-gray-600">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">142</div>
              <div className="text-sm text-gray-600">Credits Earned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">94%</div>
              <div className="text-sm text-gray-600">Attendance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">15</div>
              <div className="text-sm text-gray-600">Activities</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-t-xl shadow-sm border border-b-0">
          <div className="flex overflow-x-auto">
            {[
              { id: 'academic', label: 'Academic Info', icon: BookOpen },
              { id: 'certifications', label: 'Certifications', icon: Award },
              { id: 'events', label: 'Events & Workshops', icon: Calendar },
              { id: 'activities', label: 'Clubs & Activities', icon: Users }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === id
                    ? 'border-blue-600 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-b-xl shadow-sm border p-6">
          {activeTab === 'academic' && (
            <div className="space-y-6">
              {/* Current Semester */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Current Semester (VIII)
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">9.1</div>
                    <div className="text-sm text-gray-600">Current SGPA</div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { subject: 'Machine Learning', grade: 'A+', credits: 4 },
                      { subject: 'Software Engineering', grade: 'A', credits: 3 },
                      { subject: 'Computer Networks', grade: 'A+', credits: 4 },
                      { subject: 'Database Systems', grade: 'A', credits: 3 }
                    ].map((course, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <div>
                          <div className="font-medium text-gray-900">{course.subject}</div>
                          <div className="text-sm text-gray-600">{course.credits} Credits</div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          course.grade === 'A+' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {course.grade}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-600" />
                  Academic Achievements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Dean's List", period: "2022-2023", type: "Academic Excellence" },
                    { title: "Merit Scholarship", period: "2021-2024", type: "Financial Award" },
                    { title: "Best Project Award", period: "2023", type: "Project Recognition" },
                    { title: "Research Paper Publication", period: "2024", type: "Research Achievement" }
                  ].map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg">
                      <Award className="w-6 h-6 text-yellow-600" />
                      <div>
                        <div className="font-medium text-gray-900">{achievement.title}</div>
                        <div className="text-sm text-gray-600">{achievement.type} • {achievement.period}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-green-600" />
                Certifications & Online Courses
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    title: "AWS Solutions Architect",
                    issuer: "Amazon Web Services",
                    date: "March 2024",
                    validity: "Valid until March 2027",
                    status: "verified"
                  },
                  {
                    title: "Machine Learning Specialization",
                    issuer: "Stanford University (Coursera)",
                    date: "January 2024",
                    validity: "No Expiration",
                    status: "verified"
                  },
                  {
                    title: "Google Cloud Professional Developer",
                    issuer: "Google Cloud",
                    date: "December 2023",
                    validity: "Valid until December 2025",
                    status: "verified"
                  },
                  {
                    title: "Full Stack Web Development",
                    issuer: "NPTEL",
                    date: "November 2023",
                    validity: "No Expiration",
                    status: "pending"
                  }
                ].map((cert, idx) => (
                  <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{cert.title}</h4>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        cert.status === 'verified' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {cert.status === 'verified' ? (
                          <div className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Verified
                          </div>
                        ) : 'Pending'}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {cert.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {cert.validity}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-600" />
                Conferences, Workshops & Seminars
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "International Conference on AI & Machine Learning",
                    organizer: "IEEE Computer Society",
                    date: "February 2024",
                    role: "Speaker",
                    location: "Mumbai, India",
                    type: "Conference"
                  },
                  {
                    title: "Google DevFest 2023",
                    organizer: "Google Developers Group Delhi",
                    date: "November 2023",
                    role: "Participant",
                    location: "New Delhi, India",
                    type: "Workshop"
                  },
                  {
                    title: "Blockchain Technology Seminar",
                    organizer: "IIT Delhi",
                    date: "September 2023",
                    role: "Organizer",
                    location: "IIT Delhi Campus",
                    type: "Seminar"
                  },
                  {
                    title: "Hackathon 2023: Smart India",
                    organizer: "Ministry of Education",
                    date: "August 2023",
                    role: "Participant",
                    location: "Virtual",
                    type: "Hackathon"
                  }
                ].map((event, idx) => (
                  <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">{event.organizer}</p>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2 lg:mt-0">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.role === 'Speaker' ? 'bg-blue-100 text-blue-800' :
                          event.role === 'Organizer' ? 'bg-purple-100 text-purple-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {event.role}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'activities' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-600" />
                Clubs & Extracurricular Activities
              </h3>
              
              {/* Club Memberships */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Club Memberships</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Computer Science Society", role: "President", period: "2023-2024", status: "active" },
                    { name: "Robotics Club", role: "Vice President", period: "2022-2024", status: "active" },
                    { name: "Drama Society", role: "Member", period: "2021-2024", status: "active" },
                    { name: "Photography Club", role: "Treasurer", period: "2022-2023", status: "completed" }
                  ].map((club, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h5 className="font-medium text-gray-900">{club.name}</h5>
                        <p className="text-sm text-gray-600">{club.role} • {club.period}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        club.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {club.status === 'active' ? 'Active' : 'Completed'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Events Participated */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Recent Participations</h4>
                <div className="space-y-3">
                  {[
                    { event: "Inter-College Tech Fest", type: "Hackathon", achievement: "1st Place", date: "March 2024" },
                    { event: "Annual Cultural Festival", type: "Drama Performance", achievement: "Best Actor", date: "February 2024" },
                    { event: "National Debate Championship", type: "Debate", achievement: "Finalist", date: "January 2024" },
                    { event: "Sports Day", type: "Cricket Tournament", achievement: "Participant", date: "December 2023" }
                  ].map((participation, idx) => (
                    <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                      <div>
                        <h5 className="font-medium text-gray-900">{participation.event}</h5>
                        <p className="text-sm text-gray-600">{participation.type} • {participation.date}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        participation.achievement.includes('1st') || participation.achievement.includes('Best') 
                          ? 'bg-yellow-100 text-yellow-800'
                          : participation.achievement.includes('Finalist')
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {participation.achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Volunteering */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Volunteering & Social Service</h4>
                <div className="space-y-3">
                  {[
                    { activity: "Teaching Underprivileged Children", organization: "NGO Shiksha", hours: "50+ hours", period: "2023-2024" },
                    { activity: "Blood Donation Drive", organization: "Red Cross Society", hours: "20 hours", period: "2023" },
                    { activity: "Environmental Cleanup", organization: "Green Delhi Initiative", hours: "30 hours", period: "2023" }
                  ].map((volunteer, idx) => (
                    <div key={idx} className="p-4 bg-green-50 rounded-lg">
                      <h5 className="font-medium text-gray-900">{volunteer.activity}</h5>
                      <p className="text-sm text-gray-600">{volunteer.organization} • {volunteer.period}</p>
                      <p className="text-sm text-green-700 font-medium mt-1">{volunteer.hours} contributed</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;