import express from "express";
import cors from "cors";

import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({ accessToken: "APP_USR-3618716477495658-110718-f949fb60f436bb7856bf5ad55c6806d3-2085208672" });

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

app.post("/create_preference", async (req, res) => {
  console.log("Solicitud POST recibida en '/create_preference'");

  try {
    // const total = req.body.total;  
    // console.log("Total recibido del cliente:", total);

    // if (!total || isNaN(total)) {
    //   throw new Error("El valor de 'total' es inválido o no se recibió.");
    // }

    // Creación de la preferencia
    const body = {
      items: [
        {
          title: req.body.title,  
          quantity: Number(req.body.quantity),
          unit_price: Number(req.body.price),  
          currency_id: "ARS", 
        },
      ],
      back_urls: {
        success: "http://localhost:3000/success",
        failure: "http://localhost:3000/failure",
        pending: "http://localhost:3000/pending",
      },
      auto_return: "approved",
    };

    const preference = new Preference(client);
    const result = await preference.create({body});


    res.json({
      id: result.id,
    });


  } catch (error) {
    console.error("Error al crear la preferencia:", error);
    res.status(500).json({
      error: "Error al crear la preferencia",
      details: error.message, 
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});
