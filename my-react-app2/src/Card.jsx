import profilePic from "./assets/babyjacks_logo.png";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture" />
      <h2 className="card-title">Will's Card Component</h2>
      <p className="card-text">My Card content will go here.</p>
    </div>
  );
}

export default Card;
