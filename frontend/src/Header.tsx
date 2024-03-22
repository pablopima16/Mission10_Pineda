import person from './bowlingGuy.png';
import strike from './strike.png';
function Header() {
  return (
    <header className="row header navbar navbar-dark">
      <div className="col-4">
        <img
          src={person}
          className="logo"
          alt="logo"
          style={{ width: '500px', height: 'auto' }}
        />
      </div>
      <div className="col subtitle">
        <h1 className="text-black">Bowling League</h1>
      </div>
      <div className="col-4">
        <img
          src={strike}
          className="strike"
          alt="strike"
          style={{ width: '500px', height: '200px' }}
        />
      </div>
    </header>
  );
}

export default Header;
