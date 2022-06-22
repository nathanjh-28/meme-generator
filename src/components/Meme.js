import React from "react";
import memesData from "../memesData"


export default function Meme() {

    // -- State
    //const [imgUrl, setImgUrl] = React.useState('http://i.imgflip.com/1bij.jpg')
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

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
        console.log(meme)
    }

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

// export default function Meme() {
//     return (
//         <div className="meme-form">
//             <div className="meme-inputs">
//                 <input type="text" placeholder="top text" />
//                 <input type="text" placeholder="bottom text" />
//             </div>
//             <button className="submit" type="submit">Get New Image</button>
//         </div>
//     )
// }