using System.Web.Mvc;
using ElectoralSystem.ElectoralDbAcces;
using System.Data;
using Newtonsoft.Json;

namespace ElectoralSystem.Controllers
{
    public class ElectoralChartsController : Controller
    {
        ElectoralDbAccess db;
        // GET: ElectoralCharts
        public ActionResult Index()
        {
            return View();
        }

        public ContentResult GetCandidatesList(string codeMap)
        {
            db = new ElectoralDbAccess();

            DataTable dt = db.GetCandidatesList(codeMap);
                  
            return Content(JsonConvert.SerializeObject(dt), "json/application");
        }
    }
}