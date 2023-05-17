import db from '../db.js'
class UserController {
    async createUser(req, res) {
        const {name, surname} = req.body
        const newPerson = await db.query('INSERT INTO booking (name, phone) values ($1, $2) RETURNING *', [name, surname])
        res.json(newPerson.rows[0])
    }
    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM booking')
        res.json(users.rows)
    }
    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM booking where id = $1', [id])
        res.json(user.rows[0])
    }
    async updateUser(req, res) {

    }
    async deleteUser(req, res) {

    }
}

export default new UserController()