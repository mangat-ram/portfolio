"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData : FormData) => {
    console.log("Running on server.");
    console.log(formData.get("senderEmail"));
    console.log(formData.get("message"));

    resend.emails.send({
      from: 'onboarding@resend.dev',
      to:'mram34272@gmail.com',
      subject:'Message from your Portfolio contact form',
      // text:`Message from ${formData.get("senderEmail")}: ${formData.get("message")}`
      text:`Hello World!!`
    })
  }
