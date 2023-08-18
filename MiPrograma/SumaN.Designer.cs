namespace MiPrograma
{
    partial class SumaN
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
            this.lblTexto = new System.Windows.Forms.Label();
            this.btnCalcular = new System.Windows.Forms.Button();
            this.chkOpcion = new System.Windows.Forms.CheckBox();
            this.lstResultado = new System.Windows.Forms.ListBox();
            this.txtEntrada = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // lblTexto
            // 
            this.lblTexto.AutoSize = true;
            this.lblTexto.Location = new System.Drawing.Point(31, 33);
            this.lblTexto.Name = "lblTexto";
            this.lblTexto.Size = new System.Drawing.Size(143, 13);
            this.lblTexto.TabIndex = 0;
            this.lblTexto.Text = "Calcular suma desde 1 hasta";
            this.lblTexto.Click += new System.EventHandler(this.lbl_Click);
            // 
            // btnCalcular
            // 
            this.btnCalcular.Location = new System.Drawing.Point(148, 298);
            this.btnCalcular.Name = "btnCalcular";
            this.btnCalcular.Size = new System.Drawing.Size(97, 24);
            this.btnCalcular.TabIndex = 1;
            this.btnCalcular.Text = "Iniciar";
            this.btnCalcular.UseVisualStyleBackColor = true;
            this.btnCalcular.Click += new System.EventHandler(this.btnCalcular_Click);
            // 
            // chkOpcion
            // 
            this.chkOpcion.AutoSize = true;
            this.chkOpcion.Location = new System.Drawing.Point(36, 74);
            this.chkOpcion.Name = "chkOpcion";
            this.chkOpcion.Size = new System.Drawing.Size(138, 17);
            this.chkOpcion.TabIndex = 2;
            this.chkOpcion.Text = "Ver resultados parciales";
            this.chkOpcion.UseVisualStyleBackColor = true;
            // 
            // lstResultado
            // 
            this.lstResultado.FormattingEnabled = true;
            this.lstResultado.Location = new System.Drawing.Point(34, 116);
            this.lstResultado.Name = "lstResultado";
            this.lstResultado.Size = new System.Drawing.Size(347, 160);
            this.lstResultado.TabIndex = 3;
            // 
            // txtEntrada
            // 
            this.txtEntrada.Location = new System.Drawing.Point(190, 30);
            this.txtEntrada.Name = "txtEntrada";
            this.txtEntrada.Size = new System.Drawing.Size(191, 20);
            this.txtEntrada.TabIndex = 4;
            // 
            // SumaN
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(395, 366);
            this.Controls.Add(this.txtEntrada);
            this.Controls.Add(this.lstResultado);
            this.Controls.Add(this.chkOpcion);
            this.Controls.Add(this.btnCalcular);
            this.Controls.Add(this.lblTexto);
            this.Name = "SumaN";
            this.Text = "SumaN";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lblTexto;
        private System.Windows.Forms.Button btnCalcular;
        private System.Windows.Forms.CheckBox chkOpcion;
        private System.Windows.Forms.ListBox lstResultado;
        private System.Windows.Forms.TextBox txtEntrada;
    }
}