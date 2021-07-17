function Card(){
    function Image(){
        return(
            <h1>Hello</h1>,
            <img src="https://833250.smushcdn.com/1694534/wp-content/uploads/2021/06/10.jpeg?lossy=1&strip=1&webp=1" ></img>
        );
    }

    return(
        <div className="memecard">
            <Image/>
            <h2>React Card</h2>
            <p>This is a meme card</p>
        </div>
    )
}
export default Card;