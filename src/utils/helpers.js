// src/utils/helpers.js

// Get photo from localStorage or return default
export const getPhoto = (key, defaultPhoto) => {
  const saved = localStorage.getItem(`admin_${key}`);
  return saved || defaultPhoto;
};

// Get portfolio screenshots from localStorage or return default
export const getPortfolioScreenshots = (defaultScreenshots) => {
  const saved = localStorage.getItem("admin_portfolioScreenshots");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return defaultScreenshots;
    }
  }
  return defaultScreenshots;
};

// Get project screenshots for a specific project
export const getProjectScreenshots = (projectId, defaultScreenshots) => {
  const saved = localStorage.getItem(`admin_projectScreenshots_${projectId}`);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return parsed.length > 0 ? parsed : defaultScreenshots;
    } catch (e) {
      return defaultScreenshots;
    }
  }
  return defaultScreenshots;
};

// Get CV file from localStorage
export const getCVFile = () => {
  const saved = localStorage.getItem("admin_cvFile");
  return saved || null;
};

// Download CV file
export const downloadCV = () => {
  const cvData = localStorage.getItem("admin_cvFile");
  const fileName = localStorage.getItem("admin_cvFileName") || "Robel-Yisehak-CV.pdf";
  
  if (cvData) {
    // Convert base64 to blob
    const byteCharacters = atob(cvData.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    
    // Create download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } else {
    // Fallback to default CV if no custom CV uploaded
    const link = document.createElement('a');
    link.href = "/Robel-Yisehak-CV.pdf";
    link.download = "Robel-Yisehak-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}