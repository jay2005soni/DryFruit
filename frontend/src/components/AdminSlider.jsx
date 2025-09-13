import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, SERVER_URL } from "../config"; 
import { toast } from "react-toastify";

function AdminSlider() {
  const [sliders, setSliders] = useState([]);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSliders = async () => {
    try {
      const { data } = await axios.get(`${API_URL}slider/all`);
      setSliders(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch sliders");
    }
  };

  useEffect(() => {
    fetchSliders();
  }, []);

  const handleFileChange = (e) => {
    // Correctly get the first file from the FileList
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);

    if (selectedFile) {
      // Clean up the previous preview URL
      if (preview) URL.revokeObjectURL(preview);
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      if (preview) URL.revokeObjectURL(preview);
      setPreview(null);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!file) return toast.warning("Please select an image");

    const formData = new FormData();
    formData.append("image", file); // 'file' is now the correct File object

    try {
      setLoading(true);
      await axios.post(`${API_URL}slider/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Slider added");
      setFile(null);
      if (preview) URL.revokeObjectURL(preview);
      setPreview(null);
      // Reset the file input visually
      e.target.reset();
      await fetchSliders();
    } catch (error) {
      console.error(error?.response || error);
      toast.error(error?.response?.data?.message || "Failed to add slider");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id, newFile) => {
    if (!newFile) return toast.warning("Please select an image");

    const formData = new FormData();
    formData.append("image", newFile);

    try {
      setLoading(true);
      await axios.put(`${API_URL}slider/update/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Slider updated");
      await fetchSliders();
    } catch (error) {
      console.error(error?.response || error);
      toast.error(error?.response?.data?.message || "Failed to update slider");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${API_URL}slider/delete/${id}`);
      toast.success("Slider deleted");
      await fetchSliders();
    } catch (error) {
      console.error(error?.response || error);
      toast.error(error?.response?.data?.message || "Failed to delete slider");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Manage Slider</h2>

      {/* Add new slider */}
      <form onSubmit={handleAdd} className="mb-6 space-y-3">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border p-2"
        />
        {preview && (
          <div className="mt-2">
            <img
              src={preview}
              alt="Preview"
              className="w-72 h-48 object-cover rounded border"
            />
          </div>
        )}
        <button
          type="submit"
          disabled={loading || !file}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-60"
        >
          {loading ? "Processing..." : "Add"}
        </button>
      </form>

      {/* Slider list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sliders.map((slider) => (
          <div key={slider._id} className="border rounded-lg p-4 shadow">
            <img
              src={`${SERVER_URL}${slider.image}`}
              alt="slider"
              className="w-full h-40 object-cover rounded"
            />
            <div className="flex justify-between mt-3">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    // Correctly get the first file here as well
                    const selectedFile = e.target.files ? e.target.files[0] : null;
                    if (selectedFile) handleUpdate(slider._id, selectedFile);
                  }}
                />
                <span className="bg-yellow-500 text-white px-3 py-1 rounded">
                  Update
                </span>
              </label>
              <button
                onClick={() => handleDelete(slider._id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
                disabled={loading}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminSlider;