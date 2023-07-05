+ import { Modal } from "./Modal";
 
 
 const [isPhotosShowVisible, setIsPhotosShowVisible] = useState(false);
 const [currentPhoto, setCurrentPhoto] = useState({});

export function Content() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      +       <Modal show={true}>
+         <h1>Test</h1>
+       </Modal>
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