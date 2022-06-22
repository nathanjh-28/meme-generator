import React from "react";
import memesData from "../memesData"


export default function Meme() {

    // ______________________Meme State
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    // ______________________All Memes State
    const [allMemeImages] = React.useState(memesData)


    // ______________________Event Handler
    function handleClickEvent() {
        const memesArray = allMemeImages.data.memes
        const randomIdx = Math.floor((Math.random() * memesArray.length));
        let url = (memesArray[randomIdx].url);
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        })
    }


    // ______________________JSX
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    onClick={handleClickEvent}
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="imgContainer">
                <img src={meme.randomImage} alt="" />
            </div>
        </main>
    )
}