const express = require("express");
const mc = require("./controllers/messages_controller");

const app = express();

app.use(express.json());

const messagesBaseUrls = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

const port = 5050;
app.listen(port, () =>{
    console.log(`Server listening on port`)
}
);