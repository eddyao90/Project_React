import fortunes from '../../../fortune-cookie.json';
import "./Fortune.css";

function getFortuneIndex() {
  const today = new Date().toDateString();
  const lastSeen = localStorage.getItem('lastSeen');
  if (lastSeen === today) {
    
    return parseInt(localStorage.getItem('fortuneIndex'));
  } else {
   
    const fortuneIndex = Math.floor(Math.random() * fortunes.fortunes.length);
    localStorage.setItem('lastSeen', today);
    localStorage.setItem('fortuneIndex', fortuneIndex.toString());
    return fortuneIndex;
  }
}

function FortuneCookie() {
  const fortuneIndex = getFortuneIndex();
  const fortune = fortunes.fortunes[fortuneIndex];
  return (
    <div className='div-box'>
    <div className="box">
      <h1 className='h1-fortune'>Your fortune for today:</h1>
      <p className='p-fortune'>{fortune}</p>
    </div>
    </div>
  );
}

export default FortuneCookie;