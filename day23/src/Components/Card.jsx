const Card=({food,calories, setState, setCal, foodArr, calArr})=>{
    console.log(setState);
    return(
    
        <div className="container">
            <div className="card">
                <h1>{food}</h1>
                <button onClick={()=>{
                    const newFoodState= foodArr.filter(el => el!==food);
                    setState(newFoodState);
                    const newCalState= calArr.filter(ele => ele!==calories);
                    setCal(newCalState);
                }}>Delete</button>
                <h2>You have consumed {calories} calories today</h2>
                
            </div>
        </div>
    );
}
export default Card;