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
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)


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

    function handleChange(e) {
        const { name, value } = e.target;
        setMeme(prev => {
            return {
                ...prev,
                [name]: value
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
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}


                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}

                />
                <button
                    className="form--button"
                    onClick={handleClickEvent}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}