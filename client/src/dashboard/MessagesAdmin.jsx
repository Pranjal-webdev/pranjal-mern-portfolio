import { useEffect, useState } from "react";
import { getMessages,deleteMessage } from "../services/messageService";

const MessagesAdmin = () => {

    const [messages, setMessages] = useState([]);

    const loadMessages = async () => {

        try {

            const data = await getMessages();

            setMessages(data);

        }

        catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        loadMessages();

    }, []);

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this message?")) return;

        await deleteMessage(id);

        loadMessages();

    };

    return (

        <div className="text-white w-full min-w-0 overflow-hidden">

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">

                Contact Messages

            </h1>

            <div className="overflow-x-auto w-ful">

                <table className="w-full min-w-[750px]">

                    <thead>

                        <tr className="bg-orange-500">

                            <th className="p-3 sm:p-4">Name</th>

                            <th className="p-3 sm:p-4">Email</th>

                            <th className="p-3 sm:p-4">Subject</th>

                            <th className="p-3 sm:p-4">Message</th>

                            <th className="p-3 sm:p-4">Date</th>

                            <th className="p-3 sm:p-4">Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {messages.map((message) => (

                            <tr
                                key={message._id}
                                className="border-b border-zinc-800 text-center"
                            >

                                <td className="p-3 sm:p-4">

                                    {message.name}

                                </td>

                                <td className="p-3 sm:p-4">

                                    {message.email}

                                </td>

                                <td className="p-3 sm:p-4">

                                    {message.subject}

                                </td>

                                <td className="p-3 sm:p-4">

                                    {message.message.substring(0,40)}...

                                </td>

                                <td className="p-3 sm:p-4">

                                    {
                                        new Date(message.createdAt)
                                        .toLocaleDateString()
                                    }

                                </td>

                                <td className="p-3 sm:p-4">

                                    <button
                                    onClick={() => handleDelete(message._id)}
                                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default MessagesAdmin;