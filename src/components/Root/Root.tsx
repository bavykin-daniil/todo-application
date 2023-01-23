import React from "react";
import { addDoc, collection } from "@firebase/firestore";
import styles from "./Root.module.scss";
import { firestore } from "../../firebase/config";

const Root: React.FC = () => {
  const handleSubmit = () => {
    const ref = collection(firestore, "test_data");
    let data = {
      testData: "it is test",
    };

    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <button onClick={handleSubmit}>test</button>
    </div>
  );
};

export default Root;
