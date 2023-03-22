const nodemailer=require('nodemailer')
const{ google }=require('googleapis')
const client_id="398724413272-5hvgbit7vrunbcqstrigedr3r3al29uf.apps.googleusercontent.com"
const client_s="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"
const redirect="https://developers.google.com/oauthplayground"
const refresh_token="1//04F1dQkM0UUkhCgYIARAAGAQSNwF-L9IrVV24nAB15bwnMvGqQp5rB0IF4ERJRSTGxkzTsPRLLNElJAEQJJxhl5NaK6S7-hazrbs"
const oAuth2Client=new google.auth.OAuth2(client_id,client_s,redirect);
oAuth2Client.setCredentials({refresh_token:refresh_token})
async function sendMail(){
  try{
    const access=await oAuth2Client.getAccessToken()
    const transport=nodemailer.createTransport({
      server:"gmail",
      auth:{

        type:"oAuth2",
        user:'special1topic@gmail.com',
        clientId:client_id,
        clintSecret:client_s,
        refreshTocken:refresh_token,
        accessToken:access
      }
    })
    const mailOption={
      from:"special1topic@gmail.com",
      to:"aravindbhat01@gmail.com",
      subject:"spt",
      text:"hello how are you"
    }
    const result= await transport.sendMail(mailOption)
  }catch(error){
   return error
 }
}
sendMail().then(result=>console.log("successful....",result))
.catch(error=>console.log(error.message));
