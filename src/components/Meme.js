import React from "react";
import memesData from "../memesData"


export default function Meme() {

    const [imgUrl, setImgUrl] = React.useState('')

    function handleClickEvent() {
        const randomIdx = Math.floor((Math.random() * memesData.data.memes.length));
        let url = (memesData.data.memes[Math.floor((Math.random() * memesData.data.memes.length))].url);
        setImgUrl(url);
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

                <img src={imgUrl} alt="" />
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