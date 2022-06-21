import React from "react";


export default function Meme() {
    /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
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
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
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