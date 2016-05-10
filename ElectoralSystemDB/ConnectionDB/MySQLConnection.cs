using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using System.Data;
using System.Data.Common;

namespace ElectoralSystemDB.ConnectionDB
{
    public class MySQLConnection : DBConnection
    {

        public string ConnectionString { get; set; }

        public MySQLConnection(string ConnectionName)
        {
            this.con = new MySqlConnection();            
            this.ConnectionName = ConnectionName;
        }

        public override bool OpenConnection()
        {
            try
            {
                this.con.Open();
                return true;
            }
            catch (MySqlException ex)
            {
                return false;
            }
        }

        public override bool CloseConnection()
        {
            try
            {
                this.con.Close();
                return true;
            }
            catch (MySqlException ex)
            {
                return false;
            }
        }



        public override System.Data.DataTable ExecuteStatementWithCursor(string query, List<System.Data.Common.DbParameter> args, bool isProcedure, bool hasResult)
        {
            throw new NotImplementedException();

        }

        public override void ExecuteStatement(string query)
        {
            this.con.ConnectionString = this.getConnectionString();
            OpenConnection();
            this.cmd = new MySqlCommand();
            this.cmd.CommandText = query;
            this.cmd.ExecuteNonQuery();
            CloseConnection();
        }

        public override System.Data.DataTable ExecuteQuery(string query)
        {
            DataTable tb = null;
            try
            {
                this.con.ConnectionString = this.getConnectionString();
                OpenConnection();
                this.cmd = new MySqlCommand();
                this.cmd.CommandText = query;
                this.cmd.Connection = (MySqlConnection)this.con;
                DbDataReader reader = this.cmd.ExecuteReader();
                tb = new DataTable();
                tb.Load(reader);
                CloseConnection();
            }
            catch (MySqlException ex)
            {
                throw ex;
            }
            return tb;
        }

        public override System.Data.DataTable ExecuteStatement(string query, List<System.Data.Common.DbParameter> args, bool isProcedure)
        {
            this.cmd = new MySqlCommand();
            this.cmd.CommandText = query;
            this.cmd.CommandType = (isProcedure) ? CommandType.StoredProcedure : CommandType.Text;

            if (args != null)
            {
                foreach (DbParameter arg in args)
                {
                    //this.cmd.Parameters.Clear();
                    this.cmd.Parameters.Add(arg);
                }
            }

            DataTable tb = null;
            try
            {
                cmd.Connection = (MySqlConnection)this.con;
                this.con.ConnectionString = getConnectionString();
                this.con.Open();
                if (cmd.CommandType == CommandType.Text)
                {
                    DbDataReader rd = cmd.ExecuteReader();
                    tb = new DataTable();
                    tb.Load(rd);
                }
                else
                {
                    cmd.ExecuteNonQuery();
                }
                this.con.Close();
            }
            catch (MySqlException sqlEx)
            {
                throw sqlEx;
            }
            finally
            {
                this.CloseConnection();
            }

            return tb;

        }

        public override DataSet ExecuteStatementDS(string query, List<DbParameter> args)
        {
            throw new NotImplementedException();
        }
    }
}
