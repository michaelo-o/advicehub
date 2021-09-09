import Advices from '../../advicedata/Advices.json'
import { useRouter } from 'next/router'
import Head from 'next/dist/shared/lib/head'




const Advice = () => {

    const router = useRouter()
    const { id } = router.query
    const adviceId = id

    const advice = Advices

    // var singleAdvice =
    //     console.log(singleAdvice)
    return (
        <>
            <div>
                <h1>A Post {adviceId}</h1>
                {advice.filter((thisAdvice) => {
                    if (thisAdvice.id === adviceId) { // Changed this so an advice would match
                        return thisAdvice;
                    }
                }).map(advice => (
                    <div className="blog-preview" key={advice.id}>
                        <p>•{advice.category}</p>


                        <div className="titlelist">
                            <h3 className="title">{advice?.title}</h3>
                        </div>

                        <p>Given By {advice.author}</p>

                        <div className="dateandtime">
                            <p>Given {advice.date} at {advice.time}</p>
                        </div>
                    </div>
                )

                )}
            </div>
        </>
    );
}

export default Advice;