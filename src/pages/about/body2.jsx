import "./index.css";
import React, { useRef, useEffect } from 'react';

function Body2() {
  const destinationRef = useRef(null);
  
  const paragraphs = [
    "Founded in 1929 by Rev. Frank O’Hara, SJ and first led by Manuel C. Colayco in 1930, it has since been a training ground for countless writers, designers and managers in the practice of responsible journalism.", 
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

export default Body2;