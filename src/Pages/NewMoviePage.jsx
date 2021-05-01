import React, { Component } from 'react'
import TopHeader from '../Elements/TopHeader'

const subHeader = <h3 className="hdr">New Movie Page - New Movie Details</h3>

const hours = [
    13,14,15,16,17,18,19,20,21,22,23
]
const quarters = [
    0,15,30,45
]

const apiUrl = "http://proj.ruppin.ac.il/bgroup22/prod/api/genre"
const apiUrl1 = "http://proj.ruppin.ac.il/bgroup22/prod/api/movie"



export default class NewMoviePage extends Component {
    constructor(props) {
        super(props); 
        this.state = {}
        this.fetchGenres()
    }

    fetchGenres = () => {
        fetch(apiUrl,
            {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',
            })
            })
            .then(res => {
            console.log('res=', res);
            console.log('res.status', res.status);
            console.log('res.ok', res.ok);
            return res.json()
            })
            .then(
            (result) => {
                console.log("fetch genres = ", result);
                result.map(g => console.log(g.GenreName));
                this.setState({Genres: result})
            },
            (error) => {
                console.log("err post=", error);
            });
    
        console.log('end');
    }

    getGenres = () => {
        if (this.state.Genres !== undefined) {
            let genreOptions = this.state.Genres.map(genre => <option key={genre.GenreId}>{genre.GenreName}</option>)
            return genreOptions
        }
        
    }
    getHours = () => {
        let HoursOptions = hours.map(hour => <option key={hour}>{hour}</option>)
        return HoursOptions
    }
    getQuarters = () => {
        let qrtOptions = quarters.map(qrt => <option key={qrt}>{qrt}</option>)
        return qrtOptions
    }
    catchName = (n) => {
        this.setState({name: n.target.value})
    }
    catchGenre = (g) => {
        this.setState({genre: g.target.value})
    }
    catchLength = (l) => {
        this.setState({length: l.target.value})
    }
    catchProdYear = (py) => {
        this.setState({prodYear: py.target.value})
    }
    catchImgUrl = (iu) => {
        this.setState({imgUrl: iu.target.value})
    }
    catchDate = (d) => {
        this.setState({date: d.target.value})
    }
    catchHours = (h)=> {
        this.setState({hours: h.target.value})
    }
    catchMinutes = (m)=> {
        this.setState({minutes: m.target.value})
    }
    catchSeats = (s)=> {
        this.setState({seats: s.target.value})
    }
    catchTktPrice = (tp)=> {
        this.setState({tktPrice: tp.target.value})
    }

    checkInput = () => {
        let AllGood = false
        let date = new Date()
        let demoMovie = {
            MovieName: this.state.name,
            ProductionYear: this.state.prodYear,
            SeatsAvailable: this.state.seats,
            MovieDate: this.state.date,
            MovieHours: this.state.hours,
            MovieMinutes: this.state.minutes,
            Price: this.state.tktPrice,
            LengthMinutes: this.state.length,
            ImgUrl: this.state.imgUrl,
            Genre: this.state.genre
        }
        for (let key in demoMovie) {
            if (demoMovie[key] === undefined || demoMovie[key] === "") {
                alert('Empty Fields ERROR - Please Fill The Empty Fields To Continue !')
                break;
            }
            else if (demoMovie["MovieHours"] === "Hours" || demoMovie["MovieMinutes"] === "Minutes") {
                alert('Hours/Minuts ERORR - Please Choose Both Hours And Minutes !')
                break;
            }
            else if (demoMovie["Genre"] === "Choose Genre") {
                alert('Genre ERORR - Please Choose A Genre!')
                break;
            }
            else if (isNaN(demoMovie["SeatsAvailable"]) || demoMovie["SeatsAvailable"] > 200 ) {
                alert('Seats Available ERROR - Seats Must Be A Number And Below 200 !')
                break;
            }
            else if (isNaN(demoMovie["Price"]) || demoMovie["Price"] > 50 ) {
                alert('Ticket Price ERROR - Price Must Be A Number And Below 50 !')
                break;
            }
            else if (isNaN(demoMovie["ProductionYear"]) || demoMovie["ProductionYear"] < 1900 || demoMovie["ProductionYear"] > 2021) {
                alert('Production Year ERROR - Year Must Be A Number And Between 1900 - 2021 !')
                break;
            }
            else if (isNaN(demoMovie["LengthMinutes"]) || demoMovie["LengthMinutes"] < 60 || demoMovie["LengthMinutes"] > 240) {
                alert('Length In Minutes ERROR - Length Must Be A Number And Between 60 - 240 !')
                break;
            }
            else if (new Date(demoMovie["MovieDate"]) < date) {
                alert("Date ERROR - Date Can Not Be Earlier Than Today !")
                break;
            }
            else {
                AllGood = true
                break;  
            }
        }
        return AllGood
    }

    extractGenreId = (gName) => {
        localStorage.setItem("genre", gName)
        if (this.state.Genres !== undefined) {
            let id = this.state.Genres.find(g => g.GenreName === gName).GenreId
            return id
        }
    }
      
    genreDemo = async () => {
        let validInput = this.checkInput()
        if (validInput) {
            let movieId = Math.floor(Math.random() * 100000) + 1
            let genreId = this.extractGenreId(this.state.genre)
            let time = this.state.hours + ":" + this.state.minutes + ":00"
            
            let newMovie = {
                MovieId: movieId,
                MovieName: this.state.name,
                ProductionYear: this.state.prodYear,
                SeatsAvailable: this.state.seats,
                MovieDate: this.state.date,
                MovieTime: time,
                Price: this.state.tktPrice,
                LengthMinutes: this.state.length,
                ImgUrl: this.state.imgUrl,
                GenreId: genreId
            }
            
            await this.setState({newMovie: newMovie})
            console.log(this.state.newMovie)
            if (this.state.newMovie !== undefined) {
                this.postMovie()
                localStorage.setItem("newMovie", JSON.stringify(this.state.newMovie))
                window.location.href = "/newMovieSummary"
            }
        }
    }

    postMovie = () => {
        if (this.state.newMovie !== undefined) {
            let nMovie = this.state.newMovie
            console.log('start');
            fetch(apiUrl1,
            {
                method: 'POST',
                body: JSON.stringify(nMovie),
                headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',
                })
            })
            .then(res => {
                console.log('res=', res);
                console.log('res.status', res.status);
                console.log('res.ok', res.ok);
                //return res.json()
            })
            .then(
                (result) => {
                console.log("fetch New Movie = ", result);
                },
                (error) => {
                console.log("err post=", error);
                });

            console.log('end');
        }
    }


    
    render() {
        return (
            <div className="bgc">
                {TopHeader}
                {subHeader}
                <div className="lf demo4">
                    <div className="demo4">
                        <div className="demo6 demo">
                            <div className="mrt bold">Name: </div>
                            <input type="text" onChange={this.catchName} />
                        </div>
                        <div className="demo6 demo">
                            <div className="mrt bold">Genre: </div>
                            <select name="genres" onChange={this.catchGenre}>
                                <option>Choose Genre</option>
                                {this.getGenres()}
                            </select>
                        </div>
                        <div className="demo6 demo">
                            <div className="mrt bold">Length (Minutes): </div>
                            <input type="text" onChange={this.catchLength}/>
                        </div>
                        <div className="demo6 demo">
                            <div className="mrt bold">Production Year: </div>
                            <input type="text" onChange={this.catchProdYear}/>
                        </div>
                        <div className="demo6 demo">
                            <div className="mrt bold">Image Url: </div>
                            <input type="text" onChange={this.catchImgUrl}/>
                        </div>
                    </div>
                    <div className="demo4">
                        <div className="demo6 demo">
                            <div className="mrt bold">Date: </div>
                            <input type="date" onChange={this.catchDate}/>
                        </div>
                        <div className="demo6 demo">
                            <div className="mrt bold">Time: </div>
                            <select name="hours" onChange={this.catchHours}>
                                <option>Hours</option>
                                {this.getHours()}
                            </select>
                            <select name="quarters" onChange={this.catchMinutes}>
                                <option>Minutes</option>
                                {this.getQuarters()}
                            </select>
                        </div>
                        <div className="demo6 demo">
                            <div className="mrt bold">Seats: </div>
                            <input type="text" onChange={this.catchSeats}/>
                        </div>
                        <div className="demo6 demo">
                            <div className="mrt bold">Ticket Price ($): </div>
                            <input type="text" onChange={this.catchTktPrice}/>
                        </div>
                    </div>
                </div>
                <div className="cen">
                    <button onClick={this.genreDemo}>Submit & Finish</button>
                </div>
            </div>
        )
    }
}
