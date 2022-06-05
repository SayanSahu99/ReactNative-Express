import express  from "express";

const app = express();

const port = process.env.port || 8000;

const DATA = [
    {
        id: '28ba',
        title: 'First Item',
    },
    {
        id: '7f63',
        title: 'Second Item',
    },
    {
        id: '9d72',
        title: 'Third Item',
    },
];

app.get('/', (_, res) => {
    res.send("Hello world!");
});

app.get("/data", (_, res) => {
    res.send(DATA);
})

app.listen(port, () => {
    console.log(`Server Listening at port ${port}`)
})