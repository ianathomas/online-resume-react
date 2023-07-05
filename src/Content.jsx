export function Content() {
  return (
    <div>
      <h1>Welcome to React!</h1>
    </div>
  );
}



const handleShowPhoto = (photo) => {
console.log("handleShowPhoto", photo);
setIsPhotosShowVisible(true);
setCurrentPhoto(photo);
};
  
const handleClose = () => {
console.log("handleClose");
setIsPhotosShowVisible(false);
};

  <PhotosIndex photos={photos} onShowPhoto={handleShowPhoto} />
  <Modal show={isPhotosShowVisible} onClose={handleClose}></Modal>