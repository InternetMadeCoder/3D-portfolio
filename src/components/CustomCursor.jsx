import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const blobRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const blob = blobRef.current;
    let frame;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      // Move dot instantly
      dot.style.transform = `translate(${clientX}px, ${clientY}px)`;

      // Move blob with smooth animation
      blob.animate(
        {
          transform: `translate(${clientX}px, ${clientY}px)`,
        },
        {
          duration: 1000,
          fill: "forwards",
          easing: "cubic-bezier(0.23, 1, 0.32, 1)",
        }
      );

      // Check if dot intersects with blob
      const dotRect = dot.getBoundingClientRect();
      const blobRect = blob.getBoundingClientRect();

      const isOverlapping = !(
        dotRect.right < blobRect.left ||
        dotRect.left > blobRect.right ||
        dotRect.bottom < blobRect.top ||
        dotRect.top > blobRect.bottom
      );

      setIsIntersecting(isOverlapping);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${isIntersecting ? "intersecting" : ""}`}
      />
      <div ref={blobRef} className="cursor-blob" />
    </>
  );
};

export default CustomCursor;
