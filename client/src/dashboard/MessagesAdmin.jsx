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

        <div className="text-white">

            <h1 className="text-4xl font-bold mb-8">

                Contact Messages

            </h1>

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead>

                        <tr className="bg-orange-500">

                            <th className="p-4">Name</th>

                            <th>Email</th>

                            <th>Subject</th>

                            <th>Message</th>

                            <th>Date</th>

                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {messages.map((message) => (

                            <tr
                                key={message._id}
                                className="border-b border-zinc-800 text-center"
                            >

                                <td className="p-4">

                                    {message.name}

                                </td>

                                <td>

                                    {message.email}

                                </td>

                                <td>

                                    {message.subject}

                                </td>

                                <td>

                                    {message.message.substring(0,40)}...

                                </td>

                                <td>

                                    {
                                        new Date(message.createdAt)
                                        .toLocaleDateString()
                                    }

                                </td>

                                <td>

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