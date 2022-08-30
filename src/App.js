import "./App.css";
import RecommendationGuy from "./Components/RecommendationGuy";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import gifback from "./background.gif";

function App() {
  const recommendationHandler = () => {
    console.log("The site will recommend something * wink - wink *");
  };

  return (
    <div className="App">
      <Parallax pages={2}>
        <ParallaxLayer
          offset={0}
          speed={1}
          className="headlayer"
          factor={3}
          style={{
            backgroundImage: `url(${gifback})`,
            backgroundRepeat: 'repeat-y',
            backgroundSize: 'auto'
          }}
        >
          <h1 className="head">Gaalinator - 9000</h1>
          <RecommendationGuy recommendationHandler={recommendationHandler} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          className="indexlayer"
          style={{
            backgroundColor:'white',
            backgroundSize: 'cover'
          }}
        >
          <div className="indexes">This layer will contain the indexes</div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
