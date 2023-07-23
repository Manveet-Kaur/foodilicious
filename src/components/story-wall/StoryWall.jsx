import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import "./StoryWall.css";
import { Button } from "antd";

import { db } from "../../firebase";

const StoryWall = () => {
  const addStory = async () => {
    try {
      const docRef = await addDoc(collection(db, "stories"), {
        image: "test_image",
        caption: "test-caption",
        timestamp: serverTimestamp(),
      });
      console.log(docRef);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="story-wall-container">
      <Button onClick={addStory}>Add Story</Button>
    </div>
  );
};

export default StoryWall;
