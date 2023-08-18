namespace MiPrograma
{
    partial class Calculadora
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.btnSalir = new System.Windows.Forms.Button();
            this.txtPrimero = new System.Windows.Forms.TextBox();
            this.btnPrimer = new System.Windows.Forms.Label();
            this.btnSegundo = new System.Windows.Forms.Label();
            this.txtSegundo = new System.Windows.Forms.TextBox();
            this.lblResultado = new System.Windows.Forms.TextBox();
            this.btnSuma = new System.Windows.Forms.Button();
            this.bntTotal = new System.Windows.Forms.Button();
            this.cbxOpciones = new System.Windows.Forms.ComboBox();
            this.SuspendLayout();
            // 
            // btnSalir
            // 
            this.btnSalir.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnSalir.Location = new System.Drawing.Point(138, 276);
            this.btnSalir.Name = "btnSalir";
            this.btnSalir.Size = new System.Drawing.Size(75, 23);
            this.btnSalir.TabIndex = 0;
            this.btnSalir.Text = "Salir";
            this.btnSalir.UseVisualStyleBackColor = true;
            this.btnSalir.Click += new System.EventHandler(this.btnSalir_Click);
            // 
            // txtPrimero
            // 
            this.txtPrimero.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtPrimero.Location = new System.Drawing.Point(245, 40);
            this.txtPrimero.Name = "txtPrimero";
            this.txtPrimero.Size = new System.Drawing.Size(100, 23);
            this.txtPrimero.TabIndex = 1;
            this.txtPrimero.TextChanged += new System.EventHandler(this.txtPrimero_TextChanged);
            // 
            // btnPrimer
            // 
            this.btnPrimer.AutoSize = true;
            this.btnPrimer.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnPrimer.Location = new System.Drawing.Point(57, 40);
            this.btnPrimer.Name = "btnPrimer";
            this.btnPrimer.Size = new System.Drawing.Size(113, 17);
            this.btnPrimer.TabIndex = 2;
            this.btnPrimer.Text = "Primero número:";
            // 
            // btnSegundo
            // 
            this.btnSegundo.AutoSize = true;
            this.btnSegundo.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnSegundo.Location = new System.Drawing.Point(57, 85);
            this.btnSegundo.Name = "btnSegundo";
            this.btnSegundo.Size = new System.Drawing.Size(121, 17);
            this.btnSegundo.TabIndex = 2;
            this.btnSegundo.Text = "Segundo número:";
            // 
            // txtSegundo
            // 
            this.txtSegundo.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtSegundo.Location = new System.Drawing.Point(245, 78);
            this.txtSegundo.Name = "txtSegundo";
            this.txtSegundo.Size = new System.Drawing.Size(100, 23);
            this.txtSegundo.TabIndex = 1;
            this.txtSegundo.TextChanged += new System.EventHandler(this.txtSegundo_TextChanged);
            // 
            // lblResultado
            // 
            this.lblResultado.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblResultado.Location = new System.Drawing.Point(60, 181);
            this.lblResultado.Name = "lblResultado";
            this.lblResultado.Size = new System.Drawing.Size(100, 23);
            this.lblResultado.TabIndex = 1;
            this.lblResultado.TextChanged += new System.EventHandler(this.lblResultado_TextChanged);
            // 
            // btnSuma
            // 
            this.btnSuma.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnSuma.Location = new System.Drawing.Point(60, 148);
            this.btnSuma.Name = "btnSuma";
            this.btnSuma.Size = new System.Drawing.Size(100, 23);
            this.btnSuma.TabIndex = 0;
            this.btnSuma.Text = "Suma";
            this.btnSuma.UseVisualStyleBackColor = true;
            this.btnSuma.Click += new System.EventHandler(this.btnSuma_Click);
            // 
            // bntTotal
            // 
            this.bntTotal.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.bntTotal.Location = new System.Drawing.Point(245, 181);
            this.bntTotal.Name = "bntTotal";
            this.bntTotal.Size = new System.Drawing.Size(100, 23);
            this.bntTotal.TabIndex = 0;
            this.bntTotal.Text = "Total";
            this.bntTotal.UseVisualStyleBackColor = true;
            this.bntTotal.Click += new System.EventHandler(this.button3_Click);
            // 
            // cbxOpciones
            // 
            this.cbxOpciones.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.cbxOpciones.FormattingEnabled = true;
            this.cbxOpciones.Items.AddRange(new object[] {
            "+",
            "-",
            "*",
            "/"});
            this.cbxOpciones.Location = new System.Drawing.Point(245, 151);
            this.cbxOpciones.Name = "cbxOpciones";
            this.cbxOpciones.Size = new System.Drawing.Size(100, 24);
            this.cbxOpciones.TabIndex = 3;
            this.cbxOpciones.SelectedIndexChanged += new System.EventHandler(this.cbxListado_SelectedIndexChanged);
            // 
            // Calculadora
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Silver;
            this.ClientSize = new System.Drawing.Size(380, 311);
            this.Controls.Add(this.cbxOpciones);
            this.Controls.Add(this.btnSegundo);
            this.Controls.Add(this.btnPrimer);
            this.Controls.Add(this.lblResultado);
            this.Controls.Add(this.txtSegundo);
            this.Controls.Add(this.txtPrimero);
            this.Controls.Add(this.btnSuma);
            this.Controls.Add(this.bntTotal);
            this.Controls.Add(this.btnSalir);
            this.Name = "Calculadora";
            this.Text = "Calculadora";
            this.Load += new System.EventHandler(this.Calculadora_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnSalir;
        private System.Windows.Forms.TextBox txtPrimero;
        private System.Windows.Forms.Label btnPrimer;
        private System.Windows.Forms.Label btnSegundo;
        private System.Windows.Forms.TextBox txtSegundo;
        private System.Windows.Forms.TextBox lblResultado;
        private System.Windows.Forms.Button btnSuma;
        private System.Windows.Forms.Button bntTotal;
        private System.Windows.Forms.ComboBox cbxOpciones;
    }
}