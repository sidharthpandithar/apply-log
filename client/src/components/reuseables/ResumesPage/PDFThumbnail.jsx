import { useEffect, useRef } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.mjs",
  import.meta.url
).toString();

export default function PdfThumbnail({ fileUrl }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const renderThumbnail = async () => {
      try {
        const loadingTask = getDocument(fileUrl);
        const pdf = await loadingTask.promise;

        if (cancelled) return;

        const page = await pdf.getPage(1);
        const scale = 0.4;
        const viewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // Important: cancel any existing render task before starting a new one
        const renderContext = {
          canvasContext: context,
          viewport,
        };

        const renderTask = page.render(renderContext);
        await renderTask.promise;
      } catch (error) {
        if (!cancelled) {
          console.error("Error rendering PDF thumbnail:", error);
        }
      }
    };

    renderThumbnail();

    return () => {
      cancelled = true;
    };
  }, [fileUrl]);

  return (
    <canvas
      ref={canvasRef}
      className="rounded shadow w-full h-auto object-contain"
    />
  );
}
