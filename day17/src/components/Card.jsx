const Card=({food,calories})=>{
    return(
        <div className="container">
            <div className="card">
                <h1>{food}</h1>
                <h2>You have consumed {calories} calories today</h2>
            </div>
        </div>
    );
}
export default Card;