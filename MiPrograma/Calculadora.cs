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
    public partial class Calculadora : Form
    {
        public Calculadora()
        {
            InitializeComponent();
        }

        private void Calculadora_Load(object sender, EventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {
            int pri = Convert.ToInt32(txtPrimero.Text);
            int seg = Convert.ToInt32(txtSegundo.Text);
            String op = cbxOpciones.SelectedItem.ToString();
            int total2 ;
            switch (op) { 
                case "+":
                    total2 = pri + seg;
                    lblResultado.Text = total2.ToString();
                    break;
                case "-":
                    total2 = pri - seg;
                    lblResultado.Text = total2.ToString();
                    break;
                case "*":
                    total2 = pri * seg;
                    lblResultado.Text = total2.ToString();
                    break;
                case "/":
                    total2 = pri / seg;
                    lblResultado.Text = total2.ToString();
                    break;

            }

            

        }

        private void txtPrimero_TextChanged(object sender, EventArgs e)
        {
        }

        private void txtSegundo_TextChanged(object sender, EventArgs e)
        {
        }

        private void btnSalir_Click(object sender, EventArgs e)
        {
            this.Close();

        }

        private void lblResultado_TextChanged(object sender, EventArgs e)
        {

        }

        private void btnSuma_Click(object sender, EventArgs e)
        {
            int pri = Convert.ToInt32(txtPrimero.Text);
            int seg = Convert.ToInt32(txtSegundo.Text);
            int total = pri + seg;
            lblResultado.Text = total.ToString();

           
        }

        private void cbxListado_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {

        }
    }
}
