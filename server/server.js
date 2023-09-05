const PORT = process.env.PORT ?? 8000
const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./db')


app.use(cors())

// get all properties
app.get('/properties/:userEmail', async (req,res) => {
    
    const { userEmail }=req.params
    console.log(userEmail)

    try {
        const properties = await pool.query('SELECT * FROM properties WHERE user_email = $1', [userEmail])
        res.json(properties.rows)
    } catch (err){
        console.error(error)
    }
})

app.listen(PORT, () => console.log('Server running on PORT 8000'))