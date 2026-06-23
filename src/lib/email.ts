import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const fromEmail = process.env.EMAIL_FROM || "The Postmortem <noreply@thepostmortem.com>";

export async function sendEmail({ to, subject, html }: { to: string, subject: string, html: string }) {
  if (!resend) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("RESEND_API_KEY is not configured in production.");
    }
    
    console.log("\n\n===========================================");
    console.log(`[DEVELOPMENT EMAIL FALLBACK] To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`\nContent:\n${html.replace(/<[^>]*>?/gm, '')}`);
    console.log("===========================================\n\n");
    return { success: true, simulated: true };
  }

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to,
      subject,
      html,
    });
    return { success: true, data };
  } catch (error) {
    console.error("Resend API Error:", error);
    throw new Error("Failed to send email");
  }
}

export function getOtpEmailTemplate(otp: string) {
  return `
<div style="font-family: sans-serif; color: #111; max-width: 600px; margin: 0 auto; padding: 2rem; border: 1px solid #eaeaea; border-radius: 4px;">
  <h1 style="font-size: 1.5rem; text-transform: uppercase; font-weight: bold; margin-bottom: 0.5rem; letter-spacing: 0.1em;">THE POSTMORTEM</h1>
  <p style="font-size: 0.9rem; color: #666; margin-bottom: 2rem; text-transform: uppercase; letter-spacing: 0.05em;">Investigate. Verify. Reveal.</p>
  
  <p style="font-size: 1rem; margin-bottom: 1rem;">Your password reset verification code:</p>
  
  <div style="background-color: #f5f5f5; padding: 1.5rem; text-align: center; font-size: 2rem; font-family: monospace; letter-spacing: 0.5em; font-weight: bold; margin-bottom: 1rem;">
    ${otp}
  </div>
  
  <p style="font-size: 0.9rem; margin-bottom: 2rem; color: #333;">This code expires in 10 minutes.</p>
  
  <p style="font-size: 0.9rem; color: #666; margin-bottom: 1.5rem;">If you did not request this reset, you can safely ignore this email.</p>
  
  <div style="border-top: 1px solid #eaeaea; padding-top: 1.5rem; margin-top: 1.5rem;">
    <strong style="color: #d50000; font-size: 0.85rem; text-transform: uppercase; display: block; margin-bottom: 0.5rem;">Security Notice:</strong>
    <p style="font-size: 0.85rem; color: #666; margin: 0 0 0.5rem 0;">The Postmortem will never ask for your password by email.</p>
    <p style="font-size: 0.85rem; color: #666; margin: 0;">Do not share this code with anyone.</p>
  </div>
</div>
  `;
}

export function getFailedLoginTemplate() {
  return `
<div style="font-family: sans-serif; color: #111; max-width: 600px; margin: 0 auto; padding: 2rem; border: 1px solid #eaeaea; border-radius: 4px;">
  <h1 style="font-size: 1.5rem; text-transform: uppercase; font-weight: bold; margin-bottom: 0.5rem; letter-spacing: 0.1em;">THE POSTMORTEM</h1>
  <p style="font-size: 0.9rem; color: #666; margin-bottom: 2rem; text-transform: uppercase; letter-spacing: 0.05em;">Investigate. Verify. Reveal.</p>
  
  <p style="font-size: 1rem; margin-bottom: 1rem;">We detected a failed login attempt for your Founder account.</p>
  
  <p style="font-size: 0.9rem; margin-bottom: 2rem; color: #333;">If this was you, you can safely ignore this email. If this was not you, someone may be trying to access the admin system.</p>
  
  <div style="border-top: 1px solid #eaeaea; padding-top: 1.5rem; margin-top: 1.5rem;">
    <strong style="color: #d50000; font-size: 0.85rem; text-transform: uppercase; display: block; margin-bottom: 0.5rem;">Security Notice:</strong>
    <p style="font-size: 0.85rem; color: #666; margin: 0;">Ensure your password is strong and unique.</p>
  </div>
</div>
  `;
}

export function getPasswordChangedTemplate() {
  return `
<div style="font-family: sans-serif; color: #111; max-width: 600px; margin: 0 auto; padding: 2rem; border: 1px solid #eaeaea; border-radius: 4px;">
  <h1 style="font-size: 1.5rem; text-transform: uppercase; font-weight: bold; margin-bottom: 0.5rem; letter-spacing: 0.1em;">THE POSTMORTEM</h1>
  <p style="font-size: 0.9rem; color: #666; margin-bottom: 2rem; text-transform: uppercase; letter-spacing: 0.05em;">Investigate. Verify. Reveal.</p>
  
  <p style="font-size: 1rem; margin-bottom: 1rem; color: #00c853;"><strong>Your password was successfully changed.</strong></p>
  
  <p style="font-size: 0.9rem; margin-bottom: 2rem; color: #333;">If you did not make this change, please secure your account immediately or contact your infrastructure provider.</p>
</div>
  `;
}
