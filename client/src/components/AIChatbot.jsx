import { useState,useEffect, useRef } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import { askAI } from "../services/aiService";

const AIChatbot = () => {

    const [open, setOpen] = useState(false);

    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content:
                "👋 Hi! I'm Pranjal's AI Assistant. Ask me anything about skills, projects or education."
        }
    ]);

    const [loading, setLoading] = useState(false);

    const messagesEndRef = useRef(null);


    const sendMessage = async () => {
        if (!message.trim()) return;

        const userMessage = {
            role: "user",
            content: message
        };

        setMessages((prev) => [...prev, userMessage]);
        setLoading(true);

        const currentMessage = message;
        setMessage("");

        try {
            const reply = await askAI(currentMessage);

            setMessages((prev) => [

                ...prev,
                {
                    role: "assistant",
                    content: reply
                }
            ]);

        } catch (error) {

            console.log(error);

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: error.response?.data?.message || error.message
                }
            ]);
        }

        setLoading(false);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [messages]);

    return (

        <>

            <button onClick={() => setOpen(true)}
                className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-2xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110">

                <FaRobot />

            </button>

            {/*for chat popup */}

            {open && (

                <div className="fixed bottom-28 right-8 z-50 w-[380px] h-[550px] bg-[#111] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">

                    <div className="bg-orange-500 flex items-center justify-between px-5 py-4">

                        <div className="flex items-center gap-3">

                            <FaRobot className="text-2xl text-white" />

                        </div>

                        <h2 className="font-bold text-white">AI Assistant</h2>

                        <p className="text-xs text-orange-100">Ask anything about Pranjal</p>

                    </div>

                    <button onClick={() => setOpen(false)} className="text-white text-xl">

                        <FaTimes />

                    </button>

                    <div className="h-[390px] overflow-y-auto p-5 bg-[#0a0a0a] space-y-4">

                        {messages.map((msg, index) => (

                            <div key={index} className={`flex ${

                                msg.role==="user"
                                ? "justify-end"
                                : "justify-start"
                                }`}
                            >

                                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${

                                    msg.role==="user"
                                    ? "bg-orange-500 text-white"
                                    : "bg-zinc-800 text-white"
                                    }`}
                                >

                                {msg.content}


                            </div>

                        </div>

                        ))}

                        {loading && (

                            <div className="bg-zinc-800 text-white rounded-xl px-4 py-3 w-fit">

                                Typing...

                            </div>

                        )}

                        <div ref={messagesEndRef}></div>

                    </div>

                        
                    <div className="absolute bottom-0 w-full p-4 bg-[#111] border-t border-gray-800">

                        <div className="flex gap-3">

                            <input type="text" placeholder="Ask me anything..."

                            value={message} onChange={(e) => setMessage(e.target.value)}

                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    sendMessage();
                                }
                            }}
                                className="flex-1 bg-[#1b1b1b] text-white rounded-xl px-4 py-3 outline-none" />

                            <button onClick={sendMessage} className="bg-orange-500 hover:bg-orange-600 w-12 rounded-xl text-white flex items-center justify-center"><FaPaperPlane /></button>

                        </div>

                    </div>

                </div >
            )}

        </>
    );
};

export default AIChatbot;