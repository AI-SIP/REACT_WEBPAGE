import React, { useEffect, useState } from "react";
import "./SubjectSelection.css";

function SubjectSelection({ onSelect, onBack }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="subject-selection">
      <h1>분석하고 싶은 과목을 선택해주세요</h1>
      <div className="subject-buttons">
        <button
          className={`subject-button ${loaded ? "loaded" : ""}`}
          onClick={() => onSelect("earth_science")}
        >
          지구 과학
        </button>
        <button
          className={`subject-button ${loaded ? "loaded" : ""}`}
          onClick={() => onSelect("life_science")}
        >
          생명 과학
        </button>
      </div>
      <button className="back-button" onClick={onBack}>
        뒤로 가기
      </button>
    </div>
  );
}

export default SubjectSelection;
