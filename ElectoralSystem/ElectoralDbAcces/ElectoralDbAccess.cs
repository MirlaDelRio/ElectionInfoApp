using ElectoralSystemDB.ConnectionDB;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Web;
using MySql.Data.MySqlClient;

namespace ElectoralSystem.ElectoralDbAcces
{
    public class ElectoralDbAccess
    {
        MySQLConnection con;

        public DataTable GetColegiosVotantes()
        {
            con = new MySQLConnection("MySqlConnectionString");

            DataTable dt = con.ExecuteStatement("sp_get_colegios_votantes", null, true);

            return dt;
        }

        public DataTable GetCandidatesList(string codeMap)
        {
            con = new MySQLConnection("MySqlConnectionString");

            con.OpenConnection();

            List<DbParameter> param = new List<DbParameter>();

            
            MySqlCommand cmd = new MySqlCommand();

            param.Add(cmd.Parameters.AddWithValue("in_code_mapa", codeMap));

            DataTable dt = con.ExecuteStatement("sp_get_candidatos_cod_mapa", param, true);

            return dt;
        }

    }
}