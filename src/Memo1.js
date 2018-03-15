import React from 'react';
import './memo.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
//1.props data flow with props-데이터를 가져와보자!


function Memo({title, poster, geners, synopsis}){
    return(
            <div className='memo_head'>
                <div className='memo_Columns'>
                     <MemoPic poster={poster} alt={title} />  
                </div>
                <div className='memo_Columns'>
                    <h1>{title}</h1>
                <div className='Movie_Genres'>
                    {geners.map((x, y) => <MovieGenre genre={x} key={y} />)}
                  </div>
                  <div className='Movie_Synopsis'>
                     <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='....'
                        trimRight
                        basedOn='letters'
                        />
               </div>
            </div>
        </div>
    )
}
//더 이상 클래스가 아니기 때문에 this.props.000 이 필요없음 클래스에서만 사용하고 펑션일때는 그냥 받아오는 값만 입력해주면 됨
function MemoPic({poster,alt}){//그냥 리턴을 하기위해서만 존재하기 때문에 1개의 props랑 1개의 html만 있으면됨
    return(
        <img src={poster} alt={alt} title={alt} className='Movie_Poster'/>
    )
}
function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

MemoPic.propTypes ={
    poster : PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

Memo.propTypes = {
    title : PropTypes.string.isRequired,
    geners :PropTypes.array.isRequired,
    poster : PropTypes.string.isRequired,
    synopsis :PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    geners : PropTypes.array.isRequired
}

export default Memo;