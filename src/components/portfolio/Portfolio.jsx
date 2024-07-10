import React, { useRef, useState, useEffect } from 'react';
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Ticket-Twist",
        img: [
            "/Portfolio/tickettwist_1.png",
            "/Portfolio/tickettwist_2.png",
            "/Portfolio/tickettwist_3.png",
            "/Portfolio/tickettwist_4.png",
            "/Portfolio/tickettwist_5.png"
        ],
        desc: "This innovative ticket reselling platform is designed to facilitate seamless transactions for users who wish to resell or buy event tickets that have already been purchased. Users can effortlessly search for tickets, view all related details, and request tickets. For sellers, the platform offers a streamlined signup and sign-in process, enabling them to create and publish ticket listings. Sellers also receive email notifications for ticket requests.<br /><br />Technologies Used: MERN Stack, Bootstrap, Nodemailer and JWT",
        link: "https://tickettwist.onrender.com/"
    },
    {
        id: 2,
        title: "Dream Memories",
        img: [
            "/Portfolio/dreammemories_1.png",
            "/Portfolio/dreammemories_2.png",
            "/Portfolio/dreammemories_3.png",
            "/Portfolio/dreammemories_4.png"
        ],
        desc: "DreamMemories is a project featuring a memory store designed with a modern UI to provide a seamless user experience. The platform allows users to browse and like posts at any time. Users who sign up and sign in can post new memories and delete their old ones. The focus is on creating an intuitive and engaging interface that encourages users to share and interact with their memories. <br /><br />Technologies Used: MERN Stack, Material UI, CSS and JWT",
        link: "https://dreammemories.onrender.com/"
    },
    {
        id: 3,
        title: "Savory-Scape",
        img: [
            "/Portfolio/savoryscape_1.png",
            "/Portfolio/savoryscape_2.png",
            "/Portfolio/savoryscape_3.png",
            "/Portfolio/savoryscape_4.png",
            "/Portfolio/savoryscape_5.png",
            "/Portfolio/savoryscape_6.png"
        ],
        desc: "Discover culinary delights with SavoryScape: a dynamic platform designed to streamline recipe management and inspire culinary creativity. This open platform allows anyone to explore a diverse array of recipes, search for recipes by name, view detailed recipe information, create and share their own recipes, and comment on others' recipes. With SavoryScape, users can enjoy all these features without the need to log in, making it accessible and welcoming for everyone.  <br /><br />Technologies Used: React, Material UI, Spring Boot and MongoDB",
        link: "https://savoryscape.onrender.com/"
    },
    {
        id: 4,
        title: "React Native App",
        img: [
            "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
];

const Single = ({ item }) => {
    const ref = useRef();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % item.img.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [item.img.length]);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0,1], ["0%", "300%"]);

    return (
        <section ref={ref}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src={item.img[currentImageIndex]} alt={item.title} />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                        <button onClick={() => window.open(item.link, "_blank")}>Visit Site</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default function Portfolio() {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
}
