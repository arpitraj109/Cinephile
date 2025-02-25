import React, { useState, useEffect, useRef } from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import './MovieCredits.css';
import Reviews from '../reviews/Reviews';

const MovieCredits = ({ id }) => {
    const [casteDetails, setCasteDetails] = useState([]);
    const carouselRef = useRef(null);

    useEffect(() => {
        const getCredits = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=dfac79bf601a1c8766457c868e28203e&language=en-US`);
                const data = await response.json();
                setCasteDetails(data.cast);
            } catch (error) {
                console.error("Error fetching credits:", error);
            }
        };

        getCredits();
    }, [id]);

    const items = casteDetails.map(cast => (
        <div className="carouselItem" key={cast.id}>
            {cast.profile_path ? (
                <>
                    <img src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                        alt={cast?.name}
                        className="carouselItem__img"
                    />
                    <h3 className="carouselItem__txt text-center">{cast.name}</h3>
                </>
            ) : null}
        </div>
    ));

    const responsive = {
        0: { items: 3 },
        512: { items: 5 },
        1024: { items: 7 },
    };

    // Functions to navigate carousel
    const slidePrev = () => carouselRef.current.slidePrev();
    const slideNext = () => carouselRef.current.slideNext();

    return (
        <>
            <div className="main-credits">
                <h1 style={{ marginTop: "1rem" }} className='credit-head'>Credits</h1>

                <div className="carousel-container">
                    <button className="carousel-btn left" onClick={slidePrev}>&#10094;</button>

                    <AliceCarousel
                        ref={carouselRef}
                        disableButtonsControls
                        disableDotsControls
                        autoPlay={false}
                        mouseTracking
                        responsive={responsive}
                        infinite
                        animationType='slide'
                        items={items}
                    />

                    <button className="carousel-btn right" onClick={slideNext}>&#10095;</button>
                </div>
            </div>

            <Reviews id={id} />
        </>
    );
};

export default MovieCredits;
