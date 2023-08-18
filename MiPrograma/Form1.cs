using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace MiPrograma
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void btnEntrar_Click(object sender, EventArgs e)
        {
            String usVal= "Miguel";
            String passVal = "12345";
            String usuario = txtUsuario.Text;
            String password = txtContraseña.Text;
            if (usVal == usuario && passVal == password)
            {
                MessageBox.Show("Usuario verificado");
                lbl.Text = "Las actividades que tienes pendientes estaran en rojo";
                
                new MiPrograma2().ShowDialog();
                this.Close();
               

            }
            else
            {
                MessageBox.Show("Datos ingresados incorrectamente");

            }

        }

        private void textEmail_TextChanged(object sender, EventArgs e)
        {

        }

        private void btnSalir_Click(object sender, EventArgs e)
        {
            this.Close();
      
        }
    }
}
