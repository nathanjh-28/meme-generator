import React from "react";
import trollFace from '../Troll Face.png'

export default function Header() {
    return (
        <header className="header">
            <img
                src={trollFace}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}

// export default function Header() {
//     return (
//         <header className="header">
//             <div className="nav-left">
//                 <img src={trollFace} alt="" />
//                 <h2>MemeGenerator</h2>
//             </div>
//             <div className="nav-right">
//                 <p>React Course - Project 3</p>
//             </div>
//         </header>
//     )
// }