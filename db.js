import pkg from 'pg'
const {Pool} = pkg

const pool = new Pool({
    user: "postgres",
    password: "ySfaYrRq9HfHAubgvb1y",
    host: "containers-us-west-91.railway.app",
    port: 7021,
    database: "railway",
    url: "postgresql://postgres:ySfaYrRq9HfHAubgvb1y@containers-us-west-91.railway.app:7021/railway"
})


export default pool