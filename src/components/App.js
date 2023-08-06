// create your App component here
import React ,{useState, useEffect}from 'react'

const App = () => {
    const [dogImage, SetDogImage] = useState(null)
    const [isLoaded, SetIsLoaded] =useState(false)
    
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res)=>res.json())
        .then((data)=>{
            SetDogImage(data.message)
            SetIsLoaded(true)
        })
    },[])

 

    return(
        <div>
            {isLoaded?(
                <img src={dogImage} alt='A Random Dog'></img>
            ):(
                <p>Loading...</p>
            )}
            
        </div>
    )

    }
export default App