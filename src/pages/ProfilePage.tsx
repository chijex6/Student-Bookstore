import React, { useState } from "react";
import { User, Mail, Phone, MapPin, GraduationCap, Building2, CheckCircle } from "lucide-react";
import { ProfileCompletion } from "../components/ProfileCompletion";
const departments = ["Computer Science", "Engineering", "Medicine", "Arts", "Business"];
const levels = ["Year 1", "Year 2", "Year 3", "Year 4"];
export function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [showCompletion, setShowCompletion] = useState(true);
  const [profile, setProfile] = useState({
    fullName: "John Smith",
    email: "john.smith@university.edu",
    phone: "+1 234 567 8900",
    address: "123 Campus Street, University City, ST 12345",
    level: "Year 2",
    department: "Computer Science"
  });
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    setIsEditing(false);
    // Save changes to backend
  };
  return <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {showCompletion && <ProfileCompletion onStart={() => setShowCompletion(false)} />}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
            {isEditing ? <div className="space-x-2">
                <button onClick={() => setIsEditing(false)} className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">
                  Cancel
                </button>
                <button onClick={handleSave} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                  Save Changes
                </button>
              </div> : <button onClick={handleEdit} className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50">
                Edit Profile
              </button>}
          </div>
          <div className="flex items-center space-x-6 mb-8">
            <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-12 h-12 text-purple-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {profile.fullName}
              </h2>
              <p className="text-gray-500">
                {profile.department} - {profile.level}
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="flex items-center space-x-3 p-3 bg-white border rounded-lg">
                  <User className="w-5 h-5 text-gray-400" />
                  {isEditing ? <input type="text" value={profile.fullName} onChange={e => setProfile({
                  ...profile,
                  fullName: e.target.value
                })} className="flex-1 focus:outline-none" /> : <span className="text-gray-900">{profile.fullName}</span>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 border rounded-lg">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-500">{profile.email}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="flex items-center space-x-3 p-3 bg-white border rounded-lg">
                  <Phone className="w-5 h-5 text-gray-400" />
                  {isEditing ? <input type="tel" value={profile.phone} onChange={e => setProfile({
                  ...profile,
                  phone: e.target.value
                })} className="flex-1 focus:outline-none" /> : <span className="text-gray-900">{profile.phone}</span>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Department
                </label>
                <div className="flex items-center space-x-3 p-3 bg-white border rounded-lg">
                  <Building2 className="w-5 h-5 text-gray-400" />
                  {isEditing ? <select value={profile.department} onChange={e => setProfile({
                  ...profile,
                  department: e.target.value
                })} className="flex-1 focus:outline-none bg-transparent">
                      {departments.map(dept => <option key={dept} value={dept}>
                          {dept}
                        </option>)}
                    </select> : <span className="text-gray-900">{profile.department}</span>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Level
                </label>
                <div className="flex items-center space-x-3 p-3 bg-white border rounded-lg">
                  <GraduationCap className="w-5 h-5 text-gray-400" />
                  {isEditing ? <select value={profile.level} onChange={e => setProfile({
                  ...profile,
                  level: e.target.value
                })} className="flex-1 focus:outline-none bg-transparent">
                      {levels.map(level => <option key={level} value={level}>
                          {level}
                        </option>)}
                    </select> : <span className="text-gray-900">{profile.level}</span>}
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <div className="flex items-center space-x-3 p-3 bg-white border rounded-lg">
                <MapPin className="w-5 h-5 text-gray-400" />
                {isEditing ? <input type="text" value={profile.address} onChange={e => setProfile({
                ...profile,
                address: e.target.value
              })} className="flex-1 focus:outline-none" /> : <span className="text-gray-900">{profile.address}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}