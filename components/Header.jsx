import trollFace from '../images/troll-face.png'

export default function Header(){
    return (
        <header>
            <img src={trollFace} alt="troll-face" />
            <h1>Meme Generator</h1>
        </header>
    )
}