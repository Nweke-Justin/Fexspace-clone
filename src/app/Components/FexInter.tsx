"use client";
import { useState, useEffect, useRef } from "react";

const FexInter = () => {
    const texts = [
        {
            imageUrl: "/pictures/fexspace8.png",
            title: "Simplify Your Workflow and Get More Done",
            description:
                "Your organization depends on effective collaboration between teammates, clients, or external partners to accomplish essential tasks. Fexspace helps everyone communicate, work remotely on files, and manage tasks and deadlines in a secure place.",
        },
        {
            imageUrl: "/pictures/fexspace9.png",
            title: "Bring Global Offices Together with Fexspace",
            description:
                "Fexspace is where work flows; your team comes together, and the files you need to work on and the tools you need organizing in one place to get things done faster.",
        },
        {
            imageUrl: "/pictures/fexspace10.png",
            title: "Your Team Organization Feeds",
            description:
                "Stay updated with information around your organization with Fexspace feeds.",
        },
        {
            imageUrl: "/pictures/fexspace11.png",
            title: "Remote Meetings with Video Conferencing and Chat",
            description:
                "Hold unlimited video conference meetings with your team and achieve uninterrupted collaboration and speed in decision-making.",
        },
        {
            imageUrl: "/pictures/fexspace12.png",
            title: "Manage Your Corporate Data Internally",
            description:
                "You can deploy Fexspace on a self-hosted cloud server or within your corporate local area network and infrastructure and have complete management control of your collaboration workspace. Seamless deployment and integration with existing infrastructure and business processes without any data leaving your corporate internal network.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const onScroll = () => {
            if (!sectionRefs.current.length) return;

            const scrollPosition = window.scrollY + window.innerHeight / 2;

            let newIndex = 0;
            for (let i = 0; i < sectionRefs.current.length; i++) {
                const section = sectionRefs.current[i];
                if (!section) continue;
                const offsetTop = section.offsetTop;
                const offsetHeight = section.offsetHeight;
                const sectionCenter = offsetTop + offsetHeight / 2;

                if (scrollPosition >= sectionCenter) {
                    newIndex = i;
                } else {
                    break;
                }
            }

            if (newIndex !== currentIndex) {
                setCurrentIndex(newIndex);
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [currentIndex]);

    return (
        <div>
            {/* mobile view */}
            <div className="md:hidden">
                {texts.map((text, i) => (
                    <div
                        className="text-white mb-10 text-center space-y-4"
                        key={i}
                    >
                        <img src={text.imageUrl} alt="" />
                        <h1 className="font-bold text-xl">{text.title}</h1>
                        <p className="font-semibold text-sm text-gray-200">
                            {text.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Desktop view */}
            <div className="hidden md:flex pt-20 gap-10 min-h-screen">
                {/* Left side: current image */}
                <div className="w-1/2 flex items-center justify-center sticky top-20 h-[80vh]">
                    <img
                        src={texts[currentIndex].imageUrl}
                        alt="Current section"
                        className="max-h-[1000px]"
                    />
                </div>

                {/* Right side: scrollable text sections */}
                <div className="w-1/2  px-6">
                    {texts.map((text, i) => (
                        <div
                            key={i}
                            ref={(el) => {
                                sectionRefs.current[i] = el;
                            }}
                            className="text-white pt-20"
                            style={{ minHeight: "80vh" }}
                        >
                            <h1 className="font-bold text-5xl mb-6">{text.title}</h1>
                            <p className="text-lg">{text.description}</p>
                        </div>
                    ))}
                    <div className="flex justify-center mt-10">
                        <button className="p-3 px-6 bg-teal-500 text-white rounded-lg">
                            Get Started Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FexInter;
