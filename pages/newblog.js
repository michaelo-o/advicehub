import { useState } from "react";
import Head from 'next/head'
import { useRouter } from "next/dist/client/router";
import Advices from '../advicedata/Advices.json'
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [id, setid] = useState(0);


    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newAdvice = { title, body, author, category, id };
    
        Advices.unshift(newAdvice)
            router.push('/')        
    }

    return (
        <>
            <Head>
                <title>Add New Advice</title>
            </Head>

            <div className="modalback">
                <div className="newadvice">
                    <h2>Create an Advice Card</h2>
                    <p>Share a short experience or tips with others.</p>
                    <form onSubmit={handleSubmit}>
                        <label>Give A Short Advice</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        <label>Advice Description:</label>
                        <textarea
                            required
                            value={body}
                            onChange={(event) => setBody(event.target.value)}
                        ></textarea>
                        <label>Advice Author:</label>
                        <input
                            type="text"
                            required
                            value={author}
                            onChange={(event) => setAuthor(event.target.value)}
                        />

                        <label>Advice Category:</label>
                        <select
                            value={category}
                            onChange={(event) => setCategory(event.target.value)}
                        >
                            <option value="general">general</option>
                            <option value="tech">tech</option>
                        </select>
                        <input
                            type="number"
                            required
                            value={id}
                            onChange={(event) => setid(event.target.value)}
                        />
                        <button>Add Advice</button>
                    </form>
                </div>
            </div>

        </>
    );

}

export default Create;