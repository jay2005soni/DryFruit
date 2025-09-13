import React, { useState, useEffect } from "react";
import axios from "axios";

// const API_URL = "http://localhost:5000/api/categories";
import { API_URL } from "../config";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null); // State to hold error messages

  useEffect(() => {
    axios.get(`${API_URL}categories/receive`).then((res) => setCategories(res.data));
  }, []);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    } else {
      setSelectedFile(null);
      setPreview(null);
    }
  };

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile || !title) {
      setError("Please select an image and provide a title.");
      return;
    }
    
    setIsUploading(true);
    setError(null); // Clear previous errors

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("title", title);

    try {
      const res = await axios.post(`${API_URL}categories/create`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setCategories((prev) => [res.data, ...prev]);
      resetForm();
    } catch (err) {
      console.error("Upload failed:", err);
      // Provide a more specific error message instead of a generic alert
      const message = err.response?.data?.message || "An unexpected error occurred. Please try again.";
      setError(message);
    } finally {
      setIsUploading(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setSelectedFile(null);
    setPreview(null);
    if(document.getElementById('file-input')) {
        document.getElementById('file-input').value = null;
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Our Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Display existing categories */}
        {categories.map((cat) => (
          <div key={cat._id} className="bg-white border border-gray-200 rounded-md overflow-hidden">
            <img
              src={`http://localhost:5000${cat.imageUrl}`}
              alt={cat.title}
              className="w-full h-48 object-cover"
            />
            <p className="p-4 font-medium text-gray-700 text-center">{cat.title}</p>
          </div>
        ))}

        {/* The "Add Card" Form */}
        <div className="border-2 border-dashed border-gray-300 rounded-md flex flex-col justify-center items-center p-4 min-h-[250px] bg-white">
          {!preview ? (
            <label htmlFor="file-input" className="flex flex-col items-center justify-center w-full h-full cursor-pointer text-gray-400 hover:text-blue-600 transition-colors">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
              <span className="mt-2 text-base font-medium">Add New</span>
            </label>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center space-y-3">
              <img src={preview} alt="Preview" className="w-full h-32 object-cover rounded-md border" />
              <input
                type="text"
                placeholder="Enter category title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="w-full flex items-center space-x-3">
                <button type="button" onClick={resetForm} disabled={isUploading} className="w-1/2 py-2 px-4 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">Cancel</button>
                <button type="submit" disabled={isUploading} className="w-1/2 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:opacity-50">
                  {isUploading ? 'Saving...' : 'Save'}
                </button>
              </div>
            </form>
          )}
          {/* Display error message inline */}
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      </div>
       <input id="file-input" type="file" className="hidden" onChange={handleFileSelect} accept="image/*" />
    </div>
  );
}