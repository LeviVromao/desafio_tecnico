import e = require('express')
import cors from "cors"
import routes from "./routes";

const app = e()

app.use(cors())
app.use(e.json())
app.use('/', routes)

app.listen('3000', () => console.log('Server is running on port 3000'))