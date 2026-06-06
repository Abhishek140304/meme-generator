import { useState, useEffect } from "react"

export default function Main(){

    const [meme, setMeme] = useState(
        {
            topText: "ONE DOES NOT SIMPLY", 
            bottomText: "WALK INTO MORDOR",
            imgurl: "http://i.imgflip.com/1bij.jpg"
        }
    )

    const [memeArray, setMemeArray] = useState([])

    function handleChange(event){
        const {name, value} = event.currentTarget
        
        setMeme(prevmeme => ({
            ...prevmeme,
            [name]: value
        }))
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemeArray(data.data.memes))
    }, [])

    function getMemeImage(){
        const idx = Math.floor(Math.random() * memeArray.length)

        setMeme(prevmeme => ({
            ...prevmeme,
            imgurl: memeArray[idx].url
        }))
    }

    return (
        <main>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="topText">Top Text</label>
                    <input onChange={handleChange} type="text" name="topText" placeholder="ONE DOES NOT SIMPLY" value={meme.topText} />
                </div>

                <div className="form-group">
                    <label htmlFor="bottomText">Bottom Text</label>
                    <input onChange={handleChange} type="text" name="bottomText" placeholder="WALK INTO MORDOR" value={meme.bottomText} />
                </div>
                
                <button onClick={getMemeImage}>Get a new Meme Image</button>
            </div>

            <div className="meme">
                <img src={meme.imgurl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}