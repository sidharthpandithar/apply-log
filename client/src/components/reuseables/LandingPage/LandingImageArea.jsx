export default function LandingImageArea({ className, children }) {
  return (
    <div className={`flex-1 overflow-hidden ${className}`}>
      <div className="flex justify-center items-center">{children}</div>
    </div>
  );
}
