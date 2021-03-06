import logo from './logo.svg';
import './App.css';
import Character from "./components/Character";

function App() {

  return (
    <div>

      <Character name={'Bart'}
                 desc={'Bartholomew "Bart" Jojo Simpson (born April 1[7] or February 23[8]) is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons.'}
                 picture={'https://static.wikia.nocookie.net/simpsonstappedout/images/d/d2/Bart_Unlock.png'}/>

        <Character name={'Homer'}
                   desc={'Homer Jay Simpson (born May 12, 1956)[36] is the main protagonist of The Simpsons series (or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. '}
                   picture={'https://static.wikia.nocookie.net/simpsons/images/3/31/Retired_Homer.png'}/>

        <Character name={'Maggie'}
                   desc={'Margaret Evelyn[10] Lenny "Maggie" Simpson[11] (born January 12, 1989) is the 1-year old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons.'}
                   picture={'https://static.wikia.nocookie.net/simpsons/images/7/7f/Maggie_Simpson_Tapped_Out.png'}/>

        <Character name={'Liza'}
                   desc={'Lisa Marie Simpson (born May 9)[9] is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.'}
                   picture={'https://static.wikia.nocookie.net/simpsons/images/f/fa/185px-Lisa_Simpson2.png'}/>

        <Character name={'Marge'}
                   desc={'Marjorie Jacqueline "Marge" Simpson (née Bouvier[11]) is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. '}
                   picture={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>

    </div>

  );
}

export default App;

