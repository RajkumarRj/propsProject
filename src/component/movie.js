import React from 'react';

const moviecard = (props) => {
    const share ="https://img.icons8.com/material-rounded/24/000000/share.png";
    const heart ="https://img.icons8.com/material-rounded/24/000000/like--v1.png";
    const comment = "https://img.icons8.com/ios/50/comments--v1.png";
    return (
        <>
            <div class="movie-card">
                <div class="left">
                    <div class="top">
                        <div class="img-div">
                            <img src={props.imageBanner} alt="Movie Banner" />
                        </div>
                        <div class="des-div">
                            <div class="title-name">
                                <h1>{props.title}</h1>
                                <p>{props.year},</p>
                                <p>{props.actor}</p>
                            </div>
                            <div class="run-time">
                                <p class="time">{props.runTime}</p>
                                <p>{props.genre}</p>
                            </div>
                        </div>
                    </div>
                    <div class="bottom">
                        <p>{props.description}</p>
                    </div>
                    <div class="end">
                        <span><img src={share}/></span>
                        <span><img src={heart}/></span>
                        <span><img src={comment}/></span>
                    </div>
                </div>
                <div class="right">
                    <img src={props.imageAside} alt="Movie Aside" />
        
                </div>
            </div>
        </>
    );
};

export default moviecard;
