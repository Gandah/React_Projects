import AvatarImage from "../assets/image-avatar.png";

function Creator() {
  return (
    <div className="creator-wrapper">
      <img src={AvatarImage} />
      <p className="creator-section">
        <span className="text">Creation of</span>{" "}
        <span className="creator-name">Jules Wyvern</span>
      </p>
    </div>
  );
}

export default Creator;
