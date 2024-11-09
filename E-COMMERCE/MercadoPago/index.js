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
  console.log("Datos recibidos en el cuerpo de la solicitud:", req.body);

  try {
    // Asegurarse de que items contiene los datos correctamente
    const items = req.body.items;
    console.log("Items recibidos:", items);  // Verifica los items recibidos

    if (!items || items.length === 0) {
      console.error("Error: No se recibieron elementos en el carrito.");
      return res.status(400).json({ error: "No se recibieron elementos en el carrito." });
    }

    // Crear el cuerpo de la preferencia
    const body = {
      items: items.map(item => {
        console.log("Procesando item:", item); // Verifica el contenido de cada item
        return {
          title: item.title,
          quantity: item.quantity,
          unit_price: item.unit_price,
          currency_id: item.currency_id || "ARS",
        };
      }),
      back_urls: {
        success: "https://www.mercadopago.com.ar/developers/es/docs/checkout-pro/integrate-checkout-pro/web#editor_5",
        failure: "https://www.mercadopago.com.ar/developers/es/docs/checkout-pro/integrate-checkout-pro/web#editor_5",
        pending: "https://www.mercadopago.com.ar/developers/es/docs/checkout-pro/integrate-checkout-pro/web#editor_5",
      },
      auto_return: "approved",
    };

    console.log("Cuerpo de la preferencia preparado:", body);  // Verifica el cuerpo de la preferencia antes de enviarlo

    const preference = new Preference(client);
    console.log("Creando preferencia en Mercado Pago...");
    const result = await preference.create({ body });

    res.json({ id: result.id });

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
