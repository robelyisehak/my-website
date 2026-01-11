// src/pages/Admin/Admin.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, Image as ImageIcon, Save, Trash2, LogOut, FileText } from "lucide-react";

const PROJECTS = [
  { id: "brokerage", name: "Online Brokerage Management System" },
  { id: "vehicle", name: "Vehicle Management System" },
  { id: "portfolio", name: "Personal Portfolio Website" }
];

export default function Admin() {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState({
    headerPhoto: "",
    homeHeroPhoto: "",
    footerPhoto: "",
    aboutProfileCardPhoto: "",
    aboutProfileModalPhoto: "",
    contactPhoto: "",
    projectScreenshots: {
      brokerage: [],
      vehicle: [],
      portfolio: []
    },
    cvFile: ""
  });
  const [previews, setPreviews] = useState({
    headerPhoto: "",
    homeHeroPhoto: "",
    footerPhoto: "",
    aboutProfileCardPhoto: "",
    aboutProfileModalPhoto: "",
    contactPhoto: "",
    projectScreenshots: {
      brokerage: [],
      vehicle: [],
      portfolio: []
    },
    cvFile: ""
  });
  const [activeTab, setActiveTab] = useState("header");

  const handleLogout = () => {
    sessionStorage.removeItem("admin_authenticated");
    navigate("/");
  };

  // Load saved photos from localStorage on mount
  useEffect(() => {
    const savedHeader = localStorage.getItem("admin_headerPhoto");
    const savedHomeHero = localStorage.getItem("admin_homeHeroPhoto");
    const savedFooter = localStorage.getItem("admin_footerPhoto");
    const savedAboutCard = localStorage.getItem("admin_aboutProfileCardPhoto");
    const savedAboutModal = localStorage.getItem("admin_aboutProfileModalPhoto");
    const savedContact = localStorage.getItem("admin_contactPhoto");
    const savedCV = localStorage.getItem("admin_cvFile");

    if (savedHeader) {
      setPhotos(prev => ({ ...prev, headerPhoto: savedHeader }));
      setPreviews(prev => ({ ...prev, headerPhoto: savedHeader }));
    }
    if (savedHomeHero) {
      setPhotos(prev => ({ ...prev, homeHeroPhoto: savedHomeHero }));
      setPreviews(prev => ({ ...prev, homeHeroPhoto: savedHomeHero }));
    }
    if (savedFooter) {
      setPhotos(prev => ({ ...prev, footerPhoto: savedFooter }));
      setPreviews(prev => ({ ...prev, footerPhoto: savedFooter }));
    }
    if (savedAboutCard) {
      setPhotos(prev => ({ ...prev, aboutProfileCardPhoto: savedAboutCard }));
      setPreviews(prev => ({ ...prev, aboutProfileCardPhoto: savedAboutCard }));
    }
    if (savedAboutModal) {
      setPhotos(prev => ({ ...prev, aboutProfileModalPhoto: savedAboutModal }));
      setPreviews(prev => ({ ...prev, aboutProfileModalPhoto: savedAboutModal }));
    }
    if (savedContact) {
      setPhotos(prev => ({ ...prev, contactPhoto: savedContact }));
      setPreviews(prev => ({ ...prev, contactPhoto: savedContact }));
    }
    if (savedCV) {
      setPhotos(prev => ({ ...prev, cvFile: savedCV }));
      setPreviews(prev => ({ ...prev, cvFile: savedCV }));
    }

    // Load project screenshots
    PROJECTS.forEach(project => {
      const saved = localStorage.getItem(`admin_projectScreenshots_${project.id}`);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setPhotos(prev => ({
            ...prev,
            projectScreenshots: {
              ...prev.projectScreenshots,
              [project.id]: parsed
            }
          }));
          setPreviews(prev => ({
            ...prev,
            projectScreenshots: {
              ...prev.projectScreenshots,
              [project.id]: parsed
            }
          }));
        } catch (e) {
          console.error(`Error parsing screenshots for ${project.id}:`, e);
        }
      }
    });
  }, []);

  const handleImageUpload = (type, projectId = null, index = null) => (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      
      if (type === "projectScreenshots") {
        const newScreenshots = [...(photos.projectScreenshots[projectId] || [])];
        if (index !== null) {
          newScreenshots[index] = base64String;
        } else {
          newScreenshots.push(base64String);
        }
        setPhotos(prev => ({
          ...prev,
          projectScreenshots: {
            ...prev.projectScreenshots,
            [projectId]: newScreenshots
          }
        }));
        setPreviews(prev => ({
          ...prev,
          projectScreenshots: {
            ...prev.projectScreenshots,
            [projectId]: newScreenshots
          }
        }));
      } else {
        setPhotos(prev => ({ ...prev, [type]: base64String }));
        setPreviews(prev => ({ ...prev, [type]: base64String }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleCVUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please select a PDF file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setPhotos(prev => ({ ...prev, cvFile: base64String }));
      setPreviews(prev => ({ ...prev, cvFile: base64String }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (photos.headerPhoto) {
      localStorage.setItem("admin_headerPhoto", photos.headerPhoto);
      window.dispatchEvent(new Event("photoUpdated"));
    }
    if (photos.homeHeroPhoto) {
      localStorage.setItem("admin_homeHeroPhoto", photos.homeHeroPhoto);
      window.dispatchEvent(new Event("photoUpdated"));
    }
    if (photos.footerPhoto) {
      localStorage.setItem("admin_footerPhoto", photos.footerPhoto);
      window.dispatchEvent(new Event("photoUpdated"));
    }
    if (photos.aboutProfileCardPhoto) {
      localStorage.setItem("admin_aboutProfileCardPhoto", photos.aboutProfileCardPhoto);
      window.dispatchEvent(new Event("photoUpdated"));
    }
    if (photos.aboutProfileModalPhoto) {
      localStorage.setItem("admin_aboutProfileModalPhoto", photos.aboutProfileModalPhoto);
      window.dispatchEvent(new Event("photoUpdated"));
    }
    if (photos.contactPhoto) {
      localStorage.setItem("admin_contactPhoto", photos.contactPhoto);
      window.dispatchEvent(new Event("photoUpdated"));
    }
    if (photos.cvFile) {
      localStorage.setItem("admin_cvFile", photos.cvFile);
      localStorage.setItem("admin_cvFileName", "Robel-Yisehak-CV.pdf");
      window.dispatchEvent(new Event("photoUpdated"));
    }

    // Save project screenshots
    PROJECTS.forEach(project => {
      const screenshots = photos.projectScreenshots[project.id];
      if (screenshots && screenshots.length > 0) {
        localStorage.setItem(`admin_projectScreenshots_${project.id}`, JSON.stringify(screenshots));
        window.dispatchEvent(new Event("photoUpdated"));
      }
    });

    alert("All changes saved successfully! Changes will appear immediately.");
  };

  const handleRemove = (type, projectId = null, index = null) => {
    if (type === "projectScreenshots") {
      const newScreenshots = (photos.projectScreenshots[projectId] || []).filter((_, i) => i !== index);
      setPhotos(prev => ({
        ...prev,
        projectScreenshots: {
          ...prev.projectScreenshots,
          [projectId]: newScreenshots
        }
      }));
      setPreviews(prev => ({
        ...prev,
        projectScreenshots: {
          ...prev.projectScreenshots,
          [projectId]: newScreenshots
        }
      }));
      localStorage.setItem(`admin_projectScreenshots_${projectId}`, JSON.stringify(newScreenshots));
    } else {
      setPhotos(prev => ({ ...prev, [type]: "" }));
      setPreviews(prev => ({ ...prev, [type]: "" }));
      localStorage.removeItem(`admin_${type}`);
    }
  };

  const renderPhotoSection = (type, title, description, recommendedSize) => (
    <div className="bg-gray-900/50 rounded-3xl p-8 border border-cyan-500/30">
      <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block mb-4 text-gray-300 font-medium">
            Current/New Photo
          </label>
          <div className="relative">
            {previews[type] ? (
              <div className="relative">
                <img
                  src={previews[type]}
                  alt={`${title} preview`}
                  className="w-full h-64 object-cover rounded-2xl border-2 border-cyan-500/50"
                />
                <button
                  onClick={() => handleRemove(type)}
                  className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ) : (
              <div className="w-full h-64 bg-gray-800/50 border-2 border-dashed border-gray-600 rounded-2xl flex items-center justify-center">
                <ImageIcon className="w-16 h-16 text-gray-600" />
              </div>
            )}
          </div>
          <label className="mt-4 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold cursor-pointer hover:shadow-2xl transition-all">
            <Upload size={24} />
            Upload New Photo
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload(type)}
              className="hidden"
            />
          </label>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-gray-400 mb-4">{description}</p>
          {recommendedSize && (
            <p className="text-sm text-gray-500">Recommended size: {recommendedSize}</p>
          )}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: "header", name: "Header Photo" },
    { id: "home", name: "Home Hero Photo" },
    { id: "footer", name: "Footer Photo" },
    { id: "about", name: "About Page Photos" },
    { id: "contact", name: "Contact Photo" },
    { id: "projects", name: "Project Screenshots" },
    { id: "cv", name: "CV File" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Admin Panel
            </h1>
            <p className="text-xl text-gray-400">
              Manage photos and files on your website
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-6 py-3 bg-red-600/20 hover:bg-red-600/30 border border-red-500/50 text-red-400 rounded-xl font-bold transition-all"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-cyan-500/30 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 font-bold text-sm md:text-lg transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-gray-400 hover:text-cyan-300"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Header Photo Tab */}
        {activeTab === "header" && renderPhotoSection(
          "headerPhoto",
          "Header Profile Photo",
          "This photo appears in the header navigation bar at the top of every page.",
          "200x200px or square aspect ratio"
        )}

        {/* Home Hero Photo Tab */}
        {activeTab === "home" && renderPhotoSection(
          "homeHeroPhoto",
          "Home Hero Photo",
          "This photo appears on the home page hero section.",
          "800x800px or square aspect ratio"
        )}

        {/* Footer Photo Tab */}
        {activeTab === "footer" && renderPhotoSection(
          "footerPhoto",
          "Footer Photo",
          "This photo appears in the footer section at the bottom of every page.",
          "200x200px or square aspect ratio"
        )}

        {/* About Page Photos Tab */}
        {activeTab === "about" && (
          <div className="space-y-8">
            {renderPhotoSection(
              "aboutProfileCardPhoto",
              "About Page - Profile Card Photo",
              "This photo appears in the Profile Card on the About page.",
              "800x600px or landscape aspect ratio"
            )}
            {renderPhotoSection(
              "aboutProfileModalPhoto",
              "About Page - Profile Modal Photo",
              "This photo appears in the Profile Modal when viewing full profile details.",
              "400x400px or square aspect ratio"
            )}
          </div>
        )}

        {/* Contact Photo Tab */}
        {activeTab === "contact" && renderPhotoSection(
          "contactPhoto",
          "Contact Page Photo",
          "This photo appears on the Contact page.",
          "800x600px or landscape aspect ratio"
        )}

        {/* Project Screenshots Tab */}
        {activeTab === "projects" && (
          <div className="space-y-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="bg-gray-900/50 rounded-3xl p-8 border border-cyan-500/30">
                <h2 className="text-2xl font-bold text-white mb-6">{project.name}</h2>
                <div className="space-y-4">
                  {(previews.projectScreenshots[project.id] || []).map((screenshot, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-2xl p-4 border border-cyan-500/20">
                      <div className="flex gap-4">
                        <img
                          src={screenshot}
                          alt={`${project.name} screenshot ${index + 1}`}
                          className="w-48 h-32 object-cover rounded-xl border border-cyan-500/30"
                        />
                        <div className="flex-1 flex items-center justify-between">
                          <div>
                            <p className="text-white font-bold mb-2">Screenshot {index + 1}</p>
                            <label className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600/20 hover:bg-cyan-600/30 rounded-lg cursor-pointer transition">
                              <Upload size={18} />
                              Replace
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload("projectScreenshots", project.id, index)}
                                className="hidden"
                              />
                            </label>
                          </div>
                          <button
                            onClick={() => handleRemove("projectScreenshots", project.id, index)}
                            className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition flex items-center gap-2"
                          >
                            <Trash2 size={18} />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <label className="flex items-center justify-center gap-3 px-6 py-6 bg-gray-800/50 border-2 border-dashed border-cyan-500/30 rounded-2xl cursor-pointer hover:border-cyan-500/50 transition">
                    <Upload size={20} />
                    <span className="font-bold text-cyan-400">Add Screenshot for {project.name}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload("projectScreenshots", project.id)}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CV File Tab */}
        {activeTab === "cv" && (
          <div className="bg-gray-900/50 rounded-3xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">CV/Resume File</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block mb-4 text-gray-300 font-medium">
                  Current/New CV File
                </label>
                <div className="relative">
                  {previews.cvFile ? (
                    <div className="relative bg-gray-800/50 rounded-2xl p-8 border-2 border-cyan-500/50">
                      <div className="flex flex-col items-center justify-center gap-4">
                        <FileText className="w-20 h-20 text-cyan-400" />
                        <p className="text-white font-bold">CV File Uploaded</p>
                        <p className="text-gray-400 text-sm">PDF format</p>
                        <button
                          onClick={() => handleRemove("cvFile")}
                          className="mt-4 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition flex items-center gap-2"
                        >
                          <Trash2 size={18} />
                          Remove CV
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-64 bg-gray-800/50 border-2 border-dashed border-gray-600 rounded-2xl flex items-center justify-center">
                      <FileText className="w-16 h-16 text-gray-600" />
                    </div>
                  )}
                </div>
                <label className="mt-4 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold cursor-pointer hover:shadow-2xl transition-all">
                  <Upload size={24} />
                  Upload New CV (PDF)
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleCVUpload}
                    className="hidden"
                  />
                </label>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-400 mb-4">
                  Upload your CV/Resume file. This will be available for download on the About page.
                </p>
                <p className="text-sm text-gray-500">
                  File format: PDF only
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Save Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleSave}
            className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-cyan-500/40 transition-all flex items-center gap-3"
          >
            <Save size={24} />
            Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
}
