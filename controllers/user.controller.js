import db from '../db.js'
class UserController {
    async createUser(req, res) {
        const {name, phone, date} = req.body
        const newPerson = await db.query('INSERT INTO booking (name, phone, date) values ($1, $2, $3) RETURNING *',
            [name, phone, date])
        res.json(newPerson.rows[0])
    }
    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM booking')
        res.json(users.rows)
    }
    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM booking WHERE id = $1', [id])
        res.json(user.rows[0])
    }
    async updateUser(req, res) {
        const {id, date} = req.body
        const updateBooking = await db.query('UPDATE booking SET date = $2 WHERE id = $1', [id, date])
        res.json(updateBooking.rows)
    }
    async deleteUser(req, res) {
        const id = req.params.id
        const booking = await db.query('DELETE FROM booking WHERE id = $1', [id])
        res.json(booking.rows)
    }
    async createBooking(req, res) {
        if (!req.body) return res.sendStatus(400)

        const {name, phone, date} = req.body
        await db.query('INSERT INTO booking (name, phone, date) values ($1, $2, $3) RETURNING *',
            [name, phone, date])
        console.log(req.body)
    }
}

export default new UserController()