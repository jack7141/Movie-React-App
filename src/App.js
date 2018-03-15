import React, { Component } from 'react';
import './App.css';
import Memo from './Memo1';

class App extends Component {
//will-render-didmount
  state ={}

componentDidMount(){
  this._getMovies();
}

_renderMovies = () => {
  const movies = this.state.movies.map(x => {
    console.log(x)
    return <Memo 
    title={x.title_english} 
    poster={x.medium_cover_image} 
    key={x.id} 
    geners={x.genres}
    synopsis={x.synopsis} />
  })
  return movies
}

_getMovies = async () => { //앞선작업이 끝나야 시작하는게 아니라 async를 사용하면 순서와 상관없이 작동하게된다.
  const movies = await this._callApi()
  this.setState({//setstate은 위의 callapi가 완료되야지 실행하게된다.
    movies
  })
}


_callApi = () => {
  return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')//api를 사용하여 데이터베이스를 불러온다.
  .then(potato => potato.json())
  .then(json => json.data.movies)
  .catch(err => console.log(err))

}

  render() {
    const{movies}=this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
  


        /* {this.state.movies.map((x,y) => {
          return <Memo title={x.title} poster={x.fuckthatshit} key={y} />
        })} */




// setTimeout(()=>{
  //   this.setState({
  //   movies : [
  //     // ...this.state.movies,//...이 있으면 기존에 있는거에 추가해서 하고 그냥 this.state로 붙여버리면 기존의 것을 삭제하고 덮어씀 오버라이딩됨
  //     // {
  //     //   title: "role",
  //     //   fuckthatshit: "https://www.rolex.com/content/dam/rolex/catalog/watches/upright-bba-with-shadow/m228238-0042.png?impolicy=upright-majesty"
  //     // }
  //     {
  //       title: "lambo",
  //       fuckthatshit: "https://post-phinf.pstatic.net/MjAxNzAyMjBfMjM2/MDAxNDg3NTUyNTY2MTEw.mIl4XLfG9YxiAF7vPnTMHpAELb7sljT284bTuruKJIgg.LmU-w1HK29rWsFk9BelCdb84wNAXI1X7ggv31xSJAOYg.JPEG/%EB%9E%8C%EB%B3%B4%EB%A5%B4%EA%B8%B0%EB%8B%88_%EC%95%84%EB%B2%A4%ED%83%80%EB%8F%84%EB%A5%B4_LP750-4_SV_%EB%A1%9C%EB%93%9C%EC%8A%A4%ED%84%B0_%EB%9E%8C%EB%B3%B4%EB%A5%B4%EA%B8%B0%EB%8B%88_%EC%95%84%EB%B2%A4%ED%83%80%EB%8F%84%EB%A5%B4.jpg?type=w1200"
  //     },
  //     {
  //       title: "ferra",
  //       fuckthatshit: "http://pds.joins.com/news/component/htmlphoto_mmdata/201706/15/60ebc699-1e44-4340-beba-21bc25d63438.jpg"
  //     },
  //     {
  //       title: "mase",
  //       fuckthatshit: "https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/1qd2/image/6JihmIec1AyCNmCtxR4Rdmhl4IA.JPG"
  //     },
  //     {
  //       title: "prosh",
  //       fuckthatshit: "http://www.namkisa.com/app/dubu_board/docs/imgs/y/lg_y14931108808991_500%EB%A7%88%EB%A0%A5%EC%9C%BC%EB%A1%9C_%ED%96%A5%EC%83%81%EB%90%9C_%ED%8F%AC%EB%A5%B4%EC%84%B8_911GT3_%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%A6%AC%ED%94%84%ED%8A%B8_%282%29.jpg"
  //     },
  //     {
  //       title: "role",
  //       fuckthatshit: "https://www.rolex.com/content/dam/rolex/catalog/watches/upright-bba-with-shadow/m228238-0042.png?impolicy=upright-majesty"
  //     }
  //   ]
  // })
  // },2000)
