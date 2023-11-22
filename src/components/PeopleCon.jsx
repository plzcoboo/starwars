import React from 'react';

const PeopleCon = ({peoplesInfo ,data}) => {
  
    return (
        <div className='contents'>
     
            <img src="/images/people1.jpg" alt="" />
            <div className='text-box'>
            <h2>Luke Skywalker</h2>
            <span>Birth-year :<em>19BBY</em></span>
            <span>height :<em>19BBY</em></span>
            <span>gender :<em>19BBY</em></span>
            <p>Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi master was one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas for help. But his solitude would be interrupted – and Luke Skywalker had one final, momentous role to play in the struggle between good and evil.</p>
            </div>           
        </div>
    );
};

export default PeopleCon;