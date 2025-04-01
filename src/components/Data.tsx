/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

type news = {
    author: string,
    content: string,
    description: string,
    title: string,
    url: string,
    urlToImage: string,
    source: {
        id: string,
        name: string,
    }
}

function Data() {
    const options = ["science", "sports", "business", "wather", "entertainment"]
    const [selectedOptions, setSelectedOptions] = useState<string>(options[4])
    const [myData, setData] = useState<news[]>([])
    const [flage, setFlage] = useState<boolean>(false)
    const [index,setIndex] = useState<number>(0)
    useEffect(() => {
        const data = async () => {
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${selectedOptions}&apiKey=cfeba9dc16044989a3e3335df74959e7`)
            setData(res.data.articles)
        }
        data();
    }, [selectedOptions])

    useEffect(() => {
        console.log(myData)
    }, [myData])
    useEffect(()=>{
        console.log(flage)
    },[flage])
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOptions(event.target.value)
    }
    const showFullNews = (event : React.ChangeEvent<HTMLSelectElement>) => {
        setFlage(true)
        console.log(event)
    }

    return (
        <>
            {!flage ? (<>
                <div className="container my-3">
                <h2>Fixed Option Input</h2>
                <select className="from-select my-3" value={selectedOptions} onChange={handleSelectChange}>
                    {options.map((option, index) => (
                        <option className="option" key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {myData.map((news, index) => (
                        <div onClick={()=>showFullNews} key={index} className="col">
                            <div className="card">
                                <img src={news.urlToImage} alt="Image" className="card-img" />
                                <div className="card-body">
                                    <h5 className="card-title">{news.title}</h5>
                                    <p className="card-text">{news.content}</p>
                                </div>
                                <a href={news.url}>
                                    <button type="button" className="btn btn-primary m-2">More...</button>
                                </a>
                                <button onChange={()=>showFullNews} className="btn btn-secondry">Show More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </>) : (<>
                <div key={index} className="container">
                            <div className="card">
                                <img src={myData[0].urlToImage} alt="Image" className="card-img" />
                                <div className="card-body">
                                    <h5 className="card-title">{myData[0].title}</h5>
                                    <p className="card-text">{myData[0].content}</p>
                                </div>
                                <a href={myData[0].url}>
                                    <button type="button" className="btn btn-primary m-2">More...</button>
                                </a>
                            </div>
                        </div>
            </>)}
        </>
    )
}

export default Data
