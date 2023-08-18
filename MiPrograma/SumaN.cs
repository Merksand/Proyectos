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
    public partial class SumaN : Form
    {
        public SumaN()
        {
            InitializeComponent();
        }

        private void lbl_Click(object sender, EventArgs e)
        {

        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            
            int x, valorLimite, suma = 0;
            valorLimite = Convert.ToInt32(txtEntrada.Text);
            for (x = 1; x <= valorLimite; x++) {
                suma += x;
                if (chkOpcion.Checked) {
                lstResultado.Items.Add("La suma es " + x + " Suma parcial "+ suma);
            }
            }
            //MessageBox.Show("El resultado es: "+suma);
            lstResultado.Items.Add("La suma total es: " + suma);



        }
    }
}
