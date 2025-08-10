import React, { useState } from "react";

const galleryItems = [
  {
    id: 1,
    type: "image",
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    type: "image",
    url: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    type: "video",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    type: "image",
    url: "https://images.unsplash.com/photo-1581093458790-5c4a1e87e3e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    type: "image",
    url: "https://images.unsplash.com/photo-1584433302029-52d8ddf1e9de?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    type: "image",
    url: "https://images.unsplash.com/photo-1596495687110-9e3770dfd7f0?auto=format&fit=crop&w=800&q=80",
  },
];

const GallerySection = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleOpen = (item) => {
    setActiveItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setActiveItem(null);
    setOpen(false);
  };

  return (
    <section className="bg-white py-30 px-4 sm:px-8 lg:px-20 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-emerald-700 mb-12">
           School Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              onClick={() => handleOpen(item)}
            >
              {item.type === "image" ? (
                <img
                  src={item.url}
                  alt=""
                  className="w-full h-64 object-cover"
                />
              ) : (
                <video
                  src={item.url}
                  className="w-full h-64 object-cover"
                  muted
                  autoPlay
                  loop
                />
              )}
            </div>
          ))}
        </div>

        {/* Fullscreen Dialog */}
        {open && activeItem && (
          <dialog
            open
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <div className="max-w-4xl w-full p-4">
              {activeItem.type === "image" ? (
                <img
                  src={activeItem.url}
                  alt=""
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <video
                  src={activeItem.url}
                  className="w-full h-auto rounded-lg"
                  controls
                  autoPlay
                />
              )}
              <button
                onClick={handleClose}
                className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-gray-100"
              >
                Close
              </button>
            </div>
          </dialog>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
