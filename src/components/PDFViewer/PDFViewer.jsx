import React from 'react'
import {
  Root,
  Viewport,
  Pages,
  Page,
  CanvasLayer,
  CurrentPage,
  ZoomOut,
  CurrentZoom,
  ZoomIn,
} from "@fileforge/pdfreader";
import './PDFViewer.scss';

const PDFViewer = ({ fileUrl, closePreview }) => {
  const handleOverlayClick = () => {
    closePreview(); // Ferme le preview
  };

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <Root
        className="pdf-viewer"
        fileURL={fileUrl}
        loader={<div className="p-4">Loading...</div>}
        onClick={(e) => e.stopPropagation()} // Empêche la fermeture lors du clic sur la visionneuse PDF
      >
        <div className="pdf-header">
          <span className="flex-grow" />
          Page
          <CurrentPage className="current-page" />
          Zoom
          <ZoomOut className="zoom-button">-</ZoomOut>
          <CurrentZoom className="current-zoom" />
          <ZoomIn className="zoom-button">+</ZoomIn>
          <span className="flex-grow" />
          <span className="close-button" onClick={handleOverlayClick}>
            &times;
          </span>
        </div>
        <Viewport className="viewport">
          <Pages>
            <Page className="page">
              <CanvasLayer />
            </Page>
          </Pages>
        </Viewport>
      </Root>
    </div>
  );
};

export default PDFViewer;
