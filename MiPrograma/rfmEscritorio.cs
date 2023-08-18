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
    public partial class MiPrograma2 : Form
    {
        public MiPrograma2()
        {
            InitializeComponent();
        }
        int precioEmail = 5;
        int precioTelefono = 15;
        int precioFax = 20;

        int precioCorreo = 50;
        int precioPaqueteriaNormal = 100;
        int precioPaqueteriaUrgente = 150;
        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void checkBox3_CheckedChanged(object sender, EventArgs e)
        {

        }

        private void rdOpcion3_CheckedChanged(object sender, EventArgs e)
        {

        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {


            int total = 0;
            if(rdOpcion1.Checked){
                total += 50;
            }
            if (rdOpcion2.Checked)
            {
                total += 100;
            }
            if (rdOpcion3.Checked)
            {
                total += 150;
            }

            if (chkOpcion1.Checked)
            {
                total += 5;
            }
            if (chkOpcion2.Checked)
            {
                total += 15;
            }
            if (chkOpcion3.Checked)
            {
                total += 20;
            }
            MessageBox.Show("El total es " + total+"$");


        }

        private void MiPrograma2_Load(object sender, EventArgs e)
        {

        }

        private void rdOpcion1_CheckedChanged(object sender, EventArgs e)
        {
            
        }
    }
}
