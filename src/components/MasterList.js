import "./MasterList.css";
import contact from "../data/contact.json";

function MasterList() {
  return (
    <div className="outsideBox">
      {contact.map((contact, index) => {
        return (
          <div className="insideBox">
            <img
              className="image"
              src={contact.picture.large}
              alt="snapshot"
              id="image"
            />
            <div className="insideInBox">
              <h2>
                {contact.name.first} {contact.name.last}
              </h2>
              <p>Home: {contact.phone}</p>
              <p>Mobile: {contact.cell}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MasterList;
