using ElectoralSystemDB.ConnectionDB;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Web;

namespace ElectoralSystem.ElectoralDbAcces
{
    public class ElectoralDbAccess
    {
        MySQLConnection sql;

        public DataTable GetColegiosVotantes()
        {
            sql = new MySQLConnection("MySqlConnectionString");

            DataTable dt = sql.ExecuteStatement("sp_get_colegios_votantes", null, true);

            return dt;
        }
    }
}