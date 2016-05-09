using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ElectoralSystem.Controllers
{
    public class CandidatesController : Controller
    {
        // GET: CandidatesMap
        public ActionResult Map()
        {
            return View();
        }

        public ActionResult Details()
        {
            return View();
        }
    }
}