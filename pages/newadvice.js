import { useState } from "react";
import Head from 'next/head'
import { useRouter } from "next/dist/client/router";
import Advices from '../advicedata/Advices.json'


const NewAdvice = () => {
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
                    <p className="yellow">Share a short experience or tips with others.</p>
                    <form onSubmit={handleSubmit}>
                        {/* Form actually statts here */}
                        <label>Select a Category:</label>
                        <select
                            value={category}
                            onChange={(event) => setCategory(event.target.value)}
                        >
                            <option value="general">Choose</option>
                            <option value="tech">tech</option>
                            <option value="tech">tech</option>
                            <option value="tech">tech</option>
                            <option value="tech">tech</option>
                            <option value="tech">tech</option>
                            <option value="tech">tech</option>
                        </select>

                        <label>Give A Short Advice</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            placeholder="Advice Title"
                        />

                        <div className="advdesc">
                            <label>Description (optional)</label>
                            <textarea
                                type="text"
                                required
                                value={body}
                                onChange={(event) => setBody(event.target.value)}
                                placeholder="Give a Description about the advice"
                            />
                        </div>

                        {/* <label>Advice Author:</label>
                        <input
                            type="text"
                            required
                            value={author}
                            onChange={(event) => setAuthor(event.target.value)}
                        /> */}

                        <div className="buttoncenter">
                            <button>ADD ADVICE</button>
                        </div>


                    </form>
                </div>
            </div>

        </>
    );

}

export default NewAdvice;