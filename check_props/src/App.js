
import './App.css';
import Profile from './Profile/Profile';
function App() {
  const handleName=()=>{
    alert("Amor Bettayeb" ); 
  }

  return ( 

    <div className="App">
        <div className='box'>
  <div className='wave -one'></div>
  <div className='wave -two'></div>
  <div className='wave -three'></div>
</div>
 
 <Profile  name="Amor Bettayeb"  bio="Je suis un étudiant en classe terminal des études d'ingénierie, la spécialité est les systèmes
embarques. je suis a la recherche d'un stage PFE dans une société où je peux acquérir plus de
connaissances et d'expériences et exploiter mes qualifications" profession="Ingénieur éléctrique"  handleName ={handleName}/> 

</div>
      
    
  );
}

export default App;
