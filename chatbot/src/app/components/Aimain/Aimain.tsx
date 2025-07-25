'use client'
import styles from './Aimain.module.scss'
import Image from 'next/image'
import {useEffect, useRef, useState} from 'react'
import axios from 'axios'

import {Aiprompt} from '@/app/Aiprompt'


interface Message {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

interface Props {
    onClick: () => void
}

const Aimain = (props: Props) => {

    const [messages, setMessages] = useState<Message[]>([
        {role: "system", content: Aiprompt}
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;


    useEffect(() => {
        chatEndRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [messages]);

    const sendMessage = async () => {

        if (!input.trim() || isLoading) return;

        const userMessage: Message = {role: 'user', content: input};
        const newMessages = [...messages, userMessage];

        setMessages(newMessages);
        setInput('');
        setIsLoading(true);


        try {
            const response = await axios.post(
                'https://openrouter.ai/api/v1/chat/completions',
                {
                    model: 'openai/gpt-3.5-turbo',
                    messages: newMessages,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Content-Type': 'application/json',
                        'HTTP-Referer': 'https://tolkify.com',
                    },
                }
            );


            if (response.data?.choices?.[0]?.message) {
                const reply = response.data.choices[0].message;
                setMessages([...newMessages, reply]);
            } else {
                throw new Error('Unexpected API response structure');
            }
        } catch (error) {
            console.error('API Error:', error);
            setMessages([...newMessages, {
                role: 'assistant',
                content: 'Sorry, I encountered an error processing your request. Please try again.'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    // Filter out system messages from display
    const displayMessages = messages.filter(m => m.role !== 'system');

    return (
        <div className={styles.containerWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerContent}>
                        <div>New conversation</div>
                        <div>
                            <Image src={'./Images/Vector.svg'} height={19} width={15} alt='x-logo-close'/>
                        </div>
                    </div>
                    <div onClick={props.onClick} className={styles.pointer}>
                        <Image src={'./Images/x.svg'} height={25} width={25} alt='x-logo-close'/>
                    </div>
                </div>

                <div className={styles.chat}>
                    {displayMessages.map((m, i) => (
                        <div key={i} className={m.role === 'user' ? styles.userMessage : styles.botMessage}>
                            <div>{m.content}</div>
                        </div>
                    ))}
                    <div ref={chatEndRef}/>
                </div>

                <div className={styles.inputWrapper}>
                    <textarea
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                sendMessage();
                            }
                        }}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className={styles.input}
                        placeholder='ask anything...'
                        disabled={isLoading}
                    />
                    <button
                        onClick={sendMessage}
                        className={styles.button}
                        type='submit'
                        disabled={!input.trim() || isLoading}
                    >
                        <Image
                            src={'/Images/sendmessage.svg'}
                            width={15}
                            height={15}
                            alt='send-message'
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Aimain