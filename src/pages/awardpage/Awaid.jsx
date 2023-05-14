import React, {useState, useEffect } from 'react';
import {useNavigate, Outlet, Link } from 'react-router-dom';
import data from '../../data/awadlist.json'
import LoadingAnimation from '../../component/LoadingAnimation';


const Awaid = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate loading data
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }, []);

  return (
    <div>
      {isLoading ? <LoadingAnimation /> :  
      <div className='award_container px-4 py-4 flex items-center gap-3 flex-col'>
        <div className="award px-5 py-5 text-center shadow shadow-slate-500 animate__animated animate__fadeInDown">
            <div className="h-award py-2 text-4xl md:text-6xl lg:text-8xl"> Awards</div>
            <div className="award-content text-sm md:text-lg lg:text-xl"> "Calling all engineering students! Are you ready to showcase your talent, skill, and achievements? Enter for a chance to win the Below Award and be recognized as one of the best and brightest in the field. Our award celebrates excellence in specific area, and is open to all engineering students who have demonstrated outstanding performance, innovation, leadership, or contribution. Not only will you gain recognition and prestige among your peers, but you'll also have the opportunity to network, gain exposure, and enhance your resume. Don't miss this chance to stand out and be rewarded for your hard work and dedication. Apply now for the  Award of your choice and take your engineering career to the next level!"</div>
        </div>
        <div className="reeg px-5 py-3 text-sm text-center text-white animate-scroll animate__animated animate__fadeInUp   ">
        Recognizing excellence in engineering: Celebrate the best and brightest with our prestigious Awards
        </div>
        <div className="awards w-full flex flex-col gap-2">
            {data.awards.map((award)=>(
                 <div className="awarding one w-full py-3 px-3 flex justify-between text-white md:px-6 md:py-6 animate__animated animate__fadeInUp" key={award.id}>
                 <h6 className='text-xs lg:text-lg uppercase'><span className='num px-1 md:px-3'>{award.num}.</span> {award.position}</h6>
                 <Link 
                 to={award.link}
                 className="button_a a-one px-6 md:px-8"
                 >View</Link>
                 </div>
            ))}
           
        </div>
      </div>}
    </div>
  )
}

export default Awaid
