export const POST = async (req:Request)=>{
    const text = await req.json()
    const id = text.message.chat.id
    const user_text = text.message.text
    const firstName = text.message.chat.first_name
    console.log(id)

    let reply = ""
    switch (user_text){
        case  "Let's start" 
        : reply = "What's up im from the api end point lolol"
        break
        case  "Order" 
        : reply = "What is your order, sir?"
        break
        case "What is my name?"
        : reply = `Your name is ${firstName}`
        break
        default :
        reply = "Unknown Command!"
    }

    fetch (`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            text: reply,
            chat_id: id
        })
    })

    return Response.json({ success: true},{status:200})
}