import { motion } from "framer-motion";
const Page1 = () => {
    return (
        <div className="w-full h-full flex flex-col gap-8 items-center justify-center">
            <h1 className="text-5xl flex items-center gap-1 space-x-1 text-center text-gray-200" style={{ fontFamily: "valentine", letterSpacing: "5px" }}>
                Happy Valentine Inez !!!
            </h1>

            <motion.span
                className="text-pink-500 text-6xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
                ❤️
            </motion.span>

            <h3 className="text-lg text-gray-200" style={{letterSpacing:"1px"}}>Our Valentine Cards</h3>
        </div>
    );
}

export default Page1;