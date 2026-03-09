    import axios from "axios";

    let token = '';
    export const createToken  = async(req, res ,next)=> {
        const consumer = "XIoD8tbuih1Kx0f6I4ggMpIbQ9dFGLIjAxvCv0qdwHiwj4c3";
        const secret = "kX5dvkNTnjFFeTaVGdFHmDdk4jgCK3kt4vjQW1k8yXsfNSRG7Nlj4AFnri88Qcjz";
        const auth = new Buffer.from(`${consumer}:${secret}`).toString("base64");

        await axios.get(
        "https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
        {
            headers: {
            authorization: `Basic ${auth}`,
            },
        }
        )
        .then((data) => {
        token = data.data.access_token;
        console.log(data.data);
        next();
        })
        .catch((err) => {
        console.log(err);
        res.status(400).json(err.message);
        });
    };

    export const stkPush  = async(req, res) => {
        const shortCode = 4148873;
        const phone = req.body.phone.substring(1);
        const amount = req.body.amount;
        const passkey ="944a33e25fc7be7147e9a6eec17ca92941f01a839b36abca4b2785ab693c668d";
        const url = "https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest";

        const date = new Date();
        const timestamp =  date.getFullYear() +
            ("0" + (date.getMonth() + 1)).slice(-2) +
            ("0" + date.getDate()).slice(-2) +
            ("0" + date.getHours()).slice(-2) +
            ("0" + date.getMinutes()).slice(-2) +
            ("0" + date.getSeconds()).slice(-2);
            const password = new Buffer.from(shortCode + passkey + timestamp).toString("base64");
            
        const data = {
            BusinessShortCode: shortCode,
            Password: password,
            Timestamp: timestamp,
            TransactionType: "CustomerPayBillOnline",
            Amount: amount,
            PartyA: `254${phone}`,
            PartyB: 4148873,
            PhoneNumber: `254${phone}`,
            CallBackURL: "https://mydomain.com/path",
            AccountReference: "Picture Mart",
            TransactionDesc: "Picture Mart",
        };

        await axios.post(url, data, {
                headers: {
                authorization: `Bearer ${token}`,
            },
            })
            .then((data) => {
            console.log(data);
            res.status(200).json(data.data);
            })
            .catch((err) => {
            console.log(err);
            res.status(400).json(err.message);
            });
    };
 