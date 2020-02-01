import React, { Component } from "react";
import Body from "./components/Body/Body";
import Catpics from "./components/Catagories/CatagoriesClass";
import Stories from "./components/Stories/TopStories";
import Grid from "./components/Grid/grid";
import Source from "./components/sources/sourceclass";
import Card from "./components/Card/Card";
import "./app.css";
const axios = require("axios");

class App extends Component {
  componentDidMount() {
    this.GetWeather(19104);
    this.Source();
    console.log(this.state.Sources);
    this.GeneratePic();
    this.TopStories();
  }
  constructor(props) {
    super(props);
    this.state = {
      Catogories: [
        "Business",
        "Entertainment",
        "General",
        "Health",
        "Science",
        "Sports",
        "Technology"
      ],
      CatPics: [],
      TopStories: [],
      Selection: [],
      Sources: [],
      selected: false,
      weather: [],
      style: {
        img: {
          width: "8em",
          transform: "translate(-2em, 0%)"
        },
        div: {
          width: "100%",
          textAlign: "center"
        },
        header: {
          display: "inline-flex",
          position: "relative",
          bottom: "50px",
          fontFamily: "monospace",
          textShadow: "0px 1px 0px #9c9c9c"
        },
        logos: {
          display: "-webkit-inline-box",
          overflow: "scroll",
          width: "100%",
          overflowY: "hidden",
          marginLeft: "1.5em"
          // gridTemplateColumns: "1fr 1fr 1fr 1fr",
          // gridTemplateRows: "1fr 1fr",
          // gridColumnGap: "20px",
          // gridRowGap: "20px",
          // justifyItems: "stretch",
          // alignItems: "center"
        },
        cards: {
          overFlow: "scroll",
          height: "46em",
          marginTop: "6em !important"
        },
        h1style: {
          marginLeft: "92px",
          fontFamily: "monospace",
          marginBottom: "1em"
        },
        search: {
          width: "32%",
          color: "yellow",
          marginTop: "1.5em"
        },
        weather: {
          fontSize: "x-large",
          background: "black",
          color: "yellow",
          borderRadius: "12px",
          width: "15em",
          marginTop: "1em"
        },
        landingh1: {
          minHeight: "1rem",
          fontSize: "2rem",
          marginLeft: "1.5em",
          background: "black",
          color: "yellow",
          borderRadius: "12px",
          width: "fit-content",
          padding: "9px"
        }
      }
    };
  }
  GetWeather = async x => {
    var APIKey = "e3e26770ea91f1526f1d91e4b4212507";
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?zip=" +
      x +
      ",us&units=imperial&appid=" +
      APIKey;
    axios.get(queryURL).then(res => {
      console.log(res);
      let obj = {
        city: res.data.name,
        blurb: res.data.weather[0].main,
        temp: res.data.main.temp
      };
      console.log(obj);
      this.setState({ weather: obj }, () => console.log(this.state.weather));
    });
  };
  GeneratePic = async () => {
    const promises = this.state.Catogories.map(Catogory => {
      return axios
        .get(
          "https://api.pexels.com/v1/search?query=" +
            Catogory +
            "&per_page=15&page=1",
          {
            headers: {
              Authorization:
                "563492ad6f91700001000001d33b5d31a9a145b78ee67e35c8e6c321"
            }
          }
        )
        .then(res => {
          console.log(res);
          return res.data.photos[0].src.large2x;
        });
    });

    let photos = await Promise.all(promises);
    photos = this.state.Catogories.map((cat, index) => ({
      Catogory: cat,
      Image: photos[index]
    }));
    this.setState({ CatPics: photos });
  };
  TopStories = () => {
    let array = [];
    console.log("working");
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=91bec895cf8d45eaa46124fb19f6ad81"
      )
      .then(res => {
        res.data.articles.map((items, index) => {
          var data = {
            key: index,
            original: items.urlToImage,
            thumbnail: items.urlToImage,
            description: items.description,
            orginalTitle: items.title,
            thumbnailLabel: items.source.name
          };
          array.push(data);
        });
        this.setState({ TopStories: array }, () => console.log(this.state));
      });
  };
  CatagoryPicked = x => {
    var index = this.state.Catogories[x];
    console.log(index);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${index}&apiKey=91bec895cf8d45eaa46124fb19f6ad81`
      )
      .then(res => {
        this.setState({ Selection: res.data, selected: true }, () => {
          console.log(this.state.Selection);
        });
      });
  };
  Source = async () => {
    const promises = axios
      .get(
        "https://newsapi.org/v2/sources?language=en&country=us&apiKey=91bec895cf8d45eaa46124fb19f6ad81"
      )
      .then(res => {
        this.setState({ Sources: res.data.sources }, () =>
          console.log(this.state.Sources)
        );
      });
  };
  SourceSelection = x => {
    var index = this.state.Sources[x].id;
    console.log("HERE!!!", index);
    axios

      .get(
        "https://newsapi.org/v2/everything?sources=" +
          index +
          "&apiKey=91bec895cf8d45eaa46124fb19f6ad81"
      )
      .then(res => {
        console.log(res);
        this.setState({ Selection: res.data, selected: true }, () =>
          console.log(this.state.Selection)
        );
      });
  };
  home = () => {
    this.setState({ selected: false });
  };
  render() {
    if (this.state.selected === true) {
      return (
        <div>
          <div style={this.state.style.div}>
            <img
              src="https://clipartart.com/images/latest-news-icon-clipart.png"
              alt="Faux logo"
              id="#logoimg"
              style={this.state.style.img}
              onClick={this.home}
            />
            <h1 className="heading" style={this.state.style.header}>
              News.Me
            </h1>
            <div class="ui search">
              <div class="ui icon input" style={this.state.style.search}>
                <input
                  className="prompt"
                  type="text"
                  placeholder="Search Inpending!! Hold Tight..."
                />
                <i className="search icon"></i>
              </div>
            </div>
            <div
              className="weatherDiv"
              style={{ width: "100%", textAlign: "-webkit-center" }}
            >
              <p style={this.state.style.weather}>
                {this.state.weather.city} | {this.state.weather.temp} |{" "}
                {this.state.weather.blurb}
              </p>
            </div>
          </div>

          <h1 style={this.state.style.h1style}>
            {" "}
            <i className="newspaper icon" style={{ color: "yellow" }}></i>
            <strong>Your Story Selection</strong>
            {/* Stories from {this.state.Selection.articles[0].source.name} */}
          </h1>
          <div
            className=" animated slideInLeft  ui horizontal cards"
            style={this.state.style.cards}
          >
            <Card data={this.state.Selection} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div style={this.state.style.div}>
            <img
              src="https://clipartart.com/images/latest-news-icon-clipart.png"
              alt="Faux logo"
              id="#logoimg"
              style={this.state.style.img}
              onClick={this.home}
              className="animated fadeIn"
            />
            <h1
              className="heading"
              style={this.state.style.header}
              className="animated fadeIn"
            >
              News.Me
            </h1>
            <div
              className="animated fadeIn weatherDiv"
              style={{ width: "100%", textAlign: "-webkit-center" }}
            >
              <p style={this.state.style.weather}>
                {this.state.weather.city} | {this.state.weather.temp} |{" "}
                {this.state.weather.blurb}
              </p>
            </div>
            <div className="animated fadeIn ui search">
              <div class="ui icon input" style={this.state.style.search}>
                <input
                  className="prompt"
                  type="text"
                  placeholder="Search Inpending!! Hold Tight..."
                />
                <i class="search icon"></i>
              </div>
            </div>
          </div>
          <div className="animated slideInLeft">
            {" "}
            <h1 style={this.state.style.landingh1}>Top Stories</h1>
            <Stories TopStories={this.state.TopStories} />
            <h1 style={this.state.style.landingh1}>Catagories</h1>
            <Grid
              Catogories={this.state.CatPics}
              CatagoryPicked={this.CatagoryPicked}
            />
            <h1 style={this.state.style.landingh1}>Sources</h1>
            <div className="grid" style={this.state.style.logos}>
              <Source
                Images={this.state.Sources}
                SourceSelection={this.SourceSelection}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
