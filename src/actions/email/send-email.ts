"use server";

import { Resend } from "resend";

export const sendEmail = async () => {
    const resend = new Resend("re_LpbRfDjy_7GQLPGM6QDWCFmmpDkyaiW8H");
    try {
        const emailRes = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "ralexale@gmail.com",
            subject: "Hello World",
            html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
        });

        console.log(emailRes);
    } catch (error) {
        console.log(error);
    }
};
