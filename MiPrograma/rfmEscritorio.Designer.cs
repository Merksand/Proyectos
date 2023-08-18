namespace MiPrograma
{
    partial class MiPrograma2
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
            this.lblNotificar = new System.Windows.Forms.Label();
            this.lblRecibir = new System.Windows.Forms.Label();
            this.rdOpcion1 = new System.Windows.Forms.RadioButton();
            this.rdOpcion2 = new System.Windows.Forms.RadioButton();
            this.rdOpcion3 = new System.Windows.Forms.RadioButton();
            this.chkOpcion1 = new System.Windows.Forms.CheckBox();
            this.chkOpcion2 = new System.Windows.Forms.CheckBox();
            this.chkOpcion3 = new System.Windows.Forms.CheckBox();
            this.btnCalcular = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // lblNotificar
            // 
            this.lblNotificar.AutoSize = true;
            this.lblNotificar.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblNotificar.Location = new System.Drawing.Point(48, 197);
            this.lblNotificar.Name = "lblNotificar";
            this.lblNotificar.Size = new System.Drawing.Size(499, 20);
            this.lblNotificar.TabIndex = 0;
            this.lblNotificar.Text = "Cómo desea ser notificado del envío? (Marcar todas las que apliquen)";
            this.lblNotificar.Click += new System.EventHandler(this.label1_Click);
            // 
            // lblRecibir
            // 
            this.lblRecibir.AutoSize = true;
            this.lblRecibir.Font = new System.Drawing.Font("Microsoft Tai Le", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblRecibir.Location = new System.Drawing.Point(48, 38);
            this.lblRecibir.Name = "lblRecibir";
            this.lblRecibir.Size = new System.Drawing.Size(344, 21);
            this.lblRecibir.TabIndex = 0;
            this.lblRecibir.Text = "Cómo desea recibir el pedido? (Marcar una sola)";
            this.lblRecibir.Click += new System.EventHandler(this.label1_Click);
            // 
            // rdOpcion1
            // 
            this.rdOpcion1.AutoSize = true;
            this.rdOpcion1.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.rdOpcion1.Location = new System.Drawing.Point(59, 92);
            this.rdOpcion1.Name = "rdOpcion1";
            this.rdOpcion1.Size = new System.Drawing.Size(156, 19);
            this.rdOpcion1.TabIndex = 1;
            this.rdOpcion1.TabStop = true;
            this.rdOpcion1.Text = "Por correo normal ($50)";
            this.rdOpcion1.UseVisualStyleBackColor = true;
            this.rdOpcion1.CheckedChanged += new System.EventHandler(this.rdOpcion1_CheckedChanged);
            // 
            // rdOpcion2
            // 
            this.rdOpcion2.AutoSize = true;
            this.rdOpcion2.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.rdOpcion2.Location = new System.Drawing.Point(59, 115);
            this.rdOpcion2.Name = "rdOpcion2";
            this.rdOpcion2.Size = new System.Drawing.Size(187, 19);
            this.rdOpcion2.TabIndex = 1;
            this.rdOpcion2.TabStop = true;
            this.rdOpcion2.Text = "Por paquetería normal ($100)";
            this.rdOpcion2.UseVisualStyleBackColor = true;
            // 
            // rdOpcion3
            // 
            this.rdOpcion3.AutoSize = true;
            this.rdOpcion3.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.rdOpcion3.Location = new System.Drawing.Point(59, 138);
            this.rdOpcion3.Name = "rdOpcion3";
            this.rdOpcion3.Size = new System.Drawing.Size(193, 19);
            this.rdOpcion3.TabIndex = 1;
            this.rdOpcion3.TabStop = true;
            this.rdOpcion3.Text = "Por Paquetería Urgente ($150)";
            this.rdOpcion3.UseVisualStyleBackColor = true;
            this.rdOpcion3.CheckedChanged += new System.EventHandler(this.rdOpcion3_CheckedChanged);
            // 
            // chkOpcion1
            // 
            this.chkOpcion1.AutoSize = true;
            this.chkOpcion1.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.chkOpcion1.Location = new System.Drawing.Point(59, 241);
            this.chkOpcion1.Name = "chkOpcion1";
            this.chkOpcion1.Size = new System.Drawing.Size(104, 19);
            this.chkOpcion1.TabIndex = 2;
            this.chkOpcion1.Text = "Por email ($5)";
            this.chkOpcion1.UseVisualStyleBackColor = true;
            // 
            // chkOpcion2
            // 
            this.chkOpcion2.AutoSize = true;
            this.chkOpcion2.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.chkOpcion2.Location = new System.Drawing.Point(59, 278);
            this.chkOpcion2.Name = "chkOpcion2";
            this.chkOpcion2.Size = new System.Drawing.Size(128, 19);
            this.chkOpcion2.TabIndex = 2;
            this.chkOpcion2.Text = "Por Teléfono ($15)";
            this.chkOpcion2.UseVisualStyleBackColor = true;
            // 
            // chkOpcion3
            // 
            this.chkOpcion3.AutoSize = true;
            this.chkOpcion3.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.chkOpcion3.Location = new System.Drawing.Point(59, 313);
            this.chkOpcion3.Name = "chkOpcion3";
            this.chkOpcion3.Size = new System.Drawing.Size(100, 19);
            this.chkOpcion3.TabIndex = 2;
            this.chkOpcion3.Text = "Por Fax ($20)";
            this.chkOpcion3.UseVisualStyleBackColor = true;
            this.chkOpcion3.CheckedChanged += new System.EventHandler(this.checkBox3_CheckedChanged);
            // 
            // btnCalcular
            // 
            this.btnCalcular.Location = new System.Drawing.Point(52, 361);
            this.btnCalcular.Name = "btnCalcular";
            this.btnCalcular.Size = new System.Drawing.Size(482, 37);
            this.btnCalcular.TabIndex = 3;
            this.btnCalcular.Text = "Calcular Gastos de envío";
            this.btnCalcular.UseVisualStyleBackColor = true;
            this.btnCalcular.Click += new System.EventHandler(this.btnCalcular_Click);
            // 
            // MiPrograma2
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(192)))), ((int)(((byte)(128)))));
            this.ClientSize = new System.Drawing.Size(569, 431);
            this.Controls.Add(this.btnCalcular);
            this.Controls.Add(this.chkOpcion3);
            this.Controls.Add(this.chkOpcion2);
            this.Controls.Add(this.chkOpcion1);
            this.Controls.Add(this.rdOpcion3);
            this.Controls.Add(this.rdOpcion2);
            this.Controls.Add(this.rdOpcion1);
            this.Controls.Add(this.lblRecibir);
            this.Controls.Add(this.lblNotificar);
            this.Name = "MiPrograma2";
            this.Text = "MiPrograma2";
            this.Load += new System.EventHandler(this.MiPrograma2_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lblNotificar;
        private System.Windows.Forms.Label lblRecibir;
        private System.Windows.Forms.RadioButton rdOpcion1;
        private System.Windows.Forms.RadioButton rdOpcion2;
        private System.Windows.Forms.RadioButton rdOpcion3;
        private System.Windows.Forms.CheckBox chkOpcion1;
        private System.Windows.Forms.CheckBox chkOpcion2;
        private System.Windows.Forms.CheckBox chkOpcion3;
        private System.Windows.Forms.Button btnCalcular;
    }
}