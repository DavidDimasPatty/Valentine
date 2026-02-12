import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
import Page10 from "./pages/Page10";

const Book = () => {
    const pages = [
        Page1, Page2, Page3, Page4, Page5,
        Page6, Page7, Page8, Page9, Page10
    ];
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 120 : -120,
            scale: 0.1,
            opacity: 0,
        }),
        center: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                x: { type: "spring", stiffness: 500, damping: 20 },
                scale: { duration: 0.05 },
            },
        },
        exit: (direction) => ({
            x: direction > 0 ? -120 : 120,
            scale: 1,
            opacity: 0,
            transition: {
                x: { type: "spring", stiffness: 500, damping: 20 },
                opacity: { duration: 0.05 },
            },
        }),
    };

    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(1);

    const Page = pages[page];

    const paginate = (dir) => {
        setDirection(dir);
        setPage((p) =>
            Math.min(Math.max(p + dir, 0), pages.length - 1)
        );
    };

    return (
        <div className="w-[75%] max-w-80 h-[60%] overflow-hidden relative rounded-xl">
            <AnimatePresence custom={direction} mode="wait">
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.5}
                    onDragEnd={(e, info) => {
                        if (info.offset.x < -80) paginate(1);
                        else if (info.offset.x > 80) paginate(-1);
                    }}
                    className="
  absolute inset-0
  p-6
  rounded-2xl
  bg-gradient-to-br from-pink-400 via-pink-500 to-rose-500
  shadow-[0_20px_40px_rgba(255,105,180,0.45)]
  ring-2 ring-pink-200/50
  overflow-hidden
">

                    <div className="absolute inset-0 bg-pink-300/30 blur-2xl -z-10" />

                    <div className="
    absolute inset-0
    bg-gradient-to-r from-transparent via-white/20 to-transparent
    translate-x-[-100%]
    animate-[shimmer_3s_infinite]
  "/>

                    <div className="absolute top-3 right-4 text-white/60 text-2xl animate-pulse">❤️</div>
                    <div className="absolute bottom-4 left-4 text-white/50 text-xl animate-pulse delay-300">💕</div>

                    <Page />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default Book;