using BryanBackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BryanBackend.Controllers
{
	[ApiController]
	[Route("api/pretpark")]
	public class PretparkController : ControllerBase
	{
		static List<PretparkModel> Pretparken = new List<PretparkModel>()
		{
			new PretparkModel { Id = 4, Name= "Walibi", Rating = 9 },
			new PretparkModel { Id = 8, Name= "Efteling", Rating = 6 }
		};

		

		[HttpPost]
		public IEnumerable<PretparkModel> Post(PretparkModel newPretpark)
		{
			Pretparken.Add(newPretpark);
			return Pretparken;
		}
	}
}
