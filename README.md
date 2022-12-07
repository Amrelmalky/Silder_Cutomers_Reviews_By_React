# react-projects-7-slider
## demo : https://amrelmalky.github.io/Silder_Cutomers_Reviews_By_React/


#### IN ACTION

[Gatsby-Airtable Project](https://gatsby-airtable-design-project.netlify.app/)

We havd data ==> array of objects
[1] - get data to our App and store it in variable (people) using state
initial with empty array

[2] - our App based on index of array of that data so we need to state the index
intital with zero

[3] - create Section ->Title -> h2 span


[4]- create section -center div
iterrated over data by map to display something on the screen
button className='prev' react icon FiChevronLeft
button className='next' react icon FiCherronRight
 data.map((item , itemIndex)=>{
 //destructure object
 const {id , image , name , title , qoute } = item;
 })
 article key={id}
 |
 img src={image} alt={name} className='person-img'
 |
 h4 {name}
 |
 p className = "title" > {title}
 |
 p className= 'text' > {qoute}
 |
 react icone <FaQouteRight className='icon'>
 |
 /article


[5]-  we have 4 article over each other due to position absolute (centered)
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  if remove it we can see 4 article 

[6]- logic 

* create variable let position = nextSlide then adding className for articles 
  while itterated 

* adding nextSlide for article as a default 

* adding activeSlide for article if Personindex = index  article will be in the center 
  transform : translateX(0)

* adding lastSlide for article if Personindex = index-1  or
  (index=0) && (personIndex= people.length-1) article will be move left  
  transform : translateX(-100%)




