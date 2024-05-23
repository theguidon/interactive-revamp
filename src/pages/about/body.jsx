import "./index.css";
import React, { useRef, useEffect } from 'react';

function Body() {
  const destinationRef = useRef(null);
  
  const paragraphs = [
    "With the changing fortunes of the industry over the past decade, the need for a news publication to have an online presence has never been more relevant.", 
    "As such, The GUIDON has worked to establish and improve its online platform over the last few years. One product of this modernization, The GUIDON’s interactive articles, are an innovation in storytelling.",
    "These multimedia pieces are designed not only to engage and immerse the readers, but also to enrich their understanding of these stories in ways not possible on traditional media."
  ];

  const speed = 40;
  let iIndex = 0;
  let iArrLength = paragraphs[0].length;
  const iScrollAt = 20;
  
  let iTextPos = 0;
  let sContents = '';
  let iRow;

  useEffect(() => {
    let timeouts = [];

    const typewriter = () => {
      sContents = ' ';
      iRow = Math.max(0, iIndex - iScrollAt);

      while (iRow < iIndex) {
        sContents += paragraphs[iRow++] + '<br />' + '<br />';
      }
      if (destinationRef.current) {
        destinationRef.current.innerHTML = sContents + paragraphs[iIndex].substring(0, iTextPos);
      }
      if (iTextPos++ === iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex !== paragraphs.length) {
          iArrLength = paragraphs[iIndex].length;
          timeouts.push(setTimeout(typewriter, 500));
        }
      } else {
        timeouts.push(setTimeout(typewriter, speed));
      }
    };
    
    typewriter();

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="container body">
      <div ref={destinationRef}></div>
    </div>
  );
}

export default Body;