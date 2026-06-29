



export const POST = async (req:Request)=>{
    const text = await req.json()
    const id = text.message.chat.id
    const user_text = text.message.text

    let reply = ""
    switch (user_text){
        case  "/start" 
        : reply = "Let's Begin!"
        break
        case  "/order" 
        : reply = "What is your order"
        break
        default :
        reply = "Unknown Command!"
    }

    await fetch (`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            text: reply,
            chat_id: id
        })
    })

    return Response.json({ success: true},{status:200})
}