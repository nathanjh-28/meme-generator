import React from "react";

export default function Meme() {
    return (
        <div className="meme-form">
            <div className="meme-inputs">
                <input type="text" placeholder="top text" />
                <input type="text" placeholder="bottom text" />
            </div>
            <button className="submit" type="submit">Get New Image</button>
        </div>
    )
}