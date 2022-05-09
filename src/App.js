import { useState, useEffect } from 'react'
import './App.css';
import List from './Components/List';

function App() {
  const dataURL = 'http://agl-developer-test.azurewebsites.net/people.json'
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [peopleData, setPeopleData] = useState([])
  const [catsWithMaleOwners, setCatsWithMaleOwners] = useState([])
  const [catsWithFemaleOwners, setCatsWithFemaleOwners] = useState([])
  
  function testData(){
    const data = catsWithFemaleOwners
  }

  // Function which retrieves the JSON data and saves it
  useEffect(() => {
    try{
      fetch(dataURL)
        .then(response => response.json())
        .then(data => setPeopleData(data))
        .then(() => setIsLoading(false))
    } catch{
      setError(true)
    }
  },[])
    
  useEffect(() => {
    
    if(isLoading === false){
      // Function which sorts the data and create two arrays, one for cats with male owners, the other for cats with female owners
      peopleData.forEach(person => {
        if(person.gender === "Male" && person.pets){
          person.pets.forEach(pet => {
            if(pet.type === "Cat") setCatsWithMaleOwners(prevState => [...prevState, pet.name])
          })
        } else if(person.gender === "Female" && person.pets){
          person.pets.forEach(pet => {
            if(pet.type === "Cat") setCatsWithFemaleOwners(prevState => [...prevState, pet.name])
          })
        }
      })
    }
    // Functions which sort the array out into alphabetical order
    setCatsWithFemaleOwners(prevState => prevState.sort((a, b) => a.localeCompare(b)))
    setCatsWithMaleOwners(prevState => prevState.sort((a, b) => a.localeCompare(b)))

  },[isLoading])

  return (
    <div className="App">
      {
        !isError ?
        <List catsWithMaleOwners={catsWithMaleOwners} catsWithFemaleOwners={catsWithFemaleOwners} /> :
        <h1>Internal server error, please try again later</h1>
      }
    </div>
  );
}

export default App;