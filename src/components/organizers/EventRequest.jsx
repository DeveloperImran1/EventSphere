'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { uploadCloudinary } from "@/hooks/upload"; // Assumes this function is available for image uploads

const AddEventForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [galleryData, setGalleryData] = useState( [] );

  // Handler for file selection and upload
  const handleFileAdd = async (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file)); // Creates preview URLs for the selected images.
    setSelectedImages(imageUrls);
    setLoading(true);

    try {
      // Uploads each selected file to Cloudinary, waits for all uploads to finish.
      const uploadedImages = await Promise.all(files.map(file => uploadCloudinary(file)));
      const imageUrls = uploadedImages.map(image => image.url); // Extracts URLs from uploaded images.
      setGalleryData([...galleryData, ...imageUrls]); // Adds new image URLs to existing gallery data.
      setLoading(false);
    } catch (err) {
      setError('Failed to upload images');
      setLoading(false);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Add New Event</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File Input for Multiple Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                className="w-full p-2 border rounded"
                placeholder='Title'
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                name="description"
                className="w-full p-2 border rounded"
                placeholder='Description'
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date & Time</label>
              <input
                type="datetime-local"
                name="dateTime"
                className="w-full p-2 border rounded"

                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Price</label>
              <input
                type="number"
                name="price"
                className="w-full p-2 border rounded"

                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Photos</label>
              <input
                type="file"
                multiple
                name="photos"
                onChange={handleFileAdd}
                accept="image/*"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            {/* Display selected images */}
            <div className="flex flex-wrap gap-2">
              {galleryData?.map((image, index) => (
                <img key={index} src={image} alt="Selected" className="h-20 w-20 rounded" />
              ))}
            </div>
          </div>
          {/* Location Information */}
          <div>
            <h3 className="font-semibold mb-4">Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Country</label>
                <input
                  type="text"
                  name="country"
                  className="w-full p-2 border rounded"

                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  className="w-full p-2 border rounded"

                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Venue</label>
                <input
                  type="text"
                  name="venue"
                  className="w-full p-2 border rounded"

                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Location Map</label>
                <input
                  type="text"
                  name="locationMap"
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Category and Type */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <input
                type="text"
                name="category"
                className="w-full p-2 border rounded"

                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Type</label>
              <select
                name="type"
                className="w-full p-2 border rounded"

                required
              >
                <option value="onsite">Onsite</option>
                <option value="online">Online</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="contactInfoEmail"
                  className="w-full p-2 border rounded"

                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  name="contactInfoPhone"
                  className="w-full p-2 border rounded"

                  required
                />
              </div>
            </div>
          </div>

          {/* Additional Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Company Name</label>
              <input
                type="text"
                name="companyName"
                className="w-full p-2 border rounded"
                placeholder='Company Name'
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
              <input
                type="text"
                name="tags"
                className="w-full p-2 border rounded"
                placeholder="tag1, tag2, tag3"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}

          {success && (
            <div className="text-green-500 text-sm">{success}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1b85db] text-white py-2 px-4 rounded hover:bg-blue-500 duration-300 disabled:bg-blue-300"
          >
            {loading ? 'Adding Event...' : 'Add Event'}
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddEventForm;
