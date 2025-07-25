import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import { FiLayers } from "react-icons/fi";

import {
  IoCalendarSharp,
  IoNotificationsSharp,
  IoDocumentText,
  IoPersonCircleOutline,
} from "react-icons/io5";

const DEFAULT_ITEMS = [
  {
    title: "Organize Your Interview Schedule",
    description:
      "Make use of our interactive dashboard to organize your interviews.",
    id: 1,
    icon: <IoCalendarSharp className="h-[16px] w-[16px] text-white" />,
    displayimage: "/organize.png",
  },
  {
    title: "Upcoming Interviews",
    description:
      "View all your scheduled interviews with date, time, and company details.",
    id: 2,
    icon: <IoNotificationsSharp className="h-[16px] w-[16px] text-white" />,
    displayimage: "/notification.png",
  },
  {
    title: "Interview Stages",
    description:
      "Track where you are in the hiring pipeline - from screening to final round.",
    id: 3,
    icon: <FiLayers className="h-[16px] w-[16px] text-white" />,
    displayimage: "/layers.png",
  },
  {
    title: "Manage Resumes",
    description:
      "Manage and access your tailored resumes for different job roles.",
    id: 4,
    icon: <IoDocumentText className="h-[16px] w-[16px] text-white" />,
    displayimage: "/resume.png",
  },
  {
    title: "Contact Management",
    description:
      "Save and organize contact details of recruiters and HR professionals.",
    id: 5,
    icon: <IoPersonCircleOutline className="h-[16px] w-[16px] text-white" />,
    displayimage: "/contact.png",
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
  cardHeight = 400,
}) {
  const [baseWidth, setBaseWidth] = useState(300);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setBaseWidth(600); // md: and up
      } else {
        setBaseWidth(300); // sm and below
      }
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden md:w-[600px] w-[300px] p-4  ${
        round
          ? "rounded-full border border-white"
          : "rounded-[24px] border border-[#222]"
      }`}
      style={{
        ...(round && { height: `${baseWidth}px` }),
      }}
    >
      <motion.div
        className="flex "
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${
            currentIndex * trackItemOffset + itemWidth / 2
          }px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset,
          ];
          const outputRange = [90, 0, -90];
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          return (
            <motion.div
              key={index}
              className={`relative shrink-0 flex flex-col  ${
                round
                  ? "items-center justify-center text-center bg-[#060010] border-0"
                  : "items-start justify-between bg-[#222] border border-[#222] rounded-[12px]"
              } overflow-hidden cursor-grab active:cursor-grabbing`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : `${cardHeight}px`,
                rotateY: rotateY,
                ...(round && { borderRadius: "50%" }),
              }}
              transition={effectiveTransition}
            >
              <div className={`${round ? "p-0 m-0" : "mb-4 p-5  absolute"}`}>
                <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full  bg-[#060010]">
                  {item.icon}
                </span>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src={item.displayimage}
                  alt=""
                  className="w-60"
                  style={{
                    filter:
                      "invert(43%) sepia(65%) saturate(356%) hue-rotate(120deg)",
                  }}
                />
              </div>
              <div className="p-5 ">
                <div className="mb-1 font-black text-lg text-white">
                  {item.title}
                </div>
                <p className="text-sm text-white">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div
        className={`flex w-full justify-center ${
          round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""
        }`}
      >
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                currentIndex % items.length === index
                  ? round
                    ? "bg-white"
                    : "bg-[#333333]"
                  : round
                  ? "bg-[#555]"
                  : "bg-[rgba(51,51,51,0.4)]"
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
