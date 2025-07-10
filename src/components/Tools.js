// src/components/Tools.js
import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

// Tool cards data
const tools = [
  { name: 'Image Converter', desc: 'Convert and compress images', icon: '🖼️' },
  { name: 'Video Compressor', desc: 'Compress videos easily', icon: '🎬' },
  { name: 'PDF Merger', desc: 'Merge PDFs into one file', icon: '📄' },
];

function ImageConverter() {
  const [file, setFile] = useState(null);
  const [format, setFormat] = useState('png');
  const [outputUrl, setOutputUrl] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setOutputUrl(null);
  };

  const handleConvert = () => {
    if (!file) return;
    const img = new window.Image();
    const reader = new FileReader();
    reader.onload = (ev) => {
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const url = canvas.toDataURL(`image/${format}`);
        setOutputUrl(url);
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h4 className="hacking-font hacking-green">Image Converter</h4>
      <input type="file" accept="image/*" onChange={handleFile} />
      <select value={format} onChange={e => setFormat(e.target.value)}>
        <option value="png">PNG</option>
        <option value="jpeg">JPEG</option>
        <option value="webp">WEBP</option>
      </select>
      <button onClick={handleConvert} disabled={!file}>Convert</button>
      {outputUrl && (
        <div>
          <a href={outputUrl} download={`converted.${format}`}>Download Converted Image</a>
          <br />
          <img src={outputUrl} alt="Converted" style={{ maxWidth: 200, marginTop: 10 }} />
        </div>
      )}
    </div>
  );
}

function VideoCompressor() {
  // Client-side video compression is limited in-browser.
  // This demo just lets you select a video and shows its size.
  const [file, setFile] = useState(null);

  return (
    <div>
      <h4>Video Compressor (Demo)</h4>
      <input type="file" accept="video/*" onChange={e => setFile(e.target.files[0])} />
      {file && (
        <div>
          <p>File: {file.name}</p>
          <p>Size: {(file.size / 1024 / 1024).toFixed(2)} MB</p>
          <video src={URL.createObjectURL(file)} controls width={250} />
          <p style={{ color: 'orange' }}>Client-side video compression is limited. For real compression, use a desktop app or server tool.</p>
        </div>
      )}
    </div>
  );
}

function PDFMerger() {
  // Client-side PDF merging is not natively supported in browser JS.
  // You can use pdf-lib or similar libraries for basic merging.
  // Here is a simple demo using pdf-lib:
  const [files, setFiles] = useState([]);
  const [mergedUrl, setMergedUrl] = useState(null);

  const handleFiles = (e) => {
    setFiles(Array.from(e.target.files));
    setMergedUrl(null);
  };

  const handleMerge = async () => {
    if (files.length < 2) return;
    const { PDFDocument } = await import('pdf-lib');
    const mergedPdf = await PDFDocument.create();
    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }
    const mergedBytes = await mergedPdf.save();
    const blob = new Blob([mergedBytes], { type: 'application/pdf' });
    setMergedUrl(URL.createObjectURL(blob));
  };

  return (
    <div>
      <h4>PDF Merger</h4>
      <input type="file" accept="application/pdf" multiple onChange={handleFiles} />
      <button onClick={handleMerge} disabled={files.length < 2}>Merge PDFs</button>
      {mergedUrl && (
        <div>
          <a href={mergedUrl} download="merged.pdf">Download Merged PDF</a>
          <iframe src={mergedUrl} title="Merged PDF" width={250} height={200} style={{ marginTop: 10 }} />
        </div>
      )}
    </div>
  );
}

const toolComponents = [
  <ImageConverter key="img" />,
  <VideoCompressor key="vid" />,
  <PDFMerger key="pdf" />,
];

const Tools = () => {
  const cardsRef = useRef([]);
  const [activeTool, setActiveTool] = useState(0);

  useEffect(() => {
    anime({
      targets: cardsRef.current,
      opacity: [0, 1],
      translateY: [40, 0],
      delay: anime.stagger(200),
      easing: 'easeOutExpo',
      duration: 900,
    });
  }, []);

  return (
    <section id="tools" className="tools-section glass-panel hacking-font">
      <h2 className="hacking-green">🛠️ Tools</h2>
      <div className="tools-cards">
        {tools.map((tool, i) => (
          <div
            className={`tool-card${activeTool === i ? ' active' : ''} hacking-font`}
            key={tool.name}
            ref={el => cardsRef.current[i] = el}
            onClick={() => setActiveTool(i)}
            style={{
              cursor: 'pointer',
              border: activeTool === i ? '2px solid #00ff41' : '1px solid #333',
              boxShadow: activeTool === i ? '0 0 16px #00ff4160' : undefined,
              transition: 'all 0.2s'
            }}
          >
            <div className="tool-icon hacking-green" style={{ fontSize: 36 }}>{tool.icon}</div>
            <h3 className="hacking-green">{tool.name}</h3>
            <p>{tool.desc}</p>
          </div>
        ))}
      </div>
      <div className="tool-panel glass-panel hacking-font" style={{
        margin: '30px auto',
        maxWidth: 400,
        background: '#181f1fdd',
        borderRadius: 16,
        padding: 24,
        boxShadow: '0 4px 24px #0004'
      }}>
        {toolComponents[activeTool]}
      </div>
    </section>
  );
};

export default Tools;