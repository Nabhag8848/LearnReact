function App() {
  return (
    <center>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </center>
  );
}
function Avatar() {
  return <img className="avatar" src="./avatar.jpg" alt="avatar" />;
}

function SkillList() {
  return (
    <div className="data skill-list">
      <Skill name="Faith" color="red" />
      <Skill name="Hd Wallpapers " color="blue" />
      <Skill name="Bible Images" color="yellow" />
      <Skill name="Travel Images" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <span className="skill" style={{ backgroundColor: props.color }}>
      {props.name}
    </span>
  );
}

function Intro() {
  return (
    <div>
      <h1>Ben White</h1>
      <p>
        I consider myself a servant of Jesus Christ. I love finding beauty in
        simple things. I want everything I do to bring honor and glory to God.
        If you would like to help me out so I can continue bringing you more
        photos, I'd be grateful!
      </p>
    </div>
  );
}

export default App;
