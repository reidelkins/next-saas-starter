import { NextApiRequest, NextApiResponse } from 'next';
import {useState} from "react"

export default async function CreateCompany(req: NextApiRequest, res: NextApiResponse) {
  const [url, setUrl] = useState<any>("")  
  if (process.env.BACKEND_URL) {
    setUrl(new URL(process.env.BACKEND_URL))
  }

  const { name, email, phone, companyName } = req.body;
  console.log(name, email, phone, companyName)
  res.status(400).send({message:"hello"})

  
  try {
    const request = await fetch("http://127.0.0.1:8000/api/v1/accounts/company", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({        
        name, email, phone, companyName
        }),
    });
    console.log(request)
    res.status(204).end();
    
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send({ message: error });
  }
}
