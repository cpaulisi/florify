import React, { useEffect } from 'react';

function imageContainer() {
  // State declarations...
  const [selectedImage, setSelectedImage] = React.useState(null);

  // Function definitions...
  const handleImageUpload = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  useEffect(() => {
    var scale = 1;
    var image = document.getElementById('uploaded-image');
  
    function handleWheel(event) {
      event.preventDefault();
  
      scale += event.deltaY * -0.01;
  
      // Restrict scale
      scale = Math.min(Math.max(.125, scale), 4);
  
      // Apply scale transform
      image.style.transform = `scale(${scale})`;
    }
  
    if (image) {
      image.addEventListener('wheel', handleWheel);
    }
  
    // Clean up function
    return function cleanup() {
      if (image) {
        image.removeEventListener('wheel', handleWheel);
      }
    }
  }, [selectedImage])// Dependency array

  return (
    <div className="image-container">
        {selectedImage && (
        <img
            id="uploaded-image"
            src={selectedImage}
            alt="Selected"
            className="uploaded-image"
        />
        )}
    </div>
  );
}

export default imageContainer;