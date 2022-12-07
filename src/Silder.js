import React, { useState ,useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

// Destructure array of data
function Silder({ people }) {
    
  //1) using useState , we will using index of array , starts with initial value = 0
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      //* if index is negative will mae index = last index of array
      setIndex(lastIndex); // index = lastIndex in the array to always personindex always positve
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <>
      {/*2) iterrated over people array */}
      {people.map((person, personindex) => {
        // desturcture object and get a certain properties
          const { id, image, name, title, quote } = person;
          
        //************ some logic to add 3 classes [active , next , last ]****************
        let position = "nextSlide"; // as a default

        // [logic No.1]
        // adding the activeSlide class if personindex === index
        // activeSlide Class will move articel in center based on css
        // article with index 0 will be in the middle as a start ups ["maria ferguson"]
        if (personindex === index) {
          position = "activeSlide";
        }

        // [logic No.2]
        /*
          adding the lastSlide class will always move the last active article to left
          ['susan andersen'] as start ups 

          so if personindex = negative value will using useEffect * to set index = 0
          or in case of last index of array  

          1) if personindex have negative value when index= 0  
             will always move the last active article to left
             index = 0 the personindex = negative value (-1)
             will show the last index in the left
             index = 2 then personindex = 1 will move to left
             index = 3 then personindex = 2 will move to left

          2) if index===0 & Personindex === peope.length-1 => ast index in array*/

        if (
            personindex === index - 1 || (index === 0 && personindex === people.length-1))
        {
          position = "lastSlide";
        }

        return (
          // silder article
          <article className={position} key={id}>
            {/* image */}
            <img src={image} alt={name} className="person-img " />
            {/* Name */}
            <h4>{name}</h4>
            {/* title */}
            <p className="title">{title}</p>
            {/* some text */}
            <p className="text">{quote}</p>
            {/* React Icon */}
            <FaQuoteRight className="icon" />
          </article>
        );
      })}

      {/* left Arrows  */}
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      {/* right Arrows */}
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </>
  );
}

export default Silder;
