using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ElectoralSystemDB
{
   public abstract class DBConnection
    {
        public DbConnection con;
        public String ConnectionName;
        public MySqlCommand cmd;
        public String getConnectionString()
        {
            try
            {
                return System.Configuration.ConfigurationManager.ConnectionStrings[this.ConnectionName].ConnectionString;
            }
            catch (NullReferenceException ex)
            {
                return System.Configuration.ConfigurationManager.ConnectionStrings[this.ConnectionName].ConnectionString;
            }

        }

        public abstract bool OpenConnection();
        public abstract bool CloseConnection();

        public abstract DataTable ExecuteStatementWithCursor(string query, List<DbParameter> args, bool isProcedure, bool hasResult);
        public abstract DataSet ExecuteStatementDS(string query, List<System.Data.Common.DbParameter> args);
        public abstract void ExecuteStatement(String query);
        public abstract DataTable ExecuteStatement(string query, List<System.Data.Common.DbParameter> args, bool isProcedure);
        public abstract DataTable ExecuteQuery(String query);


    }
}
