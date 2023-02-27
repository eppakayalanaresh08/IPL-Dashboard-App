import {Component} from 'react'

// import LatestMatch from '../LatestMatch'
// import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    TeamMatchObject: {},
  }

  componentDidMount() {
    this.getTeamMatch()
  }

  getTeamMatch = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updateData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: (data.latest_match_details = {
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
      }),
    }

    this.setState({TeamMatchObject: updateData})
  }

  render() {
    const {TeamMatchObject} = this.state
    // const updateValueTeamMatch = TeamMatchObject.
    // const {manOfTheMatch} = TeamMatchObject.latestMatchDetails
    console.log(TeamMatchObject.latestMatchDetails.competingTeamLogo)

    // const updateValue = latestMatchDetails.map(eachObject =>
    //   console.log(eachObject.umpires),
    // )
    // console.log(updateValue)
    // const updateLatestValue = {
    //   umpires: latestMatchDetails.umpires,
    //   result: latestMatchDetails.result,
    //   manOfTheMatch: latestMatchDetails.man_of_the_match,
    //   id: latestMatchDetails.id,
    //   date: latestMatchDetails.date,
    //   venue: latestMatchDetails.venue,
    //   competingTeam: latestMatchDetails.competing_team,
    //   competingTeamLogo: latestMatchDetails.competing_team_logo,
    //   firstInnings: latestMatchDetails.first_innings,
    //   secondInnings: latestMatchDetails.second_innings,
    //   matchStatus: latestMatchDetails.match_status,
    // }
    // console.log(updateLatestValue)
    return (
      <div>
        <img src={TeamMatchObject.teamBannerUrl} alt="" />
        {/* <p>{TeamMatchObject.latestMatchDetails.umpires}</p> */}
        {/* <LatestMatch
          latestEach={TeamMatchObject.latestMatchDetails}
          key={TeamMatchObject.latestMatchDetails.id}
        /> */}

        {/* <ul>
          {TeamMatchObject.recentMatches.map(eachObject => (
            <MatchCard eachMatchCard={eachObject} key={eachObject.id} />
          ))}
        </ul>  */}
      </div>
    )
  }
}

export default TeamMatches
