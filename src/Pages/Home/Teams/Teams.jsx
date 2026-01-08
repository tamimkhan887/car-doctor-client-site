import { useEffect, useState } from "react";
import Team from "../Team/Team";

const Teams = () => {
    const [teams, setTeams] = useState([])
    useEffect(()=>{
        fetch("Teams.json")
        .then(res => res.json())
        .then(data => setTeams(data))
    },[])
    return (
        <div>
            <div className='mt-8 md:mt-12 lg:mt-18'>
                <p className='text-[#FF3811] font-bold text-xl text-center mb-3'>Team</p>
                <h3 className='text-[#151515] font-bold text-5xl text-center mb-3'>Meet Our Team</h3>
                <p className='text-[#737373] text-center'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {
                        teams.map(team =><Team team={team} key={team.id}></Team>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Teams;