import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachCardList} = props
  const {id, teamImageUrl, name} = eachCardList
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="list-Item">
        <img src={teamImageUrl} alt="team banner" className="image-team" />
        <p className="name-team">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
