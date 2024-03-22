using APIFun.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIFun.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private IBowlerRepository _bowlerRepository;
        public BowlerController(IBowlerRepository temp) {
            _bowlerRepository = temp;
        }

        [HttpGet]
        public IEnumerable<Bowler> Get() {
            var query = from bowler in _bowlerRepository.Bowlers
                        join team in _bowlerRepository.Teams
                        on bowler.TeamId equals team.TeamId
                        where team.TeamName == "Marlins" || team.TeamName == "Sharks"
                        select new Bowler
                        {
                            BowlerId = bowler.BowlerId,
                            BowlerLastName = bowler.BowlerLastName,
                            BowlerFirstName = bowler.BowlerFirstName,
                            BowlerMiddleInit = bowler.BowlerMiddleInit,
                            BowlerAddress = bowler.BowlerAddress,
                            BowlerCity = bowler.BowlerCity,
                            BowlerState = bowler.BowlerState,
                            BowlerZip = bowler.BowlerZip,
                            BowlerPhoneNumber = bowler.BowlerPhoneNumber,
                            Team = new Team
                            {
                                TeamId = team.TeamId,
                                TeamName = team.TeamName,
                            },
                        };
            
            var bowlerData = query.ToArray();

            return bowlerData;
        }
    }
}
