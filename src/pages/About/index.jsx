const aprendido = ["html", "css", "react"]

const About = () => {
  return (
    <div className="about">
      <div className="about__imgContainer">
        <img className= "about__img" src="./profile.png" alt="profile image"/>
      </div>
      <div className="about__info">
        <h1 className="about__name">Bryan Estrada</h1>
        <p className="about__description">
        My name is Bryan Estrada. I’m a fullstack developer with strong knowledge in React, TypeScript, JS, Mongodb, Express, among others. I consider that I am very good at algorithms, beacause to this day, I have not been presented with a challenge that I can not really accomplish with effort and perseverance. I can easily and quickly adapt to the structure of a new programming language. I really enjoy learning about programming topics.I never tire of learning more about computer systems and network functions. I am very good at problem solving, because I really love puzzles and every activity that makes me exercise my brain. I love teamwork and share knowledge with others.
        </p>
        {}
        <div className="about__down">
          <p className="about__email">email: ee.mxtrd@gmail.com</p>
          <a href="https://github.com/Bxtard" className="github">github</a>
          {aprendido.map((item, index) => <span key={index}>{item}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
